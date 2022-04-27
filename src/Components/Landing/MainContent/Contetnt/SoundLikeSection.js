import React from 'react'

export default function SoundLikeSection() {
  return (
    <>
        <section class="sl-sound-like-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col col-12 col-md-6 cool-lg-6">
                        <div class="sl-sound-like-img">
                            <img src="assets/images/sound-like-img.png" alt="sound-like-img" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="col col-12 col-md-6 cool-lg-6">
                        <div class="sl-sound-like-content">
                            <div class="sl-sound-like-heading">
                                <label class="sl-section-label">Hmm....</label>
                                <h2 class="sl-section-title">Does this Sound Like You?</h2>
                            </div>

                            <div class="sl-sound-like-list">
                                <a href="#" class="sl-sound-like-item">
                                    <h3 class="sl-sound-like-title">Feeling Anxious</h3>
                                    <p class="sl-sound-like-description">Feeling anxious about the current climate, meeting someone new or having a fear of public speaking?</p>
                                </a>
                                <a href="#" class="sl-sound-like-item">
                                    <h3 class="sl-sound-like-title">Keen to improve your well-being</h3>
                                    <p class="sl-sound-like-description">Feeling anxious about the current climate, meeting someone new or having a fear of public speaking?</p>
                                </a>
                                <a href="#" class="sl-sound-like-item">
                                    <h3 class="sl-sound-like-title">Struggling to stay focus</h3>
                                    <p class="sl-sound-like-description">Feeling anxious about the current climate, meeting someone new or having a fear of public speaking?</p>
                                </a>
                            </div>
                            <a href="#" class="btn btn-success">Let’s do something about it!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
