<template>
    <div class="main-wrapper">
        <layout-header4></layout-header4>
        <home-banner></home-banner>
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
    data() {
        return {
            doctors: doctors,
            blogs: blogs,
            specialities: specialities
        }
    }
}
</script>