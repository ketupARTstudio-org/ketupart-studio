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
            <!--=       Breadcrumb Area Start       =-->
            <!--=====================================-->
            <div class="breadcrum-area">
                <div class="container">
                    <div class="breadcrumb section-heading heading-left">
                        <ul class="list-unstyled">
                            <li><Link href="/">Home</Link></li>
                            <li class="active">Case Study</li>
                        </ul>
                        <h1 class="title h2">eCommerce Marketing Statistics You Should Know in 2021.</h1>
                        <p class="">sdgfsdgsdg sdfafaegfwe fgqe fqwegfqw egfwefwqefwef</p>
                    </div>
                </div>
                <ul class="shape-group-8 list-unstyled">
                    <li class="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100"><img src="/assets/abstract/media/others/bubble-9.png" alt="Bubble"></li>
                    <li class="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200"><img src="/assets/abstract/media/others/bubble-11.png" alt="Bubble"></li>
                    <li class="shape shape-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300"><img src="/assets/abstract/media/others/line-4.png" alt="Line"></li>
                </ul>
            </div>
            <!--=====================================-->
            <!--=        Blog Area Start       	    =-->
            <!--=====================================-->
            <section class="section-padding-equal pb-0">
                <div class="container">
                    <div class="row row-40">
                        <div class="col-lg-12">
                            <div class="single-blog single-blog-gallery">
                                <div class="single-blog-content blog-grid blog-thumb-slide">
                                    <div class="post-thumbnail">
                                        <div class="slick-slider slick-arrow-nav slick-dot-nav" data-slick='{"infinite": true, "autoplay": true, "arrows": true, "dots": true, "slidesToShow": 1}'>
                                            <div class="slick-slide">
                                                <img src="/assets/abstract/media/blog/blog-3.png" alt="Blog" class="w-100">
                                            </div>
                                            <div class="slick-slide">
                                                <img src="/assets/abstract/media/blog/blog-4.png" alt="Blog" class="w-100">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="author">
                                        <div class="author-thumb">
                                            <img src="/assets/abstract/media/blog/author-1.png" alt="Blog Author">
                                        </div>
                                        <div class="info">
                                            <h6 class="author-name">Theresa Underwood</h6>
                                            <ul class="blog-meta list-unstyled">
                                                <li>Sep 10, 2021</li>
                                                <li>9 min to read</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.</p>
                                    <p>Habitasse per feugiat aliquam luctus accumsan curae, suspendisse aliquam taciti eros neque, aenean sit iaculis risus commodo ut sociosqu rhoncus potenti tristique placerat sit tempus, duis erat feugiat cras sociosqu porta ut praesent, fermentum donec convallis tellus vulputate duis nibh rhoncus phasellus dui massa nisl.</p>
                                    <p> Whether you’re kicking off a new campaign or looking to revamp your strategy, the lessons you’ll learn will be universal to all small business email marketing.</p>
                                    <p class="mb--80">MailChimp is an email marketing service provider founded in 2001. It has 9 million users that collectively send over 15 billion emails through the service each month.</p>
                                    <h3 class="title mb--30">Habitasse per feugiat aliquam luctus</h3>
                                    <p>Email is a crucial channel in any marketing mix, and never has this been truer than for today’s entrepreneur. Curious what to say? How to say it? How often to hit “send”? Each bite-sized lesson delivers core concepts, guiding questions, and tactical how-to resources.</p>
                                    <p>Whether you’re kicking off a new campaign or looking to revamp your strategy, the lessons you’ll learn will be universal to all small business email marketing.</p>
                                    <div class="blog-grid blog-without-thumb mt--80">
                                        <blockquote>
                                            <h5 class="title"><a href="single-blog.html">“ Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. ”</a></h5>
                                        </blockquote>
                                        <div class="author">
                                            <div class="info">
                                                <h6 class="author-name">Theresa Underwood</h6>
                                                <ul class="blog-meta list-unstyled">
                                                    <li>Aug 27, 2019</li>
                                                    <li>9 min to read</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 class="title mb--30">Habitasse per feugiat aliquam luctus accumsan curae</h3>
                                    <p>Email is a crucial channel in any marketing mix, and never has this been truer than for today’s entrepreneur. Curious what to say? How to say it? How often to hit “send”? Each bite-sized lesson delivers core concepts, guiding questions, and tactical how-to resources. Email is a crucial channel in any marketing mix, and never has this been truer than for today’s entrepreneur.</p>
                                    <p> Curious what to say? How to say it? How often to hit “send”? Each bite-sized lesson delivers core concepts, guiding questions, and tactical how-to resources.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--=====================================-->
            <!--=       Recent Post Area Start      =-->
            <!--=====================================-->
            <section class="section section-padding-equal pt-0 related-blog-area pb-0">
                <div class="container">
                    <div class="section-heading heading-left">
                        <h3 class="title">Related Case Studies</h3>
                    </div>
                    <div class="slick-slider recent-post-slide" data-slick='{"infinite": true, "autoplay": true, "arrows": false, "dots": false, "slidesToShow": 2,
                    "responsive": [
                        {
                            "breakpoint": 1199,
                            "settings": {
                                "slidesToShow": 1
                            }
                        }
                    ]
                    }'>
                        <div class="slick-slide">
                            <div class="blog-list">
                                <div class="post-thumbnail">
                                    <a href="single-blog.html"><img src="/assets/abstract/media/blog/blog-1.png" alt="Blog Post"></a>
                                </div>
                                <div class="post-content">
                                    <h5 class="title"><a href="single-blog-2.html">How To Use a Remarketing Strategy To Get More</a></h5>
                                    <p>Demand generation is a constant struggle for any business. Each marketing strategy you employ has...</p>
                                    <a href="single-blog-2.html" class="more-btn">Learn more<i class="far fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="slick-slide">
                            <div class="blog-list">
                                <div class="post-thumbnail">
                                    <a href="single-blog.html"><img src="/assets/abstract/media/blog/blog-2.png" alt="Blog Post"></a>
                                </div>
                                <div class="post-content">
                                    <h5 class="title"><a href="single-blog-3.html">SEO Statistics You Should Know in 2021</a></h5>
                                    <p>Organic search has the potential to capture more than 40 percent of your gross revenue...</p>
                                    <a href="single-blog-3.html" class="more-btn">Learn more<i class="far fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="slick-slide">
                            <div class="blog-list">
                                <div class="post-thumbnail">
                                    <a href="single-blog.html"><img src="/assets/abstract/media/blog/blog-1.png" alt="Blog Post"></a>
                                </div>
                                <div class="post-content">
                                    <h5 class="title"><a href="single-blog-2.html">How To Use a Remarketing Strategy To Get More</a></h5>
                                    <p>Demand generation is a constant struggle for any business. Each marketing strategy you employ has...</p>
                                    <a href="single-blog-2.html" class="more-btn">Learn more<i class="far fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </AbstractLayout>

</template>

