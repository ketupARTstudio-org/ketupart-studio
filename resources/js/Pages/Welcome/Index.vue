<script setup>
import AbsractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />

    <AbsractLayout>


        <!--=====================================-->
        <!--=        Banner Area Start         =-->
        <!--=====================================-->
        <section class="banner banner-style-4">
            <div class="container">
                <div class="banner-content">
                    <h1 class="title" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">Technology Solution craft for Industries, SMEs & Education.</h1>
                    <p data-sal="slide-up" data-sal-duration="1000">We provide a bunch of development services, with latest technology and security frameworks to regulate your business and being on track with global standards with the vision in Empowering Industries, SMEs, and Education through cutting-edge technology solutions that unleash productivity, efficiency, and innovation for a brighter future.</p>
                    <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
                        <a href="#section-2" class="axil-btn btn-fill-primary btn-large">View Services</a>
                    </div>
                </div>
                <div class="banner-thumbnail">
                    <div class="large-thumb" data-sal="slide-left" data-sal-duration="800" data-sal-delay="400">
                        <img class="paralax-image" src="assets/abstract/media/banner/ketupat.png" alt="Shape">
                    </div>
                </div>
                <div class="banner-social" data-sal="slide-up" data-sal-duration="800">
                    <div class="border-line"></div>
                    <ul class="list-unstyled social-icon">
                        <li><a href="https://facebook.com/"><i class="fab fa-facebook-f"></i> Facebook</a></li>
                        <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i> twitter</a></li>
                        <li><a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in "></i> Linkedin</a></li>
                    </ul>
                </div>
            </div>

            <ul class="list-unstyled shape-group-19">
                <li class="shape shape-1" data-sal="slide-down" data-sal-duration="500" data-sal-delay="100">
                    <img src="assets/abstract/media/others/bubble-29.png" alt="Bubble">
                </li>
                <li class="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
                    <img src="assets/abstract/media/others/line-7.png" alt="Bubble">
                </li>
            </ul>
        </section>
   <!--=====================================-->
        <!--=        Service Area Start         =-->
        <!--=====================================-->
        <section class="section section-padding-2 bg-color-dark" id="section-2">
            <div class="container">
                <div class="section-heading heading-light-left">
                    <span class="subtitle">What We Can Do For You</span>
                    <h2 class="title">Services we can help you with</h2>
                    <p class="opacity-50 w-50">"The software development process is a journey of continuous improvement, where imagination meets reality through the power of code and collaboration, creating innovative solutions that shape the world we live in."</p>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                        <div class="services-grid active p-20">
                            <div class="thumbnail">
                                <img src="assets/abstract/media/icon/icon-36.png" alt="icon">
                            </div>
                            <div class="content">
                                <h5 class="title"> <a href="service-design.html">Web Development</a></h5>
                                <p>Transform your online presence with our expert web development services, delivering stunning, user-friendly and scalable websites that captivate your audience, boost your brand and drive business growth.</p>
                                <a href="service-design.html" class="more-btn">Find out more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                        <div class="services-grid">
                            <div class="thumbnail">
                                <img src="assets/abstract/media/icon/icon-28.png" alt="icon">
                            </div>
                            <div class="content">
                                <h5 class="title"> <a href="service-development.html">Mobile Development</a></h5>
                                <p>Transform your ideas into reality with our exceptional mobile development services, delivering intuitive, user-friendly, and innovative apps for iOS and Android platforms.</p>
                                <a href="service-development.html" class="more-btn">Find out more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                        <div class="services-grid">
                            <div class="thumbnail">
                                <img src="assets/abstract/media/icon/icon-38.png" alt="icon">
                            </div>
                            <div class="content">
                                <h5 class="title"> <a href="service-marketing.html">Microservices & API</a></h5>
                                <p>Unleash the full potential of your business with our cutting-edge microservices and API development solutions, providing seamless integration, scalability, and agility to drive digital transformation.</p>
                                <a href="service-marketing.html" class="more-btn">Find out more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                        <div class="services-grid">
                            <div class="thumbnail">
                                <img src="assets/abstract/media/icon/icon-39.png" alt="icon">
                            </div>
                            <div class="content">
                                <h5 class="title"> <a href="service-business.html">Game Development</a></h5>
                                <p>Enter the world of endless entertainment with our expert game development services, crafting immersive and engaging games for mobile, PC, and console platforms with stunning graphics and captivating gameplay.</p>
                                <a href="service-business.html" class="more-btn">Find out more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                        <div class="services-grid">
                            <div class="thumbnail">
                                <img src="assets/abstract/media/icon/icon-6.png" alt="icon">
                            </div>
                            <div class="content">
                                <h5 class="title"> <a href="service-technology.html">Augmented Reality</a></h5>
                                <p>Blend the digital and physical worlds like never before with our innovative augmented reality solutions, creating immersive and interactive experiences that engage, educate, and entertain your audience like never before.</p>
                                <a href="service-technology.html" class="more-btn">Find out more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                        <div class="services-grid">
                            <div class="thumbnail">
                                <img src="assets/abstract/media/icon/icon-41.png" alt="icon">
                            </div>
                            <div class="content">
                                <h5 class="title"> <a href="service-content-strategy.html">Virtual Reality</a></h5>
                                <p>Step into a new reality with our cutting-edge virtual reality services, delivering mind-blowing experiences that transport users to new and fantastical worlds, driving engagement and delivering results beyond your wildest dreams.</p>
                                <a href="service-content-strategy.html" class="more-btn">Find out more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="list-unstyled shape-group-10">
                <li class="shape shape-1"><img src="assets/abstract/media/others/line-9.png" alt="Circle"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/bubble-42.png" alt="Circle"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/bubble-43.png" alt="Circle"></li>
            </ul>
        </section>
        <!--=====================================-->
        <!--=       Case Study Area Start       =-->
        <!--=====================================-->
        <section class="section section-padding-equal case-study-featured-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-6" data-sal="slide-right" data-sal-duration="800">
                        <div class="slick-slider slick-dot-nav featured-content" data-slick='{"infinite": true,"arrows": false, "dots": true, "slidesToShow": 1, "asNavFor": ".featured-thumbnail"}'>
                            <div class="slick-slide">
                                <div class="case-study-featured">
                                    <div class="section-heading heading-left">
                                        <span class="subtitle">#1 Service Deliverable</span>
                                        <h2 class="title" style="-webkit-line-clamp: 4;">Professional, Certified &amp; Experienced Developer</h2>
                                        <p>Unlock the full potential of your business with our customized and cutting-edge technology solutions, designed and developed by our talented team of experts to meet your unique needs and exceed your expectations.</p>

                                        <!-- <a href="single-case-study.html" class="axil-btn btn-fill-primary btn-large">Read Case Study</a> -->
                                    </div>
                                    <!-- <div class="case-study-counterup">
                                        <div class="single-counterup">
                                            <h2 class="count-number">
                                                <span class="number count" data-count="15">15</span>
                                                <span class="symbol">%</span>
                                            </h2>
                                            <span class="counter-title">ROI increase</span>
                                        </div>
                                        <div class="single-counterup">
                                            <h2 class="count-number">
                                                <span class="number count" data-count="60">60</span>
                                                <span class="symbol">k</span>
                                            </h2>
                                            <span class="counter-title">Monthly website visits</span>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                            <div class="slick-slide">
                                <div class="case-study-featured">
                                    <div class="section-heading heading-left">
                                        <span class="subtitle">#2 Service Deliverable</span>
                                        <h2 class="title">Agile Project Environment</h2>
                                        <p>Accelerate your path to success with our agile project environment, delivering flexible, responsive, and efficient solutions that adapt to your changing needs, driven by collaboration, transparency, and continuous improvement.</p>
                                        <!-- <a href="single-case-study.html" class="axil-btn btn-fill-primary btn-large">Read Case Study</a> -->
                                    </div>
                                    <!-- <div class="case-study-counterup">
                                        <div class="single-counterup">
                                            <h2 class="count-number">
                                                <span class="number count" data-count="20">20</span>
                                                <span class="symbol">%</span>
                                            </h2>
                                            <span class="counter-title">ROI increase</span>
                                        </div>
                                        <div class="single-counterup">
                                            <h2 class="count-number">
                                                <span class="number count" data-count="60">60</span>
                                                <span class="symbol">k</span>
                                            </h2>
                                            <span class="counter-title">Monthly website visits</span>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                            <div class="slick-slide">
                                <div class="case-study-featured">
                                    <div class="section-heading heading-left">
                                        <span class="subtitle">#3 Service Deliverable</span>
                                        <h2 class="title" style="-webkit-line-clamp: 4;">Newest Technology and Security Compliance</h2>
                                        <p>Stay ahead of the curve with our innovative solutions, leveraging the newest technologies and security compliance standards to keep your business and customer data safe, secure, and ahead of the competition.</p>
                                        <!-- <a href="single-case-study.html" class="axil-btn btn-fill-primary btn-large">Read Case Study</a> -->
                                    </div>
                                    <!-- <div class="case-study-counterup">
                                        <div class="single-counterup">
                                            <h2 class="count-number">
                                                <span class="number count" data-count="20">20</span>
                                                <span class="symbol">%</span>
                                            </h2>
                                            <span class="counter-title">ROI increase</span>
                                        </div>
                                        <div class="single-counterup">
                                            <h2 class="count-number">
                                                <span class="number count" data-count="60">60</span>
                                                <span class="symbol">k</span>
                                            </h2>
                                            <span class="counter-title">Monthly website visits</span>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                            <div class="slick-slide">
                                <div class="case-study-featured">
                                    <div class="section-heading heading-left">
                                        <span class="subtitle">#4 Service Deliverable</span>
                                        <h2 class="title">High Quality Support & Maintenance</h2>
                                        <p>Enjoy peace of mind with our high-quality support and maintenance services, providing round-the-clock technical assistance, regular updates, and proactive maintenance to ensure your solutions perform at their best and meet your evolving needs.</p>
                                        <!-- <a href="single-case-study.html" class="axil-btn btn-fill-primary btn-large">Read Case Study</a> -->
                                    </div>
                                    <!-- <div class="case-study-counterup">
                                        <div class="single-counterup">
                                            <h2 class="count-number">
                                                <span class="number count" data-count="15">15</span>
                                                <span class="symbol">%</span>
                                            </h2>
                                            <span class="counter-title">ROI increase</span>
                                        </div>
                                        <div class="single-counterup">
                                            <h2 class="count-number">
                                                <span class="number count" data-count="60">60</span>
                                                <span class="symbol">k</span>
                                            </h2>
                                            <span class="counter-title">Monthly website visits</span>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6 d-none d-lg-block" data-sal="slide-left" data-sal-duration="800">
                        <div class="slick-slider slick-dot-nav featured-thumbnail" data-slick='{"infinite": true,"arrows": false, "dots": false, "fade": true, "slidesToShow": 1, "asNavFor": ".featured-content"}'>
                            <div class="slick-slide">
                                <div class="case-study-featured-thumb">
                                    <img src="assets/abstract/media/others/case-study-4.png" alt="travel">
                                </div>
                            </div>
                            <div class="slick-slide">
                                <div class="case-study-featured-thumb">
                                    <img src="assets/abstract/media/others/case-study-5.png" alt="travel">
                                </div>
                            </div>
                            <div class="slick-slide">
                                <div class="case-study-featured-thumb">
                                    <img src="assets/abstract/media/others/case-study-6.png" alt="travel">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=====================================-->
        <!--=        About Area Start         =-->
        <!--=====================================-->
        <section class="section section-padding-equal bg-color-light">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800">
                        <div class="about-us">
                            <div class="section-heading heading-left mb-0">
                                <span class="subtitle">About Us</span>
                                <h2 class="title mb--40">We do design, code, develop, test & maintenance.</h2>
                                <p>We delivering user-friendly and aesthetically pleasing products that meet your business goals and exceed your expectations, every step of the way. Our team of experts combines creativity and technical expertise to bring your ideas to life, delivering solutions that are both functional and visually appealing.</p>
                                <p>At every stage of the development process, we work closely with you to ensure that your needs and requirements are met, and that the final product meets your expectations. Whether you need a simple system or a complex system, our team is equipped with the skills and experience to deliver the best results. Our focus on quality and attention to detail ensures that the end product is not only functional but also secure, scalable, and user-friendly.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-6 offset-xl-1" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                        <div class="contact-form-box">
                            <h3 class="title">Get a free Keystroke quote now</h3>
                            <form method="POST" action="mail.php" class="axil-contact-form">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" name="contact-name" placeholder="John Smith">
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" name="contact-email" placeholder="example@mail.com">
                                </div>
                                <div class="form-group mb--40">
                                    <label>Phone</label>
                                    <input type="tel" class="form-control" name="contact-company" placeholder="+123456789">
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Get Free Quote</button>
                                </div>
                                <input type="hidden" class="form-control" name="contact-message" value="Null">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group-6 list-unstyled">
                <li class="shape shape-1"><img src="assets/abstract/media/others/bubble-7.png" alt="Bubble"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/line-4.png" alt="line"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/line-5.png" alt="line"></li>
            </ul>
        </section>
        <!--=====================================-->
        <!--=        Project Area Start         =-->
        <!--=====================================-->
        <section class="section section-padding-2">
            <div class="container">
                <div class="section-heading heading-left mb--40">
                    <span class="subtitle">Our Project</span>
                    <h2 class="title">Some of our <br> finest work.</h2>
                </div>
                <div class="axil-isotope-wrapper">
                    <div class="isotope-button isotope-project-btn">
                        <button data-filter="*" class="is-checked"><span class="filter-text">All Works</span></button>
                        <button data-filter=".branding"><span class="filter-text">Web</span></button>
                        <button data-filter=".mobile"><span class="filter-text">Mobile</span></button>
                        <button data-filter=".mobile"><span class="filter-text">Virtual Reality</span></button>
                    </div>
                    <div class="row row-35 isotope-list">
                        <div class="col-md-6 project branding">
                            <div class="project-grid">
                                <div class="thumbnail">
                                    <a href="single-portfolio.html">
                                        <img src="assets/abstract/media/project/project-1.png" alt="project">
                                    </a>
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="single-portfolio.html">Creative Agency</a></h4>
                                    <span class="subtitle">Full Branding, Website, App</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project mobile">
                            <div class="project-grid">
                                <div class="thumbnail">
                                    <a href="single-portfolio.html">
                                        <img src="assets/abstract/media/project/project-2.png" alt="project">
                                    </a>
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="single-portfolio.html">Digital Marketing</a></h4>
                                    <span class="subtitle">Logo, Website & Mobile App</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project branding">
                            <div class="project-grid">
                                <div class="thumbnail">
                                    <a href="single-portfolio.html">
                                        <img src="assets/abstract/media/project/project-3.png" alt="project">
                                    </a>
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="single-portfolio.html">Digital Agency</a></h4>
                                    <span class="subtitle">Website, UI/UX</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project mobile">
                            <div class="project-grid">
                                <div class="thumbnail">
                                    <a href="single-portfolio.html">
                                        <img src="assets/abstract/media/project/project-4.png" alt="project">
                                    </a>
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="single-portfolio.html">Plan Management</a></h4>
                                    <span class="subtitle">Branding, Website, IOS App</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project branding">
                            <div class="project-grid">
                                <div class="thumbnail">
                                    <a href="single-portfolio.html">
                                        <img src="assets/abstract/media/project/project-5.png" alt="project">
                                    </a>
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="single-portfolio.html">Social Engagement</a></h4>
                                    <span class="subtitle">Design, Development</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project mobile">
                            <div class="project-grid">
                                <div class="thumbnail">
                                    <a href="single-portfolio.html">
                                        <img src="assets/abstract/media/project/project-6.png" alt="project">
                                    </a>
                                </div>
                                <div class="content">
                                    <h4 class="title"><a href="single-portfolio.html">Web Application</a></h4>
                                    <span class="subtitle">Logo, Webapp, App</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group-7 list-unstyled">
                <li class="shape shape-1"><img src="assets/abstract/media/others/circle-2.png" alt="circle"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/bubble-2.png" alt="Line"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/bubble-1.png" alt="Line"></li>
            </ul>
        </section>
        <!--=====================================-->
        <!--=        Counter Up Area Start      =-->
        <!--=====================================-->
        <section class="section section-padding bg-color-dark">
            <div class="container">
                <div class="section-heading heading-light">
                    <span class="subtitle">Featured Case Study</span>
                    <h2 class="title">Design startup movement</h2>
                    <p>"The design startup movement is a catalyst for change, where creativity and technology converge to solve problems, drive innovation, and change the world for the better." </p>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                        <div class="counterup-progress active">
                            <div class="icon">
                                <img src="assets/abstract/media/icon/icon-7.png" alt="Apple">
                            </div>
                            <div class="count-number h2">
                                <span class="number count" data-count="3">3</span>
                                <span class="symbol">+</span>
                            </div>
                            <h6 class="title">Years of operation</h6>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                        <div class="counterup-progress">
                            <div class="icon">
                                <img src="assets/abstract/media/icon/icon-8.png" alt="Apple">
                            </div>
                            <div class="count-number h2">
                                <span class="number count" data-count="11">11</span>
                                <span class="symbol">+</span>
                            </div>
                            <h6 class="title">Projects deliverd</h6>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                        <div class="counterup-progress">
                            <div class="icon">
                                <img src="assets/abstract/media/icon/icon-9.png" alt="Apple">
                            </div>
                            <div class="count-number h2">
                                <span class="number count" data-count="10">10</span>
                                <span class="symbol">+</span>
                            </div>
                            <h6 class="title">Specialist</h6>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="400">
                        <div class="counterup-progress">
                            <div class="icon">
                                <img src="assets/abstract/media/icon/apple.png" alt="Apple">
                            </div>
                            <div class="count-number h2">
                                <span class="number count" data-count="8">8</span>
                                <span class="symbol">+</span>
                            </div>
                            <h6 class="title">Credentials</h6>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="list-unstyled shape-group-10">
                <!-- <li class="shape shape-1"><img src="assets/abstract/media/others/line-9.png" alt="Circle"></li> -->
                <li class="shape shape-2"><img src="assets/abstract/media/others/bubble-42.png" alt="Circle"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/bubble-43.png" alt="Circle"></li>
            </ul>
        </section>
        <!--=====================================-->
        <!--=        Testimonial Area Start      =-->
        <!--=====================================-->
        <section class="section section-padding">
            <div class="container">
                <div class="section-heading heading-left">
                    <span class="subtitle">Testimonial</span>
                    <h2 class="title">From getting started</h2>
                    <p>Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet.</p>
                </div>
                <div class="row">
                    <div class="col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                        <div class="testimonial-grid active">
                            <span class="social-media"><img src="assets/abstract/media/icon/yelp-2.png" alt="Yelp"></span>
                            <p>“ Donec metus lorem, vulputate
                                at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. ”</p>
                            <div class="author-info">
                                <div class="thumb">
                                    <img src="assets/abstract/media/testimonial/testimonial-1.png" alt="Google Review">
                                </div>
                                <div class="content">
                                    <span class="name">Darrell Steward</span>
                                    <span class="designation">Executive Chairman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
                        <div class="testimonial-grid">
                            <span class="social-media"><img src="assets/abstract/media/icon/google-2.png" alt="google"></span>
                            <p>“ Donec metus lorem, vulputate
                                at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. ”</p>
                            <div class="author-info">
                                <div class="thumb">
                                    <img src="assets/abstract/media/testimonial/testimonial-2.png" alt="Google Review">
                                </div>
                                <div class="content">
                                    <span class="name">Savannah Nguyen</span>
                                    <span class="designation">Executive Chairman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
                        <div class="testimonial-grid">
                            <span class="social-media"><img src="assets/abstract/media/icon/fb-2.png" alt="Facebook"></span>
                            <p>“ Donec metus lorem, vulputate
                                at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. ”</p>
                            <div class="author-info">
                                <div class="thumb">
                                    <img src="assets/abstract/media/testimonial/testimonial-3.png" alt="Google Review">
                                </div>
                                <div class="content">
                                    <span class="name">Floyd Miles</span>
                                    <span class="designation">Executive Chairman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group-4 list-unstyled">
                <li class="shape-1"><img src="assets/abstract/media/others/bubble-1.png" alt="Bubble"></li>
            </ul>
        </section>
        <!--=====================================-->
        <!--=        Pricing Area Start       	=-->
        <!--=====================================-->
        <!-- <section class="section bg-color-light section-padding">
            <div class="container">
                <div class="section-heading mb-0">
                    <span class="subtitle">Pricing Plan</span>
                    <h2 class="title">Find the Right Plan.</h2>
                    <p>Flexible pricing options for freelancers <br> and design teams.</p>
                </div>
                <div class="pricing-billing-duration">
                    <ul>
                        <li class="nav-item">
                            <button class="nav-link" id="yearly-plan-btn" type="button">Billed yearly</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link active" id="monthly-plan-btn" type="button">
                                Billed monthly</button>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col-lg-4" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                        <div class="pricing-table active">
                            <div class="pricing-header">
                                <h3 class="title">Professional</h3>
                                <span class="subtitle">A beautiful, simple website</span>
                                <div class="price-wrap">
                                    <div class="yearly-pricing">
                                        <span class="amount">$119.99</span>
                                        <span class="duration">/yearly</span>
                                    </div>
                                    <div class="monthly-pricing">
                                        <span class="amount">$19.00</span>
                                        <span class="duration">/monthly</span>
                                    </div>
                                </div>
                                <div class="pricing-btn">
                                    <a href="#" class="axil-btn btn-large btn-borderd">Get Started Today</a>
                                </div>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-unstyled">
                                    <li>10 Pages Responsive Website</li>
                                    <li>5 PPC Campaigns</li>
                                    <li>10 SEO Keywords</li>
                                    <li>5 Facebook Camplaigns</li>
                                    <li>2 Video Camplaigns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h3 class="title">Standard</h3>
                                <span class="subtitle">Small Team</span>
                                <div class="price-wrap">
                                    <div class="yearly-pricing">
                                        <span class="amount">$219.99</span>
                                        <span class="duration">/yearly</span>
                                    </div>
                                    <div class="monthly-pricing">
                                        <span class="amount">$29.00</span>
                                        <span class="duration">/monthly</span>
                                    </div>
                                </div>
                                <div class="pricing-btn">
                                    <a href="#" class="axil-btn btn-large btn-borderd">Get Started Today</a>
                                </div>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-unstyled">
                                    <li>50 Pages Responsive Website</li>
                                    <li>Unlimited PPC Campaigns</li>
                                    <li>Unlimited SEO Keywords</li>
                                    <li>Unlimited Facebook Camplaigns</li>
                                    <li>Unlimited Video Camplaigns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h3 class="title">Ultimate</h3>
                                <span class="subtitle">Large Team</span>
                                <div class="price-wrap">
                                    <div class="yearly-pricing">
                                        <span class="amount">$559.99</span>
                                        <span class="duration">/yearly</span>
                                    </div>
                                    <div class="monthly-pricing">
                                        <span class="amount">$59.00</span>
                                        <span class="duration">/monthly</span>
                                    </div>
                                </div>
                                <div class="pricing-btn">
                                    <a href="#" class="axil-btn btn-large btn-borderd">Get Started Today</a>
                                </div>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-unstyled">
                                    <li>10 Pages Responsive Website</li>
                                    <li>5 PPC Campaigns</li>
                                    <li>10 SEO Keywords</li>
                                    <li>5 Facebook Camplaigns</li>
                                    <li>2 Video Camplaigns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group-3 list-unstyled">
                <li class="shape shape-1"><img src="assets/abstract/media/others/line-1.png" alt="shape"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/bubble-4.png" alt="shape"></li>
            </ul>
        </section> -->
        <!--=====================================-->
        <!--=        Brand Area Start       	=-->
        <!--=====================================-->
        <section class="section section-padding bg-color-dark">
            <div class="container">
                <div class="section-heading heading-light-left">
                    <span class="subtitle">Top Clients</span>
                    <h2 class="title">We’ve built solutions for...</h2>
                    <p>Design anything from simple icons to fully featured websites and applications.</p>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500">
                        <div class="brand-grid active">
                            <img src="assets/abstract/media/brand/brand-1.png" alt="Brand">
                        </div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                        <div class="brand-grid">
                            <img src="assets/abstract/media/brand/brand-2.png" alt="Brand">
                        </div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                        <div class="brand-grid">
                            <img src="assets/abstract/media/brand/brand-3.png" alt="Brand">
                        </div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
                        <div class="brand-grid">
                            <img src="assets/abstract/media/brand/brand-4.png" alt="Brand">
                        </div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400">
                        <div class="brand-grid">
                            <img src="assets/abstract/media/brand/brand-5.png" alt="Brand">
                        </div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500">
                        <div class="brand-grid">
                            <img src="assets/abstract/media/brand/brand-6.png" alt="Brand">
                        </div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="600">
                        <div class="brand-grid">
                            <img src="assets/abstract/media/brand/brand-7.png" alt="Brand">
                        </div>
                    </div>
                    <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="700">
                        <div class="brand-grid">
                            <img src="assets/abstract/media/brand/brand-8.png" alt="Brand">
                        </div>
                    </div>
                </div>
            </div>
            <ul class="list-unstyled shape-group-10">
                <li class="shape shape-1"><img src="assets/abstract/media/others/line-9.png" alt="Circle"></li>
            </ul>
        </section>
        <!--=====================================-->
        <!--=        Blog Area Start       	    =-->
        <!--=====================================-->
        <section class="section section-padding-equal">
            <div class="container">
                <div class="section-heading">
                    <span class="subtitle">What's Going On</span>
                    <h2 class="title">Latest stories</h2>
                    <p>News From Abstrak And Around The World Of Web Design And Complete Solution of Online Digital Marketing </p>
                </div>
                <div class="row g-0">
                    <div class="col-xl-6" data-sal="slide-right" data-sal-duration="800" data-sal-delay="100">
                        <div class="blog-list active">
                            <div class="post-thumbnail">
                                <a href="single-blog-2.html"><img src="assets/abstract/media/blog/blog-1.png" alt="Blog Post"></a>
                            </div>
                            <div class="post-content">
                                <h5 class="title"><a href="single-blog-2.html">How To Use a Remarketing Strategy To Get More</a></h5>
                                <p>Demand generation is a constant struggle for any business. Each marketing strategy you employ has...</p>
                                <a href="single-blog-2.html" class="more-btn">Learn more<i class="far fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6" data-sal="slide-left" data-sal-duration="800" data-sal-delay="100">
                        <div class="blog-list border-start">
                            <div class="post-thumbnail">
                                <a href="single-blog-3.html"><img src="assets/abstract/media/blog/blog-2.png" alt="Blog Post"></a>
                            </div>
                            <div class="post-content">
                                <h5 class="title"><a href="single-blog-3.html">SEO Statistics You Should Know in 2021</a></h5>
                                <p>Organic search has the potential to capture more than 40 percent of your gross revenue...</p>
                                <a href="single-blog-3.html" class="more-btn">Learn more<i class="far fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group-1 list-unstyled">
                <li class="shape shape-1"><img src="assets/abstract/media/others/bubble-1.png" alt="bubble"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/line-1.png" alt="bubble"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/line-2.png" alt="bubble"></li>
                <li class="shape shape-4"><img src="assets/abstract/media/others/bubble-2.png" alt="bubble"></li>
            </ul>
        </section>
        <!--=====================================-->
        <!--=     Call To Action Area Start     =-->
        <!--=====================================-->
        <section class="section call-to-action-area">
            <div class="container">
                <div class="call-to-action">
                    <div class="section-heading heading-light">
                        <span class="subtitle">Let's Work Together</span>
                        <h2 class="title">Need a successful project?</h2>
                        <a href="contact.html" class="axil-btn btn-large btn-fill-white">Estimate Project</a>
                    </div>
                    <div class="thumbnail">
                        <div class="larg-thumb" data-sal="zoom-in" data-sal-duration="600" data-sal-delay="100">
                            <img class="paralax-image" src="assets/abstract/media/others/chat-group.png" alt="Chat">
                        </div>
                        <ul class="list-unstyled small-thumb">
                            <li class="shape shape-1" data-sal="slide-right" data-sal-duration="800" data-sal-delay="400">
                                <img class="paralax-image" src="assets/abstract/media/others/laptop-poses.png" alt="Laptop">
                            </li>
                            <li class="shape shape-2" data-sal="slide-left" data-sal-duration="800" data-sal-delay="300">
                                <img class="paralax-image" src="assets/abstract/media/others/bill-pay.png" alt="Bill">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="list-unstyled shape-group-9">
                <li class="shape shape-1"><img src="assets/abstract/media/others/bubble-12.2.png" alt="Comments"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/bubble-16.png" alt="Comments"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/bubble-13.2.png" alt="Comments"></li>
                <li class="shape shape-4"><img src="assets/abstract/media/others/bubble-14.png" alt="Comments"></li>
                <li class="shape shape-5"><img src="assets/abstract/media/others/bubble-16.png" alt="Comments"></li>
                <li class="shape shape-6"><img src="assets/abstract/media/others/bubble-15.2.png" alt="Comments"></li>
                <li class="shape shape-7"><img src="assets/abstract/media/others/bubble-16.png" alt="Comments"></li>
            </ul>
        </section>



        <!-- <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
            <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                <Link v-if="$page.props.user" :href="route('dashboard')" class="text-sm text-gray-700 dark:text-gray-500 underline">Dashboard</Link>

                <template v-else>
                    <Link :href="route('login')" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</Link>

                    <Link v-if="canRegister" :href="route('register')" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</Link>
                </template>
            </div>

            <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
                    <svg
                        viewBox="0 0 651 192"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-16 w-auto text-gray-700 sm:h-20"
                    >
                        <g clip-path="url(#clip0)" fill="#EF3B2D">
                            <path d="M248.032 44.676h-16.466v100.23h47.394v-14.748h-30.928V44.676zM337.091 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.431 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162-.001 2.863-.479 5.584-1.432 8.161zM463.954 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.432 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162 0 2.863-.479 5.584-1.432 8.161zM650.772 44.676h-15.606v100.23h15.606V44.676zM365.013 144.906h15.607V93.538h26.776V78.182h-42.383v66.724zM542.133 78.182l-19.616 51.096-19.616-51.096h-15.808l25.617 66.724h19.614l25.617-66.724h-15.808zM591.98 76.466c-19.112 0-34.239 15.706-34.239 35.079 0 21.416 14.641 35.079 36.239 35.079 12.088 0 19.806-4.622 29.234-14.688l-10.544-8.158c-.006.008-7.958 10.449-19.832 10.449-13.802 0-19.612-11.127-19.612-16.884h51.777c2.72-22.043-11.772-40.877-33.023-40.877zm-18.713 29.28c.12-1.284 1.917-16.884 18.589-16.884 16.671 0 18.697 15.598 18.813 16.884h-37.402zM184.068 43.892c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002-35.648-20.524a2.971 2.971 0 00-2.964 0l-35.647 20.522-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v38.979l-29.706 17.103V24.493a3 3 0 00-.103-.776c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002L40.098 1.396a2.971 2.971 0 00-2.964 0L1.487 21.919l-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v122.09c0 1.063.568 2.044 1.489 2.575l71.293 41.045c.156.089.324.143.49.202.078.028.15.074.23.095a2.98 2.98 0 001.524 0c.069-.018.132-.059.2-.083.176-.061.354-.119.519-.214l71.293-41.045a2.971 2.971 0 001.489-2.575v-38.979l34.158-19.666a2.971 2.971 0 001.489-2.575V44.666a3.075 3.075 0 00-.106-.774zM74.255 143.167l-29.648-16.779 31.136-17.926.001-.001 34.164-19.669 29.674 17.084-21.772 12.428-43.555 24.863zm68.329-76.259v33.841l-12.475-7.182-17.231-9.92V49.806l12.475 7.182 17.231 9.92zm2.97-39.335l29.693 17.095-29.693 17.095-29.693-17.095 29.693-17.095zM54.06 114.089l-12.475 7.182V46.733l17.231-9.92 12.475-7.182v74.537l-17.231 9.921zM38.614 7.398l29.693 17.095-29.693 17.095L8.921 24.493 38.614 7.398zM5.938 29.632l12.475 7.182 17.231 9.92v79.676l.001.005-.001.006c0 .114.032.221.045.333.017.146.021.294.059.434l.002.007c.032.117.094.222.14.334.051.124.088.255.156.371a.036.036 0 00.004.009c.061.105.149.191.222.288.081.105.149.22.244.314l.008.01c.084.083.19.142.284.215.106.083.202.178.32.247l.013.005.011.008 34.139 19.321v34.175L5.939 144.867V29.632h-.001zm136.646 115.235l-65.352 37.625V148.31l48.399-27.628 16.953-9.677v33.862zm35.646-61.22l-29.706 17.102V66.908l17.231-9.92 12.475-7.182v33.841z" />
                        </g>
                    </svg>
                </div>

                <div class="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div class="p-6">
                            <div class="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    class="w-8 h-8 text-gray-500"
                                ><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                <div class="ml-4 text-lg leading-7 font-semibold">
                                    <a href="https://laravel.com/docs" class="underline text-gray-900 dark:text-white">Documentation</a>
                                </div>
                            </div>

                            <div class="ml-12">
                                <div class="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    Laravel has wonderful, thorough documentation covering every aspect of the framework. Whether you are new to the framework or have previous experience with Laravel, we recommend reading all of the documentation from beginning to end.
                                </div>
                            </div>
                        </div>

                        <div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                            <div class="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    class="w-8 h-8 text-gray-500"
                                ><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <div class="ml-4 text-lg leading-7 font-semibold">
                                    <a href="https://laracasts.com" class="underline text-gray-900 dark:text-white">Laracasts</a>
                                </div>
                            </div>

                            <div class="ml-12">
                                <div class="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process.
                                </div>
                            </div>
                        </div>

                        <div class="p-6 border-t border-gray-200 dark:border-gray-700">
                            <div class="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    class="w-8 h-8 text-gray-500"
                                ><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                                <div class="ml-4 text-lg leading-7 font-semibold">
                                    <a href="https://laravel-news.com/" class="underline text-gray-900 dark:text-white">Laravel News</a>
                                </div>
                            </div>

                            <div class="ml-12">
                                <div class="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials.
                                </div>
                            </div>
                        </div>

                        <div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
                            <div class="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    class="w-8 h-8 text-gray-500"
                                ><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <div class="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                                    Vibrant Ecosystem
                                </div>
                            </div>

                            <div class="ml-12">
                                <div class="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    Laravel's robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="underline">Forge</a>, <a href="https://vapor.laravel.com" class="underline">Vapor</a>, <a href="https://nova.laravel.com" class="underline">Nova</a>, and <a href="https://envoyer.io" class="underline">Envoyer</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="underline">Cashier</a>, <a href="https://laravel.com/docs/dusk" class="underline">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="underline">Echo</a>, <a href="https://laravel.com/docs/horizon" class="underline">Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="underline">Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="underline">Telescope</a>, and more.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-4 sm:items-center sm:justify-between">
                    <div class="text-center text-sm text-gray-500 sm:text-left">
                        <div class="flex items-center">
                            <svg
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="-mt-px w-5 h-5 text-gray-400"
                            >
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>

                            <a href="https://laravel.bigcartel.com" class="ml-1 underline">
                                Shop
                            </a>

                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                class="ml-4 -mt-px w-5 h-5 text-gray-400"
                            >
                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>

                            <a href="https://github.com/sponsors/taylorotwell" class="ml-1 underline">
                                Sponsor
                            </a>
                        </div>
                    </div>

                    <div class="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                        Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
                    </div>
                </div>
            </div>
        </div> -->

    </AbsractLayout>
 
</template>
