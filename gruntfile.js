module.exports = function(grunt){
	
	grunt.initConfig({
		concat: {
			
		},
		uglify: {
			
		},
		jshint: {
			
		},
		watch: {
			
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask("default", ['concat', 'uglify']);
	
}