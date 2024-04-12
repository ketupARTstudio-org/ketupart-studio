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
                    <h1 class="title h2">Talent &amp; Experience</h1>
                    <p>Build your solution with us and revolutionize the way forward with state-of-the-art technology that help people life.</p>
                </div>
                <div class="banner-thumbnail thumbnail-2" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
                    <img class="paralax-image" src="assets/images/world-connect.png" alt="Illustration">
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
       <!-- Button trigger modal -->

        <!--=====================================-->
        <!--=       About Team  Area Start      =-->
        <!--=====================================-->
        <section class="section-padding-equal">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12" data-sal="slide-left" data-sal-duration="800" data-sal-delay="100">
                        <div class="about-team">
                            <div class="section-heading heading-left">
                                <span class="subtitle">Our Team</span>
                                <h2>Alone we can do so little; together we can do so much.</h2>
                                <p>"Our team believes that alone, we can do so little, but together, we can achieve so much."</p>
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
                    <span class="subtitle">Strategic Leadership</span>
                    <h2 class="title mb--50">Meet The Team</h2>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-4">
                        <div class="team-grid">
                            <div class="thumbnail">
                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#ismailModal">
                                    <img src="assets/abstract/media/team/ismail.png" alt="Team Member" style="width:200px">
                                </a>
                            </div>
                            <div class="content">
                                <h4 class="title"><a href="javascript:;" data-bs-toggle="modal" data-bs-target="#ismailModal">Muhammad Ismail Mat Isham</a></h4>
                                <span class="designation fw-bold">Founder / Chief Executive Officer</span>
                                <span class="designation">Immersive Tech Specialist</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="team-grid">
                            <div class="thumbnail">
                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#siangModal">
                                    <img src="assets/abstract/media/team/chanveisiang.jpeg" alt="Team Member" style="width:200px">
                                </a>
                            </div>
                            <div class="content">
                                <h4 class="title"><a href="javascript:;" data-bs-toggle="modal" data-bs-target="#siangModal">Chan Vei Siang</a></h4>
                                <span class="designation fw-bold">Founder / Chief Operating Officer</span>
                                <span class="designation">Immersive Tech Specialist / AI Specialist</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="team-grid">
                            <div class="thumbnail">
                                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#zulZaynModal">
                                    <img src="assets/abstract/media/team/zulzayn.jpeg" alt="Team Member" style="width:200px">
                                </a>
                            </div>
                            <div class="content">
                                <h4 class="title"><a href="javascript:;" data-bs-toggle="modal" data-bs-target="#zulZaynModal">Zulwaqar Zain Mohtar</a></h4>
                                <span class="designation fw-bold">Founder / Chief Technology Officer</span>
                                <span class="designation">Cloud Specialist / Full Stack Specialist</span>
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

       

        <!-- Modal -->
        <div class="modal fade" id="ismailModal" tabindex="-1" aria-labelledby="ismailModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content bg-color-dark">
                <div class="modal-body p-0">
                    <a href="javascript:;" class="float-end text-white p-4" data-bs-dismiss="modal" aria-label="Close">
                        <i class="far fa-times-circle h5 mb-0"></i>
                    </a>
                    <div class="row">
                        <div class="col-12 col-lg-4">
                            <img src="assets/abstract/media/team/ismail.png" alt="Team Member" class="w-100">
                        </div>
                        <div class="col-12 col-lg-8">
                            <div class="content d-flex flex-column h-100 justify-content-center">
                                <h4 class="title">Muhammad Ismail Mat Isham</h4>
                                <span class="designation fw-bold">Founder / Chief Executive Officer</span>
                                <span class="designation">Immersive Tech Specialist</span>
                                <p>As a Chief Executive Officer, Muhammad Ismail Mat Isham is responsible for the overall strategic direction and growth of the company. He has over 10 years of experience in the technology industry and has a proven track record of delivering innovative solutions to complex problems. Ismail is passionate about using technology to solve real-world problems and is committed to helping businesses achieve their goals through the use of cutting-edge technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="siangModal" tabindex="-1" aria-labelledby="siangModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content bg-color-dark">
                <div class="modal-body p-0">
                    <a href="javascript:;" class="float-end text-white p-4" data-bs-dismiss="modal" aria-label="Close">
                        <i class="far fa-times-circle h5 mb-0"></i>
                    </a>
                    <div class="row">
                        <div class="col-12 col-lg-4">
                            <img src="assets/abstract/media/team/chanveisiang.jpeg" alt="Team Member" class="w-100">
                        </div>
                        <div class="col-12 col-lg-8">
                            <div class="content d-flex flex-column h-100 justify-content-center">
                                <h4 class="title">Chan Vei Siang</h4>
                                <span class="designation fw-bold">Founder / Chief Operating Officer</span>
                                <span class="designation">Immersive Tech Specialist / AI Specialist</span>
                                <p>As a Chief Operating Officer, Chan Vei Siang is responsible for the overall operations and growth of the company. He has over 10 years of experience in the technology industry and has a proven track record of delivering innovative solutions to complex problems. Siang is passionate about using technology to solve real-world problems and is committed to helping businesses achieve their goals through the use of cutting-edge technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="zulZaynModal" tabindex="-1" aria-labelledby="zulZaynModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content bg-color-dark">
                <div class="modal-body p-0">
                    <a href="javascript:;" class="float-end text-white p-4" data-bs-dismiss="modal" aria-label="Close">
                        <i class="far fa-times-circle h5 mb-0"></i>
                    </a>
                    <div class="row">
                        <div class="col-12 col-lg-4">
                            <img src="assets/abstract/media/team/zulzayn.jpeg" alt="Team Member" class="w-100">
                        </div>
                        <div class="col-12 col-lg-8">
                            <div class="content d-flex flex-column h-100 justify-content-center">
                                <h4 class="title">Zulwaqar Zain Mohtar</h4>
                                <span class="designation fw-bold">Founder / Chief Technology Officer</span>
                                <span class="designation">Cloud Specialist / Full Stack Specialist</span>
                                <p>As a Chief Technology Officer, Zulwaqar Zain Mohtar is responsible for the overall technology strategy and direction of the company. He has over 10 years of experience in the technology industry and has a proven track record of delivering innovative solutions to complex problems. Zulwaqar is passionate about using technology to solve real-world problems and is committed to helping businesses achieve their goals through the use of cutting-edge technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </AbsractLayout>



</template>