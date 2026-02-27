import React from 'react';

export interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  /**
   * If true, the anchor will include a `download` attribute.
   * Useful for forcing a PDF to download instead of opening in a new tab.
   */
  download?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children, download }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...(download ? { download: '' } : {})}
    >
      <button>{children}</button>
    </a>
  );
};

export default LinkButton;
