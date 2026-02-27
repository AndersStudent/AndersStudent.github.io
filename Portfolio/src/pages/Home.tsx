import React from 'react';
import { Link } from 'react-router-dom';
import { getProjectsByIds } from '../data/projectData';
import { ProjectCarousel } from './Projects';
import LinkButton from '../components/LinkButton';

const Home: React.FC = () => {
  // Show featured games on home page (first 2 games and the video game)
  const featuredGameIds = ['Train-em', 'Bachelor', 'My-Mafia-Boyfriends', 'P7', 'Linked-Together', 'Fitness-Phasmo'];
  const featuredGames = getProjectsByIds(featuredGameIds);

  return (
    <div>
      <Link to="/about" className="hero-desc-link">
      <div className="hero">
        <div className="hero-image">
          {/* Replace src with your profile picture, e.g.: import profilePic from '../assets/profile.jpg' and use src={profilePic} */}
          <img src='ProfilBilleder/HeadShoot4.png' alt="Anders Lucassen Lund" className="profile-pic" />
        </div>
        <div className="hero-text">
          
        <h1>Anders Lucassen Lund</h1>
        <p> I am a <strong>Master&#39;s student in Medialogy</strong> and a passionate <strong>developer</strong> based in Aalborg, Denmark, creating both <strong>games</strong> and other <strong>interactive applications</strong>. I have been creating games since 2016, with a strong focus on <strong>programming, procedural generation,</strong> and <strong>AI-driven applications. </strong> </p>

        <p> I founded and ran my own sole-developer game studio, <strong>Pennie Entertainment ApS</strong>. I have worked as a <strong>lead programmer</strong> and <strong>systems integrator</strong>. I have experience with both <strong>solo</strong> and <strong>team-based projects</strong>. Alongside Game and Application development, I enjoy <strong>storytelling</strong> and <strong>teaching</strong>. </p>

        <p> My long-term goal is to inspire others through education in <strong>game design and development</strong> while continuing to grow as a developer across multiple technical fields. </p>
          </div>
        </div>
      </Link>

      <section>
        <h1>Highlighted Games and Projects</h1>
        <div className="games-grid">
          {featuredGames.map((game, gameIndex) => (
            <div key={gameIndex} className="game-showcase">
              <h2>{game.title}</h2>
              <ProjectCarousel game={game} />
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

export default Home;