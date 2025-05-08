import Footer from '@/FrontendComponents/Footer/Footer'
import Header from '@/FrontendComponents/Header/Header'
import InnerBanner from '@/FrontendComponents/InnerBanner/InnerBanner'
import ServicesPage from '@/FrontendComponents/ServicesPage/ServicesPage'
import React, { Fragment } from 'react'

export default function Services({services}) {
  return (
    <Fragment>
        <Header />
        <InnerBanner image="/FrontendImages/inner-banner.jpeg" title="Our Services" />
        <ServicesPage services={services} />
        <Footer />
    </Fragment>
  )
}
