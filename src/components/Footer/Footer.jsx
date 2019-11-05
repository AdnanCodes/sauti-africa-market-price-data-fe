import React from 'react'

import './footer.scss'
import "semantic-ui-css/semantic.min.css";

const Footer = () => (
  <footer className="footer">
    <p>Copyright 2019 <span>Sauti Africa Limited</span>. All rights reserved.</p>
    <div className="icons">
      <a
            href="https://www.facebook.com/sautiorg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="facebook f icon"></i>
          </a>
          <a
            href="https://twitter.com/sautiorg?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="twitter icon"></i>
          </a>
    </div>
  </footer>
)

export default Footer
