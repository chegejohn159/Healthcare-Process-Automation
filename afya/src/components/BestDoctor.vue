<template>
   <!-- Popular Section -->
        <section class="section section-doctor">
            <div class="container-fluid">
                <div class="section-header text-center">
                    <h2>Our Best Doctor</h2>
                    <p class="sub-title">This section shows most of our high ranked and highly recommended doctors by our patients</p>
                </div>
                <div class="row">
                    <div class="col-lg-12 best_doctors-section">
                        <div v-if="best_doctors.length" class="doctor-slider slider">
                            <div v-for="item in best_doctors" :key="item.id" class="item">
                                <div class="our-doctors-card">
                                    <div class="doctors-header">
                                        <a href="#"><img src="../assets/img/doctors/doctor-02.jpg" alt="" class="img-fluid"></a>
                                        <div class="img-overlay">
                                            <span>$20 - $50</span>
                                        </div>
                                    </div>
                                    <div class="doctors-body">
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <span class="d-inline-block average-ratings">3.5</span>
                                        </div>
                                        <router-link to="/doctor/profile"><h4>Darren</h4></router-link>
                                        <p>BDS, MDS - Oral & Maxillofacial Surgery</p>
                                        <div class="location d-flex">
                                            <p><i class="fas fa-map-marker-alt"></i> Nairobi</p>
                                            <p class="ml-auto"> <i class="fas fa-user-md"></i> 20</p>
                                        </div>
                                        <div class="row row-sm">
                                            <div class="col-6">
                                                <router-link to="/doctor/profile" class="btn view-btn" tabindex="0">View Profile</router-link>
                                            </div>
                                            <div class="col-6">
                                                <router-link to="/patient/booking" class="btn book-btn" tabindex="0">Book Now</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div v-else>
							<h4 class="empty-best_doctors-list"> Best doctors list empty</h4>
						</div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /Popular Section -->
</template>
<script>
export default {
    data() {
        return {
            best_doctors: []
        }
    },
       mounted() {

        if($('.doctor-slider').length > 0) {
                $('.doctor-slider').slick({
                    dots: false,
                    autoplay:false,
                    infinite: true,
                    variableWidth: true,
                });
            }

},

    }
</script>

<style scoped>
.empty-best_doctors-list {
	color: #86898b;
    font-size: 26px;
    font-weight: 500;
}
.best_doctors-section {
	margin: auto;
    text-align-last: center;
}
</style>