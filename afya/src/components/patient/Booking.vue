<template>
    <div class="main-wrapper">
        <layout-header2></layout-header2>
        <breadcrumb16></breadcrumb16>
        <!-- Page Content -->

			<div class="vld-parent">
				<loading v-model:active="isLoadingProf"
				:can-cancel="false"
				:is-full-page="fullPage"
				/>
			</div>
			<div class="content">
				<div class="container">

					<div class="row">
						<div class="col-12">

							<div class="row">
								<div class="col-12 col-sm-4 col-md-6">
									<h4 class="mb-1">THIS WEEK</h4>
								</div>
                            </div>
							<!-- Schedule Widget -->
							<div class="card booking-schedule schedule-widget">

								<!-- Schedule Header -->
								<div class="schedule-header">
									<div class="row">
										<div class="col-md-12">

											<!-- Day Slot -->
											<div class="day-slot">
												<ul>

													<li>
														<span>Mon</span>
													</li>
													<li>
														<span>Tue</span>
													</li>
													<li>
														<span>Wed</span>
													</li>
													<li>
														<span>Thu</span>
													</li>
													<li>
														<span>Fri</span>
													</li>
													<li>
														<span>Sat</span>
													</li>
													<li>
														<span>Sun</span>
													</li>

												</ul>
											</div>
											<!-- /Day Slot -->

										</div>
									</div>
								</div>
								<!-- /Schedule Header -->

								<!-- Schedule Content -->
								<div class="schedule-cont">
									<div class="row">
										<div class="col-md-12">

											<!-- Time Slot -->
											<div class="time-slot">
												<ul class="clearfix">
													<li>
														<a v-for="(slt, index) in sun" :key="index" style="cursor: pointer;">
															<span  v-on:click="selectAppointment(slt, 'Sunday')" :class="`timing slot-li slot-${slt.id}`" style="background-color: #42c0fb; color: #fff">
																<span>
																	{{slt.timeSlot}}
																</span>
															</span>
														</a>
													</li>
													<li>
														<a v-for="(slt, index) in mon" :key="index" style="cursor: pointer;">
															<span  v-on:click="selectAppointment(slt, 'Monday')" :class="`timing slot-li slot-${slt.id}`" style="background-color: #42c0fb; color: #fff">
																<span>
																	{{slt.timeSlot}}
																</span>
															</span>
														</a>
													</li>
													<li>
														<a v-for="(slt, index) in tue" :key="index" style="cursor: pointer;">
															<span  v-on:click="selectAppointment(slt, 'Tuesday')" :class="`timing slot-li slot-${slt.id}`" style="background-color: #42c0fb; color: #fff">
																<span>
																	{{slt.timeSlot}}
																</span>
															</span>
														</a>
													</li>
													<li>
														<a v-for="(slt, index) in wed" :key="index" style="cursor: pointer;">
															<span  v-on:click="selectAppointment(slt, 'Wednesday')" :class="`timing slot-li slot-${slt.id}`" style="background-color: #42c0fb; color: #fff">
																<span>
																	{{slt.timeSlot}}
																</span>
															</span>
														</a>
													</li>
													<li>
														<a v-for="(slt, index) in thu" :key="index" style="cursor: pointer;">
															<span  v-on:click="selectAppointment(slt, 'Thursday')" :class="`timing slot-li slot-${slt.id}`" style="background-color: #42c0fb; color: #fff">
																<span>
																	{{slt.timeSlot}}
																</span>
															</span>
														</a>
													</li>
													<li>
														<a v-for="(slt, index) in fri" :key="index" style="cursor: pointer;">
															<span  v-on:click="selectAppointment(slt, 'Friday')" :class="`timing slot-li slot-${slt.id}`" style="background-color: #42c0fb; color: #fff">
																<span>
																	{{slt.timeSlot}}
																</span>
															</span>
														</a>
													</li>
													<li>
														<a v-for="(slt, index) in sat" :key="index" style="cursor: pointer;">
															<span  v-on:click="selectAppointment(slt, 'Saturday')" :class="`timing slot-li slot-${slt.id}`" style="background-color: #42c0fb; color: #fff">
																<span>
																	{{slt.timeSlot}}
																</span>
															</span>
														</a>
													</li>



												</ul>
											</div>
											<!-- /Time Slot -->

										</div>
									</div>
								</div>
								<!-- /Schedule Content -->

							</div>
							<!-- /Schedule Widget -->

							<!-- Submit Section -->
							<div class="submit-section proceed-btn text-right">
								<button @click="setAppointment" class="btn btn-primary submit-btn">Complete booking</button>
							</div>
							<!-- /Submit Section -->

						</div>
					</div>
				</div>

			</div>
			<!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
</template>
<script>
import moment from 'moment'
import { handleError } from '@vue/runtime-core';
export default {
	 mounted() {
    if($('.select').length > 0) {
        $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
        });
    }
	this.getDoctorSlot()

    },

    data() {
        return {
			isLoading: false,
        	fullPage: true,
			userId: this.$store.state.auth.user.id,
			start_time: '',
			end_time: '',
			active_day: '',
			doctor_slots_data: [],
			sun:[],
			mon: [],
			tue: [],
			wed: [],
			thu: [],
			fri: [],
			sat: [],
			currentDay: moment().format('dddd'),
			slotId: '',
			appt_date: '',
			days: [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
			]
        }
    },
	computed: {
		},
     methods:{
		 handleNewSlot(slot, day) {

			const slot_day = this.days.indexOf(day),
				today = this.days.indexOf(this.currentDay)
			if (slot_day > today) {
				let date = moment().add(this.days.indexOf(day) + 1, 'days').format('YYYY-MM-DD')
				return {...slot, date}
			} else if(slot_day < today){
				let date =  moment().subtract(this.days.indexOf(day) + 1, 'days').format('YYYY-MM-DD')
				  return {...slot, date}
			} else {
				let date = moment().format('YYYY-MM-DD')
				return {...slot, date}
			}
		 },
		doctor_slots() {

			 this.doctor_slots_data.reduce((slots, slot) => {

					switch (slot.dayOfWeek) {
						case 1:
							this.sun.push(this.handleNewSlot(slot, 'Sunday'))
							break;
						case 2:
							this.mon.push(this.handleNewSlot(slot, 'Monday'))
							break;
						case 3:
							this.tue.push(this.handleNewSlot(slot, 'Tuesday'))
							break;
						case 4:
							this.wed.push(this.handleNewSlot(slot, 'Wednesday'))
							break;
						case 5:
							this.thu.push(this.handleNewSlot(slot, 'Thursday'))
							break;
						case 6:
							this.fri.push(this.handleNewSlot(slot, 'Friday'))
							break;
						case 7:
							this.sat.push(this.handleNewSlot(slot, 'Saturday'))
							break;

						default:
							break;
					}

				return slots
			}, [])
			// console.log('slots_res', slots_res)

		},

		selectAppointment(slot) {
			console.log('slot', slot)
			$(`.slot-li`).css({'background-color': '#42c0fb', 'color': '#ffff'})
			$(`.slot-li`).removeClass('selected')

			$(`.slot-${slot.id}`).css({'background-color': 'rgb(135 135 135)', 'color': 'rgb(199 195 195)'})
			$(`.slot-${slot.id}`).addClass('selected')

			this.slotId = slot.id
			this.appt_date = slot.date
		},


		getDoctorSlot() {
			this.$store.dispatch('availability/doc_slots', this.userId)
			.then(
				(res) => {
					this.doctor_slots_data = res
					this.doctor_slots()
				},
				error => {
					this.message =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();
					this.error()
				}
			);
		},

		setAppointment() {
			this.isLoading = true
			let appt = {
				patientId: this.userId,
				slotId: this.slotId,
				appointmentDate: this.appt_date
				}
			this.$store.dispatch('appointment/add_appt', appt)
			.then(
				(res) => {
					this.isLoading = false
					console.log('ddedewd', res)
				},
				error => {
					this.isLoading = false
					this.message =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();
					this.error()
				}
			);
		},

		success(message) {
            this.$swal({
                icon: 'success',
                title: 'Success',
                text: message,
            });
		},
		error() {
            this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: this.message,
            });
		},
    }
}
</script>

<style scoped>
.time-slot li .timing.selected::before {
    color: #fff;
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    font-size: 12px;
    font-weight: 900;
    position: absolute;
    right: 44%;
    top: 6px;
}
</style>