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
								<router-link to="/pharmacyadmin/index"><i data-feather="home"></i> <span>Dashboard</span></router-link>
							</li>
							<li class="submenu">
								<a href="#"> <i data-feather="book"></i> <span> Products</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/pharmacyadmin/products">Products</router-link></li>
									<li><router-link to="/pharmacyadmin/addproduct">Add Product</router-link></li>
									<li><router-link to="/pharmacyadmin/outstock">Out-Stock</router-link></li>
									<li><router-link to="/pharmacyadmin/expired">Expired</router-link></li>
								</ul>
							</li>
							<li> 
								<router-link to="/pharmacyadmin/categories"> <i data-feather="layout"></i> <span>Categories</span></router-link>
							</li>
							<li class="submenu">
								<a href="#"><i data-feather="star"></i> <span> Purchase</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/pharmacyadmin/purchase">Purchase</router-link></li>
									<li><router-link to="/pharmacyadmin/addpurchase">Add Purchase</router-link></li>
									<li><router-link to="/pharmacyadmin/order">Order</router-link></li>
								</ul>
							</li>
							<li><router-link to="/pharmacyadmin/sales"><i data-feather="bar-chart-2"></i> <span>Sales</span></router-link></li>
							<li class="submenu">
								<a href="#"><i data-feather="user"></i> <span> Supplier</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/pharmacyadmin/supplier">Supplier</router-link></li>
									<li><router-link to="/pharmacyadmin/addsupplier">Add Supplier</router-link></li>
								</ul>
							</li>
							<li><router-link to="/pharmacyadmin/transactionslist"><i data-feather="credit-card"></i> <span>Transaction</span></router-link></li>
							<li class="submenu">
								<a href="#"><i data-feather="book"></i> <span> Reports</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/pharmacyadmin/invoicereport">Invoice Reports</router-link></li>
								</ul>
							</li>
							<li class="menu-title"> 
								<span>Pages</span>
							</li>
							<li> 
								<router-link to="/pharmacyadmin/profile"><i data-feather="user-plus"></i> <span>Profile</span></router-link>
							</li>
							<li> 
								<router-link to="/pharmacyadmin/settings"><i data-feather="map"></i> <span>Settings</span></router-link>
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
    import feather from 'feather-icons'
    export default {
components: {
             PerfectScrollbar ,
        },
  mounted() {
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