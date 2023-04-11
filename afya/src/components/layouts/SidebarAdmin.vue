<template>
        <!-- Sidebar -->
        <div class="sidebar" id="sidebar">
        
            <div class="sidebar-inner">
                 <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title"> 
                            <span>Main</span>
                        </li>
                        <li> 
                        <router-link to="/admin/index"> <i data-feather="home"></i> <span>Dashboard</span></router-link>  
                        </li>
                        <li> 
                        <router-link to="/admin/appointmentlist"><i data-feather="layout"></i><span>Appointments</span></router-link>
                        </li>
                        <li> 
                            <router-link to="/admin/specialities"><i data-feather="users"></i> <span>Specialities</span></router-link>
                        </li>
                        <li> 
                            <router-link to="/admin/doctorlist"><i data-feather="user-plus"></i> <span>Doctors</span></router-link>
                        </li>
                        <li> 
                            <router-link to="/admin/patientlist"><i data-feather="user"></i><span>Patients</span></router-link>
                        </li>
                        <li> 
                            <router-link to="/admin/reviews"><i data-feather="star"></i> <span>Reviews</span></router-link>
                        </li>
                        <li> 
                            <router-link to="/admin/transactionslist"><i data-feather="bar-chart-2"></i> <span>Transactions</span></router-link>
                        </li>
                        <li> 
                            <router-link to="/admin/settings"><i data-feather="map"></i> <span>Settings</span></router-link>
                        </li>
                        <li class="submenu">
                            <a href="#"><i data-feather="book"></i> <span> Reports</span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><router-link to="/admin/invoicereport">Invoice Reports</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-title"> 
                            <span>Pages</span>
                        </li>
                        <li class="submenu">
                            <a href="#"><i data-feather="book"></i> <span> Blog </span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><router-link to="/admin/blog"> Blog </router-link></li>
                                <li><router-link to="/admin/blogdetails"> Blog Details</router-link></li>
                                <li><router-link to="/admin/addblog"> Add Blog </router-link></li>
                                <li><router-link to="/admin/editblog"> Edit Blog </router-link></li>
                            </ul>
                        </li>
                        <li><router-link to="/admin/productlist"><i data-feather="layout"></i> <span>Product List</span></router-link></li>
                        <li><router-link to="/admin/pharmacylist"><i data-feather="map"></i> <span>Pharmacy List</span></router-link></li>
                        <li> 
                            <router-link to="/admin/profile"><i data-feather="user-plus"></i><span>Profile</span></router-link>
                        </li>
                        <li class="submenu">
                            <a href="#"><i data-feather="book"></i> <span> Authentication </span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><router-link to="/admin/login"> Login </router-link></li>
                                <li><router-link to="/admin/register"> Register </router-link></li>
                                <li><router-link to="/admin/forgotpassword"> Forgot Password </router-link></li>
                                <li><router-link to="/admin/lockscreen"> Lock Screen </router-link></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><i data-feather="x-circle"></i> <span> Error Pages </span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><router-link to="/admin/error404">404 Error </router-link></li>
                                <li><router-link to="/admin/error500">500 Error </router-link></li>
                            </ul>
                        </li>
                        <li> 
                            <router-link to="/admin/blankpage"><i data-feather="file"></i>  <span>Blank Page</span></router-link>
                        </li>
                        <li class="menu-title"> 
                            <span>UI Interface</span>
                        </li>
                        <li> 
                            <router-link to="/admin/components"><i data-feather="map"></i> <span>Components</span></router-link>
                        </li>
                        <li class="submenu">
                            <a href="#"><i data-feather="layout"></i> <span> Forms </span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><router-link to="/admin/formbasicinputs">Basic Inputs </router-link></li>
                                <li><router-link to="/admin/forminputgroups">Input Groups </router-link></li>
                                <li><router-link to="/admin/formhorizontal">Horizontal Form </router-link></li>
                                <li><router-link to="/admin/formvertical"> Vertical Form </router-link></li>
                                <li><router-link to="/admin/formmask"> Form Mask </router-link></li>
                                <li><router-link to="/admin/formvalidation"> Form Validation </router-link></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><i data-feather="credit-card"></i> <span> Tables </span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><router-link to="/admin/tablesbasic">Basic Tables </router-link></li>
                                <li><router-link to="/admin/datatables">Data Table </router-link></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><i data-feather="code"></i> <span>Multi Level</span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li class="submenu">
                                    <a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
                                    <ul style="display: none;">
                                        <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                                        <li class="submenu">
                                            <a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
                                            <ul style="display: none;">
                                                <li><a href="javascript:void(0);">Level 3</a></li>
                                                <li><a href="javascript:void(0);">Level 3</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0);"> <span>Level 1</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
             </perfect-scrollbar>
            </div>
        </div>
        <!-- /Sidebar -->
</template>
<script>
     import {PerfectScrollbar}  from 'vue3-perfect-scrollbar'
    import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
     import { onMounted } from 'vue'
    import feather from 'feather-icons'
    export default {
        components: {
             PerfectScrollbar ,
        },
  
   setup() { 
             onMounted(() => {
    feather.replace()
      $('#sidebar-menu a').on('click', function (e) {
        if ($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if (!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if ($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');

    });
         },
    computed: {
        currentpage() {
          return this.$route.path;
        },
      },
  data() {
    return {
                settings: {
                    suppressScrollX: true,
                },
                activeClass: 'active',
            };
     

              //  isactive : true
    },
    methods: {
    scrollHanle(evt) {
      console.log(evt)
    }
  },
}
</script>
<style>
    .scroll-area {
      position: relative;
      margin: auto;
      height: calc(100vh - 60px);
      background-color: transparent !important;
  }
  .sidebar-menu ul li a.active {
    background-color: #19c1dc;
    color: #fff;
}
.sidebar-menu ul ul a.active {
    color: #20e3ff;
    text-decoration: underline;
    background-color: unset;
}
svg.feather.feather-home {
    width: 21px;
    height: 21px;
}
svg.feather.feather-layout {
    width: 21px;
    height: 21px;
}
svg.feather.feather-users {
    width: 21px;
    height: 21px;
}
svg.feather.feather-user-plus {
    width: 21px;
    height: 21px;
}
svg.feather.feather-user {
    width: 21px;
    height: 21px;
}
svg.feather.feather-star {
    width: 21px;
    height: 21px;
}
svg.feather.feather-bar-chart-2 {
    width: 21px;
    height: 21px;
}
svg.feather.feather-map {
    width: 21px;
    height: 21px;
}
svg.feather.feather-book {
    width: 21px;
    height: 21px;
}
svg.feather.feather-x-circle {
    width: 21px;
    height: 21px;
}
svg.feather.feather-file {
    width: 21px;
    height: 21px;
}
svg.feather.feather-credit-card {
    width: 21px;
    height: 21px;
}
svg.feather.feather-code {
    width: 21px;
    height: 21px;
}
</style>