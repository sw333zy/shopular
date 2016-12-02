'use strict';

module.exports = function(grunt) {

   grunt.initConfig({

     jshint: {
          options: {
              jshintrc: '.jshintrc',
              ignores: ['node_modules/**']
          },
          source: {
              files: {
                  src: ['js/**/*.js']
              }
          }
      },

      karma: { // task name
       options: {
       // These options apply to all of our TARGETS
       frameworks: [ 'mocha', 'chai' ],
       client: {
         mocha: {
           ui: 'bdd'
         }
       },
       browsers: ['PhantomJS'],
       singleRun: true,

       preprocessors: {
         'src/js/**/*.js': [ 'coverage' ]
       },

       reporters: [ 'dots', 'coverage' ],
       coverageReporter: {
         type: 'text-summary'
       }
     },

     registry: {
       options: {
         files: [
           'node_modules/angular/angular.js',
           'node_modules/angular-mocks/angular-mocks.js',
           'src/js/store.module.js',
           'src/js/storeData.controller.js',
           'src/js/product.service.js',
           'test/specs/product.service.spec.js',
           'test/specs/storeData.controller.spec.js'
         ]
       }
     }
   }

 });

   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-karma');

   grunt.registerTask('default', ['jshint', 'karma']);
};
