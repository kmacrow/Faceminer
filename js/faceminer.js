
var faceminer = {};

!function(module){
	
	module.ready = function()
	{
		$('#login_btn').click(module.login);
	};

	module.login = function()
	{
		FB.login(function(response){
			if(response.authResponse){
				$('#error').hide();
			}else{
				$('#error').html('Oops, authentication failed!').show();
			}
		},
		{'scope': ''});
	};

}(faceminer);

