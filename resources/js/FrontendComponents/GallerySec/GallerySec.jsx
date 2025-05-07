import React, { Fragment, useEffect } from 'react'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
export default function GallerySec() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
          Thumbs: {
            autoStart: true, // thumbnails open honge automatically
          },
          Toolbar: true, // optional: toolbar dikhe upar
        });

        return () => {
          Fancybox.destroy();
        };
      }, []);
    return (
        <Fragment>
            <section className="testimonial relative py-[80px] 2xl:py-[100px]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 mx-[100px] 2xl:mx-[150px] gap-5">
                        <div className="col-span-4">
                            <div className="gallery-item">
                                <a
                                    href="/FrontendImages/1.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <img
                                        className="w-full h-full aspect-square object-cover rounded-lg"
                                        src="/FrontendImages/1.jpeg"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="gallery-item">
                                <a
                                    href="/FrontendImages/2.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <img
                                        className="w-full h-full aspect-square object-cover rounded-lg"
                                        src="/FrontendImages/2.jpeg"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="gallery-item">
                                <a
                                    href="/FrontendImages/3.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <img
                                        className="w-full h-full aspect-square object-cover rounded-lg"
                                        src="/FrontendImages/3.jpeg"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="gallery-item">
                                <a
                                    href="/FrontendImages/4.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <img
                                        className="w-full h-full aspect-square object-cover rounded-lg"
                                        src="/FrontendImages/4.jpeg"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
