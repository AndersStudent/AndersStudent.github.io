import React, { useEffect, useState } from 'react';
import { getProjectsByType, Project } from '../data/projectData';
import LinkButton from '../components/LinkButton';
import { useLocation } from 'react-router';

const Projects: React.FC = () => {
  const projects = getProjectsByType('Semester Project');
  const location = useLocation();

  useEffect(() => {
      const hash = location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location.hash]);

  return (
    <div>
      <section id="Semester-Projects">
        <h1>Semester Projects</h1>
        <div className="games-grid">
          {projects.map((game, gameIndex) => (
            <div key={gameIndex} className="game-showcase">
              <h2>{game.title}</h2>
              <ProjectCarousel game={game} />
              <div className="project-meta">
                {game.tags && (
                  <div className="project-tags">
                    {game.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                )}
                {(game.date || game.collaborators) && (
                  <div className="project-date-row">
                    {game.date && <span className="project-date">{game.date}</span>}
                    {game.collaborators && <span className="project-collaborators">{game.collaborators}</span>}
                  </div>
                )}
              </div>
              <div className="game-description">
                <div dangerouslySetInnerHTML={{ __html: game.description }} />
              </div>
              {game.link && (
                <div className="game-button">
                  <LinkButton
                    href={game.link}
                    download={
                      game.download || game.link.toLowerCase().endsWith('.pdf')
                    }
                  >
                    {game.buttonText || 'View Project'}
                  </LinkButton>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="In-Development">
        <h1>In Development</h1>
        <div className="games-grid">
          {projects.map((game, gameIndex) => (
            <div key={gameIndex} className="game-showcase">
              <h2>{game.title}</h2>
              <ProjectCarousel game={game} />
              <div className="project-meta">
                {game.tags && (
                  <div className="project-tags">
                    {game.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                )}
                {(game.date || game.collaborators) && (
                  <div className="project-date-row">
                    {game.date && <span className="project-date">{game.date}</span>}
                    {game.collaborators && <span className="project-collaborators">{game.collaborators}</span>}
                  </div>
                )}
              </div>
              <div className="game-description">
                <div dangerouslySetInnerHTML={{ __html: game.description }} />
              </div>
              {game.link && (
                <div className="game-button">
                  <LinkButton
                    href={game.link}
                    download={
                      game.download || game.link.toLowerCase().endsWith('.pdf')
                    }
                  >
                    {game.buttonText || 'View Project'}
                  </LinkButton>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

interface ProjectCarouselProps {
  game: Project;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ game }) => {
  // If there's a video, show video player
  if (game.video) {
      return (
        <div className="carousel">
          <div className="carousel-video">
            <video
              controls
              poster={game.images?.[0]} // Use first image as poster if available
              className="video-player"
            >
              <source src={game.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="indicators" />
        </div>
      );
    }

  // Otherwise, show image carousel. If there are no images either, render a
  // placeholder box to keep card heights consistent.
  if (!game.images || game.images.length === 0) {
    return (
      <div className="carousel">
        <div className="carousel-image placeholder" />
        <div className="indicators" />
      </div>
    );
  }

  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState<number | null>(null);
  const [incomingVisible, setIncomingVisible] = useState(false);
  const FADE_MS = 500;

  const changeImage = (newIndex: number) => {
    if (newIndex === displayedIndex) return;
    setIncomingIndex(newIndex);
    setIncomingVisible(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIncomingVisible(true);
        setTimeout(() => {
          setDisplayedIndex(newIndex);
          setIncomingIndex(null);
          setIncomingVisible(false);
        }, FADE_MS);
      });
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage((displayedIndex + 1) % game.images!.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [displayedIndex, game.images!.length]);

  const nextImage = () => {
    changeImage((displayedIndex + 1) % game.images!.length);
  };

  const goToImage = (index: number) => {
    if (index !== displayedIndex) changeImage(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-image" onClick={nextImage}>
        <img
          src={game.images![displayedIndex]}
          alt={`${game.title} screenshot ${displayedIndex + 1}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {incomingIndex !== null && (
          <img
            src={game.images![incomingIndex]}
            alt={`${game.title} screenshot ${incomingIndex + 1}`}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: incomingVisible ? 1 : 0, transition: `opacity ${FADE_MS}ms ease` }}
          />
        )}
      </div>
      <div className="indicators">
        {game.images!.map((_, index) => (
          <button
            key={index}
            className={index === displayedIndex ? 'active' : ''}
            onClick={() => goToImage(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;