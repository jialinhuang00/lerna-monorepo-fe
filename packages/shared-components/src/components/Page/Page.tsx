import React from 'react';
import { Header, User } from '../Header/Header';
import './page.css';

export interface PageProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Page: React.FC<PageProps> = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
    />

    <section className="storybook-page">
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a{' '}
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>component-driven</strong>
        </a>{' '}
        process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages when you're ready to make a handful of components come together to render a
        complete UI, such as this page.
      </p>
      <div className="tip-wrapper">
        <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>
  </article>
); 