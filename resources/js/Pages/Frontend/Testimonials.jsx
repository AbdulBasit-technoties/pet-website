
import Footer from '@/FrontendComponents/Footer/Footer'
import Header from '@/FrontendComponents/Header/Header'
import InnerBanner from '@/FrontendComponents/InnerBanner/InnerBanner'
import TestimonialPage from '@/FrontendComponents/TestimonialPage/TestimonialPage'
import React, { Fragment } from 'react'

export default function Testimonials() {
  return (
    <Fragment>
         <Header />
         <InnerBanner image="/FrontendImages/wecare-bg.webp" title="Testimonials" />
         <TestimonialPage/>
         <Footer />
    </Fragment>
  )
}
