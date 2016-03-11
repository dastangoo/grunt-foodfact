var path = require('path');

var parse = require('../lib/parse.js');

module.exports = function(grunt) {

  grunt.registerMultiTask('foodfact', "Load the foodfact database", function() {

    var done = this.async();


    this.files.forEach(function(file) {

      var destDir = path.dirname(file.dest);
      var source  = file.src[0];

      grunt.log.debug('Destination : ' + file.dest);
      grunt.log.debug('Sources : ', file.src);

      if (!grunt.file.exists(destDir)) {
        grunt.file.mkdir(destDir);
      }

      parse(file.src[0], {}, function(err, data){
        if(err){
          throw err;
        }

        grunt.log.debug(data);
        grunt.file.write(file.dest, data);

        done();
      });

    });
  });
};

