/*
 * TODO Add comments here.
 */

module.exports = function(grunt) {

  grunt.initConfig({
    /* Clear out the dist directory if it exists */
    clean: {
      dev: {
        src: ['dist'],
      },
    },
    /* Generate the dist directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['dist']
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['clean', 'mkdir']);

};
