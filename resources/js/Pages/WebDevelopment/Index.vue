<script setup>
import AbsractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});
</script>

<template>
    <Head title="Web Development" />

    <AbsractLayout>
        
        <!--=====================================-->
        <!--=       Breadcrumb Area Start       =-->
        <!--=====================================-->
        <div class="breadcrum-area breadcrumb-banner" style="background-image: url('assets/abstract/media/banner/banner2.webp');background-size: cover;">
            <div class="container">
                <div class="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
                    <h1 class="title h2">Web Development</h1>
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
                            <a class="nav-link" href="#section3">System Type</a>
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
                        <div class="col-12">
                            <div class="section-heading heading-left mb-3">
                                <h2 class="title">Overview</h2>
                                <span class="subtitle">Crafting Solutions, Unleash Your Imagination</span>
                            </div>
                            <div class="row">
                                <div class="col-12 col-lg-6">
                                    <p>Our company specializes in professional web development services, delivering high-quality websites that are visually appealing, user-friendly, and optimized for performance. With a team of skilled developers and designers, we offer comprehensive web development solutions tailored to meet your specific business needs and objectives.</p>  
                                    <p>From custom website design to responsive web development, we leverage the latest technologies and industry best practices to create engaging online experiences that leave a lasting impression on your target audience. Our expertise in front-end and back-end development ensures seamless functionality, intuitive user interfaces, and robust backend systems that power your website's performance.</p>  
                                    <p>Whether you require an e-commerce platform, a content management system, or a corporate website, our web development services encompass a wide range of solutions to help you establish a strong online presence and drive business growth.</p>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="team-details-thumb">
                                        <img class="paralax-image" src="assets/abstract/media/banner/webdevelopment.gif" alt="Thumbnail" style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg);">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Development Service -->
            <div class="section section-padding bg-color-light" id="section2">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-5">
                            <div class="section-heading heading-left mb-3">
                                    <h2 class="title">Our Capabilities</h2>
                                    <span class="subtitle">Your Vision, Our Expertise: Transforming Ideas into Digital Reality</span>
                            </div>
                            <p>As organizations deal with the increasing complexity of the digital environment, KetupArt Studio stands ready to provide support. The convergence of AI, the proliferation of mobility solutions, and the emergence of cloud-based applications are compelling organizations across industries to pursue accelerated, scalable application development solutions that are tailored to their specific requirements.</p>

                            <p>At KetupArt Studio, we specialize in providing adaptable and individualized solutions to assist organizations in the efficient management of their application portfolios. We enable our clients to achieve significant improvements by utilizing a blend of our validated implementation strategies and benchmarks in the industry.</p>

                            <p>In addition to cost optimization, our Application Development and Maintenance Services prioritize the creation of genuine value, the improvement of customer experiences, and the promotion of innovation.</p>

                        </div>
                        <div class="col-12 col-lg-7">
                            <div class="row">
                                <div class="col-12 col-lg-6">
                                    <img src="assets/abstract/media/icon/icon-39.png" alt="" srcset="">
                                    <h5>Custom Web Development</h5>
                                    <p>Tailoring unique and innovative web solutions that meet clients' specific business goals and requirements, from dynamic websites to complex web applications.</p>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <img src="assets/abstract/media/icon/icon-29.png" alt="" srcset="">
                                    <h5>Responsive Design</h5>
                                    <p>Creating responsive and mobile-friendly websites that provide optimal user experiences across devices, ensuring accessibility and usability for all users.</p>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <img src="assets/abstract/media/icon/icon-31.png" alt="" srcset="">
                                    <h5>Cloud Integration and Automation</h5>
                                    <p>Implementing cloud-based solutions and automation tools to streamline workflows, enhance scalability, and improve performance in web applications.</p>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <img src="assets/abstract/media/icon/icon-32.png" alt="" srcset="">
                                    <h5>Performance Optimization</h5>
                                    <p>Optimizing website performance through techniques such as code minification, image optimization, caching strategies, and server-side optimizations, ensuring fast loading times and excellent user experience.</p>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <img src="assets/abstract/media/icon/icon-32.png" alt="" srcset="">
                                    <h5>AI-Based Web Development</h5>
                                    <p>Leveraging artificial intelligence technologies to enhance user interactions, personalize content, and improve decision-making processes on web platforms.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Online Marketing Service -->
            <div class="section section-padding" id="section3">
                <div class="container">
                    <div class="section-heading heading-left">
                        <h2 class="title">System Type</h2>
                        <span class="subtitle">Some example system that you can work on with us</span>
                        <div style="overflow:scroll">
                            <table class="w-100 table table-bordered text-white">
                            <tr>
                                <td style="width:33.333%"><h5 class="mb-0 fw-bold">Conventional App</h5></td>
                                <td style="width:33.333%"><h5 class="mb-0 fw-bold">Modern App</h5></td>
                                <td style="width:33.333%"><h5 class="mb-0 fw-bold">Futuristic App</h5></td>
                            </tr>
                            <tr>
                                <td style="vertical-align: top;">
                                    <div class="pricing-table active">
                                        <div class="pricing-body">
                                            <ul class="list-unstyled">
                                                <li>Personal Website</li>
                                            <li>To-Do-List App</li>
                                            <li>Blog Platform</li>
                                            <li>Weather App</li>
                                            <li>Recipe Sharing App</li>
                                            <li>Portfolio Tracker</li>
                                            <li>contact Management System</li>
                                            <li>Movie Database</li>
                                            <li>Blog Comment System</li>
                                            <li>Event Countdown</li>
                                            <li>Quiz App</li>
                                            <li>Chat Application</li>
                                            <li>Social Media Profile</li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td style="vertical-align: top;">
                                    <div class="pricing-table active">
                                        <div class="pricing-body">
                                            <ul class="list-unstyled">
                                                <li>Task Management App</li>
                                                <li>Forum or Bulletin Board</li>
                                                <li>E-commerce Platform</li>
                                                <li>Content Management System</li>
                                                <li>Travel Planner</li>
                                                <li>Fitness Tracking App</li>
                                                <li>Weather Dashboard</li>
                                                <li>Task Scheduling App</li>
                                                <li>Poling/Voting App</li>
                                                <li>Real Estate Listing Site</li>
                                                <li>Social Networking Platform</li>
                                                <li>E-Learning Platform</li>
                                                <li>Job Board</li>
                                                <li>Stock Trading Simulator</li>
                                                <li>Booking and Reservation System</li>
                                                <li>Music Streaming Service</li>
                                                <li>Online Auction Platform</li>
                                                <li>Task Automation Dashboard</li>
                                                <li>AI-powered Chatbot</li>
                                                <li>Blockchain-based Application</li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td style="vertical-align: top;">
                                    <div class="pricing-table active">
                                        <div class="pricing-body">
                                            <ul class="list-unstyled">
                                                <li>Healthcare Management System</li>
                                                <li>Smart Home Control System</li>
                                                <li>Streaming Video Platform</li>
                                                <li>AI-Powered recommendation System</li>
                                                <li>Ride-Sharing Services</li>
                                                <li>Financial Analytics Dashboard</li>
                                                <li>Language Translation Service</li>
                                                <li>Automated Stock Trading Bot</li>
                                                <li>Artificial Intelligence Chat Platform</li>
                                                <li>Predictive Analytics Platform</li>
                                                <li>Cybersecurity Monitoring System</li>
                                                <li>IoT-base Home Automation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        </div>
                   
                    </div>
                </div>
            </div>
            <!-- Business Service -->
            <div class="section section-padding bg-color-light" id="section4">
                <div class="container">
                    <div class="section-heading heading-left">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Technology Stack</h2>
                        <p class="w-100">"Building microservices encompasses essential components such as containerization, orchestration, backend development tools, API communication frameworks, and database management systems. This ecosystem prioritizes efficiency, scalability, and reliability, ensuring seamless system development and operation."</p>
                    </div>
                    <div class="d-flex flex-wrap justify-content-center">
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/laravel.png" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/netcore.png" alt="Brand" class="p-5" style="width:200px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/mysql.png" alt="Brand" class="p-5" style="width:250px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/postgresql.png" alt="Brand" class="p-5" style="width:400px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/mssql.png" alt="Brand" class="p-5" style="width:350px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/redis.png" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <strong>Our Ecosystem of Microservices</strong>
                    </div>
                </div>
            </div>
            <!-- Technology Service -->
            <div class="section section-padding" id="section5">
                <div class="container">
                    <div class="section-heading">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Ecosystem</h2>
                        <p class="w-100">KetupArt Studio advises, curates and orchestrates technologies from market-leading partners and innovators. Together, we provide scalable, fully integrated cloud solutions that deliver next-level results.</p>
                    </div>
                    <div class="d-flex flex-wrap justify-content-center">
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/awswhite.avif" alt="Brand" class="p-5" style="width:250px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/azure.png" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/gcp.png" alt="Brand" class="p-5" style="width:500px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/do.png" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/hetzner.png" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/vultr.png" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/linode.png" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <strong>Our Ecosystem of Cloud Computing</strong>
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
    </AbsractLayout>

</template>