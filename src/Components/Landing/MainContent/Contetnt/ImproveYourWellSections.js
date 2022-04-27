import React from 'react'

export default function ImproveYourWellSections() {
  return (
    <>
        <section class="sl-call-action-section sl-improve-well-section">
            <div class="container">
                <div class="sl-call-action-content sl-improve-well-content">
                    <h2 class="sl-section-title">Improve your well-being, build a community.</h2>
                    <p class="sl-section-description"> The Socialley app gives you access to events, workout sessions, communities, articles and other wellness services, to help you improve your overall wellbeing. Request for early access by entering your email. </p>
                    <div class="sl-improve-well-form">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter your email"/>
                            <button class="btn btn-success input-group-text" data-bs-toggle="modal" data-bs-target="#userRegisterSuccessModal">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
