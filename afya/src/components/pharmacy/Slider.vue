<template>
       <!-- Slider -->
            <section class="section full-slide-home">
                <div>
                    <div class="slick-wrapper">
                        <div class="slider-1">
                            <!--slide-->
                            <div class="col-12 d-flex">
                                <div class="slide-image col-12 col-lg-6">
                                    <span class="text-secondary text-uppercase d-block mb-3">Introducing Prime Doctors</span>
                                    <h2 class="mb-3">Hassle-free appoinments <br> with Prime Doctors</h2>
                                    <ul class="list-inline slide-ul">
                                        <li class="list-inline-item">Reasonable wait time</li>
                                        <li class="list-inline-item">Fixed Consultation Fee</li>
                                        <li class="list-inline-item">Consulation with the preferred doctor</li>
                                    </ul>
                                    <div class="d-inline-block">
                                        <router-link to="/patient/booking" class="btn book-btn1" tabindex="0">Book Now</router-link>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 d-flex justify-content-center">
                                    <img src="../../assets/img/doc-slide-1.png" alt="">
                                </div>
                            </div>
                            <!--/slide-->

                            <!--slide-->
                           <div class="col-12 d-flex">
                                <div class="slide-image col-12 col-lg-6">
                                    <span class="text-secondary text-uppercase d-block mb-3">Introducing Prime Doctors</span>
                                    <h2 class="mb-3">Hassle-free appoinments <br> with Prime Doctors</h2>
                                    <ul class="list-inline slide-ul">
                                        <li class="list-inline-item">Reasonable wait time</li>
                                        <li class="list-inline-item">Fixed Consultation Fee</li>
                                        <li class="list-inline-item">Consulation with the preferred doctor</li>
                                    </ul>
                                    <div class="d-inline-block">
                                        <router-link to="/patient/booking" class="btn book-btn1" tabindex="0">Book Now</router-link>
                                    </div>
                                </div>
                                <div class="col-6 col-12 col-lg-6 d-flex justify-content-center">
                                    <img src="../../assets/img/doc-slide-1.png" alt="">
                                </div>
                            </div>
                            <!--/slide-->
                        </div>
                    </div>
                </div>  
            </section>   
            <!-- Slider -->
</template>
<script>
export default {
        mounted() {

    // Slick Slider
    if($('.features-slider1').length == 1) {
        $('.features-slider1').slick({
            dots: false,
            infinite: true,
            centerMode: false,
            slidesToShow: 1,
            speed: 500,
            variableWidth: true,
            arrows: true,
            autoplay:false,
            responsive: [{
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 1
                  }

            }]
        });
    }
    if($('.slider-1').length > 0) {
        $('.slider-1').slick();
    }

}
    
   
}
</script>