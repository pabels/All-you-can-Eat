//funcion defaultajaxerrorhandler y showmsg veremos en futuro 


function doAjax(options, success, error) {
	var deferred = jQuery.Deferred();
	var self = this;
	options.type = options.type || 'GET';
	options.url = options.url || '';
	
	options.dataType = options.dataType || 'json';
	options.contentType = options.contentType || 'application/json; charset=UTF-8';
	options.success = success;
	options.error = (typeof error === 'function') ? error : console.log('doAjax.options.error != function');
	options.cache = false;
	options.async = true;

	/*options.beforeSend = function(xhr) {
		xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.token);
	}; PREGUNTAR A JAVIER SI ES NECESARIA*/

	$.ajax(options).done(function(data) {
		deferred.resolve(data);
	}).fail(function(jqXHR, textStatus, errorThrown) {
		var err = '[doAjax] ERROR[' + jqXHR.status + '] textStatus[' + textStatus + '] errorThrown[' + errorThrown + ']';
		console.log(err);
		deferred.reject(err);
	});

	return deferred.promise();
}



var getProfile = (function() {
	
	var profile = null;

	return function() {
		var deferred = $.Deferred();
		if (profile) {
			return deferred.resolve(profile);
		} else {
			doAjax({url: '/user/profile'}).done(function(user) {
				profile = user;
				deferred.resolve(profile);
			}).fail(function(jqXHR, textStatus, errorThrown) {
				var err = '[doAjax] ERROR[' + jqXHR.status + '] textStatus[' + textStatus + '] errorThrown[' + errorThrown + ']';
				console.log(err);
				deferred.reject(err);
			});
		}
		return deferred.promise();
	};
}());