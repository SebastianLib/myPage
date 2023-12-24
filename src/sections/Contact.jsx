import React from 'react'

const Contact = () => {
  return (
<section className="bg-white h-screen relative">
<div className="h-[50%] relative bg-red-300 bg-[url('assets/contactSmall.jpg')]  md:bg-[url('assets/contactBig.jpg')] bg-fixed bg-cover flex justify-center items-center">
<div className="absolute inset-0 bg-black/50"></div>
</div>
<div className='h-[50%] bg-gray-50'></div>
  <div className="bg-white rounded-xl shadow-xl top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] absolute w-full py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-red-600 text-white">Send message</button>
      </form>
  </div>
</section>
  )
}

export default Contact