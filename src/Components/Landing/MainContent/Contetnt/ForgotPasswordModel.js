import React from 'react'

export default function ForgotPasswordModel() {
  return (
    <>
        <div class="modal fade sl-light-modal" id="forgotPasswordModal" tabindex="-1" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h5 class="modal-title" id="forgotPasswordModalLabel">Forgot password</h5>
                        <div class="sl-edit-profile-content">
                            <form class="row g-3">
                                <div class="col-12">
                                    <label for="inputEmail" class="form-label">Email</label>
                                    <div class="sl-forminput-group">
                                        <input type="email" class="form-control" id="inputEmail"/>
                                        <img src="assets/images/user-icon.png" alt="user-icon" class="img-fluid"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="button" class="btn btn-success d-block w-100" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#forgotPassSuccessModal">SENT</button>
                                    <p class="sl-modal-description">Link for password genarating wil be sent to your email</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
