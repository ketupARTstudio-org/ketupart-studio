<script setup>
import AbsractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});
</script>

<template>
    <Head title="Mobile Development" />

    <AbsractLayout>

        <!--=====================================-->
        <!--=       Breadcrumb Area Start       =-->
        <!--=====================================-->
        <div class="breadcrum-area breadcrumb-banner" style="background-image: url('assets/abstract/media/banner/banner3.webp');background-size: cover;">
            <div class="container">
                <div class="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
                    <h1 class="title h2">Mobile Development</h1>
                    <p>Give your business a unique logo to stand out from crowd. We’ll create logo specifically for your company.</p>
                </div>
            </div>
            <!-- <ul class="shape-group-8 list-unstyled">
                <li class="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100">
                    <img src="assets/abstract/media/others/bubble-9.png" alt="Bubble">
                </li>
                <li class="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
                    <img src="assets/abstract/media/others/bubble-21.png" alt="Bubble">
                </li>
                <li class="shape shape-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
                    <img src="assets/abstract/media/others/line-4.png" alt="Line">
                </li>
            </ul> -->
        </div>
        <!--=====================================-->
        <!--=        Service Area Start         =-->
        <!--=====================================-->
        <div class="service-scroll-navigation-area">
            <!-- Service Nav -->
            <nav id="onepagenav" class="service-scroll-nav navbar onepagefixed">
                <div class="container">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" href="#section1">Overview</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#section2">Our Capabilities</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#section3">Cross Platforms</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#section4">Technology Stack</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#section5">Ecosystem</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- Design Service -->
            <div class="section section-padding" id="section1">
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <div class="section-heading heading-left mb-3">
                                <h2 class="title">Overview</h2>
                                <span class="subtitle">Crafting Virtual Worlds, Unleash Your Imagination</span>
                            </div>
                            <p>Our company specializes in mobile development services, crafting high-quality applications for various platforms.We create user-centric mobile applications that prioritize seamless functionality, intuitive design, and optimal performance.</p> 

                            <p>Our expert mobile development team leverages the latest technologies and industry best practices to deliver exceptional results. From concept to deployment, we work closely with clients to understand their unique needs and ensure the mobile app exceeds their expectations.</p> 

                            <p>With our mobile development services, we help businesses reach and captivate their target audiences in the ever-expanding mobile landscape.</p>  
                        </div>
                        <div class="col-6">
                            <div class="team-details-thumb">
                                <img class="paralax-image" src="assets/abstract/media/banner/mobiledev.gif" alt="Thumbnail" style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg);">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Development Service -->
            <div class="section section-padding bg-color-light" id="section2">
                <div class="container">
                    <div class="section-heading heading-left mb--20 mb_md--70">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Our Capabilitites</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-design.html">Strategize</a></h5>
                                    <p class="mb-0">Your team strategizes by understanding client objectives, market trends, and user needs to formulate a clear roadmap for mobile app development. This involves defining project goals, target audience, and key performance indicators (KPIs) to ensure alignment with business objectives.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-development.html">Planning</a></h5>
                                    <p class="mb-0">Through meticulous planning, your team outlines the project scope, timeline, resource allocation, and budgeting requirements. This phase involves creating detailed project plans, defining milestones, and establishing communication channels to keep stakeholders informed throughout the development lifecycle.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-content-strategy.html">Design</a></h5>
                                    <p class="mb-0">Your design expertise shines as you create captivating and user-centric mobile app designs. This includes UI/UX design, prototyping, wireframing, and visual design elements that enhance user experience, usability, and brand identity, ensuring that the app resonates with the target audience.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 " data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-content-strategy.html">App Development</a></h5>
                                    <p class="mb-0">Leveraging your development capabilities, your team transforms design concepts into functional mobile applications. This involves frontend and backend development, coding, integration of features, APIs, and third-party services, ensuring scalability, performance, and functionality across platforms.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 " data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-content-strategy.html">Testing</a></h5>
                                    <p class="mb-0">Your thorough testing processes ensure app quality, functionality, and performance. This includes unit testing, integration testing, user acceptance testing (UAT), and quality assurance (QA) testing to identify and resolve bugs, glitches, and compatibility issues, ensuring a seamless user experience.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 " data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-content-strategy.html">Deployment</a></h5>
                                    <p class="mb-0">Finally, your deployment expertise ensures a smooth launch and deployment of mobile apps. This involves app configuration, deployment to app stores (e.g., Apple App Store, Google Play Store), version management, and post-launch support, ensuring that the app reaches its intended audience and performs optimally in the market.</p>
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
            </div>
            <!-- Online Marketing Service -->
            <div class="section section-padding" id="section3">
                <div class="container">
                    <div class="section-heading">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Cross Platforms</h2>
                        <p class="w-100">"We specialize in diverse mobile development approaches to meet your unique needs. Our cross-platform development expertise ensures that your app functions seamlessly across iOS and Android devices, maximizing accessibility for your user base. With hybrid-web applications, we blend the power of web technologies with native components, delivering feature-rich apps that are easy to maintain and update. Additionally, our proficiency in Progressive Web Applications (PWAs) brings you web-based apps with native app-like experiences, including offline functionality and push notifications, all accessible without the need for app store downloads. These three approaches offer versatility, cost-effectiveness, and broad compatibility, ensuring that your mobile presence is robust, engaging, and accessible to a wide audience."</p>
                    </div>
                </div>
            </div>
            <!-- Business Service -->
            <div class="section section-padding bg-color-light" id="section4">
                <div class="container">
                    <div class="section-heading heading-left">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Technology Stack</h2>
                        <p class="w-100">"Building mobile apps encompasses essential components such as frontend frameworks and UI Library. This ecosystem prioritizes efficiency, scalability, and reliability, ensuring seamless system development and operation."</p>
                    </div>
                    <div class="d-flex flex-wrap justify-content-center">
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/flutter.png" alt="Brand" class="p-5" style="width:400px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/vue.png" alt="Brand" class="p-5" style="width:400px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/angular.png" alt="Brand" class="p-5" style="width:400px">
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <strong>Our Development Stack</strong>
                    </div>
                </div>
            </div>
            <!-- Technology Service -->
            <div class="section section-padding" id="section5">
                <div class="container">
                    <div class="section-heading">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Ecosystem</h2>
                        <p class="w-100">All apps will be ready to be deploy at play store and app store.</p>
                    </div>
                    <div class="d-flex flex-wrap justify-content-center">
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/playstore.png" alt="Brand" class="p-5" style="width:500px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/appstore.png" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

   

        <!--=====================================-->
        <!--=     Call To Action Area Start     =-->
        <!--=====================================-->
        <section class="section py-5 bg-color-dark">
            <div class="container">
                <div class="">
                    <div class="section-heading heading-light">
                        <span class="subtitle">Let's Work Together</span>
                        <h2 class="title">Need a successful project?</h2>
                        <Link href="/contact" class="axil-btn btn-fill-primary btn-large">Kick Start Project</Link>
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