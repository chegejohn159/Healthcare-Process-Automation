<template>
     <!-- Availabe Features -->
           <section class="section section-features">
                <div class="container-fluid">
                   <div class="row">
                        <div class="col-md-5 features-img">
                            <img src="../assets/img/features/feature.png" class="img-fluid" alt="Feature">
                        </div>
                        <div class="col-md-7">
                            <div class="section-header">    
                                <h2 class="mt-2">Availabe Features in Our Clinic</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            </div>  
                            <div class="features-slider slider">
                                <!-- Slider Item -->
                                <div class="feature-item text-center">
                                    <img src="../assets/img/features/feature-01.jpg" class="img-fluid" alt="Feature">
                                    <p>Patient Ward</p>
                                </div>
                                <!-- /Slider Item -->
                                
                                <!-- Slider Item -->
                                <div class="feature-item text-center">
                                    <img src="../assets/img/features/feature-02.jpg" class="img-fluid" alt="Feature">
                                    <p>Test Room</p>
                                </div>
                                <!-- /Slider Item -->
                                
                                <!-- Slider Item -->
                                <div class="feature-item text-center">
                                    <img src="../assets/img/features/feature-03.jpg" class="img-fluid" alt="Feature">
                                    <p>ICU</p>
                                </div>
                                <!-- /Slider Item -->
                                
                                <!-- Slider Item -->
                                <div class="feature-item text-center">
                                    <img src="../assets/img/features/feature-04.jpg" class="img-fluid" alt="Feature">
                                    <p>Laboratory</p>
                                </div>
                                <!-- /Slider Item -->
                                
                                <!-- Slider Item -->
                                <div class="feature-item text-center">
                                    <img src="../assets/img/features/feature-05.jpg" class="img-fluid" alt="Feature">
                                    <p>Operation</p>
                                </div>
                                <!-- /Slider Item -->
                                
                                <!-- Slider Item -->
                                <div class="feature-item text-center">
                                    <img src="../assets/img/features/feature-06.jpg" class="img-fluid" alt="Feature">
                                    <p>Medical</p>
                                </div>
                                <!-- /Slider Item -->
                            </div>
                        </div>
                   </div>
                </div>
            </section>      
            <!-- /Availabe Features -->
            
</template>

<script>
export default {
       mounted() {

    if($('.features-slider').length > 0) {
        $('.features-slider').slick({
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            speed: 500,
            variableWidth: true,
            arrows: false,
            autoplay:false,
            responsive: [{
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 1
                  }

            }]
        });
    }

},

    }
</script>