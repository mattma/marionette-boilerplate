/*global module:false*/
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    watch: {
      coffee: {
        files: 'src/**/*.coffee',
        tasks: 'coffee'
      }
    },
    coffee: {
      dist: {
        src: 'src/**/*.coffee',
        dest: 'public',
        options: {
          preserve_dirs: true,
          base_path: 'src'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-coffee');
  grunt.registerTask('default', 'coffee');
};
