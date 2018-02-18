var GITHUB = (function(){

  function initAPI(){
    // Common data
    $.ajax({
      url: "https://api.github.com/users/amousty",
      jsonp: true,
      method: "GET",
      dataType: "json",
      success: function(res) {
        $('#gh_nbr_rep').text(res.public_repos);
        $('#gh_usrname').text(res.login);

      }
    });

    $.ajax({
      url: "https://api.github.com/repos/amousty/Resume_V2/commits",
      jsonp: true,
      method: "GET",
      dataType: "json",
      success: function(res) {
        $('#gh_latest_commit_date').text(res[0].commit.author.date.substr(0, 10));
        $('#gh_latest_commit_title').text(res[0].commit.message);
        // pushed at -> latestet commit of RV2
      }
    });

    return -1;
  }

  return {
    getAPIResult : function(){
      initAPI();
    }
  }
})();
