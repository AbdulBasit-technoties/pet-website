import BookForm from '@/FrontendComponents/BookForm/BookForm'
import Footer from '@/FrontendComponents/Footer/Footer'
import Header from '@/FrontendComponents/Header/Header'
import InnerBanner from '@/FrontendComponents/InnerBanner/InnerBanner'
import React, { Fragment } from 'react'

export default function Booking() {
  return (
    <Fragment>
        <Header/>
        <InnerBanner image="/FrontendImages/inner-banner.jpeg" title="Book Now" />
        <BookForm />
        <Footer />
    </Fragment>
  )
}
