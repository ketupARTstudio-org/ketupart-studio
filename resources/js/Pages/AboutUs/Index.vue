<script setup>
import AbsractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});
</script>

<template>
    <Head title="About Us" />

    <AbsractLayout>
         <!--=====================================-->
        <!--=       Breadcrumb Area Start       =-->
        <!--=====================================-->
        <div class="breadcrum-area breadcrumb-banner">
            <div class="container">
                <div class="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
                    <h1 class="title h2">One of the fastest growing agency</h1>
                    <p>KetupArtStudio start the journey in 2022 and begin to provide robust solution to many client. At KetupArtStudio, we specialize in creating innovative and customized digital experiences that empower businesses to thrive in the digital landscape. With a team of skilled professionals and a passion for pushing boundaries, we deliver exceptional results that exceed client expectations.</p>
                </div>
                <div class="banner-thumbnail thumbnail-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
                    <img src="assets/abstract/media/banner/banner-thumb-3.png" alt="Illustration">
                </div>
            </div>
            <ul class="shape-group-8 list-unstyled">
                <li class="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100">
                    <img src="assets/abstract/media/others/bubble-9.png" alt="Bubble">
                </li>
                <li class="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
                    <img src="assets/abstract/media/others/bubble-22.png" alt="Bubble">
                </li>
                <li class="shape shape-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
                    <img src="assets/abstract/media/others/line-4.png" alt="Line">
                </li>
            </ul>
        </div>
        <!--=====================================-->
        <!--=       About  Area Start        =-->
        <!--=====================================-->
        <section class="section section-padding case-study-featured-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-7 col-lg-6">
                        <div class="case-study-featured-thumb text-start">
                            <img src="assets/abstract/media/others/case-study-4.png" alt="travel">
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-6">
                        <div class="case-study-featured">
                            <div class="section-heading heading-left">
                                <span class="subtitle">Who we are</span>
                                <h2 class="title">Building software for world changers</h2>
                                <p>We build dynamic, responsive websites using the latest technologies and best practices. Our expertise in microservices and APIs enables seamless integration and scalability.</p>
                                <p>Our mobile app developers create user-centric applications with seamless functionality and intuitive design across platforms.</p>
                                <p>Experience immersive engagement with augmented and virtual reality. We deliver memorable experiences by leveraging AR/VR technology.</p>
                                <p>Collaboration is at the core of our approach. We provide tailored solutions that drive business growth and elevate brand experiences.</p>
                                <p>Discover how our web development, microservices, mobile development, and AR/VR solutions can transform your business. Start your digital journey with us today.</p>
                                <!-- <a href="#" class="axil-btn btn-fill-primary btn-large">Read More</a> -->
                            </div>
                            <div class="case-study-counterup">
                                <div class="single-counterup">
                                    <h2 class="count-number">
                                        <span class="number count" data-count="10">2</span>
                                        <span class="symbol">+</span>
                                    </h2>
                                    <span class="counter-title">Years on the market</span>
                                </div>
                                <div class="single-counterup">
                                    <h2 class="count-number">
                                        <span class="number count" data-count="1500">3</span>
                                        <span class="symbol">+</span>
                                    </h2>
                                    <span class="counter-title">Projects delivered so far</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=====================================-->
        <!--=      About  Quality Area Start    =-->
        <!--=====================================-->
        <section class="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div class="container">
                <div class="section-heading heading-light-left mb--100">
                    <span class="subtitle">Our Values</span>
                    <h2 class="title">Why should you work with us?</h2>
                    <p class="opacity-50">Working with us means collaborating with a team that is dedicated to your success. We prioritize communication, transparency, and delivering results that exceed expectations. With our expertise, personalized approach, and commitment to innovation, we are confident that we can provide the solutions you need to thrive in the digital landscape.</p>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="about-quality active">
                            <h3 class="sl-number">1</h3>
                            <h5 class="title">Expertise and Innovation</h5>
                            <p>When you choose to work with us, you gain access to a team of highly skilled professionals who are at the forefront of their fields. We bring years of experience and a deep understanding of web development, microservices and APIs, mobile development, and augmented and virtual reality. Our commitment to staying ahead of the curve ensures that we deliver innovative and cutting-edge solutions that drive your business forward.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-quality">
                            <h3 class="sl-number">2</h3>
                            <h5 class="title">Customized Solutions</h5>
                            <p>We believe in the power of tailored solutions. We take the time to understand your unique requirements, goals, and challenges. By doing so, we can create customized strategies and applications that precisely align with your business objectives. Our ability to adapt and personalize our services ensures that you receive the best possible outcomes for your specific needs.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-quality">
                            <h3 class="sl-number">3</h3>
                            <h5 class="title">Seamless Integration and Scalability</h5>
                            <p>Our expertise in microservices and APIs allows us to develop applications that seamlessly integrate with your existing systems. This promotes flexibility, scalability, and ease of future expansion. By leveraging microservices architecture, we can break down complex projects into smaller, independent components, making them easier to maintain, update, and scale as your business grows.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-quality">
                            <h3 class="sl-number">4</h3>
                            <h5 class="title">Mobile-First Approach</h5>
                            <p>In today's mobile-driven world, having a strong mobile presence is essential. We specialize in mobile development, crafting intuitive and user-friendly applications across various platforms. Our mobile-first approach ensures that your app is optimized for performance, usability, and seamless integration with other digital assets. By harnessing the power of mobile technology, we help you reach and engage with your target audience effectively.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-quality">
                            <h3 class="sl-number">5</h3>
                            <h5 class="title">Immersive Experiences</h5>
                            <p>Augmented and virtual reality (AR/VR) technology opens up a world of possibilities for businesses. By partnering with us, you gain access to our expertise in creating immersive AR/VR experiences. Whether it's designing virtual reality simulations, integrating augmented reality elements into real-world environments, or developing interactive experiences, we help you captivate your audience and leave a lasting impression.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="list-unstyled shape-group-10">
                <li class="shape shape-1"><img src="assets/abstract/media/others/circle-1.png" alt="Circle"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/line-3.png" alt="Circle"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/bubble-5.png" alt="Circle"></li>
            </ul>
        </section>
        <!--=====================================-->
        <!--=       About Team  Area Start      =-->
        <!--=====================================-->
        <section class="section-padding-equal">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7" data-sal="slide-right" data-sal-duration="800" data-sal-delay="100">
                        <div class="about-team">
                            <div class="thumbnail">
                                <img src="assets/abstract/media/about/about-2.png" alt="thumbnail">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5" data-sal="slide-left" data-sal-duration="800" data-sal-delay="100">
                        <div class="about-team">
                            <div class="section-heading heading-left">
                                <span class="subtitle">Our Team</span>
                                <h2>Alone we can do so little; together we can do so much.</h2>
                                <p>"Our team believes that alone, we can do so little, but together, we can achieve so much."</p>
                                <a href="team.html" class="axil-btn btn-large btn-fill-primary">Our Team</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=====================================-->
        <!--=       Work Process Area Start     =-->
        <!--=====================================-->
        <section class="section section-padding bg-color-light pb--70">
            <div class="container">
                <div class="section-heading mb--90">
                    <span class="subtitle">Process</span>
                    <h2 class="title">Our System Design Process</h2>
                    <p>Our comprehensive system design strategy ensures a perfectly crafted system for your business.</p>
                </div>
                <div class="process-work" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-1.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step One</span>
                        <h3 class="title">Requirements Elicitation</h3>
                        <p>This stage involves gathering and documenting the specific needs, goals, and functionalities of the system. It includes conducting interviews, workshops, and surveys with stakeholders to ensure a clear understanding of their requirements.</p>
                    </div>
                </div>
                <div class="process-work content-reverse" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-2.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step Two</span>
                        <h3 class="title">System Design</h3>
                        <p>In this phase, the requirements are transformed into a detailed system design. The architecture, modules, database structure, user interface, and other technical aspects are planned and documented. This stage acts as a blueprint for the development process.</p>
                    </div>
                </div>
                <div class="process-work" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-3.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step Three</span>
                        <h3 class="title">Development</h3>
                        <p>The development phase involves writing the code, implementing the system design, and building the required functionalities. Programmers and developers work together to create the software or application according to the defined requirements and design specifications.</p>
                    </div>
                </div>
                <div class="process-work content-reverse" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-4.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step four</span>
                        <h3 class="title">Testing</h3>
                        <p>Once the development is complete, thorough testing is conducted to identify and fix any defects or issues. Different testing techniques, such as unit testing, integration testing, and system testing, are employed to ensure that the system functions correctly and meets the specified requirements.</p>
                    </div>
                </div>
                <div class="process-work" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-3.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step Five</span>
                        <h3 class="title">Deployment</h3>
                        <p> After successful testing, the system is deployed to the production environment. This may involve setting up servers, databases, and other necessary infrastructure components. The deployment process ensures that the system is accessible and available to the end-users.</p>
                    </div>
                </div>
                <div class="process-work content-reverse" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-4.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step Six</span>
                        <h3 class="title">User Acceptance Testing</h3>
                        <p>During this stage, the system is tested by end-users to ensure it meets their expectations and fulfills the original requirements. Feedback is gathered, and any necessary adjustments or enhancements are made based on the users' input.</p>
                    </div>
                </div>
                <div class="process-work" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-3.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step Seven</span>
                        <h3 class="title">System Delivery</h3>
                        <p> Once the system has passed user acceptance testing and all necessary modifications have been made, it is ready for final delivery. This involves providing the client with the fully functional system, along with any relevant documentation and user manuals.</p>
                    </div>
                </div>
            </div>
            <ul class="shape-group-17 list-unstyled">
                <li class="shape shape-1"><img src="assets/abstract/media/others/bubble-24.png" alt="Bubble"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/bubble-23.png" alt="Bubble"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/line-4.png" alt="Line"></li>
                <li class="shape shape-4"><img src="assets/abstract/media/others/line-5.png" alt="Line"></li>
                <li class="shape shape-5"><img src="assets/abstract/media/others/line-4.png" alt="Line"></li>
                <li class="shape shape-6"><img src="assets/abstract/media/others/line-5.png" alt="Line"></li>
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
                <li class="shape shape-1"><img src="assets/abstract/media/others/bubble-12.png" alt="Comments"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/bubble-16.png" alt="Comments"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/bubble-13.png" alt="Comments"></li>
                <li class="shape shape-4"><img src="assets/abstract/media/others/bubble-14.png" alt="Comments"></li>
                <li class="shape shape-5"><img src="assets/abstract/media/others/bubble-16.png" alt="Comments"></li>
                <li class="shape shape-6"><img src="assets/abstract/media/others/bubble-15.png" alt="Comments"></li>
                <li class="shape shape-7"><img src="assets/abstract/media/others/bubble-16.png" alt="Comments"></li>
            </ul>
        </section>
    </AbsractLayout>

</template>