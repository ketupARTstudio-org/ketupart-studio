<script setup>
import AbsractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});
</script>

<template>
    <Head title="Game Development" />

    <AbsractLayout>

        <!--=====================================-->
        <!--=       Breadcrumb Area Start       =-->
        <!--=====================================-->
        <div class="breadcrum-area breadcrumb-banner" style="background-image: url('assets/abstract/media/banner/banner1.webp');background-size: cover;">
            <div class="container">
                <div class="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
                    <h1 class="title h2">Game Development</h1>
                    <p>At the forefront of innovation, crafting engaging gameplay that captivates hearts and minds.</p>
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
                            <a class="nav-link" href="#section3">Game Development</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#section4">Technology & Platform</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- Design Service -->
            <div class="section section-padding" id="section1">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="section-heading heading-left mb-3">
                                <h2 class="title">Overview</h2>
                                <span class="subtitle">Crafting Virtual Worlds, Unleash Your Imagination</span>
                            </div>
                            <p>At KetupArtStudio, we offer comprehensive game development services tailored to bring your gaming ideas to life. Our team of experienced professionals specializes in creating captivating and immersive gaming experiences across various platforms.</p>

                            <p>With expertise in game design, we craft visually stunning and engaging gameplay environments that captivate players and keep them coming back for more. From concept development to character design, our creative team ensures that every aspect of your game is meticulously designed to deliver an unforgettable gaming experience.</p>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="team-details-thumb">
                                <img class="paralax-image" src="assets/abstract/media/banner/gamedev.jpg" alt="Thumbnail" style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg);">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Development Service -->
            <div class="section section-padding bg-color-light" id="section2">
                <div class="container">
                    <div class="section-heading heading-left">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Our Capabilities</h2>
                        <div>
                            <p class="w-100">We leverage the latest technologies and industry best practices to develop robust and high-performance games. Our developers are proficient in various game engines and programming languages, allowing us to create games that run seamlessly across different devices and platforms.</p>

                            <p class="w-100">We understand the importance of gameplay mechanics and controls in delivering an enjoyable gaming experience. Our focus on intuitive and responsive controls ensures that players can easily navigate through your game, enhancing their immersion and enjoyment.</p>

                            <p class="w-100">From casual mobile games to complex multiplayer experiences, we have the expertise to handle projects of any scale. We collaborate closely with our clients throughout the development process, ensuring that their vision is brought to life while incorporating our industry knowledge and expertise.</p>

                            <p class="w-100">Whether you're an indie developer or a game studio, we provide end-to-end game development solutions, including concept ideation, prototyping, asset creation, programming, testing, and deployment. Our commitment to quality and client satisfaction ensures that we deliver games that exceed expectations.</p>

                            <p class="w-100">Partner with us to turn your game development dreams into reality. Let us take your gaming ideas and transform them into immersive, interactive, and unforgettable gaming experiences.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Online Marketing Service -->
            <div class="section section-padding" id="section3">
                <div class="container">
                    
                    <div class="row">
                        <div class="col-12">
                            <div class="section-heading mb-3">
                                    <h2 class="title">Game Development</h2>
                                    <span class="subtitle">From Concept to Creation: Navigating the Game Development Journey</span>
                            </div>
                            <p class="text-center">Blockchain technology offers robust security and privacy features that make it an ideal choice for various applications, from financial transactions to supply chain managemenal era.</p>

                        </div>
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12 col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/abstract/media/icon/icon-39.png" alt="" srcset="">
                                        <h5 class="mb-0">Cutting-edge Graphics and Visual Effects</h5>
                                    </div>
                   
                                    <p>Delivering immersive gaming experiences with stunning graphics, realistic animations, and captivating visual effects.</p>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/abstract/media/icon/icon-29.png" alt="" srcset="">
                                        <h5 class="mb-0">Engaging Gameplay Mechanics</h5> 
                                    </div>
                      
                                    <p>Creating compelling gameplay mechanics, interactive elements, and challenging levels that keep players engaged and coming back for more.</p>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/abstract/media/icon/icon-31.png" alt="" srcset="">
                                        <h5 class="mb-0">Multiplatform Compatibility</h5>
                                    </div>
                                 
                                    <p>Developing games that are compatible across multiple platforms, including PC, console, mobile, and virtual reality, ensuring a wide reach and accessibility for players.</p>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/abstract/media/icon/icon-32.png" alt="" srcset="">
                                        <h5 class="mb-0">Robust Multiplayer and Social Features</h5>
                                    </div>
                               
                                    <p>Implementing multiplayer modes, social integration, and community features that enhance player interaction, competitiveness, and social gaming experiences.</p>
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
                        <h2 class="title">Technology & Platform</h2>
                        <p class="w-100">Our game development process leverages cutting-edge technology platforms to create immersive and captivating gaming experiences.</p>
                        
                    </div>
                    <div class="d-flex flex-wrap justify-content-center">
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/unitywhite.webp" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <strong>Our Game Development Tool</strong>
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
    </AbsractLayout>

</template>