var CUSTOM = (function() {
  // declare private variables and/or functions
  var currentResumeVersion = 5;

  /*
    NAME : setResumeVersion
    ROLE :
      - Return in href data the latest resume version
    PARAM : /
    RETURN : /
  */

  return {
    setResumeVersion : function () {
      $("#currentResumeVersion").attr("href", "doc/MOUSTY_Adrien_CV_" + currentResumeVersion + "_EN.pdf");
    }
  }
})();
