$(function () {
	//LOGIN OR REGISTER VOLUNTEER
	$('#register-form-link').click(function (e) {
		$("#register-form").delay(100).fadeIn(100);
		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#login-form-link').click(function (e) {
		$("#login-form").delay(100).fadeIn(100);
		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	//LOGIN OR REGISTER ORG
	$('#login-form-org-link').click(function (e) {
		$("#login-form-org").delay(100).fadeIn(100);
		$("#register-form-org").fadeOut(100);
		$('#register-form-org-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-org-link').click(function (e) {
		$("#register-form-org").delay(100).fadeIn(100);
		$("#login-form-org").fadeOut(100);
		$('#login-form-org-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	//MODALS CLOSE
	$('#volunteer').click(function (e) {
		$('#elegir').modal('hide');
	})
	$('#organization').click(function (e) {
		$('#elegir').modal('hide');
	})
	$('#forgot-link').click(function (e) {
		$('#btn-login').modal('hide');
	})
});