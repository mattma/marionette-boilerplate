/*global module:false*/
module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-jade');

  grunt.initConfig({
    watch: {
      coffee: {
        files: 'src/**/*.coffee',
        tasks: 'coffee'
      },
      less: {
        files: 'src/public/css/*.less',
        tasks: 'less'
      },
      jade: {
        files: 'src/public/app/templates/*.jade',
        tasks: 'jade'
      }
    },
    less: {
      development: {
        files: {
          "app/public/css/styles.css": "src/public/css/styles.less"
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          "app/public/css/styles.css": "src/public/css/styles.less"
        }
      }
    },
    coffee: {
      dist: {
        src: 'src/**/*.coffee',
        dest: 'app',
        options: {
          preserve_dirs: true,
          base_path: 'src'
        }
      }
    },
    jade: {
      amd: {
        src: 'src/public/app/templates/*.jade',
        dest: 'app/public/app/templates',
        wrapper: {
          dependencies: 'jade',
          amd: true
        }
      }
    }
  });

  grunt.registerTask('default', 'coffee less jade');
};
