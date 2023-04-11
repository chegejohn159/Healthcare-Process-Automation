<template>
    <!-- Profile Sidebar -->
    <div class="profile-sidebar">
        <div class="widget-profile pro-widget-content">
            <div class="profile-info-widget">
                <!-- <a href="#" class="booking-doc-img">
                    <img src="../../../assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                </a> -->
                <div class="profile-det-info">
                    <h3>{{user.username}}</h3>

                </div>
            </div>
        </div>
        <div class="dashboard-widget">
            <nav class="dashboard-menu">
                <ul>
                    <li :class="currentPath == 'doctor-index' ? 'active' : 'notactive'">
                        <router-link to="/doctor/index">
                            <i class="fas fa-columns"></i>
                            <span>Dashboard</span>
                        </router-link>
                    </li>
                    <li :class="currentPath == 'doctor-appointments' ? 'active' : 'notactive'">
                        <router-link to="/doctor/appointments">
                            <i class="fas fa-calendar-check"></i>
                            <span>Appointments</span>
                        </router-link>
                    </li>
                    <li :class="currentPath == 'my-patients' ? 'active' : 'notactive'">
                        <router-link to="/doctor/patients">
                            <i class="fas fa-user-injured"></i>
                            <span>My Patients</span>
                        </router-link>
                    </li>
                    <li :class="currentPath == 'schedule-timings' ? 'active' : 'notactive'">
                        <router-link to="/doctor/schedule-timings">
                            <i class="fas fa-hourglass-start"></i>
                            <span>Schedule Timings</span>
                        </router-link>
                    </li>


                    <li :class="currentPath == 'profile-settings' ? 'active' : 'notactive'">
                        <router-link to="/doctor/profile-settings">
                            <i class="fas fa-user-cog"></i>
                            <span>Profile Settings</span>
                        </router-link>
                    </li>

                    <li :class="currentPath == 'change-password' ? 'active' : 'notactive'">
                        <router-link to="/doctor/change-password">
                            <i class="fas fa-lock"></i>
                            <span>Change Password</span>
                        </router-link>
                    </li>

                </ul>
            </nav>
        </div>
    </div>
    <!-- /Profile Sidebar -->
</template>

<script>
export default {

    data () {
      return {
        // showRecorder: true,
        user: this.$store.state.auth.user

      }
    },
    //  this.$store.state.auth.user;
    computed:{
        currentPath() {
            return this.$route.name;
        }
    },
    methods: {
        initLogout() {
            this.$store.dispatch('auth/logout')
            this.$router.push('/login');
        }
    }
}
</script>