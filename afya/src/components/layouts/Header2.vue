<template>
    <!-- Header -->
    <header class="header">
        <nav class="navbar navbar-expand-lg header-nav">
            <div class="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                    <span class="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
                <router-link to="/" class="navbar-brand logo">
                    <!-- <img src="../../assets/img/logo.png" class="img-fluid" alt="Logo"> -->
                    AfyaYetu
                </router-link>
            </div>
            <div class="main-menu-wrapper">
                <div class="menu-header">
                    <router-link to="/" class="menu-logo">
                        <!-- <img src="../../assets/img/logo.png" class="img-fluid" alt="Logo"> -->
                        AfyaYetu
                    </router-link>
                    <a id="menu_close" class="menu-close" href="javascript:void(0);">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
                <ul class="main-nav">
                    <li class="" :class=" homeMenu ? 'active' : 'notactive'">
                        <router-link to="/">Home </router-link>
                    </li>

                     <li class="" :class=" aboutUs ? 'active' : 'notactive'">
                        <router-link to="/about-us">About us </router-link>
                    </li>

                     <li class="" :class=" team ? 'active' : 'notactive'">
                        <router-link to="/team">Our Team </router-link>
                    </li>

                    <li :class="currentPath == 'doctor-search' ? 'active' : 'notactive'"><router-link to="/doctor/search">Search Doctors</router-link></li>

                    <li v-if="loggedIn === false" class="login-link">
                        <router-link to="/login">Login / Signup</router-link>
                    </li>
                </ul>
            </div>
            <ul class="nav header-navbar-rht">
                <li class="nav-item contact-item">
                    <div class="header-contact-img">
                        <i class="far fa-hospital"></i>
                    </div>
                    <div class="header-contact-detail">
                        <p class="contact-header">Contact</p>
                        <p class="contact-info-header"> afyayetu.net@gmail.com</p>
                    </div>
                </li>
                <li v-if="loggedIn === false" class="nav-item">
                    <router-link class="nav-link header-login router-link-exact-active active"  to="/login">Login / Signup</router-link>
                    </li>
                <li v-if="loggedIn === true" class="nav-item dropdown has-arrow logged-item">
                        <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                            <span class="user-img">
                                <img class="rounded-circle" src="../../assets/img/doctors/doctor-thumb-02.jpg" width="31" alt="Darren Elder">
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="user-header">
                                <div class="avatar avatar-sm">
                                    <img src="../../assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                                <div class="user-text">
                                    <h6>{{user.username}}</h6>
                                    <!-- <p class="text-muted mb-0">Doctor</p> -->
                                </div>
                            </div>
                            <router-link class="dropdown-item" to="/doctor/index">Dashboard</router-link>
                            <router-link class="dropdown-item" to="/doctor/profile-settings">Profile Settings</router-link>
                             <a  class="dropdown-item" v-on:click="initLogout()">Logout</a>
                        </div>
                    </li>
            </ul>
        </nav>
    </header>
    <!-- /Header -->
</template>
<script>

export default {

        data () {
      return {
        // showRecorder: true,
        user: this.$store.state.auth.user

      }
    },


        mounted() {
			var $wrapper = $('.main-wrapper');


            $('.main-nav a').on('click', function(e) {

                    if($(this).parent().hasClass('has-submenu')) {
                        e.preventDefault();
                    }
                    if(!$(this).hasClass('submenu')) {
                        $('ul', $(this).parents('ul:first')).slideUp(350);
                        $('a', $(this).parents('ul:first')).removeClass('submenu');
                        $(this).next('ul').slideDown(350);
                        $(this).addClass('submenu');
                    } else if($(this).hasClass('submenu')) {
                        $(this).removeClass('submenu');
                        $(this).next('ul').slideUp(350);
                    }

                    $('html').removeClass('menu-opened');
                    $('.sidebar-overlay').removeClass('opened');
                    $('main-wrapper').removeClass('slide-nav');
                });

            $('body').append('<div class="sidebar-overlay"></div>');
            $(document).on('click', '#mobile_btn', function() {
                $wrapper.toggleClass('slide-nav');
                $('.sidebar-overlay').toggleClass('opened');
                $('html').addClass('menu-opened');
                $('#task_window').removeClass('opened');
                return false;
            });

            $(document).on('click', '#menu_close', function() {
                $('html').removeClass('menu-opened');
                $('.sidebar-overlay').removeClass('opened');
                $('main-wrapper').removeClass('slide-nav');
            });
           $('.main-nav ul li:not(.submenu) a').click(function(){
            $("html").removeClass('menu-opened');
            $(".sidebar-overlay").removeClass('opened');
        });

    	},
        computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
       currentPath() {
           return this.$route.name
       },
       homeMenu() {
           return this.$route.name == 'index' || this.$route.name == 'index-5'   || this.$route.name == 'index-6'        || this.$route.name == 'index-8'     || this.$route.name == 'index-7'  || this.$route.name == 'index-1' || this.$route.name == 'index-page' ||  this.$route.name == 'index-2' ||  this.$route.name == 'index-3' ||  this.$route.name == 'index-4';
       },
       team() {
           return this.$route.name == 'team' ;
       },
       aboutUs() {
           return this.$route.name == 'about-us';
       },

    },
    methods: {
       dashboard(value) {
           if(value == 1) {
               let router = this.$router.resolve({path: '/admin/index'});
               window.open(router.href, '_blank');
           } else {
               let router = this.$router.resolve({path: '/pharmacyadmin/index'});
               window.open(router.href, '_blank');
           }
       },
        initLogout() {
            this.$store.dispatch('auth/logout')
            this.$router.push('/login');
        }
   }
}
</script>