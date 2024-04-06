<script setup>
import AbsractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});
</script>

<template>
    <Head title="Web Development" />

    <AbsractLayout>
        
        <section class="banner">
            <div class="container">
                <p>1. Our company specializes in professional web development services, delivering high-quality websites that are visually appealing, user-friendly, and optimized for performance.</p> 

                <p>2. With a team of skilled developers and designers, we offer comprehensive web development solutions tailored to meet your specific business needs and objectives.</p>  

                <p>3. From custom website design to responsive web development, we leverage the latest technologies and industry best practices to create engaging online experiences that leave a lasting impression on your target audience.</p>  

                <p>4. Our expertise in front-end and back-end development ensures seamless functionality, intuitive user interfaces, and robust backend systems that power your website's performance.</p>  

                <p>5. Whether you require an e-commerce platform, a content management system, or a corporate website, our web development services encompass a wide range of solutions to help you establish a strong online presence and drive business growth.</p>  
            </div>
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
                    </div>
                </div>
            </div>
            <ul class="list-unstyled shape-group-9">
                <li class="shape shape-1"><img src="assets/abstract/media/others/bubble-12.2.png" alt="Comments"></li>
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