<template>

            <header-admin></header-admin>
            <sidebar-admin></sidebar-admin>
           	<!-- Page Wrapper -->

                <div class="content container-fluid">

					<!-- Page Header -->
					<div class="page-header">
						<div class="row">
							<div class="col-sm-7 col-auto">
								<h3 class="page-title">Specialities</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Specialities</li>
								</ul>
							</div>
							<div class="col-sm-5 col">
								<a data-target="#Add_Specialities_details" data-toggle="modal" class="btn btn-primary float-right mt-2">Add</a>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<div class="table-responsive">
										<table class="datatable table table-hover table-center mb-0">
											<thead>
												<tr>
													<th>#</th>
													<th>Specialities</th>
													<th class="text-right">Actions</th>
												</tr>
											</thead>
											<tbody>
												<!-- get speciality the getter -->
												<tr v-for="item in get_specialities" :key="item.id">
													<td>{{item.SNO}}</td>

													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile" class="avatar avatar-sm mr-2">
																<img class="avatar-img" :src="loadImg(item.image)" alt="Speciality">
															</router-link>
															<router-link to="/admin/profile">{{item.speciality}}</router-link>
														</h2>
													</td>

													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-success-light mr-1" data-toggle="modal" data-target="#edit_specialities_details">
																<i class="fa fa-edit"></i> Edit
															</a>
															<a  data-toggle="modal" data-target="#delete_modal" class="btn btn-sm bg-danger-light">
																<i class="fa fa-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>

											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			<!-- /Page Wrapper -->




			<!-- Add Modal -->
			<div class="modal fade" id="Add_Specialities_details" aria-hidden="true" role="dialog">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Add Specialities</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="row form-row">
									<div class="col-12">
										<div class="form-group">
											<label>Specialities</label>
											<input type="text" class="form-control" v-model="speciality">
										</div>
									</div>
									<div class="col-12">
										<div class="form-group">
											<label>Description</label>
											<input type="text" class="form-control" v-model="description">
										</div>
									</div>
									<div class="col-12">
										<div class="form-group">
											<label>Image</label>
											<input type="file"  class="form-control">
										</div>
									</div>

								</div>
								<button @click="addSpeciality()" class="btn btn-primary btn-block">Save Changes</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /ADD Modal -->

			<!-- Edit Details Modal -->
			<div class="modal fade" id="edit_specialities_details" aria-hidden="true" role="dialog">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Edit Specialities</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="row form-row">
									<div class="col-12">
										<div class="form-group">
											<label>Specialities</label>
											<input type="text" class="form-control" value="Cardiology">
										</div>
									</div>
									<div class="col-12">
										<div class="form-group">
											<label>Description</label>
											<input type="text" class="form-control" value="Cardiology">
										</div>
									</div>
									<div class="col-12">
										<div class="form-group">
											<label>Image</label>
											<input type="file"  class="form-control">
										</div>
									</div>

								</div>
								<button type="submit" class="btn btn-primary btn-block">Save Changes</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /Edit Details Modal -->

			<!-- Delete Modal -->
			<div class="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content">
						<div class="modal-body">
							<div class="form-content p-2">
								<h4 class="modal-title">Delete</h4>
								<p class="mb-4">Are you sure want to delete?</p>
								<button type="button" class="btn btn-primary mr-1">Save </button>
								<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Delete Modal -->

</template>
<script>
    import specialities from '../../assets/json/admin/speciality/specialities.json'
    const images = require.context('../../assets/admin_img/specialities', false, /\.png$|\.jpg$/)
    import AdminService from '../../services/admin.service.js'
    import { mapGetters, mapActions } from "vuex";
    export default {
        data() {
		return {
			specialities: specialities,
			speciality: "",
			description: "",
			get_specialities: this.specialities

		}
	},
	//the getter
//computed: mapGetters(["get_specialities"]),

    mounted() {

console.log("getSpeciality", this.specialities)




		 if ($('.datatable').length > 0) {
        $('.datatable').DataTable({
          "bFilter": false,
        });
      }
        $(document).on('click', '#toggle_btn', function() {
		if($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$('.subdrop + ul').slideDown();
		} else {
			$('body').addClass('mini-sidebar');
			$('.subdrop + ul').slideUp();
		}
		// setTimeout(function(){
		// 	mA.redraw();
		// 	mL.redraw();
		// }, 300);
		return false;
	});
	$(document).on('mouseover', function(e) {
		e.stopPropagation();
		if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
			var targ = $(e.target).closest('.sidebar').length;
			if(targ) {
				$('body').addClass('expand-menu');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').removeClass('expand-menu');
				$('.subdrop + ul').slideUp();
			}
			return false;
		}
    });
},
methods:{
	//get actions
	 //...mapActions(["getSpeciality"]),
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
        addSpeciality(){
        	let specData={
        		speciality: this.speciality,
        		description: this.description
        	}
        	return AdminService.createSpeciality(specData).then(
        res => {

          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );

        },
    },

	computed: {
		specialities: function () {
			return this.$store.getters['admin/get_specialities']
		},

	},
    }
</script>