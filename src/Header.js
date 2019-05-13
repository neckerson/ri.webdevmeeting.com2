import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Nav = () => {
  return (
  <header>
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
      <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
        <img src={logo} className="dib w2 h2 br-100" alt="Site Name" />
      </a>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/" title="Link 1">Link 1</a>
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/" title="Link 2">Link 2</a>
        <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/" title="link 3">Link 3</a>
      </div>
    </nav>
  </header>
  );
}

export default Nav;
