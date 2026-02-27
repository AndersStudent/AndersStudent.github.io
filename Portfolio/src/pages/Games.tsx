import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProjectsByType, Project } from '../data/projectData';
import LinkButton from '../components/LinkButton';
import { ProjectCarousel } from './Projects';

// Helper function to check if URL is a YouTube video and extract video ID
const getYouTubeVideoId = (url: string): string | null => {
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\n?#]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^&\n?#]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^&\n?#]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
};

const Games: React.FC = () => {
  const PublishedGames = getProjectsByType('Solo Development');
    const GameJamGames = getProjectsByType('Game Jam');
  const GameInDevelopmentGames = getProjectsByType('GameInDevelopment');
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
      <section id="published-games">
        <h1>Solo Development</h1>
        <div className="games-grid">
          {PublishedGames.map((game, gameIndex) => (
            <div key={gameIndex} className="game-showcase">
              <h2>{game.title}</h2>
              <GameCarousel game={game} />
              <div className="game-description">
                <div dangerouslySetInnerHTML={{ __html: game.description }} />
              </div>
              <div className="project-my-role" dangerouslySetInnerHTML={{ __html: game.myRole ?? '' }} />
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

      <section id="in-development">
        <h1>In Development</h1>
        <div className="games-grid">
          {GameInDevelopmentGames.map((game, gameIndex) => (
            <div key={gameIndex} className="game-showcase">
              <h2>{game.title}</h2>
              <ProjectCarousel game={game} />
              <div className="game-description">
                <div dangerouslySetInnerHTML={{ __html: game.description }} />
              </div>
              <div className="project-my-role" dangerouslySetInnerHTML={{ __html: game.myRole ?? '' }} />
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

      <section id="game-jams">
        <h1>Game Jams</h1>
        <div className="games-grid">
          {GameJamGames.map((game, gameIndex) => (
            <div key={gameIndex} className="game-showcase">
              <h2>{game.title}</h2>
              <GameCarousel game={game} />
              <div className="game-description">
                <div dangerouslySetInnerHTML={{ __html: game.description }} />
              </div>
              <div className="project-my-role" dangerouslySetInnerHTML={{ __html: game.myRole ?? '' }} />
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

interface GameCarouselProps {
  game: Project;
}

export const GameCarousel: React.FC<GameCarouselProps> = ({ game }) => {
  // If there's a video, show video player
  if (game.video) {
    const youtubeVideoId = getYouTubeVideoId(game.video);
    
    if (youtubeVideoId) {
      // Render YouTube iframe
      const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&enablejsapi=1&rel=0&modestbranding=1`;
      return (
        <div className="carousel">
          <div className="carousel-video">
            <iframe
              src={embedUrl}
              title={`${game.title} trailer`}
              className="video-player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="indicators" />
        </div>
      );
    } else {
      // Render regular video element
      return (
        <div className="carousel">
          <div className="carousel-video">
            <video
              autoPlay
              muted
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
  }

  // Otherwise, show image carousel.  If there are no images either, render
  // an empty placeholder so description/video alignment is maintained.
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
  const [timerKey, setTimerKey] = useState(0);
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
  }, [displayedIndex, game.images!.length, timerKey]);

  const nextImage = () => {
    changeImage((displayedIndex + 1) % game.images!.length);
  };

  const goToImage = (index: number) => {
    if (index !== displayedIndex) changeImage(index);
    setTimerKey(k => k + 1);
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

export default Games;