import { createApp } from 'vue';
import router from './router';
import store from './store';
import Vuex from 'vuex';

// import { FontAwesomeIcon } from './plugins/font-awesome'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/fontawesome/css/fontawesome.min.css'
import './assets/fontawesome/css/all.min.css'
// import { BarChart } from 'vue-morris'
// import { LineChart } from 'vue-morris'
import App from "./App.vue";
import LayoutHeader from './components/layouts/Header'

import TopHeader from './components/layouts/TopHeader'
import HeaderAdmin from './components/layouts/HeaderAdmin'
import HeaderPharmacyAdmin from './components/layouts/HeaderPharmacyAdmin'
import SidebarPharmacyAdmin from './components/layouts/SidebarPharmacyAdmin'
import SidebarAdmin from './components/layouts/SidebarAdmin'
import LayoutHeader1 from './components/layouts/Header1'
import LayoutHeader2 from './components/layouts/Header2'
import LayoutHeader3 from './components/layouts/patient/Header'
import LayoutFooter from './components/layouts/Footer'

import Sidebar from './components/layouts/doctors/SideBar'
import Sidebar1 from './components/layouts/patient/SideBar'
import HomeBanner from './components/HomeBanner'
import Looking from './components/Looking'
import Specialities from './components/Specialities'
import BrowseSpecialities from './components/BrowseSpecialities'
import BookDoctor from './components/BookDoctor'
import BestDoctor from './components/BestDoctor'
import Loader from './components/Loader'
import Features from './components/Features'
import Blogs from './components/Blogs'
import LatestPosts from './components/doctor/LatestPosts'
import BlogCategories from './components/doctor/BlogCategories'
import LastBooking from './components/doctor/LastBooking'
import PatientInformation from './components/doctor/PatientInformation'
import Tags from './components/doctor/Tags'
import SearchBar from './components/doctor/SearchBar'
import Slider from './components/pharmacy/Slider'
import SearchFilter from './client/SearchFilter'
import SearchFilter1 from './components/pharmacy/SearchFilter'
import SearchFilter2 from './components/breadcrumb/ProductsFilter'

/** Breadcrumbs **/
import BreadCrumb from './components/breadcrumb/Dashboard'
import BreadCrumb1 from './components/breadcrumb/Appointments'
import BreadCrumb2 from './components/breadcrumb/MyPatients'
import BreadCrumb3 from './components/breadcrumb/ScheduleTimings'
import BreadCrumb4 from './components/breadcrumb/Invoices'
import BreadCrumb5 from './components/breadcrumb/Reviews'
import BreadCrumb6 from './components/breadcrumb/ProfileSettings'
import BreadCrumb7 from './components/breadcrumb/SocialMedia'
import BreadCrumb8 from './components/breadcrumb/ChangePassword'
import BreadCrumb9 from './components/breadcrumb/DoctorProfile'
import BreadCrumb10 from './components/breadcrumb/SearchDoctor'
import BreadCrumb11 from './components/breadcrumb/DoctorBlog'
import BreadCrumb12 from './components/breadcrumb/AddBlog'
import BreadCrumb13 from './components/breadcrumb/BlogDetails'
import BreadCrumb14 from './components/breadcrumb/BlogList'
import BreadCrumb15 from './components/breadcrumb/BlogGrid'
import BreadCrumb16 from './components/breadcrumb/Booking'
import BreadCrumb17 from './components/breadcrumb/Checkout'
import BreadCrumb18 from './components/breadcrumb/Favourites'
import BreadCrumb19 from './components/breadcrumb/AddDependent'
import BreadCrumb20 from './components/breadcrumb/Pharmacy'
import BreadCrumb21 from './components/breadcrumb/PharmacyDetails'
import BreadCrumb22 from './components/breadcrumb/PharmacySearch'
import BreadCrumb23 from './components/breadcrumb/Product'
import BreadCrumb24 from './components/breadcrumb/ProductDescription'
import BreadCrumb25 from './components/breadcrumb/Cart'
import BreadCrumb26 from './components/breadcrumb/PaymentSuccess'
import BreadCrumb27 from './components/breadcrumb/Calender'
import BreadCrumb28 from './components/breadcrumb/Components'
import BreadCrumb29 from './components/breadcrumb/InvoiceView'
import BreadCrumb30 from './components/breadcrumb/Blank'
import BreadCrumb31 from './components/breadcrumb/EditDependent'
import BreadCrumb32 from './components/breadcrumb/Profile'
import BreadCrumb33 from './components/breadcrumb/AddPrescription'
import BreadCrumb34 from './components/breadcrumb/AddBilling'
import BreadCrumb35 from './components/breadcrumb/EditPrescription'
import BreadCrumb36 from './components/breadcrumb/EditBilling'
import BreadCrumb37 from './components/breadcrumb/EditBlog'
import BreadCrumb38 from './components/breadcrumb/TermCondition'
import BreadCrumb39 from './components/breadcrumb/PrivacyPolicy'
import jquery from 'jquery';
window.$ = jquery

if(window.location.href.includes("template/pharmacyadmin")) {
  require('./assets/plugins/select2/css/select2.min.css');
  require('./assets/plugins/select2/js/select2.min.js');
  require('./assets/css/bootstrap-datetimepicker.min.css');
  require('./assets/js/bootstrap-datetimepicker.min.js');
  require('./assets/PharmacyAdminStyle.css');
  require('./assets/css/bootstrap4.min.css')
  // require('./assets/css/dataTables.bootstrap4.min.css')
  // require('./assets/css/jquery.dataTables.min.js')
  // require('./assets/css/dataTables.bootstrap4.min.js')
} else if(window.location.href.includes("template/admin")) {
  require('./assets/plugins/select2/css/select2.min.css');
  require('./assets/plugins/select2/js/select2.min.js');
  require('./assets/css/bootstrap-datetimepicker.min.css');
  require('./assets/js/bootstrap-datetimepicker.min.js');
  require('./assets/AdminStyle.css');
  require('./assets/css/bootstrap4.min.css')
  // require('./assets/css/dataTables.bootstrap4.min.css')
  // require('./assets/css/jquery.dataTables.min.js')
  // require('./assets/css/dataTables.bootstrap4.min.js')
}else if(!window.location.href.includes("template/admin") && !window.location.href.includes("template/pharmacyadmin")) {
    require('./assets/js/jquery.min.js');
  require('./assets/plugins/select2/css/select2.min.css');
  require('./assets/plugins/select2/js/select2.min.js');
  require('./assets/css/bootstrap-datetimepicker.min.css');
  require('./assets/css/owl.carousel.min.css');
  require('./assets/js/owl.carousel.min.js');
  require('./assets/js/slick.js');
  require('./assets/plugins/apex/apexcharts.css');
  require('./assets/js/bootstrap-datetimepicker.min.js');
  require('./assets/js/circle-progress.min.js');
  // require('./assets/plugins/dropzone/dropzone.min.css');
  // require('./assets/plugins/dropzone/dropzone.min.js');
  require('./assets/plugins/fancybox/jquery.fancybox.min.css');
  require('./assets/plugins/fancybox/jquery.fancybox.min.js');
  // require('./assets/plugins/daterangepicker/daterangepicker.css');
  // require('./assets/plugins/daterangepicker/daterangepicker.js');
  require('./assets/plugins/bootstrap-tagsinput/css/bootstrap-tagsinput.css');
  require('./assets/plugins/bootstrap-tagsinput/js/bootstrap-tagsinput.js');
  require('./assets/plugins/fullcalendar/fullcalendar.min.css');
  require('./assets/plugins/jquery-ui/jquery-ui.min.js');
  require('./assets/plugins/apex/apexcharts.min.js');
  require('./assets/plugins/fullcalendar/fullcalendar.min.js');
  require('./assets/plugins/swiper/css/swiper.min.css');
  require('./assets/plugins/swiper/js/swiper.min.js');
  require('./assets/style.css');
}

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import setupInterceptors from './services/setupInterceptors';

setupInterceptors(store);

import Raphael from 'raphael/raphael'
global.Raphael = Raphael
const app = createApp(App)


/*Global Components */
app.use(VueSweetalert2);
// app.component("font-awesome-icon", FontAwesomeIcon)
app.component('Loading', Loading);
app.component('layout-header', LayoutHeader);
app.component('top-header', TopHeader);
app.component('header-admin', HeaderAdmin);
app.component('header-pharmacy-admin', HeaderPharmacyAdmin);
app.component('sidebar-admin', SidebarAdmin);
app.component('sidebar-pharmacy-admin', SidebarPharmacyAdmin);
app.component('layout-header1', LayoutHeader1);
app.component('layout-header2', LayoutHeader2);

app.component('sidebar', Sidebar);
app.component('sidebar1', Sidebar1);
app.component('layout-footer', LayoutFooter);

app.component('home-banner', HomeBanner);
app.component('looking', Looking);
app.component('specialities', Specialities);
app.component('browse-specialities', BrowseSpecialities);
app.component('last-booking', LastBooking);
app.component('patient-information', PatientInformation);
app.component('book-doctor', BookDoctor);
app.component('best-doctor', BestDoctor);
app.component('features', Features);

app.component('search-filter', SearchFilter);

app.component('tags', Tags);
app.component('search-bar', SearchBar);
app.component('slider', Slider);
app.component('loader', Loader);

/* BreadCrumbs */
app.component('breadcrumb', BreadCrumb);
app.component('breadcrumb1', BreadCrumb1);
app.component('breadcrumb2', BreadCrumb2);
app.component('breadcrumb3', BreadCrumb3);
app.component('breadcrumb4', BreadCrumb4);
app.component('breadcrumb5', BreadCrumb5);
app.component('breadcrumb6', BreadCrumb6);
app.component('breadcrumb7', BreadCrumb7);
app.component('breadcrumb8', BreadCrumb8);
app.component('breadcrumb9', BreadCrumb9);
app.component('breadcrumb10', BreadCrumb10);
app.component('breadcrumb11', BreadCrumb11);
app.component('breadcrumb12', BreadCrumb12);
app.component('breadcrumb13', BreadCrumb13);
app.component('breadcrumb14', BreadCrumb14);
app.component('breadcrumb15', BreadCrumb15);
app.component('breadcrumb16', BreadCrumb16);
app.component('breadcrumb17', BreadCrumb17);
app.component('breadcrumb18', BreadCrumb18);
app.component('breadcrumb19', BreadCrumb19);
app.component('breadcrumb20', BreadCrumb20);
app.component('breadcrumb21', BreadCrumb21);
app.component('breadcrumb22', BreadCrumb22);
app.component('breadcrumb23', BreadCrumb23);
app.component('breadcrumb24', BreadCrumb24);
app.component('breadcrumb25', BreadCrumb25);
app.component('breadcrumb26', BreadCrumb26);
app.component('breadcrumb27', BreadCrumb27);
app.component('breadcrumb28', BreadCrumb28);
app.component('breadcrumb29', BreadCrumb29);
app.component('breadcrumb30', BreadCrumb30);
app.component('breadcrumb31', BreadCrumb31);
app.component('breadcrumb32', BreadCrumb32);
app.component('breadcrumb33', BreadCrumb33);
app.component('breadcrumb34', BreadCrumb34);
app.component('breadcrumb35', BreadCrumb35);
app.component('breadcrumb36', BreadCrumb36);
app.component('breadcrumb37', BreadCrumb37);
app.component('breadcrumb38', BreadCrumb38);
app.component('breadcrumb39', BreadCrumb39);


app.use(Vuex);

app.use(router)
app.use(store)
.mount('#app');