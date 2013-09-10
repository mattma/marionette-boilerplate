/*global module:false*/
module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-jade');
  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {
      coffee: {
        files: 'src/**/*.coffee',
        tasks: 'coffee',
        options: {
          livereload: true
        }
      },
      less: {
        files: 'src/public/css/*.less',
        tasks: 'less',
        options: {
          livereload: true
        }
      },
      jade: {
        files: 'src/public/app/templates/*.jade',
        tasks: 'jade',
        options: {
          livereload: true
        }
      },
      images: {
        files: 'src/public/img/**/*',
        tasks: 'copy',
        options: {
          livereload: true
        }
      },
      views: {
        files: 'src/views/**/*',
        tasks: 'copy',
        options: {
          livereload: true
        }
      }
    },
    less: {
      development: {
        files: {
          "app/src/public/css/styles.css": "src/public/css/styles.less"
        }
      }
    },
    coffee: {
      glob_to_multiple: {
        expand: true,
        flatten: false,
        src: ['src/**/*.coffee'],
        dest: 'app',
        ext: '.js'
      }
    },
    jade: {
      amd: {
        src: 'src/public/app/templates/*.jade',
        dest: 'app/src/public/app/templates',
        wrapper: {
          dependencies: 'jade',
          amd: true
        }
      }
    },
    copy: {
      dist: {
        files: [
          { expand: true, flatten: true, src: ['src/public/img/**'], dest: 'app/src/public/img/', filter: 'isFile'},
          { expand: true, flatten: true, src: ['src/views/**'], dest: 'app/src/views/', filter: 'isFile'}
       ]
      }
    }
  });

  grunt.registerTask('default', ['coffee', 'less', 'copy', 'jade']);
  grunt.registerTask('dev', ['default', 'startserver', 'watch']);

  var cp = require('child_process');
  var server;
  grunt.registerTask('startserver', 'Start a web server.', function() {
    server = cp.spawn('node', ['app/src/app.js']);
  });

  grunt.registerTask('stopserver', 'Stop a web server.', function() {
    if (server) {
      server.kill();
    }
  });
};
