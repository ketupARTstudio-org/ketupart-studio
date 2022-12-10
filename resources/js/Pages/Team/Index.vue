<script setup>
import AbsractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});
</script>

<template>
    <Head title="Teams" />

    <AbsractLayout>
         <!--=====================================-->
        <!--=       Breadcrumb Area Start       =-->
        <!--=====================================-->
        <div class="breadcrum-area breadcrumb-banner">
            <div class="container">
                <div class="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
                    <h1 class="title h2">Meet talent &amp; experience</h1>
                    <p>Grow your business online by awesomely designed mobile apps that fits all types.</p>
                </div>
                <div class="banner-thumbnail thumbnail-2" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
                    <img class="paralax-image" src="assets/abstract/media/banner/banner-thumb-2.png" alt="Illustration">
                </div>
            </div>
            <ul class="shape-group-8 list-unstyled">
                <li class="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100">
                    <img src="assets/abstract/media/others/bubble-9.png" alt="Bubble">
                </li>
                <li class="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
                    <img src="assets/abstract/media/others/bubble-21.png" alt="Bubble">
                </li>
                <li class="shape shape-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
                    <img src="assets/abstract/media/others/line-4.png" alt="Line">
                </li>
            </ul>
        </div>
        <!--=====================================-->
        <!--=       Experts  Area Start        =-->
        <!--=====================================-->
        <section class="section section-padding expert-counterup-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="section-heading heading-left">
                            <span class="subtitle">Experts in field</span>
                            <h2>What makes us special?</h2>
                            <p class="mb--50">In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus.</p>
                            <a href="contact.html" class="axil-btn btn-large btn-fill-primary">Careers</a>
                        </div>
                    </div>
                    <div class="col-lg-6 offset-xl-1">
                        <div class="row" id="no-equal-gallery">
                            <div class="col-sm-6 no-equal-item" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                                <div class="counterup-progress counterup-style-2 active">
                                    <div class="icon">
                                        <img class="dark-icon" src="assets/abstract/media/icon/icon-10.png" alt="Icon">
                                        <img class="light-icon" src="assets/abstract/media/icon/icon-7.png" alt="Icon">
                                    </div>
                                    <div class="count-number h2">
                                        <span class="number count" data-count="15">15</span>
                                        <span class="symbol">+</span>
                                    </div>
                                    <h6 class="title">Years of operation</h6>
                                </div>
                            </div>
                            <div class="col-sm-6 mt--90 mt_md--0 no-equal-item" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                                <div class="counterup-progress counterup-style-2">
                                    <div class="icon">
                                        <img class="dark-icon" src="assets/abstract/media/icon/icon-11.png" alt="Icon">
                                        <img class="light-icon" src="assets/abstract/media/icon/icon-8.png" alt="Icon">
                                    </div>
                                    <div class="count-number h2">
                                        <span class="number count" data-count="360">360</span>
                                        <span class="symbol">+</span>
                                    </div>
                                    <h6 class="title">Projects deliverd</h6>
                                </div>
                            </div>
                            <div class="col-sm-6 no-equal-item" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                                <div class="counterup-progress counterup-style-2">
                                    <div class="icon">
                                        <img class="dark-icon" src="assets/abstract/media/icon/icon-12.png" alt="Icon">
                                        <img class="light-icon" src="assets/abstract/media/icon/icon-9.png" alt="Icon">
                                    </div>
                                    <div class="count-number h2">
                                        <span class="number count" data-count="600">600</span>
                                        <span class="symbol">+</span>
                                    </div>
                                    <h6 class="title">Specialist</h6>
                                </div>
                            </div>
                            <div class="col-sm-6 no-equal-item" data-sal="slide-up" data-sal-duration="800" data-sal-delay="400">
                                <div class="counterup-progress counterup-style-2">
                                    <div class="icon">
                                        <img class="dark-icon" src="assets/abstract/media/icon/apple-black.png" alt="Icon">
                                        <img class="light-icon" src="assets/abstract/media/icon/apple.png" alt="Icon">
                                    </div>
                                    <div class="count-number h2">
                                        <span class="number count" data-count="64">64</span>
                                        <span class="symbol">+</span>
                                    </div>
                                    <h6 class="title">Years of operation</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=====================================-->
        <!--=           Team  Area Start        =-->
        <!--=====================================-->
        <section class="section section-padding bg-color-dark pb--70 pb_lg--20 pb_md--0">
            <div class="container">
                <div class="section-heading heading-light">
                    <span class="subtitle">Our valus</span>
                    <h2 class="title mb--50">Meet The Team</h2>
                    <p>Nulla facilisi. Nullam in magna id dolor
                        blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet.</p>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-sm-6">
                        <div class="team-grid active">
                            <div class="thumbnail">
                                <a href="single-team.html">
                                    <img src="assets/abstract/media/team/team-1.png" alt="Team Member">
                                </a>
                            </div>
                            <div class="content">
                                <h4 class="title"><a href="single-team.html">Savannah Nguyen</a></h4>
                                <span class="designation">Communications</span>
                                <span class="designation">Strategist</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="team-grid">
                            <div class="thumbnail">
                                <a href="single-team.html">
                                    <img src="assets/abstract/media/team/team-2.png" alt="Team Member">
                                </a>
                            </div>
                            <div class="content">
                                <h4 class="title"><a href="single-team.html">Jerome Bell</a></h4>
                                <span class="designation">Lead Research</span>
                                <span class="designation">Producer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="team-grid">
                            <div class="thumbnail">
                                <a href="single-team.html">
                                    <img src="assets/abstract/media/team/team-3.png" alt="Team Member">
                                </a>
                            </div>
                            <div class="content">
                                <h4 class="title"><a href="single-team.html">Darlene Robertson</a></h4>
                                <span class="designation">Implementation</span>
                                <span class="designation">Specialist</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="team-grid">
                            <div class="thumbnail">
                                <a href="single-team.html">
                                    <img src="assets/abstract/media/team/team-4.png" alt="Team Member">
                                </a>
                            </div>
                            <div class="content">
                                <h4 class="title"><a href="single-team.html">Marvin McKinney</a></h4>
                                <span class="designation">Forward Interactions</span>
                                <span class="designation">Developer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="team-grid">
                            <div class="thumbnail">
                                <a href="single-team.html">
                                    <img src="assets/abstract/media/team/team-5.png" alt="Team Member">
                                </a>
                            </div>
                            <div class="content">
                                <h4 class="title"><a href="single-team.html">Ralph Edwards</a></h4>
                                <span class="designation">Communications</span>
                                <span class="designation">Strategist</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="team-grid">
                            <div class="thumbnail">
                                <a href="single-team.html">
                                    <img src="assets/abstract/media/team/team-6.png" alt="Team Member">
                                </a>
                            </div>
                            <div class="content">
                                <h4 class="title"><a href="single-team.html">Kathryn Murphy</a></h4>
                                <span class="designation">Lead Research</span>
                                <span class="designation">Producer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="team-grid">
                            <div class="thumbnail">
                                <a href="single-team.html">
                                    <img src="assets/abstract/media/team/team-7.png" alt="Team Member">
                                </a>
                            </div>
                            <div class="content">
                                <h4 class="title"><a href="single-team.html">Jane Cooper</a></h4>
                                <span class="designation">Implementation</span>
                                <span class="designation">Specialist</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="team-grid">
                            <div class="thumbnail">
                                <a href="single-team.html">
                                    <img src="assets/abstract/media/team/team-8.png" alt="Team Member">
                                </a>
                            </div>
                            <div class="content">
                                <h4 class="title"><a href="single-team.html">Cody Fisher</a></h4>
                                <span class="designation">Forward Interactions</span>
                                <span class="designation">Developer</span>
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
        <!--=====================================-->
        <!--=          About  Area Start        =-->
        <!--=====================================-->
        <section class="section section-padding-equal">
            <div class="container">
                <div class="section-heading">
                    <span class="subtitle">Experts in field</span>
                    <h2 class="title">Design startup <br> movement</h2>
                </div>
                <div class="about-expert">
                    <div class="thumbnail">
                        <img src="assets/abstract/media/about/about-1.png" alt="Thumbnail">
                        <div class="popup-video">
                            <a href="https://www.youtube.com/watch?v=1iIZeIy7TqM" class="play-btn popup-youtube"><i class="fas fa-play"></i></a>
                        </div>
                    </div>
                    <ul class="frame-shape">
                        <li class="shape shape-1"><img src="assets/abstract/media/about/frame-1.png" alt="Frame"></li>
                        <li class="shape shape-2"><img src="assets/abstract/media/about/frame-2.png" alt="Frame"></li>
                    </ul>
                </div>
            </div>
            <ul class="shape-group-16 list-unstyled">
                <li class="shape shape-1"><img src="assets/abstract/media/others/circle-2.png" alt="circle"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/bubble-2.png" alt="Line"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/bubble-1.png" alt="Line"></li>
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