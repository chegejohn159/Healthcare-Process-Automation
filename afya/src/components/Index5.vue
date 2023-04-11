<template>
    <div class="main-wrapper">
        <layout-header4></layout-header4>
        <!-- Home Banner -->
            <div class="pharmacy-home-slider">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="../assets/img/slide1.jpg" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="../assets/img/slide2.jpg" alt="">
                        </div>
                    </div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="banner-wrapper">
                        <div class="banner-header text-center">
                            <h1>Search Doctor, Make an Appointment</h1>
                            <p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
                        </div>
                        <!-- Search -->
                        <div class="search-box">
                            <form>
                                <div class="form-group search-location">
                                    <input type="text" class="form-control" placeholder="Search Location">
                                    <span class="form-text">Based on your Location</span>
                                </div>
                                <div class="form-group search-info">
                                    <input type="text" class="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc">
                                    <span class="form-text">Ex : Dental or Sugar Check up etc</span>
                                </div>
                                <button type="submit" class="btn btn-primary search-btn mt-0"><i class="fas fa-search"></i> <span>Search</span></button>
                            </form>
                        </div>
                        <!-- /Search -->
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
            <!-- /Home Banner -->
        <looking></looking>
        <specialities :specialities="specialities"></specialities>
        <book-doctor :doctors="doctors"></book-doctor>
        <features></features>
        <blogs :blogs="blogs"></blogs>
        <layout-footer></layout-footer>
    </div>
</template>

<script>
import doctors from  "../assets/json/doctors.json";
import blogs from  "../assets/json/blogs.json";
import specialities from  "../assets/json/specialities.json";
export default {
           mounted() {


},
    data() {
        return {
            doctors: doctors,
            blogs: blogs,
            specialities: specialities
        }
    }
}
</script>