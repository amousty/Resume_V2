var GITHUB = (function(){
  // https://stackoverflow.com/questions/10341135/example-of-using-github-api-from-javascript
  // Create a new request object


  /*function initAPI(){
    var request = new XMLHttpRequest();
    // Initialize a request
    request.open('get', 'https://api.github.com/users/amousty');

    $.getJSON('https://api.github.com/users/amousty', function(json){
              alert(json.readyState);
            });

    // Send it
    request.send();
    var api_status = request.readyState;
    var api_translation = "Connection to API failed. Unable to fetch data.";
    if (api_status == 4){
      alert(request.response);
      $('#gh_container_status').hide();
      $('#gh_container_api').show();
    }
    else{
      //alert("Error during GitHub API call (" + request.response + ").");
      $("#gh_status").append(api_translation); // #TODO : Change this call to fct
      $("#gh_status").css("color", "#CC4646");
      $('#gh_container_status').show();
      $('#gh_container_api').hide();
    }
    return request.readyState;
  }*/

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
      url: "https://api.github.com/users/amousty/repos",
      jsonp: true,
      method: "GET",
      dataType: "json",
      success: function(res) {
        //console.log(res)
        $('#gh_latest_commit_date').text(res[9].pushed_at.substr(0, 10));
      }
    });

    $.ajax({
      url: "https://api.github.com/repos/amousty/Resume_V2/commits",
      jsonp: true,
      method: "GET",
      dataType: "json",
      success: function(res) {
        //console.log(res)
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
