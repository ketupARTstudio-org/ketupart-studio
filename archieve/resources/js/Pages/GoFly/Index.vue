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

.zoom-effect img {
    transition: transform 0.3s ease-in-out; /* Smooth zoom effect */
}

.zoom-effect:hover img {
    transform: scale(1.1); /* Zoom in on hover */
}
</style>

<template>
    <Head title="Go Fly" />

    <AbsractLayout>

        <!-- <section class="banner banner-style-2 overlay-background d-flex align-items-center" id="op-home" style="background-image:url('assets/images/bg-gofly.png');height:60vh"> -->
        <section class="banner banner-style-2 overlay-background d-flex align-items-center" id="op-home" style="height:60vh; position:relative; overflow:hidden;">
            <video autoplay muted loop playsinline style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index:-1;">
                <source src="assets/images/bg-gofly.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="content" style="z-index:1;">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="banner-content" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                                <h1 class="title">GoFly <br> VR Drone Training</h1>
                                
                                <a href="#download-gofly" class="axil-btn btn-fill-primary btn-large p-3" style="background-color: #69696900;border: 1px solid #a1a1a1;">
                                    <div class="d-flex flex-row align-items-center justify-content-center">
                                        <img src="assets/images/logo_gofly.png" class="me-3" style="width:100px;border-radius: 10px;"/>
                                        <h4 class="mb-0"><i class="fa-solid fa-play"></i> &nbsp;&nbsp;Start Playing</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="list-unstyled shape-group-18">
                    <!-- <li class="shape shape-1" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="100"><img src="assets/abstract/media/banner/banner-shape-1.png" alt="Shape"></li> -->
                    <li class="shape shape-2" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="100"><img src="assets/abstract/media/banner/banner-shape-2.png" alt="Shape"></li>
                    <li class="shape shape-3" data-sal="zoom-in" data-sal-duration="500" data-sal-delay="600"><img src="assets/abstract/media/others/bubble-16.png" alt="Shape"></li>
                    <li class="shape shape-4" data-sal="zoom-in" data-sal-duration="500" data-sal-delay="600"><img src="assets/abstract/media/others/bubble-14.png" alt="Shape"></li>
                    <li class="shape shape-5" data-sal="zoom-in" data-sal-duration="500" data-sal-delay="600"><img src="assets/abstract/media/others/bubble-16.png" alt="Shape"></li>
                    <li class="shape shape-6" data-sal="zoom-in" data-sal-duration="500" data-sal-delay="600"><img src="assets/abstract/media/others/bubble-16.png" alt="Shape"></li>
                    <li class="shape shape-7" data-sal="slide-down" data-sal-duration="500" data-sal-delay="600"><img src="assets/abstract/media/others/bubble-16.png" alt="Shape"></li>
                </ul>
            </div>
        </section>

        <section class="section section-padding-equal pb-0" id="download-gofly">
            <div class="container">
                <div class="section-heading heading-light-left">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <h2>Train Like a Pro, Play Like a Champ </h2>
                            <p class="w-100">Welcome to the ultimate drone simulation experience! Dive into a world where fun meets learning and take your skills to new heights.</p>
                            <p class="w-100">Take control of your drone journey—start playing and training today!</p>
                           
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="thumbnail text-right">
                                <img src="assets/images/meta-quest-3.png" alt="Mockup">
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-lg-row mb-5">
                        <a href="https://sidequestvr.com/app/41261 " target="_blank" class="axil-btn btn-fill-primary btn-large me-0 me-lg-3 mb-3 " style="background-color: #101227;border: 1px solid #101227;--color-hover: #252956;">
                            <h4 class="mb-0">
                                <!-- <i class="fa-brands fa-meta"></i>  -->
                                <img src="assets/images/sidequest-white.webp" alt="" style="width:70px">
                                Get on Side Quest
                            </h4>
                        </a>
                        <a href="https://sidequestvr.com/app/41261 " target="_blank" class="axil-btn btn-fill-primary btn-large me-0 me-lg-3 mb-3" style="background-color: #dc3545;border: 1px solid #dc3545;--color-hover: #cf1a2b;">
                            <h4 class="mb-0">
                                <!-- <i class="fa-brands fa-meta"></i>  -->
                                <img src="assets/images/itchio.png" alt="" style="width:80px">
                                Get on itch.io
                            </h4>
                        </a>
                        <a href="javascript:;" class="axil-btn btn-fill-primary btn-large mb-3 d-flex flex-column align-items-center" style="background-color: #0082fb ;border: 1px solid #0082fb;--color-hover: #0d6efd;">
                            <h4 class="mb-0">
                                <i class="fa-brands fa-meta"></i> 
                                Get on Meta Store 
                            </h4>
                            <small>(Coming Soon)</small>
                        </a>
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
        <section class="section section-padding overlay-background" style="background-image:url('assets/images/bg-gofly.png');">
            <div class="container">
                <div class="section-heading">
                    <!-- <span class="subtitle">Gameplay</span> -->
                    <h2 class="title">Gameplay</h2>
                    <span class="subtitle">BASIC DRONE CONTROL</span>
                    <div class="d-flex flex-column flex-lg-row">
                        <div class="card bg-color-dark mb-2">
                            <div class="card-body p-0">
                                <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover;min-width:300px;max-width:450px;">
                                    <source src="assets/images/basic_control.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="card-footer">
                                <h4 class="mb-0">THROTTLE | YAW</h4>
                            </div>
                        </div>
                        <div class="card bg-color-dark mx-2  mb-2">
                            <div class="card-body p-0">
                                <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover;min-width:300px;max-width:450px;">
                                    <source src="assets/images/pitch_roll.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="card-footer">
                                <h4 class="mb-0">PITCH | ROLL</h4>
                            </div>
                        </div>
                        <div class="card bg-color-dark  mb-2">
                            <div class="card-body p-0">
                                <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover;min-width:300px;max-width:450px;">
                                    <source src="assets/images/combined.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="card-footer">
                                <h4 class="mb-0">COMBINATIONAL</h4>
                            </div>
                        </div>
                    </div>

                    <br>
                    
                    <span class="subtitle">DRONE SHOT TECHNIQUE</span>
                    <div class="d-flex  flex-column flex-lg-row justify-content-center">
                        <div class="card me-2 bg-color-dark  mb-2">
                            <div class="card-body p-0">
                                <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; min-width:300px;max-width:450px;">
                                    <source src="assets/images/poi_room.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="card-footer">
                                <h4 class="mb-0">Point of Interest</h4> <small>(Room)</small>
                            </div>
                        </div>
                        <div class="card me-2 bg-color-dark  mb-2">
                            <div class="card-body p-0">
                                <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; min-width:300px;max-width:450px;">
                                    <source src="assets/images/8pattern_room.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="card-footer">
                                <h4 class="mb-0">8 Pattern Technique</h4> <small>(Room)</small>
                            </div>
                        </div>
                        <div class="card me-2 bg-color-dark  mb-2">
                            <div class="card-body p-0">
                                <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; min-width:300px;max-width:450px;">
                                    <source src="assets/images/poi.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="card-footer">
                                <h4 class="mb-0">Point of Interest</h4>
                            </div>
                        </div>
                        <div class="card me-2  bg-color-dark  mb-2">
                            <div class="card-body p-0">
                                <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; min-width:300px;max-width:450px;">
                                    <source src="assets/images/8_patern.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="card-footer">
                                <h4 class="mb-0">8 Pattern Technique</h4>
                            </div>
                        </div>
                    </div>

                    <br>

                    <span class="subtitle">FREE FLY MODE</span>
                    <div class="d-flex flex-row justify-content-center">
                        <div class="card me-2 bg-color-dark">
                            <div class="card-body p-0">
                                <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; min-width:300px;max-width:450px">
                                    <source src="assets/images/freefly.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="card-footer">
                                <h4 class="mb-0">Free-Fly Mode</h4>
                            </div>
                        </div>
                    </div>

                </div>
               
            </div>
        </section>

        <section class="section section-padding" id="op-blog">
            <div class="container">
                <div class="section-heading">
                    <span class="subtitle">Brought to you by</span>
                </div>
                 <div class="d-flex  flex-column flex-lg-row justify-content-between">
                    <div>
                        <div class="card me-2 h-100">
                            <div class="card-body d-flex flex-row align-items-center justify-content-center">
                                <a href="https://ketupartstudio.com/" class="zoom-effect">
                                    <img src="assets/images/logo-ketupart.png" alt="Axil Logo" style="width: 200px;">
                                </a>
                            </div>
                        </div>
                        <p class="text-center">KetupArt Studio</p>
                    </div>
                    
                    <div>
                        <div class="card me-2 h-100">
                            <div class="card-body d-flex flex-row align-items-center justify-content-center">
                                <a href="https://dec4ir.com" class="zoom-effect">
                                    <img src="assets/images/logo-DEC4IR.png" alt="Axil Logo" style="width: 200px;">
                                </a>
                            </div>
                        </div>
                        <p class="text-center">Drone Edu Challenge IR 4.0</p>
                    </div>
                   

                    <div>
                        <div class="card me-2 h-100 text-center">
                            <div class="card-body d-flex flex-row align-items-center justify-content-center">
                                <a href="https://mdec.my" class="zoom-effect">
                                    <img src="assets/images/logo-mdec.png" alt="Axil Logo" style="width: 200px;">
                                </a>
                            </div>
                        </div>
                        <p class="text-center">Malaysia Digital Economy Corporation</p>
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
                            <a href="https://www.youtube.com/watch?v=v1ADPXHMi3Q" class="play-btn popup-youtube"><i class="fas fa-play"></i></a>
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