import React from 'react'
import ContactUsForm from '../../common/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='mx-auto text-richblack-25 mt-36'>
      <h1 className='text-center text-[36px] font-semibold'>Get in Touch</h1>

      <p className='text-center text-richblack-400 mb-8 font-medium'>We’d love to here for you, Please fill out this form.</p>

      <div>
        <ContactUsForm />
      </div>

    </div>
  )
}

export default ContactFormSection