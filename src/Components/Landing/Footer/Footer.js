import React from 'react'

export default function Footer() {
  return (
    <>
        {/* <!-- Site Footer Start --> */}
    <footer class="sl-site-footer">
        <div class="container">
            <div class="row">
                <div class="col col-6 col-md-3 col-lg-2">
                    <div class="sl-footer-content">
                        <div class="sl-footer-logo">
                            <a href="index.html">
                                <img src="Assets/images/logo.png" alt="Logo" class="img-fluid"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col col-6 col-md-2 col-lg-2">
                    {/* <!-- <div class="sl-footer-content">
                        <a href="#" class="sl-footer-menu-title">About Us</a>
                    </div> --> */}
                </div>
                <div class="col col-6 col-md-3 col-lg-3">
                    <div class="sl-footer-content">
                        <h4 class="sl-footer-menu-title">About Us</h4>
                        <ul class="sl-footer-menu-list">
                            <li class="sl-footer-menu-item">
                                <a href="#" class="sl-footer-menu-link">Health & Wellness</a>
                            </li>
                            {/* <!-- <li class="sl-footer-menu-item">
                                <a href="#" class="sl-footer-menu-link">Fitness & Nutrition</a>
                            </li> --> */}
                            <li class="sl-footer-menu-item">
                                <a href="#" class="sl-footer-menu-link">Travel & Sightseeing</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col col-12 col-md-4 col-lg-5">
                    <div class="sl-footer-content">
                        <div class="sl-site-info">
                            <h4 class="sl-site-info-title">About SOCIALLY.UK</h4>
                            <p class="sl-site-info-description">Our technology enable communities to collaborate on shared interest, to create activity, build a community and improve their well-being.</p>
                            <a href="#" class="sl-site-info-link">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sl-copyright-content">
            <div class="container">
                <p class="sl-copyright-text">© copyright 2022 I-Tran Digital</p>
            </div>
        </div>
    </footer>
    {/* <!-- Site Footer End --> */}
    </>
  )
}
