import React from 'react'

export default function LandingSection() {
  return (
    <>
      <section class="sl-landing-section sl-home-landing-section">
            <div class="container">
                <div class="sl-landing-section__inner">
                    <div class="row">
                        <div class="col col-12 col-md-6 col-lg-7">
                            <div class="sl-landing-section-content">
                                <div class="sl-count-down-content">
                                    <div class="sl-count-down-content__inner" id="clockdiv">
                                        <span class="sl-count-down-line-left"></span>
                                        <span class="sl-count-down-line-right"></span>
                                        <div class="sl-count-days">
                                            <h2 class="sl-count-days-number days">82</h2>
                                            <span class="sl-count-days-label">Days</span>
                                        </div>
                                        <div class="sl-count-hours">
                                            <p class="sl-count-hours__inner"><label class="hours">18</label><span>H</span></p>
                                            <p class="sl-count-hours__inner"><label class="minutes">45</label><span>MN</span></p>
                                            <p class="sl-count-hours__inner"><label class="seconds">36</label><span>S</span></p>
                                        </div>
                                    </div>

                                    <label class="sl-count-title">Before we launch our <span>New Website</span></label>
                                </div>
                            </div>
                        </div>
                        <div class="col col-12 col-md-6 col-lg-5">
                            <div class="sl-landing-section-content sl-home-landing-content">
                                <h1 class="sl-section-title"><span>Welcome to</span> <br/>SOCIALLEY</h1>
                                <p class="sl-section-description">“ Improve your well-being, build a community “</p>
                                <div class="sl-home-landing-form">
                                    <form>
                                        <div class="sl-home-landing-form__inner mb-3">
                                            <label for="slInputemail" class="form-label">Request for early access here</label>
                                            <div class="sl-home-landing-form-input">
                                                <input type="email" id="slInputemail" class="form-control" placeholder="Enter your Email" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sl-home-landing-img">
                <img src="assets/images/new-home-landing-img.png" alt="new-home-landing-img" class="img-fluid"/>
            </div>
        </section>
    </>
  )
}
