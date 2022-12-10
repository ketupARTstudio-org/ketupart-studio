<script setup>
import AbsractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});
</script>

<template>
    <Head title="Our Office" />

    <AbsractLayout>
                <!--=====================================-->
        <!--=       Breadcrumb Area Start       =-->
        <!--=====================================-->
        <div class="breadcrum-area breadcrumb-banner">
            <div class="container">
                <div class="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
                    <h1 class="title h2">Our Office</h1>
                    <p>This is the place weher we create best solution for you with our experienced Team Member</p>
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
        <!--=       Why Choose Area Start       =-->
        <!--=====================================-->
        <section class="section-padding bg-color-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="why-choose-us">
                            <div class="section-heading heading-left">
                                <span class="subtitle">About Us</span>
                                <h2 class="title">Why branding matters?</h2>
                                <p>Ut condimentum enim nec diam convallis mollis. Sed felis quam, semper dapibus purus sed, rhoncus ullamcorper lacus.</p>
                            </div>
                            <div class="accordion" id="choose-accordion">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <i class="far fa-compress"></i> Strategy
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#choose-accordion">
                                        <div class="accordion-body">
                                            Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <i class="far fa-code"></i>Design
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#choose-accordion">
                                        <div class="accordion-body">
                                            Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <i class="fal fa-globe"></i>Development
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#choose-accordion">
                                        <div class="accordion-body">
                                            Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-6 offset-xl-1">
                        <div class="why-choose-us mb--30">
                            <div class="why-choose-thumb">
                                <img src="assets/abstract/media/about/about-3.png" alt="Office">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--=====================================-->
        <!--=       Project  Area Start        =-->
        <!--=====================================-->
        <section class="section section-padding-2">
            <div class="container">
                <div class="section-heading heading-left mb--40">
                    <span class="subtitle">Our Project</span>
                    <h2 class="title">Some of our <br> finest work.</h2>
                </div>
                <div class="axil-isotope-wrapper">
                    <div class="isotope-button isotope-project-btn">
                        <button data-filter="*" class="is-checked"><span class="filter-text">All Works</span></button>
                        <button data-filter=".branding"><span class="filter-text">Branding</span></button>
                        <button data-filter=".mobile"><span class="filter-text">Mobile</span></button>
                    </div>
                    <div class="row row-35 isotope-list">
                        <div class="col-md-6 project branding">
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
                        <div class="col-md-6 project mobile">
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
                        <div class="col-md-6 project branding">
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
                        <div class="col-md-6 project mobile">
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
                        <div class="col-md-6 project branding">
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
                        <div class="col-md-6 project mobile">
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
            </div>
            <ul class="shape-group-7 list-unstyled">
                <li class="shape shape-1"><img src="assets/abstract/media/others/circle-2.png" alt="circle"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/bubble-2.png" alt="Line"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/bubble-1.png" alt="Line"></li>
            </ul>
        </section>
        <!--=====================================-->
        <!--=          Team  Area Start         =-->
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