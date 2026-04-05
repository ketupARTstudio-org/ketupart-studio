<script>

export default {
  mounted() {
    $('.isotope-list').isotope({
        filter: '.strategy'
    });
  }
}
</script>

<script setup>
import AbstractLayout from '@/Layouts/AbstractLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({

});

</script>

<template>
    <Head title="Cloud Computing" />

    <AbstractLayout>

        <!--=====================================-->
        <!--=       Breadcrumb Area Start       =-->
        <!--=====================================-->
        <div class="breadcrum-area breadcrumb-banner" style="background-image: url('assets/abstract/media/banner/banner4.webp');background-size: cover;">
            <div class="container">
                <div class="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
                    <h1 class="title h2">Cloud Computing</h1>
                    <p>Experience the power of cloud computing: optimizing performance, reducing costs, and accelerating innovation.</p>
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
                            <a class="nav-link" href="#section4">Cloud Transformation</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#section5">Ecosystem</a>
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
                                <span class="subtitle">Elevate Your Business with Cloud Computing Excellence</span>
                            </div>
                            <p>With a focus on delivering comprehensive cloud computing solutions designed to empower businesses with agility, scalability, and efficiency. Our cloud services encompass a wide range of offerings, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). From cloud infrastructure deployment and management to cloud-based application development and deployment, we tailor our services to meet the unique needs of each client. Our expertise in cloud technologies such as AWS, Azure, and Google Cloud ensures seamless migration, robust security, and optimized performance for your applications and data. Whether you're looking to optimize costs, improve flexibility, or enhance collaboration, our cloud solutions empower you to innovate and grow in the digital landscape.</p>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="team-details-thumb">
                                <img class="paralax-image" src="assets/abstract/media/banner/cloud5.gif" alt="Thumbnail" style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg);">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Development Service -->
            <div class="section section-padding bg-color-light" id="section2">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-heading">
                             
                                <h2 class="title">Our Capabilities</h2>
                                <span class="subtitle">Among our most significant capabilities:</span>
                        
                            </div>
                        </div>
                    </div>
                    <div class="axil-isotope-wrapper">
                        <div class="isotope-button isotope-project-btn text-center">
                            <button data-filter=".strategy" class="is-checked"><span class="filter-text">Cloud Strategy & Consulting</span></button>
                            <button data-filter=".data"><span class="filter-text">Data & AI on Cloud</span></button>
                            <button data-filter=".modern"><span class="filter-text">Application Modernization</span></button>
                            <button data-filter=".managed"><span class="filter-text">Managed Cloud Services</span></button>
                        </div>
                        <div class="row row-35 isotope-list">
                            <div class="col-md-12 project strategy">
                                <blockquote class="wp-block-quote mt-0">
                                    <div class="row">
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Cloud Strategy Development</h4>
                                            <p>We work closely with clients to understand their business objectives, challenges, and IT landscape. Our team formulates comprehensive cloud strategies aligned with your business goals, considering factors such as scalability, security, compliance, and cost-effectiveness.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Cloud Migration Planning</h4>
                                            <p>We assist in planning and executing seamless migration strategies to move your applications, data, and infrastructure to the cloud. Our approach focuses on minimizing disruption, optimizing performance, and maximizing the benefits of cloud technologies.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Optimization and Cost Management</h4>
                                            <p>Our experts analyze your cloud environment to identify opportunities for optimization and cost savings. We help you streamline resources, implement best practices, and leverage cost-effective cloud solutions without compromising performance or security.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Security and Compliance</h4>
                                            <p>Ensuring robust security and compliance measures is paramount in our cloud consulting services. We help design and implement security frameworks, data encryption, access controls, and compliance policies to protect your sensitive information and meet regulatory requirements.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Hybrid and Multi-Cloud Strategies</h4>
                                            <p>We develop strategies for integrating and managing hybrid and multi-cloud environments, providing flexibility, scalability, and resilience. Our approach enables you to leverage the strengths of different cloud platforms while maintaining interoperability and data consistency.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Continuous Improvement and Innovation</h4>
                                            <p>Our consulting services extend beyond initial deployment. We support ongoing monitoring, performance optimization, and continuous improvement initiatives. We also stay abreast of emerging cloud technologies and trends, advising on innovative solutions to drive business growth and competitiveness.</p>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                            <div class="col-md-12 project data">
                                <blockquote class="wp-block-quote mt-0">
                                    <div class="row">
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Data Management and Governance</h4>
                                            <p>Your company specializes in comprehensive data management solutions on the cloud, including data storage, processing, and governance. This involves designing and implementing data pipelines, ensuring data quality and integrity, and establishing robust governance frameworks to meet regulatory requirements and ensure data privacy and security.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Data Analytics and Insights</h4>
                                            <p>Leveraging advanced analytics tools and techniques on cloud platforms, your company helps clients derive actionable insights from their data. This includes data visualization, predictive analytics, and machine learning models that uncover patterns, trends, and opportunities, empowering businesses to make informed decisions and drive growth.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>AI Solutions Development</h4>
                                            <p>Your company excels in developing customized AI solutions on the cloud, ranging from natural language processing (NLP) and computer vision to recommendation engines and predictive modeling. These AI solutions are tailored to address specific business challenges, automate processes, enhance customer experiences, and unlock new revenue streams.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>AI Model Deployment and Management</h4>
                                            <p>Beyond development, your company offers expertise in deploying AI models on cloud infrastructure, ensuring scalability, reliability, and performance optimization. This includes continuous monitoring, tuning, and management of AI models to adapt to changing data patterns and maintain effectiveness over time.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Integration with Cloud Services</h4>
                                            <p>Your Data & AI services seamlessly integrate with other cloud services and technologies, such as IoT platforms, big data frameworks, and cloud-native applications. This integration enables a holistic approach to data management, analytics, and AI, harnessing the full potential of cloud computing for innovation and competitive advantage.</p>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                            <div class="col-md-12 project modern">
                                <blockquote class="wp-block-quote mt-0">
                                    <div class="row">
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Legacy System Assessment</h4>
                                            <p>We conduct a thorough assessment of your existing applications to identify legacy systems, outdated technologies, and areas for improvement. This assessment forms the basis for our modernization strategy.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Cloud Migration Strategy</h4>
                                            <p>We develop a strategic roadmap for migrating your applications to the cloud, considering factors such as scalability, security, compliance, and cost optimization. Our approach ensures a smooth transition with minimal disruption to your business operations.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Containerization and Microservices</h4>
                                            <p>Leveraging containerization technologies such as Docker and Kubernetes, we modularize your applications into microservices architecture. This enables flexibility, scalability, and easier management of individual components.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>API Integration and Modernization</h4>
                                            <p>We modernize your application interfaces by implementing API-driven architectures. This allows seamless integration with other systems, enhances interoperability, and enables rapid development of new features and functionalities.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>DevOps Automation</h4>
                                            <p>We implement DevOps practices and automation tools to streamline the development, testing, deployment, and monitoring of modernized applications. Continuous integration and delivery (CI/CD) pipelines ensure faster time-to-market and improved collaboration among development teams.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Performance Optimization</h4>
                                            <p>Our experts optimize the performance of modernized applications, leveraging cloud-native features such as auto-scaling, load balancing, and caching. This ensures optimal performance, reliability, and cost-efficiency in the cloud environment.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Security and Compliance</h4>
                                            <p>We prioritize security in every aspect of application modernization, implementing robust security measures, access controls, encryption, and compliance frameworks. Our solutions adhere to industry best practices and regulatory requirements, ensuring data protection and regulatory compliance.</p>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                            <div class="col-md-12 project managed">
                                <blockquote class="wp-block-quote mt-0">
                                    <div class="row">
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Infrastructure Management</h4>
                                            <p>Describe how your company handles the complete infrastructure management, including server provisioning, configuration, and maintenance, ensuring optimal performance and reliability.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Monitoring and Optimization</h4>
                                            <p>Highlight your proactive monitoring approach to detect issues early, optimize resource utilization, and ensure smooth operations while minimizing costs.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Security and Compliance</h4>
                                            <p>Emphasize your robust security measures, including data encryption, access controls, regular audits, and compliance with industry standards and regulations to protect sensitive information.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Backup and Disaster Recovery</h4>
                                            <p> Explain your backup strategies, data redundancy measures, and disaster recovery plans to ensure data integrity, minimize data loss, and quickly recover from unforeseen events.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>24/7 Support and SLA</h4>
                                            <p>Mention your round-the-clock support services, Service Level Agreements (SLAs), and dedicated support teams to provide prompt assistance, resolve issues, and meet service commitments.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Cost Optimization</h4>
                                            <p>Discuss how your managed services help clients optimize costs by providing scalable solutions, efficient resource allocation, and transparent pricing models tailored to their needs and budget.</p>
                                        </div>
                                        <div class="col-12 col-lg-6 mb-4">
                                            <h4>Performance Monitoring and Reporting</h4>
                                            <p>Describe your performance monitoring tools, regular performance assessments, and detailed reporting mechanisms to keep clients informed about their system's performance and improvements.</p>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Business Service -->
            <div class="section section-padding" id="section4">
                <div class="container">
                
                    <div class="row">
                        <div class="col-12">
                            <div class="section-heading mb-3">
                                    <h2 class="title">Cloud Transformation</h2>
                                    <span class="subtitle">Transform resiliency through cloud adoption</span>
                            </div>
                            <p>In today's dynamic business landscape, harnessing the power of cloud technology is not just advantageous but imperative for staying competitive and agile. Our cloud transformation services are designed to revolutionize how businesses operate, innovate, and grow in the digital era.</p>
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12 col-lg-4">
                                    <img src="assets/abstract/media/icon/icon-39.png" alt="" srcset="">
                                    <h5>Accelerated Digital Transformation and Innovation</h5>
                                    <p>By adopting cloud technologies, clients can accelerate their digital transformation initiatives. They gain the agility to innovate faster, launch new products and services, and respond swiftly to market changes and customer demands.</p>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <img src="assets/abstract/media/icon/icon-29.png" alt="" srcset="">
                                    <h5>Improved Agility, Scalability, and Flexibility</h5>
                                    <p>Cloud transformation enables clients to scale their resources up or down based on demand, ensuring optimal performance and cost-efficiency. They can quickly provision resources, experiment with new ideas, and adapt to evolving business needs without major infrastructure investments or limitations.</p>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <img src="assets/abstract/media/icon/icon-31.png" alt="" srcset="">
                                    <h5>Enhanced Data-Driven Decision-Making and Business Insights</h5>
                                    <p>Leveraging cloud-based data platforms and advanced analytics, clients can derive actionable insights from their data. They gain a deeper understanding of customer behavior, market trends, and operational performance, empowering informed decision-making and strategic planning.</p>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <img src="assets/abstract/media/icon/icon-32.png" alt="" srcset="">
                                    <h5>Strengthened Security Posture and Compliance Adherence</h5>
                                    <p>Your company's emphasis on cloud security ensures that clients' data and applications are protected against cyber threats. Robust security measures, encryption protocols, and access controls mitigate risks and ensure compliance with industry regulations and standards, enhancing trust and reputation.</p>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <img src="assets/abstract/media/icon/icon-32.png" alt="" srcset="">
                                    <h5>Cost Optimization and Operational Efficiency</h5>
                                    <p>Cloud transformation optimizes IT costs by eliminating the need for extensive infrastructure maintenance and upgrades. Clients benefit from pay-as-you-go models, where they only pay for the resources they use, leading to cost savings and improved operational efficiency.</p>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <img src="assets/abstract/media/icon/icon-32.png" alt="" srcset="">
                                    <h5>Seamless User Experiences and Customer Satisfaction</h5>
                                    <p>Cloud-native applications and services deliver seamless user experiences across devices and platforms. Clients can provide responsive, personalized services to their customers, driving satisfaction, loyalty, and competitive advantage in the market.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Technology Service -->
            <div class="section section-padding bg-color-light" id="section5">
                <div class="container">
                    <div class="section-heading">
                        <span class="subtitle">Service</span>
                        <h2 class="title">Ecosystem</h2>
                        <p class="w-100">KetupArt Studio advises, curates and orchestrates technologies from market-leading partners and innovators. Together, we provide scalable, fully integrated cloud solutions that deliver next-level results.</p>
                    </div>
                    <div class="d-flex flex-wrap justify-content-center">
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/awswhite.avif" alt="Brand" class="p-5" style="width:250px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/azure.png" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/gcp.png" alt="Brand" class="p-5" style="width:500px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/do.png" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/hetzner.png" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/vultr.png" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                        <div class="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="assets/abstract/media/brand/linode.png" alt="Brand" class="p-5" style="width:300px">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <strong>Our Ecosystem of Cloud Computing</strong>
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
    </AbstractLayout>

</template>