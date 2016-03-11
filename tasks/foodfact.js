var path = require('path');

var parse = require('../lib/parse.js');

module.exports = function(grunt) {

  grunt.registerMultiTask('foodfact', "Load the foodfact database", function() {

    this.files.forEach(function(file) {

      var destDir = path.dirname(file.dest);
      grunt.log.debug('Destination : ' + file.dest);
      grunt.log.debug('Sources : ', file.src);

      if (!grunt.file.exits(destDir)) {
        grunt.file.mkdir(destDir);
      }

    });
  });
};

