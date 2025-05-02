import { Link } from '@inertiajs/react'
import React, { Fragment } from 'react'

export default function FillButton({title,link}) {
  return (
    <Fragment>
        <Link href={link} className={`bg-c1 text-white p-[10px] px-5 rounded hover:bg-transparent hover:text-c1 border border-c1 transition-all duration-500 ease-in font-medium`}>
            {title}
        </Link>
    </Fragment>

  )
}
