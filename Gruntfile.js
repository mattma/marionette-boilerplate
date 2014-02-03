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
        files: 'src/**/*.less',
        tasks: 'less',
        options: {
          livereload: true
        }
      },
      jade: {
        files: 'src/client/**/*.jade',
        tasks: 'jade',
        options: {
          livereload: true
        }
      },
      images: {
        files: 'src/img/**/*',
        tasks: 'copy',
        options: {
          livereload: true
        }
      },
      views: {
        files: 'src/server/views/**/*',
        tasks: 'copy',
        options: {
          livereload: true
        }
      }
    },
    less: {
      development: {
        files: {
          "compiled/server/css/styles.css": "src/server/css/styles.less"
        }
      }
    },
    coffee: {
      glob_to_multiple: {
        expand: true,
        flatten: false,
        cwd: 'src',
        src: ['**/*.coffee'],
        dest: 'compiled',
        ext: '.js'
      }
    },
    jade: {
      amd: {
        src: 'src/client/templates/*.jade',
        dest: 'compiled/client/templates',
        wrapper: {
          dependencies: 'jade',
          amd: true
        }
      }
    },
    copy: {
      dist: {
        files: [
          { expand: true, flatten: true, src: ['src/servier/img/**'], dest: 'compiled/server/img/', filter: 'isFile'},
          { expand: true, flatten: true, src: ['src/server/views/**'], dest: 'compiled/server/views/', filter: 'isFile'}
       ]
      }
    }
  });

  grunt.registerTask('default', ['coffee', 'less', 'copy', 'jade']);
  grunt.registerTask('dev', ['default', 'startserver', 'watch']);

  var cp = require('child_process');
  var server;
  grunt.registerTask('startserver', 'Start a web server.', function() {
    server = cp.spawn('node', ['compiled/server/app.js']);
  });

  grunt.registerTask('stopserver', 'Stop a web server.', function() {
    if (server) {
      server.kill();
    }
  });
};
