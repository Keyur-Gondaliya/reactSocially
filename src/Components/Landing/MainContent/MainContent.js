import React from 'react'
import ForgotPasswordModel from './Contetnt/ForgotPasswordModel'
import ForgotPasswordSuccessModel from './Contetnt/ForgotPasswordSuccessModel'
import HowItWorkSection from './Contetnt/HowItWorkSection'
import ImproveSection from './Contetnt/ImproveSection'
import ImproveYourWellSections from './Contetnt/ImproveYourWellSections'
import LandingSection from './Contetnt/LandingSection'
import LoginModel from './Contetnt/LoginModel'
import NewLaunchedSection from './Contetnt/NewLaunchedSection'
import OurCommunity from './Contetnt/OurCommunity'
import Registration from './Contetnt/Registration'
import SoundLikeSection from './Contetnt/SoundLikeSection'
import UserRegistrationSuccess from './Contetnt/UserRegistrationSuccess'
import WeProvideSection from './Contetnt/WeProvideSection'
import WhyUSSection from './Contetnt/WhyUSSection'

export default function MainContent() {
  return (
    <>
         <main class="sl-site-content">
        {/* <!-- Landing Section Start --> */}
        <LandingSection/>
        {/* <!-- Landing Section End --> */}

        {/* <!-- New Launched Section Start --> */}
        <NewLaunchedSection/>
        {/* <!-- New Launched Section End --> */}

        {/* <!-- Improve You Section Start --> */}
        <ImproveSection/>
        {/* <!-- Improve You Section End --> */}

        {/* <!-- How it Work Section Start --> */}
        <HowItWorkSection/>
        {/* <!-- How it Work Section End --> */}

        {/* <!-- We Provide Section Start --> */}
        <WeProvideSection/>
        {/* <!-- We Provide Section End --> */}

        {/* <!-- Our Communities Section Start --> */}
        <OurCommunity/>
        {/* <!-- Our Communities Section End --> */}

        {/* <!-- Devider Section Start --> */}
        <hr class="sl-devider" />
        {/* <!-- Devider Section End --> */}

        {/* <!-- Sound Like Section Start --> */}
        <SoundLikeSection/>
        {/* <!-- Sound Like Section End --> */}

        {/* <!-- Why US Section Start --> */}
        <WhyUSSection/>
        {/* <!-- Why US Section End --> */}


        {/* <!-- Improve your well Section Start --> */}
        <ImproveYourWellSections/>
        {/* <!-- Improve your well Section End --> */}

        {/* <!-- User Login Modal Start --> */}
        <LoginModel/>
        {/* <!-- User Login Modal End --> */}

        {/* <!-- Forgot Password Modal Start --> */}
        <ForgotPasswordModel/>
        {/* <!-- Forgot Password Modal End --> */}

        {/* <!-- Forgot password success Modal Start --> */}
        <ForgotPasswordSuccessModel/>
        {/* <!-- Forgot password success Modal End --> */}

        {/* <!-- User Registration Modal Start --> */}
        <Registration/>
        {/* <!-- User Registration Modal End --> */}

        {/* <!-- User Registration Modal Start --> */}
        <UserRegistrationSuccess/>
        {/* <!-- User Registration Modal End --> */}
    </main>
    </>
  )
}
