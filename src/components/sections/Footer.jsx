import React from 'react'

export default () => (
    <footer>
        <div className='container'>
            <div className="logo">
                <img src='../../images/mdb_mono.png' />
            </div>
    
            <div className="copy">
                <div>© Copyright <strong>Movies Database</strong></div>
            </div>
            
            <ul className="social">
                <li className="social-item">
                    <a href='#'>
                        <i class="fab fa-twitter fa-2x"></i>
                    </a>
                </li>

                <li className="social-item">
                    <a href='#'>
                        <i class="fab fa-facebook-square fa-2x"></i>
                    </a>
                </li>

                <li className="social-item">
                    <a href='#'>
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
);
