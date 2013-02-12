/*global module:false*/
module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-jade');
  grunt.loadNpmTasks('grunt-growl');

  grunt.initConfig({
    watch: {
      coffee: {
        files: 'src/**/*.coffee',
        tasks: 'stopserver coffee startserver'
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
  grunt.registerTask('dev', 'startserver watch');

  var cp = require('child_process');
  var server;
  grunt.registerTask('startserver', 'Start a web server.', function() {
    server = cp.spawn('node', ['app/app.js']);
  });

  grunt.registerTask('stopserver', 'Stop a web server.', function() {
    if (server) {
      server.kill();
    }
  });
};
