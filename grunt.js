/*global module:false*/
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    watch: {
      coffee: {
        files: 'src/**/*.coffee',
        tasks: 'coffee'
      },
      jade: {
        files: 'src/public/app/templates/*.jade',
        tasks: 'jade'
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

  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-jade');

  grunt.registerTask('default', 'coffee jade');
};
