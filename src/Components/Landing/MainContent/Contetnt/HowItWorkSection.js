import React from 'react'

export default function HowItWorkSection() {
  return (
    <>
        <section class="sl-how-work-section">
            <div class="container">
                <div class="sl-section-heading text-center">
                    <h2 class="sl-section-title">How it Work’s</h2>
                    <p class="sl-section-description">Our unique technology is creatively designed and easy to use. The tool covers the following areas.</p>
                </div>
                <div class="row">
                    <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="sl-how-work-content">
                            <div class="sl-how-work-list">
                                <div class="sl-how-work-item">
                                    <a href="#" class="sl-how-work-card">
                                        <span class="sl-how-work-icon">
                                            <img src="assets/images/tell-us-icon.png" alt="tell-us-icon" class="img-fluid"/>
                                        </span>
                                        <label><span>Tell us</span>  your ongoing challenge</label>
                                    </a>
                                </div>
                                <div class="sl-how-work-item">
                                    <a href="#" class="sl-how-work-card">
                                        <span class="sl-how-work-icon">
                                            <img src="assets/images/discover-icon.png" alt="tell-us-icon" class="img-fluid"/>
                                        </span>
                                        <label><span>Discover</span>  tips for improving your well-being.</label>
                                    </a>
                                </div>
                                <div class="sl-how-work-item">
                                    <a href="#" class="sl-how-work-card">
                                        <span class="sl-how-work-icon">
                                            <img src="assets/images/share-icon.png" alt="tell-us-icon" class="img-fluid"/>
                                        </span>
                                        <label><span>Share</span> with your community</label>
                                    </a>
                                </div>
                                <div class="sl-how-work-item">
                                    <a href="#" class="sl-how-work-card">
                                        <span class="sl-how-work-icon">
                                            <img src="assets/images/connect-icon.png" alt="tell-us-icon" class="img-fluid"/>
                                        </span>
                                        <label><span>Connect</span> based on shared interest</label>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="sl-how-work-img">
                            <img src="assets/images/how-work-img.png" alt="how-work-img" class="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
