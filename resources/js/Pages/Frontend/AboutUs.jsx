import WhoWeAre from '@/FrontendComponents/WhoWeAre/WhoWeAre'
import Footer from '@/FrontendComponents/Footer/Footer'
import Header from '@/FrontendComponents/Header/Header'
import InnerBanner from '@/FrontendComponents/InnerBanner/InnerBanner'
import React, { Fragment } from 'react'
import WhatWeDo from '@/FrontendComponents/WhatWeDo/WhatWeDo'
import FAQSection from '@/FrontendComponents/FAQSection/FAQSection'

export default function AboutUs() {
    return (
        <Fragment>
            <Header />
            <InnerBanner image="/FrontendImages/inner-banner.jpeg" title="About Us" />
            <WhoWeAre/>
            <FAQSection/>
            <WhatWeDo/>
            <Footer />
        </Fragment>
    )
}
