<script setup>
import AbsractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});
</script>

<template>
    <Head title="Immersive" />

    <AbsractLayout>

        <!--=====================================-->
        <!--=       Breadcrumb Area Start       =-->
        <!--=====================================-->
        <div class="breadcrum-area breadcrumb-banner" style="background-image: url('assets/abstract/media/banner/banner2.webp');background-size: cover;">
            <div class="container">
                <div class="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
                    <h1 class="title h2">Immersive Technology</h1>
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
                            <a class="nav-link" href="#section2">Virtual Reality</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#section3">Augmented Reality</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#section4">Mixed Reality</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#section5">Immersive Experiences</a>
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
                                <span class="subtitle">Experience Beyond Boundaries with Immersive Tech</span>
                            </div>
                            <p>                            
                                At KetupArt Studio, we excel in AR/VR development, crafting immersive experiences that push the boundaries of technology. Our dedicated team of developers and designers combines expertise with industry best practices to create captivating applications and simulations. Whether it's immersive virtual reality experiences or augmented reality integrations in real-world settings, we bring your visions to life. With a strong focus on user-centric design and optimal performance, our AR/VR solutions engage users, enhance brand experiences, and drive business growth.
                            </p>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="team-details-thumb">
                                <img class="paralax-image" src="assets/abstract/media/banner/immersive.jpg" alt="Thumbnail" style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg);">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Development Service -->
            <div class="section section-padding bg-color-light pb-5" id="section2">
                <div class="container">
                    <div class="section-heading heading-left mb--20 mb_md--70">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Virtual Reality</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-design.html">Enhanced Engagement</a></h5>
                                    <p class="mb-0">Virtual reality offers an immersive and interactive experience that engages users on a deeper level compared to traditional media. By leveraging VR solutions, businesses can captivate their audience, increase user engagement, and leave a lasting impression.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-development.html">Training and Simulation</a></h5>
                                    <p class="mb-0">VR is a powerful tool for training and simulation across various industries. We can provide a solution of realistic training scenarios, simulations, and interactive learning experiences, leading to better knowledge retention, skill development, and performance improvement among employees.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-content-strategy.html">Product Visualization and Prototyping</a></h5>
                                    <p class="mb-0">VR enables businesses to showcase products and prototypes in a virtual environment, allowing clients and stakeholders to visualize and interact with designs before they are finalized. The solutions can streamline product development, gather valuable feedback, and accelerate decision-making processes.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 " data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-content-strategy.html">Remote Collaboration and Communication</a></h5>
                                    <p class="mb-0">In an increasingly digital and remote work environment, VR facilitates seamless collaboration and communication that can bring teams together in virtual spaces, enabling real-time collaboration, brainstorming sessions, and immersive meetings regardless of geographical distances, fostering productivity and creativity.</p>
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
            </div>
            <!-- Online Marketing Service -->
            <div class="section section-padding pb-5" id="section3">
                <div class="container">
                    <div class="section-heading heading-left mb--20 mb_md--70">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Augmented Reality</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-design.html">Enhanced Customer Engagement</a></h5>
                                    <p class="mb-0">Augmented reality (AR) offers businesses a powerful tool to enhance customer engagement. By overlaying digital content onto the physical world, AR creates interactive and immersive experiences that captivate customers.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-development.html">Improved Product Visualization</a></h5>
                                    <p class="mb-0">AR enables businesses to showcase products in a dynamic and interactive manner. Boosting customer confidence but also reduces the likelihood of returns and enhances overall customer satisfaction.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-content-strategy.html">Efficient Training and Education</a></h5>
                                    <p class="mb-0">Businesses can use AR to create immersive training simulations, interactive manuals, and on-the-job guidance tools. This enhances employee learning experiences, improves retention of information, and accelerates skill development.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 " data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-content-strategy.html">Data-Driven Insights and Analytics</a></h5>
                                    <p class="mb-0">Businesses can gather analytics on how customers interact with AR experiences, track engagement metrics, and gain valuable feedback. This data-driven approach enables businesses to optimize AR experiences and make data-informed decisions to drive business growth.</p>
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
            </div>
            <!-- Business Service -->
            <div class="section section-padding bg-color-light pb-5" id="section4">
                <div class="container">
                    <div class="section-heading heading-left mb--20 mb_md--70">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Mixed Reality</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-design.html">Enhanced Visualization and Collaboration</a></h5>
                                    <p class="mb-0">Mixed reality enables users to visualize complex data, designs, and concepts in 3D environments, facilitating better understanding and decision-making.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-development.html">Immersive Training and Simulation</a></h5>
                                    <p class="mb-0">Business can simulate real-world scenarios, environments, and processes, providing hands-on training without the risks associated with traditional methods. This approach improves learning outcomes, reduces training costs, and enhances employee skills and confidence.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-content-strategy.html">Innovative Marketing and Customer Engagement</a></h5>
                                    <p class="mb-0">Business can develop immersive product demonstrations, virtual showrooms, and interactive experiences that captivate audiences and differentiate your brand. This innovative approach to marketing fosters deeper engagement, increases brand awareness, and drives customer loyalty.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 " data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                            <div class="blog-grid blog-without-thumb mb-3">
                                <div class="content">
                                    <h5 class="title"> <a href="service-content-strategy.html">Streamlined Product Development and Prototyping</a></h5>
                                    <p class="mb-0">Allow teams to visualize and iterate on designs in a virtual environment, reducing time-to-market and costs associated with physical prototyping. This streamlined approach improves product quality, innovation, and competitiveness in the market.</p>
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
            </div>
            <!-- Technology Service -->
            <div class="section section-padding" id="section5">
                <div class="container">
                    <div class="section-heading">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Immersive Experiences</h2>
                        <p class="w-100">"Clients should choose KetupArt Studio to embark on their journey in immersive technology because we offer cutting-edge solutions that combine creativity, expertise, and innovation, ensuring a transformative experience that captivates audiences, enhances collaboration, and drives measurable results, ultimately positioning them as leaders in their industry."</p>
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
                        <h3 class="title">Need a successful Immersive Technology?</h3>
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