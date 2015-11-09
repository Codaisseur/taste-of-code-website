(function($) {
  window.fnames = [];
  window.ftypes = [];
  fnames[0]='EMAIL';
  ftypes[0]='email';
  fnames[1]='FNAME';
  ftypes[1]='text';
  fnames[2]='LNAME';
  ftypes[2]='text';
  fnames[4]='BDATE';
  ftypes[4]='date';
  fnames[3]='LAPTOP';
  ftypes[3]='dropdown';

  $("#mce-LAPTOP").selectize({
    create: false
  });

  $("#showSignup").bind('click', function(e) {
    $("#signupCTA").hide();
    $("div.signup-form").show();
    e.preventDefault();
  });
}(jQuery));

var $mcj = jQuery.noConflict(true);
