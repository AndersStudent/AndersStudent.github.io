import React from 'react';
import { getProjectsByType, Project } from '../data/projectData';
import LinkButton from '../components/LinkButton';

const Papers: React.FC = () => {
  const papers = getProjectsByType('paper');

  return (
    <div>
      <section>
        <h1>Research Papers</h1>
        <div className="papers-list">
          {papers.map((paper, index) => (
            <PaperCard key={index} paper={paper} />
          ))}
        </div>
      </section>
    </div>
  );
};

interface PaperCardProps {
  paper: Project;
}

const PaperCard: React.FC<PaperCardProps> = ({ paper }) => {
  return (
    <div className="paper-card">
      <h2>{paper.title}</h2>
      <div className="paper-meta">
        {paper.date && <span className="paper-date">{paper.date}</span>}
        {paper.tags && (
          <div className="paper-tags">
            {paper.tags.map((tag, index) => (
              <span key={index} className="paper-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
      <div className="paper-description" dangerouslySetInnerHTML={{ __html: paper.description }} />
      {paper.link && (
        <div className="paper-link">
          {/* if user has requested download or the link is a PDF we allow the download attribute */}
          <LinkButton
            href={paper.link}
            download={
              paper.download || paper.link.toLowerCase().endsWith('.pdf')
            }
          >
            {paper.buttonText || 'Read Paper'}
          </LinkButton>
        </div>
      )}
    </div>
  );
};

export default Papers;