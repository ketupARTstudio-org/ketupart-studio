<script setup>
import AbstractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});
</script>

<template>
    <Head title="Cloud Computing" />

    <AbstractLayout>

        <!--=====================================-->
        <!--=       Breadcrumb Area Start       =-->
        <!--=====================================-->
        <div class="breadcrum-area breadcrumb-banner" style="background-image: url('assets/abstract/media/banner/banner4.webp');background-size: cover;">
            <div class="container">
                <div class="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
                    <h1 class="title h2">Cloud Computing</h1>
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
                            <a class="nav-link" href="#section3">Cloud Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#section4">Cloud Transformation</a>
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
                                <span class="subtitle">Elevate Your Business with Cloud Computing Excellence</span>
                            </div>
                            <p>With a focus on delivering comprehensive cloud computing solutions designed to empower businesses with agility, scalability, and efficiency. Our cloud services encompass a wide range of offerings, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). From cloud infrastructure deployment and management to cloud-based application development and deployment, we tailor our services to meet the unique needs of each client. Our expertise in cloud technologies such as AWS, Azure, and Google Cloud ensures seamless migration, robust security, and optimized performance for your applications and data. Whether you're looking to optimize costs, improve flexibility, or enhance collaboration, our cloud solutions empower you to innovate and grow in the digital landscape.</p>
                        </div>
                        <div class="col-6">
                            <div class="team-details-thumb">
                                <img class="paralax-image" src="assets/abstract/media/banner/cloud5.gif" alt="Thumbnail" style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg);">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Development Service -->
            <div class="section section-padding bg-color-light" id="section2">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-heading">
                             
                                <h2 class="title">Our Capabilities</h2>
                                <span class="subtitle">Among our most significant capabilities:</span>
                        
                            </div>
                        </div>
                    </div>
                    <div class="axil-isotope-wrapper">
                        <div class="isotope-button isotope-project-btn">
                            <button data-filter=".strategy" class="is-checked"><span class="filter-text">Cloud Strategy & Consulting</span></button>
                            <button data-filter=".data"><span class="filter-text">Data & AI on Cloud</span></button>
                            <button data-filter=".modern"><span class="filter-text">Application Modernization</span></button>
                            <button data-filter=".managed"><span class="filter-text">Managed Cloud Services</span></button>
                            <button data-filter=".connected"><span class="filter-text">Connected Cloud</span></button>
                        </div>
                        <div class="row row-35 isotope-list">
                            <div class="col-md-6 project strategy">
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
                            <div class="col-md-6 project data">
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
                            <div class="col-md-6 project modern">
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
                            <div class="col-md-6 project managed">
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
                            <div class="col-md-6 project connected">
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
                            <div class="col-md-6 project managed">
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
                    <div class="row">
                        <div class="col-12">
                            <p class="text-center opacity-50">"Whether you're embarking on a digital transformation journey, seeking to enhance customer experiences, or looking to leverage data for strategic insights, KetupArt Studio is your trusted partner in digital consultancy. Contact us today to explore how we can unlock new opportunities and drive your business forward in the digital era."</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Online Marketing Service -->
            <div class="section section-padding" id="section3">
                <div class="container">
                    <div class="section-heading heading-left">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Cloud Services</h2>
                    </div>
                </div>
            </div>
            <!-- Business Service -->
            <div class="section section-padding bg-color-light" id="section4">
                <div class="container">
                    <div class="section-heading heading-left">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Cloud Transformation</h2>
                    </div>
                </div>
            </div>
            <!-- Technology Service -->
            <div class="section section-padding" id="section5">
                <div class="container">
                    <div class="section-heading heading-left">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Ecosystem</h2>
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
    </AbstractLayout>

</template>