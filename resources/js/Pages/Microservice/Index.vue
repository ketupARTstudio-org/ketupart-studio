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
                    <div class="section-heading heading-left">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Overview</h2>
                    </div>
                </div>
            </div>
            <!-- Development Service -->
            <div class="section section-padding bg-color-light" id="section2">
                <div class="container">
                    <div class="section-heading heading-left">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Our Capabilities</h2>
                    </div>
                </div>
            </div>
            <!-- Online Marketing Service -->
            <div class="section section-padding" id="section3">
                <div class="container">
                    <div class="section-heading heading-left">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Architecture</h2>
                    </div>
                </div>
            </div>
            <!-- Business Service -->
            <div class="section section-padding bg-color-light" id="section4">
                <div class="container">
                    <div class="section-heading heading-left">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Technology Stack</h2>
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