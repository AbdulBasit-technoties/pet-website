import React, { useState, Fragment } from 'react';

export default function FAQSection({faqs}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Fragment>
      <section className="bg-custbg py-[50px] md:py-[60px] xl:py-[80px] 2xl:py-[100px]">
        <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]'>
          <div className="text-center">
            <h2 className="text-[#34495e] text-[24px] sm:text-[28px] lg:text-[34px] 2xl:text-[40px] 2xl:mb-[70px] lg:mb-[50px] md:mb-[40px] mb-[30px] font-semibold">
              Frequently Asked Question's
            </h2>
          </div>
          <div className="xl:w-[80%] 2xl:w-[70%] mx-auto space-y-4">
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
                        <span className={`font-semibold text-[16px] lg:text-lg ${openIndex === index ? 'text-white' : 'text-[#34495e]'}`}>
                            {faq.title}
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
                    <p className="text-[#34495e]">{faq.description}</p>
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
