import Footer from '@/FrontendComponents/Footer/Footer'
import Header from '@/FrontendComponents/Header/Header'
import InnerBanner from '@/FrontendComponents/InnerBanner/InnerBanner'
import ServicesPage from '@/FrontendComponents/ServicesPage/ServicesPage'
import React, { Fragment } from 'react'

export default function Services() {
  return (
    <Fragment>
        <Header />
        <InnerBanner image="/FrontendImages/wecare-bg.webp" title="Our Services" />
        <ServicesPage/>
        <Footer />
    </Fragment>
  )
}
