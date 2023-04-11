<template>
    <div class="main-wrapper">
        <layout-header4></layout-header4>
        <breadcrumb16></breadcrumb16>
        <!-- Page Content -->
			<div class="content success-page-cont">
				<div class="container-fluid">

					<div class="row justify-content-center">
						<div class="col-lg-6">

							<!-- Success Card -->
							<div class="card success-card">
								<div class="card-body">
									<div class="success-cont">
										<i class="fas fa-check"></i>
										<h3>Email confirmed successfully!</h3>
										<p>Welcome to <strong>AFYA YETU</strong></p>
										<router-link to="/login" class="btn btn-primary view-inv-btn">Proceed to login</router-link>
									</div>
								</div>
							</div>
							<!-- /Success Card -->

						</div>
					</div>

				</div>
			</div>
			<!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
</template>