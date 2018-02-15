// https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know
// -> Module Design Pattern

var index = (function(){
   // PRIVATE
   var status = "disconnected";
   var init = function(){
      $("#signup-div").hide();
      //$("#signin-div").hide();
   }

   var toggleLogin = function(){
     switch(index.status){
       case "connected" :
          window.location.href = "views/map.php";
          break;
       case "disconnected" :
          window.location.href = "../index.php";
          break;
     }
     index.callInit();
   }

   // PUBLIC
   return {
    callInit: function() {
      init();
    },
    callToggleLogin : function() {
      toggleLogin();
    },
  };
})();

// CALL METHODS

$(document).ready(function(){
  // Starting
  index.callInit();

  // RPCS
  // LOGIN
  $("#signin-form").submit(function(event){
    /* stop form from submitting normally */
    //event.preventDefault();

    /* get the action attribute from the <form action=""> element */
    var $form = $( this );
    var url = $form.attr( 'action' );
    /* Send the data using post with element id name and name2*/
    var posting = $.post(
      url,
      {
        login : $("#login-signin").val(),
        passwd : $("#pwd-signin").val()
      }
    ).success(
        function( data ) {
          alert(data);
            if(data == "OK"){
              index.status = "connected";
              index.callToggleLogin();
            }
            else{
              redirectToErrorPage(data);
            }
          });
  });

    // SIGN UP
    $("#signup-form").submit(function(event){
      /* stop form from submitting normally */
         event.preventDefault();
        if($("#pwd-signup").val() !== "" && $("#pwd-signup").val() === $("#pwd2-signup").val()){

        /* get the action attribute from the <form action=""> element */
        var $form = $( this );
        var url = $form.attr( 'action' );

        /* Send the data using post with element id name and name2*/
        var posting = $.post( url, { login : $("#login-signup").val(), passwd : $("#pwd-signup").val() });

        /* Alerts the results */
        posting.success(function( data ) {
          var res = data;
          alert(res);
        });
      }
      else{
        redirectToErrorPage("WRONG PWD");
      }
   });



   // Redirect to the error page
   function redirectToErrorPage(errorText){
     //$('#errorText').val(errorText);
     window.location.href = "views/error.php?err=" + errorText;
   }

     // Onlick
        $( "#signin-trigger" ).click(function() {
             $("#signup-div:visible").hide("fadeOut");
             $("#signin-div").show("fadeIn");
        });

        $( "#signup-trigger" ).click(function() {
             $("#signin-div:visible").hide("fadeOut");
             $("#signup-div").show("fadeIn");
        });
     });
