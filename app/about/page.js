'use client'
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from "next/link"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 3,
            
        },
        1350: {
            slidesPerView: 3,
            
        },
    }



}

export default function Home() {
    return (
        <>
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
       {/*Services Four Start*/}
       <section className="services-four">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style2">
                    <h2 className="section-title__title title-animation">Elevate Your Spac Transform Your <br/>
                        Home With Expert Design</h2>
                </div>
                <div className="row">
                    {/*Services Four Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-four__single">
                            <div className="services-four__icon-box">
                                <div className="services-four__icon">
                                    <span className="icon-passport"></span>
                                </div>
                            </div>
                            <div className="services-four__content">
                                <h4 className="services-four__title"><Link href="services">Reasonable Prices</Link>
                                </h4>
                                <p className="services-four__text">As well as getting to fly to different dest
                                    as part of their job, airplane pilots get big</p>
                            </div>
                            <div className="services-four__arrow">
                                <Link href="services"><span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Services Four Single End*/}
                    {/*Services Four Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-four__single">
                            <div className="services-four__icon-box">
                                <div className="services-four__icon">
                                    <span className="icon-workstations"></span>
                                </div>
                            </div>
                            <div className="services-four__content">
                                <h4 className="services-four__title"><Link href="services">Reasonable Services</Link>
                                </h4>
                                <p className="services-four__text">As well as getting to fly to different dest
                                    as part of their job, airplane pilots get big</p>
                            </div>
                            <div className="services-four__arrow">
                                <Link href="services"><span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Services Four Single End*/}
                    {/*Services Four Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="services-four__single">
                            <div className="services-four__icon-box">
                                <div className="services-four__icon">
                                    <span className="icon-engineer"></span>
                                </div>
                            </div>
                            <div className="services-four__content">
                                <h4 className="services-four__title"><Link href="services">360 PANORAMA & 3D
                                    </Link>
                                </h4>
                                <p className="services-four__text">As well as getting to fly to different dest
                                    as part of their job, airplane pilots get big</p>
                            </div>
                            <div className="services-four__arrow">
                                <Link href="services"><span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Services Four Single End*/}
                </div>
            </div>
        </section>
        {/*Services Four End*/}

        {/*About One Start */}
        <section className="about-one">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <ul className="list-unstyled about-one__img-list">
                                <li>
                                    <div className="about-one__img">
                                        <img src="assets/images/resources/about-one-1-1.jpg" alt=""/>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-one__img">
                                        <img src="assets/images/resources/about-one-1-2.jpg" alt=""/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="about-one__right wow fadeInLeft" data-wow-delay="300ms">
                            <div className="about-one__content">
                                <div className="about-one__content-shape-1"
                                    style={{ backgroundImage: ' url(assets/images/shapes/about-one-content-shape-1.png)' }} >
                                </div>
                                <div className="section-title sec-title-animation animation-style2">
                                    <h2 className="section-title__title title-animation">Where Inovation Meet <br/>
                                        Interior Design</h2>
                                </div>
                                <div className="about-one__design-make">
                                    <div className="about-one__design-make-img">
                                        <img src="assets/images/resources/about-one-design-make-img-1.jpg" alt=""/>
                                    </div>
                                    <div className="about-one__design-make-content">
                                        <h5 className="about-one__design-make-title">Design Make Dream</h5>
                                        <p className="about-one__design-make-text">Rapidiously evolve pandemic experiences
                                            <br/>
                                            and Dramatically administrate</p>
                                    </div>
                                </div>
                                <ul className="about-one__progress-list list-unstyled">
                                    <li className="about-one__progress">
                                        <h4 className="about-one__progress-title">Architecture</h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="85%" style={{ width: '85%' }}>
                                                <div className="count-text">85%</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="about-one__progress">
                                        <h4 className="about-one__progress-title">Interior Design </h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="90%" style={{ width: '90%' }}>
                                                <div className="count-text">90%</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}
        

        {/* Projects One Start */}
        <section className="projects-one projects-four">
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="projects-one__top">
                <div className="container">
                    <div className="projects-one__top-inner">
                        <div className="section-title text-left sec-title-animation animation-style2">
                            <h2 className="section-title__title title-animation">We Elevate Your Brand's <br/>
                                Daring Dedication.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-one__bottom">
                <div className="container">
                    <div className="row filter-layout">
                        <div className="col-xl-3 col-lg-6 col-md-6 filter-item des nat anim">
                            <div className="projects-one__single">
                                <div className="projects-one__img-box">
                                    <div className="projects-one__img">
                                        <img src="assets/images/project/projects-1-1.jpg" alt=""/>
                                    </div>
                                    <div className="projects-one__content">
                                        <div className="projects-one__content-shape-1"
                                            style={{ backgroundImage: ' url(assets/images/shapes/projects-one-content-shape-1.png)' }} >
                                        </div>
                                        <h4 className="projects-one__title"><Link href="#">Neoclassical Sofa</Link></h4>
                                        <p className="projects-one__sub-title">Interior Design</p>
                                    </div>
                                    <div className="projects-one__arrow">
                                        <Link href="assets/images/project/projects-1-1.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 filter-item anim ani">
                            <div className="projects-one__single">
                                <div className="projects-one__img-box">
                                    <div className="projects-one__img">
                                        <img src="assets/images/project/projects-1-2.jpg" alt=""/>
                                    </div>
                                    <div className="projects-one__content">
                                        <div className="projects-one__content-shape-1"
                                            style={{ backgroundImage: ' url(assets/images/shapes/projects-one-content-shape-1.png)' }} >
                                        </div>
                                        <h4 className="projects-one__title"><Link href="#">Neoclassical Sofa</Link></h4>
                                        <p className="projects-one__sub-title">Interior Design</p>
                                    </div>
                                    <div className="projects-one__arrow">
                                        <Link href="assets/images/project/projects-1-2.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 filter-item des ani">
                            <div className="projects-one__single">
                                <div className="projects-one__img-box">
                                    <div className="projects-one__img">
                                        <img src="assets/images/project/projects-1-3.jpg" alt=""/>
                                    </div>
                                    <div className="projects-one__content">
                                        <div className="projects-one__content-shape-1"
                                            style={{ backgroundImage: ' url(assets/images/shapes/projects-one-content-shape-1.png)' }} >
                                        </div>
                                        <h4 className="projects-one__title"><Link href="#">Neoclassical Sofa</Link></h4>
                                        <p className="projects-one__sub-title">Interior Design</p>
                                    </div>
                                    <div className="projects-one__arrow">
                                        <Link href="assets/images/project/projects-1-3.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 filter-item des ani nat">
                            <div className="projects-one__single">
                                <div className="projects-one__img-box">
                                    <div className="projects-one__img">
                                        <img src="assets/images/project/projects-1-4.jpg" alt=""/>
                                    </div>
                                    <div className="projects-one__content">
                                        <div className="projects-one__content-shape-1"
                                            style={{ backgroundImage: ' url(assets/images/shapes/projects-one-content-shape-1.png)' }} >
                                        </div>
                                        <h4 className="projects-one__title"><Link href="#">Neoclassical Sofa</Link></h4>
                                        <p className="projects-one__sub-title">Interior Design</p>
                                    </div>
                                    <div className="projects-one__arrow">
                                        <Link href="assets/images/project/projects-1-4.jpg" className="img-popup"><span
                                                className="icon-up-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Projects One End */}

       

      
     
        </Layout>
        </>
    )
}


