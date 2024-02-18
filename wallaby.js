module.exports = function (wallaby) {
    return {
      files: [
        'js/*.js',
        'css/*.css',
        'gallery/*.js'
      ],
  
      tests: [
        'test/**/*Spec.js'
      ],
      testFramework: 'mocha'
      
    };
  };