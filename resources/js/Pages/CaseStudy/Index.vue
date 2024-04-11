<script setup>
import AbstractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});
</script>

<template>
    <Head title="Case Study" />

    <AbstractLayout>

        <!--=====================================-->
        <!--=        Project Area Start         =-->
        <!--=====================================-->

      
        <section class="section">
            <div class="container">
                <div class="section-heading heading-left mb--40">
                    <span class="subtitle">Case Studies</span>
                    <h2 class="title">Case Study From The Field</h2>
                </div>
                <div class="axil-isotope-wrapper">
                    <div class="isotope-button isotope-project-btn">
                        <button data-filter="*" class="is-checked"><span class="filter-text">All Case Studies</span></button>
                        <button data-filter=".education"><span class="filter-text">Education</span></button>
                        <button data-filter=".engineering"><span class="filter-text">Engineering</span></button>
                        <button data-filter=".manufacturing"><span class="filter-text">Manufacturing</span></button>
                        <button data-filter=".healthcare"><span class="filter-text">Healthcare</span></button>
                    </div>
                    <div class="row row-35 isotope-list">
                        <div class="col-md-6 project education">
                            <div class="project-grid">
                                <div class="thumbnail">
                                    <a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank">
                                        <img src="/assets/abstract/media/casestudies/dec4irtournament.png" alt="project">
                                    </a>
                                </div>
                                <div class="content d-flex flex-column justify-content-between" style="height: 350px;">
                                    <div>
                                        <small class="fw-bold text-primary">Education</small>
                                        <h5 class="title"><a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank">Beyond Limits: How We Handled 30,000 Participants in an Online National Drone Tournament &nbsp;<i class="fas fa-external-link-alt fs-6"></i></a></h5>
                                        <span class="subtitle">This case study highlights our success in managing a 30,000-participant online drone tournament. Explore how we overcame challenges and optimized performance to deliver a seamless experience for all participants.</span>
                                    </div>
                                    <div class="text-end">
                                        <a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank" class="text-primary fw-bold">Find out more <i class="fas fa-external-link-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project education">
                            <div class="project-grid">
                                <div class="thumbnail">
                                    <a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank">
                                        <img src="/assets/abstract/media/casestudies/dronevr.png" alt="project">
                                    </a>
                                </div>
                                <div class="content d-flex flex-column justify-content-between" style="height: 350px;">
                                    <div>
                                        <small class="fw-bold text-primary">Education</small>
                                        <h5 class="title"><a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank">3D Drone View Application &nbsp;<i class="fas fa-external-link-alt fs-6"></i></a></h5>
                                        <span class="subtitle">This case study is the development of mobile and desktop applications to teach the students about the component of drones. The 3D Drone View application is based on the request of UTM’s lecturer to provide a means to teach the students during the drone setup workshop.</span>
                                    </div>
                                    <div class="text-end">
                                        <a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank" class="text-primary fw-bold">Find out more <i class="fas fa-external-link-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6 project engineering">
                            <div class="project-grid">
                                <div class="thumbnail">
                                    <a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank">
                                        <img src="/assets/abstract/media/casestudies/vrweldingkit.png" alt="project">
                                    </a>
                                </div>
                                <div class="content d-flex flex-column justify-content-between" style="height: 350px;">
                                    <div>
                                        <small class="fw-bold text-primary">Education</small>
                                        <h5 class="title"><a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank">VR Welding Kit &nbsp;<i class="fas fa-external-link-alt fs-6"></i></a></h5>
                                        <span class="subtitle">We have researched and created VR Welding Kit, an affordable VR welding training simulation for mobile smartphones to train the student regarding basic welding’s psychomotor skills. </span>
                                    </div>
                                    <div class="text-end">
                                        <a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank" class="text-primary fw-bold">Find out more <i class="fas fa-external-link-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 project manufacturing">
                            <div class="project-grid">
                                <div class="thumbnail">
                                    <a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank">
                                        <img src="/assets/abstract/media/casestudies/umwaerospace.png" alt="project">
                                    </a>
                                </div>
                                <div class="content d-flex flex-column justify-content-between" style="height: 350px;">
                                    <div>
                                        <small class="fw-bold text-primary">Manufacturing</small>
                                        <h5 class="title"><a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank">UMW Aerospace VR Showcase &nbsp;<i class="fas fa-external-link-alt fs-6"></i></a></h5>
                                        <span class="subtitle">This case study highlights our success in managing a 30,000-participant online drone tournament. Explore how we overcame challenges and optimized performance to deliver a seamless experience for all participants.</span>
                                    </div>
                                    <div class="text-end">
                                        <a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank" class="text-primary fw-bold">Find out more <i class="fas fa-external-link-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>  <div class="col-md-6 project healthcare">
                            <div class="project-grid">
                                <div class="thumbnail">
                                    <a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank">
                                        <img src="/assets/abstract/media/casestudies/vrpelvic.png" alt="project">
                                    </a>
                                </div>
                                <div class="content d-flex flex-column justify-content-between" style="height: 350px;">
                                    <div>
                                        <small class="fw-bold text-primary">Healthcare</small>
                                        <h5 class="title"><a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank">Pelvic AR Mobile Application &nbsp;<i class="fas fa-external-link-alt fs-6"></i></a></h5>
                                        <span class="subtitle">This case study is Pelvic AR, a mobile application that utilises an AR-based model target method to teach students about the human’s pelvic structure. It is also a collaboration project with UTM’s lecturer.</span>
                                    </div>
                                    <div class="text-end">
                                        <a href="https://www.linkedin.com/company/ketupart-studio/" target="_blank" class="text-primary fw-bold">Find out more <i class="fas fa-external-link-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group-7 list-unstyled">
                <li class="shape shape-1"><img src="/assets/abstract/media/others/circle-2.png" alt="circle"></li>
                <li class="shape shape-2"><img src="/assets/abstract/media/others/bubble-2.png" alt="Line"></li>
                <li class="shape shape-3"><img src="/assets/abstract/media/others/bubble-1.png" alt="Line"></li>
            </ul>
        </section>
    </AbstractLayout>

</template>