/*
 * TODO Add comments here.
 */

module.exports = function(grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  //require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* Clear out the dist directory if it exists */
    clean: {
      src: ['dist']
    },

    /* Generate the dist directory if it is missing */
    mkdir: {
      dist: {
        options: {
          create: ['dist']
        }
      }
    },

    /** Copy images */
    copy: {
      images: {
        files: [{
          expand: true,
          src: ['src/img/*'],
          dest: 'dist/img/',
          filter: 'isFile',
          flatten: true
        }]
      },
      printcss: {
        files: [{
          expand: true,
          src: ['src/css/print.css'],
          dest: 'dist/css/',
          filter: 'isFile',
          flatten: true
        }]
      }
    },

    responsive_images: {
      indeximages: {
        options: {
          engine: 'gm',
          sizes: [{
            name: 'thumbnail',
            rename: false,
            width: 131,
            height: 61,
            aspectRatio: false,
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['pizzeria.jpg'],
          cwd: 'src/views/images/',
          dest: 'dist/views/images/'
        }]
      },
    },
    /* Minify HTML */
    htmlmin: {
      indexhtml: {
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
      },
      pizzahtml: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['views/*.html'],
          dest: 'dist/'
        }]
      }
    },

    imagemin: {
      indeximages: {
        options: {
          optimizationLevel: 7
        },
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: 'dist/img/'
        }]
      },
      viewimages: {
        options: {
          optimizationLevel: 7
        },
        files: [{
          expand: true,
          cwd: 'src/views/images/',
          src: ['pizza.png'],
          dest: 'dist/views/images/'
        }]
      }
    },

    /** Minify CSS **/
    cssmin: {
      options: {
        report: 'gzip'
      },
      indexcss: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['style.css','print.css'],
          dest: 'dist/css/'
        }]
      },
      pizzacss: {
        files: [{
          expand: true,
          cwd: 'src/views/css',
          src: ['style.css','bootstrap-grid.css'],
          dest: 'dist/views/css/'
        }]
      }
    },

    uglify: {
      options: {
        report: 'gzip'
      },
      indexjs: {
        files: {
          'dist/js/perfmatters.js': ['src/js/perfmatters.js']
        }
      },
      pizzajs: {
        files: {
          'dist/views/js/main.js': ['src/views/js/main.js']
        }
      }
    },
  });

  grunt.registerTask('default', [
    'clean',
    'mkdir',
    'copy',
    'responsive_images',
    'htmlmin',
    'imagemin',
    'cssmin',
    'uglify'
  ]);
};

