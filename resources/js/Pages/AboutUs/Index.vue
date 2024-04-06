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
                    <h1 class="title h2">About KetupArt Studio</h1>
                    <p>KetupArt Studio start the journey in 2023 and begin to provide robust solution to clients. At KetupArtStudio, we specialize in creating innovative and customized digital experiences that empower businesses to thrive in the digital landscape. With a team of skilled professionals and a passion for pushing boundaries, we deliver exceptional results that exceed client expectations.</p>
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
                                <h2 class="title">Provide Solution for Better Future</h2>
                                <p>We build robust solution using the latest technologies and best practices. Our expertise in state-of-the-art technologies enables you to stay ahead infront of the market. Our developers create user-centric solution with seamless functionality and intuitive design across platforms.</p>
                                <p>Experience immersive engagement with augmented and virtual reality. We deliver memorable experiences by leveraging AR/VR technology.</p>
                                <p>Collaboration is at the core of our approach. We provide tailored solutions that drive business growth and elevate brand experiences.</p>
                                <p>Discover how our solutions can transform your business. Start your digital journey with us today.</p>
                                <!-- <a href="#" class="axil-btn btn-fill-primary btn-large">Read More</a> -->
                            </div>
                            <div class="case-study-counterup">
                                <div class="single-counterup">
                                    <h2 class="count-number">
                                        <span class="number count" data-count="2">2</span>
                                        <span class="symbol">+</span>
                                    </h2>
                                    <span class="counter-title">Years on the market</span>
                                </div>
                                <div class="single-counterup">
                                    <h2 class="count-number">
                                        <span class="number count" data-count="3">3</span>
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
                            <h3 class="sl-number">I</h3>
                            <h5 class="title">Expertise and Innovation</h5>
                            <p>When you choose to work with us, you gain access to a team of highly skilled professionals who are at the forefront of their fields. We bring years of experience and a deep understanding of web development, microservices and APIs, mobile development, and augmented and virtual reality. Our commitment to staying ahead of the curve ensures that we deliver innovative and cutting-edge solutions that drive your business forward.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-quality">
                            <h3 class="sl-number">II</h3>
                            <h5 class="title">Customized Solutions</h5>
                            <p>We believe in the power of tailored solutions. We take the time to understand your unique requirements, goals, and challenges. By doing so, we can create customized strategies and applications that precisely align with your business objectives. Our ability to adapt and personalize our services ensures that you receive the best possible outcomes for your specific needs.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-quality">
                            <h3 class="sl-number">III</h3>
                            <h5 class="title">Seamless Integration and Scalability</h5>
                            <p>Our expertise in microservices and APIs allows us to develop applications that seamlessly integrate with your existing systems. This promotes flexibility, scalability, and ease of future expansion. By leveraging microservices architecture, we can break down complex projects into smaller, independent components, making them easier to maintain, update, and scale as your business grows.</p>
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
      
    </AbsractLayout>

</template>