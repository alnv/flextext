module.exports = function(grunt){
	
	grunt.initConfig({
	
		uglify: {
			options: {
				mangle: true,
				compress: true,
				sourceMap: 'dest/flextext.map'
			},
			target: {
				src: 'src/flextext.js',
				dest: 'dest/jquery.flextext.min.js'
			}
		},
	
		watch: {
			script: {
				files: ['src/*.js', 'example/*.html'],
				tasks: ['uglify'],
				options: {
					livereload: 3111
				}
			}
		}
	
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask("default", ['concat', 'uglify']);
	
}