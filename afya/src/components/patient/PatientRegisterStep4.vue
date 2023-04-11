<template>
<div class="account-page">
    <div class="main-wrapper">

<!-- Page Content -->
			<div class="content login-page pt-0">
				<div class="container-fluid">

					<!-- Register Content -->
					<div class="account-content">
						<div class="row align-items-center">
							<div class="login-right">
								<div class="inner-right-login">
									<div class="login-header">
										<div class="logo-icon">
											<img src="../../assets/img/logo.png" alt="">
										</div>
										<div class="step-list">
											<ul>
												<li><a href="#" class="active-done">1</a></li>
												<li><a href="#" class="active-done">2</a></li>
												<li><a href="#" class="active-done">3</a></li>
												<li><a href="#" class="active">4</a></li>
												<li><a href="#">5</a></li>
											</ul>
										</div>
										<form method="post" id="famil_age">
				                        	<div class="text-left mt-2">
						                        <p>Add age of the each members</p>
						                        <h4 class="mt-3">Age</h4>
						                    </div>
                                            <div class="step-process-col mt-4">
                                                <div class="form-group">
							                    	<label>Child_1 Age</label>
							                    	<input type="text" class="form-control" id="Child_1_age" name="Child_1_age">
							                    </div>
							                    <div class="form-group">
							                    	<label>Child_1 Image</label>
							                    	<input type="file" class="form-control" id="Child_1_image" name="Child_1_image">
							                    </div>
							                    <div class="form-group">
							                    	<label>Spouse Age</label>
							                    	<input type="text" class="form-control" id="spouse_age" name="spouse_age">
							                    </div>
							                    <div class="form-group">
							                    	<label>Spouse Image</label>
							                    	<input type="file" class="form-control" id="spouse_file" name="spouse_file">
							                    </div>
                                                <div class="form-group">
							                    	<label>Father</label>
							                    	<input type="text" class="form-control" id="father_age" name="father_age">
							                    </div>
							                    <div class="form-group">
							                    	<label>Father Image</label>
							                    	<input type="file" class="form-control" id="father_file" name="father_file">
							                    </div>
                                                <div class="form-group">
							                    	<label>Mother</label>
							                    	<input type="text" class="form-control" id="mother_age" name="mother_age">
							                    </div>
							                    <div class="form-group">
							                    	<label>Mother Image</label>
							                    	<input type="file" class="form-control" id="mother_file" name="mother_file">
							                    </div>
                                            </div>
							                <div class="mt-5">
					                        	<router-link to="/patient/patient-register-step5" class="btn btn-primary btn-block btn-lg login-btn step4_submit" id="step4_button" type="submit">continue </router-link>
					                        </div>
				                        </form>
									</div>
								</div>
								<div class="login-bottom-copyright">
									<span>© 2020 AfyaYetu. All rights reserved.</span>
								</div>
							</div>
						</div>
					</div>
					<!-- /Register Content -->

				</div>

			</div>
			<!-- /Page Content -->


    </div>
    </div>
</template>
<script>

export default {
   mounted() {

// Signup Toggle
	$(function () {
        $("#is_registered").click(function () {
            if ($(this).is(":checked")) {
                $("#preg_div").show();
            } else {
                $("#preg_div").hide();
            }
        });
    });

    //Increment Decrement value
	$('.inc.button').click(function(){
	    var $this = $(this),
	        $input = $this.prev('input'),
	        $parent = $input.closest('div'),
	        newValue = parseInt($input.val())+1;
	    $parent.find('.inc').addClass('a'+newValue);
	    $input.val(newValue);
	    newValue += newValue;
	});
	$('.dec.button').click(function(){
	    var $this = $(this),
	        $input = $this.next('input'),
	        $parent = $input.closest('div'),
	        newValue = parseInt($input.val())-1;
	    console.log($parent);
	    $parent.find('.inc').addClass('a'+newValue);
	    $input.val(newValue);
	    newValue += newValue;
	});

	// Signup Profile
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('#prof-avatar').attr('src', e.target.result);
			};

			reader.readAsDataURL(input.files[0]);
		}
	}
	$("#profile_image").change(function() {
		readURL(this);
	});

	// Datepicker
	  var maxDate = $('#maxDate').val();
	  if($('#dob').length > 0) {
	  $('#dob').datepicker({
		  startView: 2,
		  format: 'dd/mm/yyyy',
		  autoclose: true,
		  todayHighlight: true,
		  endDate: maxDate
	  });
	}
	if($('#editdob').length > 0) {
	  $('#editdob').datepicker({
		startView: 2,
		format: 'dd/mm/yyyy',
		autoclose: true,
		todayHighlight: true,
		endDate: maxDate
	});
	}

// Select 2

	if($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
   },


}
</script>
