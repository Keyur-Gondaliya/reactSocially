import React from 'react'

export default function LoginModel() {
  return (
    <>
        <div class="modal fade sl-light-modal" id="userLoginModal" tabindex="-1" aria-labelledby="userLoginLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="sl-modal-logo text-center">
                            <img src="assets/images/logo.png" alt="logo" class="img-fluid"/>
                        </div>
                        <h5 class="modal-title" id="userLoginLabel">You must be login to interact with site</h5>
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
                                    <div class="sl-forgot-pass-content">
                                        <label for="inputPassword" class="form-label">Password</label>
                                        <a href="#" class="sl-section-link" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal">Forgot password?</a>
                                    </div>
                                    <div class="sl-forminput-group">
                                        <input type="password" class="form-control" id="inputPassword"/>
                                        <img src="assets/images/password-icon.png" alt="password-icon" class="img-fluid"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-success d-block w-100">LOGIN</button>
                                    <p class="sl-modal-description">Don’t have an account yet? <a href="#" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#userRegisterModal">Register</a></p>
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
