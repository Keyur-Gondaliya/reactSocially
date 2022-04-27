import React from 'react'

export default function UserRegistrationSuccess() {
  return (
    <>
        <div class="modal fade sl-light-modal" id="userRegisterSuccessModal" tabindex="-1" aria-labelledby="userRegisterSuccessModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="sl-modal-logo text-center">
                            <img src="assets/images/logo.png" alt="logo" class="img-fluid"/>
                        </div>
                        <h5 class="modal-title" id="userRegisterSuccessModalLabel">Registration SuccessFully!</h5>
                        <p class="sl-section-description mb-5 text-center">We will keep you up to date on the latest developments!</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
