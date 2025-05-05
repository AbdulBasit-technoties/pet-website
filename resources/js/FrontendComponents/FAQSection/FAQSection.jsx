import React, { useState, Fragment } from 'react';

const faqs = [
  {
    question: "Do you offer grooming services?",
    answer: "Yes, we offer full grooming services for dogs and cats, including baths, haircuts, nail trimming, and ear cleaning."
  },
  {
    question: "Do you offer delivery for pet products?",
    answer: "Yes, we offer local delivery for pet supplies within a certain radius. Delivery charges may apply, and we also provide express shipping for online orders."
  },
  {
    question: "Are your toys and accessories eco-friendly?",
    answer: "We strive to carry eco-friendly and sustainable pet toys and accessories. Many of our products are made from recycled or biodegradable materials."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Fragment>
      <section className="bg-custbg py-14 px-4 sm:px-6 lg:px-8">
        <div className='container mx-auto 2xl:px-[50px] px-[40px]'>
          <div className="text-center">
            <h2 className="text-[#34495e] text-[34px] 2xl:text-[40px] 2xl:mb-[60px] mb-[50px]">
              Frequently Asked Question's
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-md border border-c1 bg-white shadow">
                <button
                  className="w-full flex flex-col text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div
                        className={`flex justify-between items-center w-full px-5 py-4 ${
                            openIndex === index ? 'bg-c1' : ''
                        }`}
                        >
                        <span className={`font-semibold text-lg ${openIndex === index ? 'text-white' : 'text-[#34495e]'}`}>
                            {faq.question}
                        </span>
                        <span className={`text-2xl ${openIndex === index ? 'text-white' : 'text-c1'}`}>
                            {openIndex === index ? '−' : '+'}
                        </span>
                    </div>

                  <div
                    className={`transition-all duration-500 overflow-hidden px-5 ${
                      openIndex === index ? 'max-h-40 opacity-100 py-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[#34495e]">{faq.answer}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
