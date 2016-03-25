/*
 * TODO Add comments here.
 */

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* Clear out the dist directory if it exists */
    clean: {
      dist: {
        src: ['dist'],
      },
    },

    /* Generate the dist directory if it is missing */
    mkdir: {
      dist: {
        options: {
          create: ['dist']
        },
      },
    },

    /* Minify HTML */
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.html'],
          dest: 'dist/'
        }]
      }
    },

    /* Minify JS */
    uglify: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/js/',
          src: ['**/*.js'],
          dest: 'dist/js/',
          ext: '.min.js'
        }]
      }
    },

    /** Minify CSS **/
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css/',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.registerTask('default', ['clean', 'mkdir', 'htmlmin', 'uglify', 'cssmin']);
};

