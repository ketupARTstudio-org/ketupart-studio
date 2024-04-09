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
    <Head title="Home" />

    <AbsractLayout>


        <!--=====================================-->
        <!--=        Banner Area Start         =-->
        <!--=====================================-->
        <section class="banner banner-style-4">
            <div class="container">
                <div class="banner-content">
                    <h1 class="title" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">Providing Solution for Goverment, Enterprise & SMEs</h1>
                    <p data-sal="slide-up" data-sal-duration="1000">We provide a bunch of technology services, with latest technology and security frameworks to regulate your business and being on track with global standards with the vision in Empowering Industries, SMEs, and Education through cutting-edge technology solutions that unleash productivity, efficiency, and innovation for a brighter future.</p>
                    <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
                        <a href="#section-2" class="axil-btn btn-fill-primary btn-large">View Services</a>
                    </div>
                </div>
                <div class="banner-thumbnail">
                    <div class="large-thumb text-end" data-sal="slide-left" data-sal-duration="800" data-sal-delay="400">
                        <img class="paralax-image w-100 w-lg-50 me-20 me-lg-0" src="assets/abstract/media/banner/technology.png" alt="Shape">
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
                <div class="section-heading ">
                    <span class="subtitle">What We Can Do For You</span>
                    <h2 class="title">Services we can help you with</h2>
                    <p class="opacity-50 w-50">"The software development process is a journey of continuous improvement, where imagination meets reality through the power of code and collaboration, creating innovative solutions that shape the world we live in."</p>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                        <div class="services-grid active p-20" style="padding: 20px;">
                         
                            <div class="content">
                                <img src="assets/abstract/media/icon/icon-36.png" alt="icon">
                                <h5 class="title"> <Link href="/consultancy">Digital Consultancy</Link></h5>
                                <p>Transform your online presence with our expert web development services, delivering stunning, user-friendly and scalable websites that captivate your audience, boost your brand and drive business growth.</p>
                                <Link href="/consultancy" class="more-btn">Find out more</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                        <div class="services-grid" style="padding: 20px;">
                            <div class="content">
                                <img src="assets/abstract/media/icon/icon-41.png" alt="icon">
                                <h5 class="title"> <Link href="/immersive">Immersive Technology</Link></h5>
                                <p>Transform your ideas into reality with our exceptional mobile development services, delivering intuitive, user-friendly, and innovative apps for iOS and Android platforms.</p>
                                <Link href="/immersive" class="more-btn">Find out more</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                        <div class="services-grid" style="padding: 20px;">
                            <div class="content">
                                <img src="assets/abstract/media/icon/icon-6.png" alt="icon">
                                <h5 class="title"> <Link href="/blockchain">Blockchain Technology</Link></h5>
                                <p>Blend the digital and physical worlds like never before with our innovative augmented reality solutions, creating immersive and interactive experiences that engage, educate, and entertain your audience like never before.</p>
                                <Link href="/blockchain" class="more-btn">Find out more</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                        <div class="services-grid" style="padding: 20px;">
                            <div class="content">
                                <img src="assets/abstract/media/icon/icon-41.png" alt="icon">
                                <h5 class="title"> <Link href="/cloudcomputing">Cloud Computing</Link></h5>
                                <p>Step into a new reality with our cutting-edge virtual reality services, delivering mind-blowing experiences that transport users to new and fantastical worlds, driving engagement and delivering results beyond your wildest dreams.</p>
                                <Link href="/cloudcomputing" class="more-btn">Find out more</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                        <div class="services-grid" style="padding: 20px;">
                            <div class="content">
                                <img src="assets/abstract/media/icon/icon-38.png" alt="icon">
                                <h5 class="title"> <Link href="/microservice">Microservices & API</Link></h5>
                                <p>Unleash the full potential of your business with our cutting-edge microservices and API development solutions, providing seamless integration, scalability, and agility to drive digital transformation.</p>
                                <Link href="/microservice" class="more-btn">Find out more</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                        <div class="services-grid" style="padding: 20px;">
                            <div class="content">
                                <img src="assets/abstract/media/icon/icon-39.png" alt="icon">
                                <h5 class="title"> <Link href="/gamedevelopment">Game Development</Link></h5>
                                <p>Enter the world of endless entertainment with our expert game development services, crafting immersive and engaging games for mobile, PC, and console platforms with stunning graphics and captivating gameplay.</p>
                                <Link href="/gamedevelopment" class="more-btn">Find out more</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                        <div class="services-grid" style="padding: 20px;">
                         
                            <div class="content">
                                <img src="assets/abstract/media/icon/icon-36.png" alt="icon">
                                <h5 class="title"> <Link href="/webdevelopment">Web Development</Link></h5>
                                <p>Transform your online presence with our expert web development services, delivering stunning, user-friendly and scalable websites that captivate your audience, boost your brand and drive business growth.</p>
                                <Link href="/webdevelopment" class="more-btn">Find out more</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                        <div class="services-grid" style="padding: 20px;">
                            <div class="content">
                                <img src="assets/abstract/media/icon/icon-28.png" alt="icon">
                                <h5 class="title"> <Link href="/mobiledevelopment">Mobile Development</Link></h5>
                                <p>Transform your ideas into reality with our exceptional mobile development services, delivering intuitive, user-friendly, and innovative apps for iOS and Android platforms.</p>
                                <Link href="/mobiledevelopment" class="more-btn">Find out more</Link>
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
        <!--=        About Area Start         =-->
        <!--=====================================-->
        <section class="section section-padding-equal bg-color-light">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12" data-sal="slide-up" data-sal-duration="800">
                        <div class="about-us">
                            <div class="section-heading heading-left mb-0">
                                <span class="subtitle">Our Core Work</span>
                                <h2 class="title mb--40">We do design, code, develop, test & maintenance.</h2>
                                <p>We delivering user-friendly and aesthetically pleasing products that meet your business goals and exceed your expectations, every step of the way. Our team of experts combines creativity and technical expertise to bring your ideas to life, delivering solutions that are both functional and visually appealing.</p>
                                <p>At every stage of the development process, we work closely with you to ensure that your needs and requirements are met, and that the final product meets your expectations. Whether you need a simple system or a complex system, our team is equipped with the skills and experience to deliver the best results. Our focus on quality and attention to detail ensures that the end product is not only functional but also secure, scalable, and user-friendly.</p>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-xl-5 col-lg-6 offset-xl-1" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
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
                    </div> -->
                </div>
            </div>
            <ul class="shape-group-6 list-unstyled">
                <li class="shape shape-1"><img src="assets/abstract/media/others/bubble-7.png" alt="Bubble"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/line-4.png" alt="line"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/line-5.png" alt="line"></li>
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
                            <div class="h2">
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
                            <div class="h2">
                                <span class="number count" data-count="4">4</span>
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
                            <div class="h2">
                                <span class="number count" data-count="5">5</span>
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
                            <div class="h2">
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
        <!--=     Call To Action Area Start     =-->
        <!--=====================================-->
        <section class="section py-5 bg-color-dark">
            <div class="container">
                <div class="">
                    <div class="section-heading heading-light">
                        <span class="subtitle">Let's Work Together</span>
                        <h2 class="title">Need a successful project?</h2>
                        <Link href="/contact" class="axil-btn btn-fill-primary btn-large">Estimate Project</Link>
                    </div>
                </div>
            </div>
            <ul class="list-unstyled shape-group-9">
                <li class="shape shape-2"><img src="assets/abstract/media/others/bubble-16.png" alt="Comments"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/bubble-13.2.png" alt="Comments"></li>
                <li class="shape shape-4"><img src="assets/abstract/media/others/bubble-14.png" alt="Comments"></li>
                <li class="shape shape-5"><img src="assets/abstract/media/others/bubble-16.png" alt="Comments"></li>
                <li class="shape shape-6"><img src="assets/abstract/media/others/bubble-15.2.png" alt="Comments"></li>
                <li class="shape shape-7"><img src="assets/abstract/media/others/bubble-16.png" alt="Comments"></li>
            </ul>
        </section>
        

    </AbsractLayout>
 
</template>
