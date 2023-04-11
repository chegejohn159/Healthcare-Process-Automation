<template>
        
            <header-admin></header-admin>
            <sidebar-admin></sidebar-admin>
           	<!-- Page Wrapper -->
               
                <div class="content container-fluid">
				
					<!-- Page Header -->
					<div class="page-header">
						<div class="row">
							<div class="col-sm-7 col-auto">
								<h3 class="page-title">County</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Counties</li>
								</ul>
							</div>
							<div class="col-sm-5 col">
								<a data-target="#Add_Specialities_details" data-toggle="modal" class="btn btn-primary float-right mt-2">Add</a>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
<!-- 					<div class="row">
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
												<tr v-for="item in specialities" :key="item.id">
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
					</div> -->
				</div>			
			
			<!-- /Page Wrapper -->
			


			
			<!-- Add Modal -->
			<div class="modal fade" id="Add_Specialities_details" aria-hidden="true" role="dialog">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Add  County</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="row form-row">
									<div class="col-12">
										<div class="form-group">
											<label>Name</label>
											<input type="text" class="form-control" v-model="countyName">
										</div>
									</div>

									
								</div>
								<button @click="saveCounty()" class="btn btn-primary btn-block">Save Changes</button>
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
	import AdminService from '../../services/admin.service.js'
    export default {
        data() {
		return {
countyName:""

		}
	},
    mounted() {

},
methods:{

                saveCounty(){
        	// let countyName=this.countyName
        	return AdminService.addCounty(this.countyName).then(
        res => {

          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );

        },


    }
    }
</script>