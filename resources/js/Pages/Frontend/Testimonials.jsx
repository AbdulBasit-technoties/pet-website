
import Footer from '@/FrontendComponents/Footer/Footer'
import Header from '@/FrontendComponents/Header/Header'
import InnerBanner from '@/FrontendComponents/InnerBanner/InnerBanner'
import TestimonialPage from '@/FrontendComponents/TestimonialPage/TestimonialPage'
import React, { Fragment } from 'react'

export default function Testimonials({testimonials}) {
  return (
    <Fragment>
         <Header />
         <InnerBanner image="/FrontendImages/inner-banner.jpeg" title="Testimonials" />
         <TestimonialPage testimonials={testimonials}/>
         <Footer />
    </Fragment>
  )
}
