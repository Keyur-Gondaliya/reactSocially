import React from 'react'

export default function Registration() {
  return (
    <>
        <div class="modal fade sl-light-modal" id="userRegisterModal" tabindex="-1" aria-labelledby="userRegisterModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="sl-modal-logo text-center">
                            <img src="assets/images/logo.png" alt="logo" class="img-fluid"/>
                        </div>
                        <h5 class="modal-title" id="userRegisterModalLabel">Registration</h5>
                        <div class="sl-edit-profile-content">
                            <form class="row g-3">
                                <div class="col-12">
                                    <label for="inputResEmail" class="form-label">Email</label>
                                    <div class="sl-forminput-group">
                                        <input type="email" class="form-control" id="inputResEmail"/>
                                        <img src="assets/images/user-icon.png" alt="user-icon" class="img-fluid"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label for="inputResPassword" class="form-label">Password</label>
                                    <div class="sl-forminput-group">
                                        <input type="password" class="form-control" id="inputResPassword"/>
                                        <img src="assets/images/password-icon.png" alt="password-icon" class="img-fluid"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label for="inputResRePassword" class="form-label">Retype password</label>
                                    <div class="sl-forminput-group">
                                        <input type="password" class="form-control" id="inputResRePassword"/>
                                        <img src="assets/images/password-icon.png" alt="password-icon" class="img-fluid"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-success d-block w-100">REGISTER</button>
                                    <p class="sl-modal-description">Alredy have an account? <a href="#" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#userLoginModal">Log in</a></p>
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
