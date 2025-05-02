import Banner from '@/FrontendComponents/Banner/Banner'
import Footer from '@/FrontendComponents/Footer/Footer'
import Header from '@/FrontendComponents/Header/Header'
import OurServices from '@/FrontendComponents/OurServices/OurServices'
import OurTeam from '@/FrontendComponents/OurTeam/OurTeam'
import PetFriendly from '@/FrontendComponents/PetFriendly/PetFriendly'
import PetPassport from '@/FrontendComponents/PetPassport/PetPassport'
import Testimonial from '@/FrontendComponents/Testimonial/Testimonial'
import WeCare from '@/FrontendComponents/WeCare/WeCare'
import WhyChoose from '@/FrontendComponents/WhyChoose/WhyChoose'
import React, { Fragment } from 'react'

export default function Home() {
    return (
        <Fragment>
            <Header />
            <Banner />
            <OurServices />
            <PetFriendly />
            <WhyChoose />
            <PetPassport />
            <OurTeam />
            <WeCare />
            <Testimonial />
            <Footer />
        </Fragment>
    )
}
