<script setup>
import AbstractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});
</script>

<template>
    <Head title="Microservices" />

    <AbstractLayout>

        <!--=====================================-->
        <!--=       Breadcrumb Area Start       =-->
        <!--=====================================-->
        <div class="breadcrum-area breadcrumb-banner" style="background-image: url('assets/abstract/media/banner/banner5.webp');background-size: cover;">
            <div class="container">
                <div class="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
                    <h1 class="title h2">Microservices</h1>
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
                            <a class="nav-link" href="#section3">Architecture</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#section4">Technology Stack</a>
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
                                <span class="subtitle">Microservices: Driving Agile Innovation for Modern Businesses</span>
                            </div>
                            <p>Microservices are a modular architectural style where applications are composed of small, independent services that can be developed, deployed, and scaled independently. Each service focuses on a specific business function, allowing for rapid development, seamless integration, and easier maintenance.</p>
                            <p>We specialize in designing, implementing, and managing microservices architectures tailored to your business needs. Our experienced team leverages industry best practices, cutting-edge technologies, and agile methodologies to deliver scalable, resilient, and future-ready solutions.</p>
                        </div>
                        <div class="col-6">
                            <div class="team-details-thumb">
                                <img class="paralax-image" src="assets/abstract/media/banner/cloud2.gif" alt="Thumbnail" style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg);">
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
                        <h2 class="title">Our Capabilities</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-design.html">Microservices Architecture Design</a></h5>
                                    <p class="mb-0">Expertise in designing scalable and resilient microservices architectures tailored to clients' business needs, ensuring agility, flexibility, and optimal performance.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-development.html">Microservices Development and Integration</a></h5>
                                    <p class="mb-0">Proficiency in developing and integrating microservices using cutting-edge technologies, enabling rapid development cycles, seamless communication between services, and simplified maintenance.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-content-strategy.html">Microservices Deployment and Management</a></h5>
                                    <p class="mb-0">Experience in deploying and managing microservices in cloud-native environments, leveraging automation and DevOps practices for continuous integration, delivery, and monitoring.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 " data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-content-strategy.html">Microservices Consulting and Strategy</a></h5>
                                    <p class="mb-0">Consultative approach to help clients adopt microservices effectively, including assessing legacy systems, defining migration strategies, and providing guidance on best practices, governance, and security aspects.</p>
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
                        <span class="subtitle">Monolith VS Microservices</span>
                        <h2 class="title">Architecture</h2>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p class="w-100">Monolithic architecture represents a traditional approach where an entire application is built as a single, tightly integrated unit. In contrast, microservices architecture breaks down the application into smaller, independent services that can be developed, deployed, and scaled independently.</p>
                        </div>
                        <div class="col-6">
                            <p class="w-100">In a monolithic architecture, changes to one part of the application often require rebuilding and redeploying the entire monolith, leading to longer development cycles and increased risk. Scaling a monolith can also be challenging, as the entire application needs to be scaled even if only a specific component requires more resources.</p>
                            <p class="w-100">On the other hand, microservices architecture promotes agility, scalability, and fault isolation. Each microservice focuses on a specific business function and communicates with other services via APIs, allowing for parallel development, faster deployment cycles, and better resource utilization. Microservices can be scaled horizontally, meaning specific services can be scaled independently based on demand, leading to improved performance and cost-efficiency. Failures in one microservice are isolated, reducing the impact on the overall application and improving fault tolerance. Overall, microservices architecture offers a more flexible, resilient, and scalable approach to building and managing modern applications.</p>
                        </div>
                        <div class="col-6">
                            <div class="project branding">
                                <div class="project-grid">
                                    <div class="thumbnail">
                                        <div>
                                            <img src="assets/abstract/media/banner/microservice.png" alt="project">
                                        </div>
                                    </div>
                                    <div class="content p-3 text-center">
                                        <h5 class="title">Monolith and Microservices</h5>
                                        <p class="m-0">Go agile with microservices</p>
                                    </div>
                                </div>
                            </div>
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
        </div>

        <!--=====================================-->
        <!--=     Call To Action Area Start     =-->
        <!--=====================================-->
        <section class="section py-5">
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
    </AbstractLayout>

</template>