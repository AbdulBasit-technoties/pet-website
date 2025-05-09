import React, { Fragment, useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function GallerySec({ gallery }) {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            Thumbs: {
                autoStart: true,
            },
            Toolbar: true,
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <Fragment>
            <section className="testimonial relative py-[50px] md:py-[60px] xl:py-[80px] 2xl:py-[100px]">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]">
                    <div className="grid grid-cols-12 gap-5">
                        {gallery.map((item, index) => (
                            <div className="col-span-6 lg:col-span-4" key={index}>
                                <div className="gallery-item">
                                    <a
                                        href={
                                            item.image
                                                ? `${window.location.origin}/storage/${item.image}`
                                                : "/images/no-image.webp"
                                        }
                                        data-fancybox="gallery"
                                    >
                                        <img
                                            className="w-full h-full aspect-square object-cover rounded-lg"
                                            src={
                                                item.image
                                                    ? `${window.location.origin}/storage/${item.image}`
                                                    : "/images/no-image.webp"
                                            }
                                            alt={`Gallery image ${index + 1}`}
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
