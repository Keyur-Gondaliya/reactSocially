import React from 'react'

export default function ImproveSection() {
  return (
    <>
        <section class="sl-improve-you-section">
            <div class="container">
                <h2 class="sl-section-title">We Aim To Help You Improve Your</h2>
                <div class="row justify-content-center">
                    <div class="col col-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="sl-improve-card">
                            <div class="sl-improve-icon">
                                <img src="assets/images/physical-well-being-icon.png" alt="physical-well-being-icon" class="img-fluid"/>
                            </div>
                            <div class="sl-improve-card-body">
                                <h3 class="sl-improve-title">Physical Well-being</h3>
                                <p class="sl-improve-description">Are you active enough? Are you listening to your body? Learn how to immprove and boost your physical well-being</p>
                            </div>
                        </div>
                    </div>
                    <div class="col col-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="sl-improve-card">
                            <div class="sl-improve-icon">
                                <img src="assets/images/emotional-well-being-icon.png" alt="emotional-well-being-icon" class="img-fluid"/>
                            </div>
                            <div class="sl-improve-card-body">
                                <h3 class="sl-improve-title">Emotional Well-being</h3>
                                <p class="sl-improve-description">Are you giving out positive emotions? Are you managing negative emotions effectively? Learn how to improve your emotional well-being.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col col-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="sl-improve-card">
                            <div class="sl-improve-icon">
                                <img src="assets/images/social-well-being-icon.png" alt="social-well-being-icon" class="img-fluid"/>
                            </div>
                            <div class="sl-improve-card-body">
                                <h3 class="sl-improve-title">Social Well-being</h3>
                                <p class="sl-improve-description">Are you suffering from social isolation or anxiety? Get access to the right tool to improve your social well-being.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
