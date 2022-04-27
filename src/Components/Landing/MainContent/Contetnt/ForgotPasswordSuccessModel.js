import React from 'react'

export default function ForgotPasswordSuccessModel() {
  return (
    <>
        <div class="modal fade sl-light-modal" id="forgotPassSuccessModal" tabindex="-1" aria-labelledby="forgotPassSuccessModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="sl-modal-logo text-center">
                            <img src="assets/images/logo.png" alt="logo" class="img-fluid"/>
                        </div>
                        <h5 class="modal-title" id="forgotPassSuccessModalLabel">Link is already in your inbox</h5>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
