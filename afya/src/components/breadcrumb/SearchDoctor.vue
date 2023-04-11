<template>
    <!-- Breadcrumb -->
        <div class="breadcrumb-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-8 col-12">
                        <nav aria-label="breadcrumb" class="page-breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/index">Home</router-link></li>
                                <li class="breadcrumb-item active" aria-current="page">Search</li>
                            </ol>
                        </nav>
                        <h2 class="breadcrumb-title">{{result_count}} matches</h2>
                    </div>
                    <div class="col-md-4 col-12 d-md-block d-none">

                    </div>
                </div>
            </div>
        </div>
        <!-- /Breadcrumb -->
</template>

<script>

export default {
	mounted() {
        if($('.select').length > 0) {
            $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
            });
        }
    },

    computed: {
        result_count: function () {
			return this.$store.getters['patient/search_results_count']
		}
    }
}
</script>