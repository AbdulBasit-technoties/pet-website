import Footer from '@/FrontendComponents/Footer/Footer'
import GallerySec from '@/FrontendComponents/GallerySec/GallerySec'
import Header from '@/FrontendComponents/Header/Header'
import InnerBanner from '@/FrontendComponents/InnerBanner/InnerBanner'
import React, { Fragment } from 'react'

export default function Gallery() {
  return (
    <Fragment>
        <Header />
        <InnerBanner image="/FrontendImages/inner-banner.jpeg" title="Our Gallery" />
        <GallerySec />
        <Footer />
    </Fragment>
  )
}

