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
        <!--=       Work Process Area Start     =-->
        <!--=====================================-->
        <section class="section section-padding bg-color-light pb--70">
            <div class="container">
                <div class="section-heading mb--90">
                    <span class="subtitle">Process</span>
                    <h2 class="title">Our Development Methodology</h2>
                    <p>Our comprehensive system design strategy ensures a perfectly crafted system for your business.</p>
                </div>
                <div class="process-work" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-1.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step One</span>
                        <h3 class="title">Requirements Elicitation</h3>
                        <p>This stage involves gathering and documenting the specific needs, goals, and functionalities of the system. It includes conducting interviews, workshops, and surveys with stakeholders to ensure a clear understanding of their requirements.</p>
                    </div>
                </div>
                <div class="process-work content-reverse" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-2.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step Two</span>
                        <h3 class="title">System Design</h3>
                        <p>In this phase, the requirements are transformed into a detailed system design. The architecture, modules, database structure, user interface, and other technical aspects are planned and documented. This stage acts as a blueprint for the development process.</p>
                    </div>
                </div>
                <div class="process-work" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-3.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step Three</span>
                        <h3 class="title">Development</h3>
                        <p>The development phase involves writing the code, implementing the system design, and building the required functionalities. Programmers and developers work together to create the software or application according to the defined requirements and design specifications.</p>
                    </div>
                </div>
                <div class="process-work content-reverse" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-4.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step four</span>
                        <h3 class="title">Testing</h3>
                        <p>Once the development is complete, thorough testing is conducted to identify and fix any defects or issues. Different testing techniques, such as unit testing, integration testing, and system testing, are employed to ensure that the system functions correctly and meets the specified requirements.</p>
                    </div>
                </div>
                <div class="process-work" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-3.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step Five</span>
                        <h3 class="title">Deployment</h3>
                        <p> After successful testing, the system is deployed to the production environment. This may involve setting up servers, databases, and other necessary infrastructure components. The deployment process ensures that the system is accessible and available to the end-users.</p>
                    </div>
                </div>
                <div class="process-work content-reverse" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-4.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step Six</span>
                        <h3 class="title">User Acceptance Testing</h3>
                        <p>During this stage, the system is tested by end-users to ensure it meets their expectations and fulfills the original requirements. Feedback is gathered, and any necessary adjustments or enhancements are made based on the users' input.</p>
                    </div>
                </div>
                <div class="process-work" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="100">
                    <div class="thumbnail paralax-image">
                        <img src="assets/abstract/media/others/process-3.png" alt="Thumbnail">
                    </div>
                    <div class="content">
                        <span class="subtitle">Step Seven</span>
                        <h3 class="title">System Delivery</h3>
                        <p> Once the system has passed user acceptance testing and all necessary modifications have been made, it is ready for final delivery. This involves providing the client with the fully functional system, along with any relevant documentation and user manuals.</p>
                    </div>
                </div>
            </div>
            <ul class="shape-group-17 list-unstyled">
                <li class="shape shape-1"><img src="assets/abstract/media/others/bubble-24.png" alt="Bubble"></li>
                <li class="shape shape-2"><img src="assets/abstract/media/others/bubble-23.png" alt="Bubble"></li>
                <li class="shape shape-3"><img src="assets/abstract/media/others/line-4.png" alt="Line"></li>
                <li class="shape shape-4"><img src="assets/abstract/media/others/line-5.png" alt="Line"></li>
                <li class="shape shape-5"><img src="assets/abstract/media/others/line-4.png" alt="Line"></li>
                <li class="shape shape-6"><img src="assets/abstract/media/others/line-5.png" alt="Line"></li>
            </ul>
        </section>
    </AbsractLayout>

</template>