import ContactUsPage from '@/FrontendComponents/ContactUsPage/ContactUsPage'
import Footer from '@/FrontendComponents/Footer/Footer'
import Header from '@/FrontendComponents/Header/Header'
import InnerBanner from '@/FrontendComponents/InnerBanner/InnerBanner'
import React, { Fragment } from 'react'

export default function ContactUs() {
  return (
    <Fragment>
        <Header />
        <InnerBanner image="/FrontendImages/wecare-bg.webp" title="Contact Us" />
        <ContactUsPage/>
        <Footer />
    </Fragment>
  )
}
