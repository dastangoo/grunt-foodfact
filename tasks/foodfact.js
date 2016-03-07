module.exports = function (grunt) {

  grunt.registerMultiTask('foodfact', "Load the foodfact database", function(p1, p2){

    var options = this.options({
      urls : []
    });
    grunt.log.writeln('Loading the database...');

    grunt.log.debug('urls', options.urls);

    grunt.log.ok('Database loaded');

  });

};
