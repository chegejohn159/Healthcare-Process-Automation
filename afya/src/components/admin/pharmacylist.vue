<template>
        <div class="main-wrapper">
            <header-admin></header-admin>
            <sidebar-admin></sidebar-admin>
           		<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<!-- Page Header -->
					<div class="page-header">
						<div class="row">
							<div class="col-sm-7 col-auto">
								<h3 class="page-title">Pharmacy List</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Pharmacy List</li>
								</ul>
							</div>
							<div class="col-sm-5 col">
								<a href="#Add_Specialities_details" data-toggle="modal" class="btn btn-primary float-right mt-2">Add</a>
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
													<th>Pharmacy Name</th>
													<th>Pharmacy Address</th>
													<th>Created Date</th>
													<th>Phone</th>
													<th class="text-right">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in pharmacylist" :key="item.id">
													<td>{{item.SNO}}</td>
													
													<td>
														<h2 class="table-avatar">
															<a class="avatar avatar-sm mr-2" data-toggle="modal" href="#edit_specialities_details">
																<img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="product image">
															</a>
															<a data-toggle="modal" href="#edit_specialities_details">Medlife Medical</a>
														</h2>
													</td>

													<td>{{item.address}} </td>

													<td>{{item.date}}</td>

													<td>{{item.phone}}</td>
												
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-success-light mr-1" data-toggle="modal" href="#edit_specialities_details">
																<i class="fa fa-edit"></i> Edit
															</a>
															<a  data-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
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
			</div>
			<!-- /Page Wrapper -->
			
			
			<!-- Add Modal -->
			<div class="modal fade" id="Add_Specialities_details" aria-hidden="true" role="dialog">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Add Pharmacy</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="row form-row">
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<label>Pharmacy Name</label>
											<input type="text" class="form-control">
										</div>
									</div>
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<label>Image</label>
											<input type="file"  class="form-control">
										</div>
									</div>
									<div class="col-12">
										<div class="form-group">
											<label>Pharmacy Details</label>
											<textarea class="form-control" rows="4"></textarea>
										</div>
									</div>
								</div>
								<button type="submit" class="btn btn-primary btn-block">Save Changes</button>
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
							<h5 class="modal-title">Edit Pharmacy</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form>
								<div class="row form-row">
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<label>Pharmacy Name</label>
											<input type="text" class="form-control">
										</div>
									</div>
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<label>Image</label>
											<input type="file"  class="form-control">
										</div>
									</div>
									<div class="col-12">
										<div class="form-group">
											<label>Pharmacy Details</label>
											<input type="text" class="form-control">
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
            </div>
</template>
<script>
    import pharmacylist from '../../assets/json/admin/Pharmacylist/pharmacylist.json'
    const images = require.context('../../assets/admin_img/features', false, /\.png$|\.jpg$/)
    export default {
        data() {
		return {
			pharmacylist: pharmacylist
		}
	},
    mounted() {
		 // Datatable

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
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
    }
    }
</script>