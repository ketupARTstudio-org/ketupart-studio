<script setup>
import AbsractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});
</script>

<style scoped>
.overlay-background {
position: relative;
background-size: cover;
background-position: center;
color: white; /* Adjust text color for contrast */
}

.overlay-background::before {
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity here */
z-index: 1;
}

.overlay-background .container {
position: relative;
z-index: 2; /* Ensures the content is above the overlay */
}

.overlay-background .container-fluid {
position: relative;
z-index: 2; /* Ensures the content is above the overlay */
}
</style>

<template>
    <Head title="Go Fly" />

    <AbsractLayout>

        <section class="banner banner-style-2 overlay-background d-flex align-items-center" id="op-home" style="background-image:url('assets/images/bg_drone.gif');height:60vh">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <div class="banner-content" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                            <h1 class="title">GoFly <br> VR Drone Training</h1>
                            <a href="#op-portfolio" class="axil-btn btn-fill-primary btn-large" style="background-color: #69696900;border: 1px solid #a1a1a1;">
                                <h4 class="mb-0"><i class="fa-solid fa-play"></i> &nbsp;&nbsp;Start Playing</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="list-unstyled shape-group-18">
                <li class="shape shape-1" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="100"><img src="assets/abstract/media/banner/banner-shape-1.png" alt="Shape"></li>
                <li class="shape shape-2" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="100"><img src="assets/abstract/media/banner/banner-shape-2.png" alt="Shape"></li>
                <li class="shape shape-3" data-sal="zoom-in" data-sal-duration="500" data-sal-delay="600"><img src="assets/abstract/media/others/bubble-16.png" alt="Shape"></li>
                <li class="shape shape-4" data-sal="zoom-in" data-sal-duration="500" data-sal-delay="600"><img src="assets/abstract/media/others/bubble-15.png" alt="Shape"></li>
                <li class="shape shape-5" data-sal="zoom-in" data-sal-duration="500" data-sal-delay="600"><img src="assets/abstract/media/others/bubble-14.png" alt="Shape"></li>
                <li class="shape shape-6" data-sal="zoom-in" data-sal-duration="500" data-sal-delay="600"><img src="assets/abstract/media/others/bubble-16.png" alt="Shape"></li>
                <li class="shape shape-7" data-sal="slide-down" data-sal-duration="500" data-sal-delay="600"><img src="assets/abstract/media/others/bubble-26.png" alt="Shape"></li>
            </ul>
        </section>

        <section class="section section-padding-equal pb-0">
            <div class="container">
                <div class="section-heading heading-light-left">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <h2>Train Like a Pro, Play Like a Champ </h2>
                            <p class="w-100">Welcome to the ultimate drone simulation experience! Dive into a world where fun meets learning and take your skills to new heights.</p>
                            <p class="w-100">Take control of your drone journey—start playing and training today!</p>
                            <div class="d-flex flex-row mb-5">
                                <a href="#op-portfolio" class="axil-btn btn-fill-primary btn-large" style="background-color: #0d6efd;border: 1px solid #0d6efd;--color-hover: #002358;">
                                    <h4 class="mb-0"><i class="fa-brands fa-meta"></i> Get on Meta Quest Store</h4>
                                </a>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="thumbnail text-right">
                                <img src="assets/abstract/media/project/mobile-mockup.png" alt="Mockup">
                            </div>
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
        
        <!-- <section class="section section-padding" style="background-image: url('assets/abstract/media/blog/blog-2.png');"> -->
        <section class="section section-padding overlay-background" style="background-image:url('assets/abstract/media/blog/blog-2.png');">
            <div class="container">
                <div class="section-heading heading-left">
                    <span class="subtitle">Testimonial</span>
                    <h2 class="title">From getting started</h2>
                    <p>Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet.</p>
                </div>
               
            </div>
        </section>

        <section class="section section-padding" id="op-blog">
            <div class="container">
                <div class="section-heading">
                    <span class="subtitle">What's Going On</span>
                    <h2 class="title">News</h2>
                </div>
                <div class="row g-0">
                    <div class="col-xl-6" data-sal="slide-right" data-sal-duration="800" data-sal-delay="100">
                        <div class="blog-list active">
                            <div class="post-thumbnail">
                                <a href="#"><img src="assets/abstract/media/blog/blog-1.png" alt="Blog Post"></a>
                                <!-- <img class="modal-thumb" src="assets/abstract/media/blog/blog-10.png" alt="Blog Post"> -->
                            </div>
                            <div class="post-content">
                                <h5 class="title"><a href="#">How To Use a Remarketing Strategy To Get More</a></h5>
                                <p>Demand generation is a constant struggle for any business. Each marketing strategy you employ has...</p>
                                <a href="#" class="more-btn">Learn more<i class="far fa-angle-right"></i></a>
                                <div class="details-description">
                                    <p>Demand generation is a constant struggle for any business. Each marketing strategy you employ has generation is a constant struggle for any business. Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris. MailChimp is an email marketing service provider founded in 2001. It has 9 million users that collectively send over 15 billion emails through the service each month.</p>
                                    <div class="blog-share">
                                        <h6 class="share-label">Share:</h6>
                                        <ul class="social-list list-unstyled">
                                            <li><a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6" data-sal="slide-left" data-sal-duration="800" data-sal-delay="100">
                        <div class="blog-list border-start">
                            <div class="post-thumbnail">
                                <a href="#"><img src="assets/abstract/media/blog/blog-2.png" alt="Blog Post"></a>
                                <!-- <img class="modal-thumb" src="assets/abstract/media/blog/blog-11.png" alt="Blog Post"> -->
                            </div>
                            <div class="post-content">
                                <h5 class="title"><a href="#">SEO Statistics You Should Know in 2021</a></h5>
                                <p>Organic search has the potential to capture more than 40 percent of your gross revenue...</p>
                                <a href="#" class="more-btn">Learn more<i class="far fa-angle-right"></i></a>
                                <div class="details-description">
                                    <p>Demand generation is a constant struggle for any business. Each marketing strategy you employ has generation is a constant struggle for any business. Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris. MailChimp is an email marketing service provider founded in 2001. It has 9 million users that collectively send over 15 billion emails through the service each month.</p>
                                    <div class="blog-share">
                                        <h6 class="share-label">Share:</h6>
                                        <ul class="social-list list-unstyled">
                                            <li><a href="https://facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
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

        <div class="section section-padding-equal bg-color-light">
            <div class="container">
                <div class="about-expert">
                    <div class="thumbnail">
                        <img src="assets/images/bg_drone.gif" alt="Thumbnail" style="width: 100vw;">
                        <div class="popup-video">
                            <a href="assets/images/bg_drone.mp4" class="play-btn popup-youtube"><i class="fas fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group-16 list-unstyled">
                <li class="shape shape-1"><img src="assets/abstract/media/others/circle-2.png" alt="circle"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/bubble-2.png" alt="Line"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/bubble-1.png" alt="Line"></li>
            </ul>
        </div>
       

    </AbsractLayout>

</template>