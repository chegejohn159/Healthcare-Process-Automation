import {createRouter, createWebHistory} from 'vue-router';

/** For Home Pages **/
import Index1 from '../client/Index1'

import Trial from '../components/admin/trial.vue'


/** For Doctor **/
import DoctorDashboard from '../client/doctor/Index'
import Appointments from '../client/doctor/Appointments'
import MyPatients from '../client/doctor/MyPatients'
import ScheduleTimings from '../client/doctor/ScheduleTimings'

import ProfileSettings from '../client/doctor/ProfileSettings'
import PatientProfile from '../client/doctor/PatientProfile'
import DoctorProfile from '../client/doctor/Profile'
import AddBilling from '../client/doctor/AddBilling'
import EditBilling from '../client/doctor/EditBilling'
import AvailableTimings from '../client/doctor/AvailableTimings'
import Invoices from '../client/doctor/Invoices'
import InvoiceView from '../client/doctor/InvoiceView'
import MapGrid from '../client/doctor/MapGrid'
import MapList from '../client/doctor/MapList'

import Login from '../client/doctor/auth/Login'
import ChangePassword from '../client/doctor/auth/ChangePassword'
import DoctorRegister from '../client/doctor/auth/Register'
import DoctorRegisterStep1 from '../client/doctor/auth/DoctorRegisterStep1'
import DoctorRegisterStep2 from '../client/doctor/auth/DoctorRegisterStep2'
import DoctorRegisterStep3 from '../client/doctor/auth/DoctorRegisterStep3'
import RegisterSuccess from '../client/doctor/auth/register-success'
import RegisterConfirm from '../client/doctor/auth/register-confirmation'
import Accounts from '../client/doctor/Accounts'

import PatientRegister from '../client/patient/auth/Register'

import ForgotPassword from '../client/ForgotPassword'

import SearchDoctor from '../client/SearchDoctor'

import AboutUs from '../client/about-us'
import Team from '../client/our-team'







/** For Home Pages **/
import Index from '../components/Index'
import Index2 from '../components/Index2'
import Index3 from '../components/Index3'
import Index4 from '../components/Index4'
import Index5 from '../components/Index5'
import Index6 from '../components/Index6'
import Index7 from '../components/Index7'
import Index8 from '../components/Index8'

/** For Doctor **/
// import DoctorDashboard from '../components/doctor/Index'
// import Appointments from '../components/doctor/Appointments'
// import MyPatients from '../components/doctor/MyPatients'
// import ScheduleTimings from '../components/doctor/ScheduleTimings'
// import Invoices from '../components/doctor/Invoices'
// import Reviews from '../components/doctor/Reviews'
// import Messages from '../components/doctor/Messages'
// import ProfileSettings from '../components/doctor/ProfileSettings'
// import PatientProfile from '../components/doctor/PatientProfile'
// import SocialMedia from '../components/doctor/SocialMedia'
// import ChangePassword from '../components/ChangePassword'
// import DoctorRegister from '../components/doctor/Register'
// import DoctorRegisterStep1 from '../components/doctor/DoctorRegisterStep1'
// import DoctorRegisterStep2 from '../components/doctor/DoctorRegisterStep2'
// import DoctorRegisterStep3 from '../components/doctor/DoctorRegisterStep3'
// import DoctorProfile from '../components/doctor/Profile'
// import DoctorBlogs from '../components/doctor/Blogs'
// import DoctorPendingBlogs from '../components/doctor/PendingBlogs'
// import AddBlog from '../components/doctor/AddBlog'
// import BlogDetails from '../components/doctor/BlogDetails'
// import BlogList from '../components/doctor/BlogList'
// import BlogGrid from '../components/doctor/BlogGrid'
// import MapGrid from '../components/doctor/MapGrid'
// import MapList from '../components/doctor/MapList'
// import AddPrescription from '../components/doctor/AddPrescription'
// import EditPrescription from '../components/doctor/EditPrescription'
// import AddBilling from '../components/doctor/AddBilling'
// import EditBilling from '../components/doctor/EditBilling'
// import EditBlog from '../components/doctor/EditBlog'
// import Accounts from '../components/doctor/Accounts'
// import AvailableTimings from '../components/doctor/AvailableTimings'

/** For Patient **/
import PatientDashboard from '../components/patient/Index'
import Booking from '../components/patient/Booking'
import BookingSuccess from '../components/patient/BookingSuccess'
// import SearchDoctor from '../components/patient/SearchDoctor'
import Checkout from '../components/patient/Checkout'
import Favourites from '../components/patient/Favourites'
import Chat from '../components/patient/Chat'
import PatientProfileSettings from '../components/patient/Profile'
import Dependent from '../components/patient/Dependent'
import AddDependent from '../components/patient/AddDependent'
import EditDependent from '../components/patient/EditDependent'


/** For Pharmacy **/
import Pharmacy from '../components/pharmacy/Index.vue'
import PharmacyDetails from '../components/pharmacy/Details'
import PharmacySearch from '../components/pharmacy/Search'
import Products from '../components/pharmacy/Products'
import ProductDescription from '../components/pharmacy/ProductDescription'
import PharmacyRegister from '../components/pharmacy/PharmacyRegister'
import PharmacyRegisterStep1 from '../components/pharmacy/PharmacyRegisterStep1'
import PharmacyRegisterStep2 from '../components/pharmacy/PharmacyRegisterStep2'
import PharmacyRegisterStep3 from '../components/pharmacy/PharmacyRegisterStep3'
import Cart from '../components/pharmacy/Cart'
import ProductCheckout from '../components/pharmacy/ProductCheckout'
import PaymentSuccess from '../components/pharmacy/PaymentSuccess'

/** For Admin**/
import Admin from '../components/admin/index.vue'

import Appointmentlist from '../components/admin/appointmentlist.vue'
import Specialities from '../components/admin/specialities.vue'
import county from '../components/admin/county.vue'
import Doctorlist from '../components/admin/doctorlist.vue'
import Patientlist from '../components/admin/patientlist.vue'
import Reviewslist from '../components/admin/reviews.vue'
import Transaction from '../components/admin/transactionslist.vue'
import Settingslist from '../components/admin/settings.vue'
import Invoicereportlist from '../components/admin/invoicereport.vue'
import Bloglist from '../components/admin/blog.vue'
import Blogdetailslist from '../components/admin/blogdetails.vue'
import Addbloglist from '../components/admin/addblog.vue'
import Editbloglist from '../components/admin/editblog.vue'
import ProductList from '../components/admin/productlist.vue'
import PharmacyList from '../components/admin/pharmacylist.vue'
import Profilelist from '../components/admin/profile.vue'
import loginlist from '../components/admin/login.vue'
import registerlist from '../components/admin/register.vue'
import Forgotlist from '../components/admin/forgotpassword.vue'
import Locklist from '../components/admin/lockscreen.vue'
import Error from '../components/admin/error404.vue'
import Errorlist from '../components/admin/error500.vue'
import blank from '../components/admin/blankpage.vue'
import Componentslist from '../components/admin/components.vue'
import formlist from '../components/admin/formbasicinputs.vue'
import forminput from '../components/admin/forminputgroups.vue'
import formhorizontalist from '../components/admin/formhorizontal.vue'
import formverticallist from '../components/admin/formvertical.vue'
import formmasklist from '../components/admin/formmask.vue'
import formvalidationlist from '../components/admin/formvalidation.vue'
import tablesbasiclist from '../components/admin/tablesbasic.vue'
import datatableslist from '../components/admin/datatables.vue'
import invoicelist from '../components/admin/invoice.vue'
import pendingbloglist from '../components/admin/pendingblog.vue'
// import Specialities from '../components/admin/specialities.vue'

/** For Pharmacy Admin**/
import PharmacyAdmin from '../components/pharmacyadmin/index.vue'
import Productlist from '../components/pharmacyadmin/products.vue'
import Addproduct from '../components/pharmacyadmin/addproduct.vue'
import Outstock from '../components/pharmacyadmin/outstock.vue'
import Expired from '../components/pharmacyadmin/expired.vue'
import Categories from '../components/pharmacyadmin/categories.vue'
import Purchase from '../components/pharmacyadmin/purchase.vue'
import Addpurchase from '../components/pharmacyadmin/addpurchase.vue'
import Order from '../components/pharmacyadmin/order.vue'
import Sales from '../components/pharmacyadmin/sales.vue'
import Supplier from '../components/pharmacyadmin/supplier.vue'
import Addsupplier from '../components/pharmacyadmin/addsupplier.vue'
import Transactionslist from '../components/pharmacyadmin/transactionslist.vue'
import Settings from '../components/pharmacyadmin/settings.vue'
import Profile from '../components/pharmacyadmin/profile.vue'
import Invoicereport from '../components/pharmacyadmin/invoicereport.vue'
import Editproduct from '../components/pharmacyadmin/editproduct.vue'
import Editpurchase from '../components/pharmacyadmin/editpurchase.vue'
import Editsupplier from '../components/pharmacyadmin/editsupplier.vue'
import Invoice from '../components/pharmacyadmin/invoice.vue'


import VoiceCall from '../components/VoiceCall'
import VideoCall from '../components/VideoCall'
import Calender from '../components/Calender'
import Components from '../components/Components'
// import InvoiceView from '../components/InvoiceView'
import Blank from '../components/Blank'

// import PatientRegister from '../components/patient/Register'
import PatientRegisterStep1 from '../components/patient/PatientRegisterStep1'
import PatientRegisterStep2 from '../components/patient/PatientRegisterStep2'
import PatientRegisterStep3 from '../components/patient/PatientRegisterStep3'
import PatientRegisterStep4 from '../components/patient/PatientRegisterStep4'
import PatientRegisterStep5 from '../components/patient/PatientRegisterStep5'
import PatientAccounts from '../components/patient/PatientAccounts'
import MedicalRecords from '../components/patient/MedicalRecords'
import MedicalDetails from '../components/patient/MedicalDetails'
import OrdersList from '../components/patient/OrdersList'
// import ForgotPassword from '../components/ForgotPassword'
import TermCondition from '../components/TermCondition'
import PrivacyPolicy from '../components/PrivacyPolicy'



const routes = [
    {
      path: '/Register-Success',
      name: 'Register-Success',
      component: RegisterSuccess,
    },

    {
      path: '/verify/email',
      name: 'register-confirm',
      component: RegisterConfirm
    },
    {
      path: '/',
      name: 'index-1',
      component: Index1
    },

    {
      path: '/index',
      name: 'index',
      component: Index1
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/trial',
      name: 'trial',
      component: Trial
    },
    //   {
    //   path: '/spe',
    //   name: 'spe',
    //   component: Specialities
    // },

    // {
    //   path: '/index-2',
    //   name: 'index-2',
    //   component: Index2
    // },
    // {
    //   path: '/index-3',
    //   name: 'index-3',
    //   component: Index3
    // },
    // {
    //   path: '/index-4',
    //   name: 'index-4',
    //   component: Index4
    // },
    // {
    //   path: '/index-5',
    //   name: 'index-5',
    //   component: Index5
    // },
    // {
    //   path: '/index-6',
    //   name: 'index-6',
    //   component: Index6
    // },
    // {
    //   path: '/index-7',
    //   name: 'index-7',
    //   component: Index7
    // },
    // {
    //   path: '/index-8',
    //   name: 'index-8',
    //   component: Index8
    // },
    {
      path: '/doctor/index',
      name: 'doctor-index',
      component: DoctorDashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/doctor/appointments',
      name: 'doctor-appointments',
      component: Appointments,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/doctor/patients',
      name: 'my-patients',
      component: MyPatients,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/doctor/patient-profile',
      name: 'patient-profile',
      component: PatientProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/doctor/accounts',
      name: 'accounts',
      component: Accounts,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/doctor/available-timings',
      name: 'available-timings',
      component: AvailableTimings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/doctor/schedule-timings',
      name: 'schedule-timings',
      component: ScheduleTimings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/doctor/invoices',
      name: 'invoices',
      component: Invoices
    },
    // {
    //   path: '/doctor/reviews',
    //   name: 'doctor-reviews',
    //   component: Reviews
    // },
    // {
    //   path: '/doctor/messages',
    //   name: 'messages',
    //   component: Messages
    // },
    {
      path: '/doctor/profile-settings',
      name: 'profile-settings',
      component: ProfileSettings,
      meta: {
        requiresAuth: true
      }
    },
    // {
    //   path: '/doctor/social-media',
    //   name: 'social-media',
    //   component: SocialMedia
    // },
    {
      path: '/doctor/change-password',
      name: 'change-password',
      component: ChangePassword,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/doctor/register',
      name: 'doctor-register',
      component: DoctorRegister
    },
    {
      path: '/doctor/doctor-register-step1',
      name: 'doctor-register-step1',
      component: DoctorRegisterStep1
    },
    {
      path: '/doctor/doctor-register-step2',
      name: 'doctor-register-step2',
      component: DoctorRegisterStep2
    },
    {
      path: '/doctor/doctor-register-step3',
      name: 'doctor-register-step3',
      component: DoctorRegisterStep3
    },
    {
      path: '/doctor/profile/:id',
      name: 'doctor-profile',
      component: DoctorProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/doctor/map-grid',
      name: 'doctor-mapgrid',
      component: MapGrid
    },
    {
      path: '/doctor/map-list',
      name: 'doctor-maplist',
      component: MapList
    },
    // {
    //   path: '/doctor/add-prescription',
    //   name: 'add-prescription',
    //   component: AddPrescription
    // },
    // {
    //   path: '/doctor/edit-prescription',
    //   name: 'edit-prescription',
    //   component: EditPrescription
    // },
    {
      path: '/doctor/add-billing',
      name: 'add-billing',
      component: AddBilling
    },
    {
      path: '/doctor/edit-billing',
      name: 'edit-billing',
      component: EditBilling
    },
    // {
    //   path: '/doctor/edit-blog',
    //   name: 'edit-blog',
    //   component: EditBlog
    // },
    {
      path: '/doctor/search',
      name: 'search-doctor',
      component: SearchDoctor
    },
    // {
    //   path: '/doctor/blogs',
    //   name: 'doctor-blogs',
    //   component: DoctorBlogs
    // },
    // {
    //   path: '/doctor/pending-blogs',
    //   name: 'doctor-pending-blogs',
    //   component: DoctorPendingBlogs
    // },
    // {
    //   path: '/doctor/add-blog',
    //   name: 'add-blog',
    //   component: AddBlog
    // },
    // {
    //   path: '/doctor/blog-details',
    //   name: 'blog-details',
    //   component: BlogDetails
    // },
    // {
    //   path: '/doctor/blog-list',
    //   name: 'blog-list',
    //   component: BlogList
    // },
    // {
    //   path: '/doctor/blog-grid',
    //   name: 'blog-grid',
    //   component: BlogGrid
    // },
    {
      path: '/patient/index',
      name: 'patient-dashboard',
      component: PatientDashboard
    },
    {
      path: '/patient/booking',
      name: 'booking',
      component: Booking,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/patient/booking-success',
      name: 'booking-success',
      component: BookingSuccess
    },
    {
      path: '/patient/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/patient/favourites',
      name: 'favourites',
      component: Favourites
    },
    {
      path: '/patient/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/patient/profile',
      name: 'patient-profile-settings',
      component: PatientProfileSettings
    },
    {
      path: '/patient/change-password',
      name: 'patient-change-password',
      component: ChangePassword
    },
    {
      path: '/patient/dependent',
      name: 'dependent',
      component: Dependent
    },
    {
      path: '/patient/add-dependent',
      name: 'add-dependent',
      component: AddDependent
    },
    {
      path: '/patient/edit-dependent',
      name: 'edit-dependent',
      component: EditDependent
    },
    {
      path: '/pharmacy/index',
      name: 'pharmacy',
      component: Pharmacy
    },
    {
      path: '/pharmacy/details',
      name: 'pharmacy-details',
      component: PharmacyDetails
    },
    {
      path: '/pharmacy/search',
      name: 'pharmacy-search',
      component: PharmacySearch
    },
    {
      path: '/pharmacy/product',
      name: 'pharmacy-product',
      component: Products
    },
    {
      path: '/pharmacy/product-description',
      name: 'pharmacy-product-description',
      component: ProductDescription
    },
    {
      path: '/pharmacy/pharmacy-register',
      name: 'pharmacy-register',
      component: PharmacyRegister
    },
    {
      path: '/pharmacy/pharmacy-register-step1',
      name: 'pharmacy-register-step1',
      component: PharmacyRegisterStep1
    },
    {
      path: '/pharmacy/pharmacy-register-step2',
      name: 'pharmacy-register-step2',
      component: PharmacyRegisterStep2
    },
    {
      path: '/pharmacy/pharmacy-register-step3',
      name: 'pharmacy-register-step3',
      component: PharmacyRegisterStep3
    },
    {
      path: '/pharmacy/cart',
      name: 'pharmacy-cart',
      component: Cart
    },
    {
      path: '/pharmacy/product-checkout',
      name: 'pharmacy-product-checkout',
      component: ProductCheckout
    },
    {
      path: '/pharmacy/payment-success',
      name: 'pharmacy-payment-success',
      component: PaymentSuccess
    },
    {
      path: '/admin/index',
      name: 'admin',
      component: Admin,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin/appointmentlist',
      name: 'appointmentlist',
      component: Appointmentlist,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin/specialities',
      name: 'specialities',
      component: Specialities,
      // meta: {
      //   requiresAuth: true
      // }
    },

        {
      path: '/admin/counties',
      name: 'county',
      component: county,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/admin/doctorlist',
      name: 'doctorlist',
      component: Doctorlist,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/admin/patientlist',
      name: 'patientlist',
      component: Patientlist,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin/reviews',
      name: 'reviews',
      component: Reviewslist
    },
    {
      path: '/admin/transactionslist',
      name: 'transactionslist',
      component: Transaction
    },
    {
      path: '/admin/settings',
      name: 'settings',
      component: Settingslist,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin/invoicereport',
      name: 'invoicereport',
      component: Invoicereportlist
    },
    {
      path: '/admin/blog',
      name: 'blog',
      component: Bloglist
    },
    {
      path: '/admin/blogdetails',
      name: 'blogdetails',
      component: Blogdetailslist
    },
    {
      path: '/admin/addblog',
      name: 'addblog',
      component: Addbloglist
    },
    {
      path: '/admin/editblog',
      name: 'editblog',
      component: Editbloglist
    },
    {
      path: '/admin/productlist',
      name: 'productlist',
      component: ProductList
    },
    {
      path: '/admin/pharmacylist',
      name: 'pharmacylist',
      component: PharmacyList
    },
    {
      path: '/admin/profile',
      name: 'profile',
      component: Profilelist,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/admin/login',
      name: 'login',
      component: loginlist
    },
    {
      path: '/admin/register',
      name: 'register',
      component: registerlist
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: Forgotlist
    },
    {
      path: '/admin/lockscreen',
      name: 'lockscreen',
      component: Locklist
    },
    {
      path: '/admin/error404',
      name: 'error404',
      component: Error
    },
    {
      path: '/admin/error500',
      name: 'error500',
      component: Errorlist
    },
    {
      path: '/admin/blankpage',
      name: 'blankpage',
      component: blank
    },
    {
      path: '/admin/components',
      name: 'components',
      component: Componentslist
    },
    {
      path: '/admin/formbasicinputs',
      name: 'formbasicinputs',
      component: formlist
    },
    {
      path: '/admin/forminputgroups',
      name: 'forminputgroups',
      component: forminput
    },
    {
      path: '/admin/formhorizontal',
      name: 'formhorizontal',
      component: formhorizontalist
    },
    {
      path: '/admin/formvertical',
      name: 'formvertical',
      component: formverticallist
    },
    {
      path: '/admin/formmask',
      name: 'formmask',
      component: formmasklist
    },
    {
      path: '/admin/formvalidation',
      name: 'formvalidation',
      component: formvalidationlist
    },
    {
      path: '/admin/tablesbasic',
      name: 'tablesbasic',
      component: tablesbasiclist
    },
    {
      path: '/admin/datatables',
      name: 'datatables',
      component: datatableslist
    },
    {
      path: '/admin/invoice',
      name: 'invoice',
      component: invoicelist
    },
    {
      path: '/admin/pendingblog',
      name: 'pendingblog',
      component: pendingbloglist
    },
    {
      path: '/pharmacyadmin/index',
      name: 'pharmacyadmin',
      component: PharmacyAdmin
    },
    {
      path: '/pharmacyadmin/products',
      name: 'pharmacyadmins',
      component: Productlist
    },
    {
      path: '/pharmacyadmin/addproduct',
      name: 'addproducts',
      component: Addproduct
    },
    {
      path: '/pharmacyadmin/outstock',
      name: 'outstocks',
      component: Outstock
    },
    {
      path: '/pharmacyadmin/expired',
      name: 'expireds',
      component: Expired
    },
    {
      path: '/pharmacyadmin/categories',
      name: 'categoriess',
      component: Categories
    },
    {
      path: '/pharmacyadmin/purchase',
      name: 'purchased',
      component: Purchase
    },
    {
      path: '/pharmacyadmin/addpurchase',
      name: 'addpurchases',
      component: Addpurchase
    },
    {
      path: '/pharmacyadmin/order',
      name: 'orders',
      component: Order
    },
    {
      path: '/pharmacyadmin/sales',
      name: 'saless',
      component: Sales
    },
    {
      path: '/pharmacyadmin/supplier',
      name: 'suppliers',
      component: Supplier
    },
    {
      path: '/pharmacyadmin/addsupplier',
      name: 'addsuppliers',
      component: Addsupplier
    },
    {
      path: '/pharmacyadmin/transactionslist',
      name: 'transactionslists',
      component: Transactionslist
    },
    {
      path: '/pharmacyadmin/settings',
      name: 'settingss',
      component: Settings
    },
    {
      path: '/pharmacyadmin/profile',
      name: 'profiles',
      component: Profile
    },
    {
      path: '/pharmacyadmin/invoicereport',
      name: 'invoicereports',
      component: Invoicereport
    },
    {
      path: '/pharmacyadmin/editproduct',
      name: 'editproducts',
      component: Editproduct
    },
    {
      path: '/pharmacyadmin/editpurchase',
      name: 'editpurchases',
      component: Editpurchase
    },
    {
      path: '/pharmacyadmin/editsupplier',
      name: 'editsuppliers',
      component: Editsupplier
    },
    {
      path: '/pharmacyadmin/invoice',
      name: 'invoiced',
      component: Invoice
    },
    {
      path: '/voice-call',
      name: 'voice-call',
      component: VoiceCall
    },
    {
      path: '/video-call',
      name: 'video-call',
      component: VideoCall
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calender
    },
    {
      path: '/components',
      name: 'componentss',
      component: Components
    },
    {
      path: '/invoice-view',
      name: 'invoice-view',
      component: InvoiceView
    },
    {
      path: '/blank',
      name: 'blank',
      component: Blank
    },
    {
      path: '/login',
      name: 'logins',
      component: Login
    },
    {
      path: '/patient/register',
      name: 'patient-register',
      component: PatientRegister
    },
     {
      path: '/patient/patient-register-step1',
      name: 'patient-register-step1',
      component: PatientRegisterStep1
    },
     {
      path: '/patient/patient-register-step2',
      name: 'patient-register-step2',
      component: PatientRegisterStep2
    },
    {
      path: '/patient/patient-register-step3',
      name: 'patient-register-step3',
      component: PatientRegisterStep3
    },
    {
      path: '/patient/patient-register-step4',
      name: 'patient-register-step4',
      component: PatientRegisterStep4
    },
    {
      path: '/patient/patient-register-step5',
      name: 'patient-register-step5',
      component: PatientRegisterStep5
    },
    {
      path: '/patient/medical-records',
      name: 'medical-records',
      component: MedicalRecords
    },
    {
      path: '/patient/medical-details',
      name: 'medical-details',
      component: MedicalDetails
    },
    {
      path: '/patient/patient-accounts',
      name: 'patient-accounts',
      component: PatientAccounts
    },
    {
      path: '/patient/orders-list',
      name: 'orders-list',
      component: OrdersList
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: '/term-condition',
      name: 'term-condition',
      component: TermCondition
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
  ];
   const router = createRouter({
    history: createWebHistory(),
    routes
});


// // Meta Handling
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('user') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        } else {
          next({ name: 'dashboard' })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('user') == null) {
      next()
    } else {
      next({ name: 'dashboard' })
    }
  } else {
    next()
  }
})

export default router
