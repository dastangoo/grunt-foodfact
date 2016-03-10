module.exports = function (grunt) {

  grunt.registerMultiTask('foodfact', "Load the foodfact database", function(){

    var options = this.options({
      download : false
    });

    var urls = this.data.urls || [];

    grunt.log.debug('Task   : ' + this.name);
    grunt.log.debug('Target : ' + this.target);
    grunt.log.debug('URLs   : ', urls);

    if(options.download){
      grunt.log.debug('Downloading database');
    }

    this.files.forEach(function(file){

      grunt.log.debug('Destination : ' + file.dest);
      grunt.log.debug('Sources : ', file.src);

    });
  });
};
