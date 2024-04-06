<script setup>
import AbsractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});
</script>

<template>
    <Head title="Our Client" />

    <AbsractLayout>
  <!--=====================================-->
        <!--=       Breadcrumb Area Start       =-->
        <!--=====================================-->
        <div class="breadcrum-area breadcrumb-banner">
            <div class="container">
                <div class="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
                    <h1 class="title h2">Our Clients</h1>
                    <p>We work closely with our clients in order to deliver the best results. As a startup, we believe building client centric experience is our most important goal.</p>
                </div>
                <div class="banner-thumbnail thumbnail-1" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
                    <img class="paralax-image" src="assets/abstract/media/banner/banner-thumb-1.png" alt="Illustration">
                </div>
            </div>
            <ul class="shape-group-8 list-unstyled">
                <li class="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100">
                    <img src="assets/abstract/media/others/bubble-9.png" alt="Bubble">
                </li>
                <li class="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
                    <img src="assets/abstract/media/others/bubble-21.png" alt="Bubble">
                </li>
            </ul>
        </div>
        <!--=====================================-->
        <!--=       Clients  Area Start        =-->
        <!--=====================================-->
        <div class="section brand-wrap-area bg-color-dark">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-6 h-100" data-sal="slide-up" data-sal-duration="500">
                        <div class="brand-grid d-flex justify-content-center align-items-center">
                            <img src="assets/abstract/media/brand/logo-DEC4IR-2.png" alt="Brand" class="p-5">
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                        <div class="brand-grid d-flex justify-content-center align-items-center">
                            <img src="assets/abstract/media/brand/logo_utm.png" alt="Brand" class="p-5">
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                        <div class="brand-grid d-flex justify-content-center align-items-center">
                            <img src="assets/abstract/media/brand/logo_mranti.png" alt="Brand" class="p-5">
                        </div>
                    </div>
                    <div class="col-lg-3 col-6 h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
                        <div class="brand-grid d-flex justify-content-center align-items-center">
                            <img src="assets/abstract/media/brand/logo-kpm.png" alt="Brand" class="p-5">
                        </div>
                    </div>
                    <!-- <div class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                        <div class="brand-grid">
                            <img src="assets/abstract/media/brand/brand-5.png" alt="Brand">
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="text-center">
                <strong>Our Top Client</strong>
            </div>
        </div>
    </AbsractLayout>

</template>