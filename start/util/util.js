function doAjax(options, success, error) {

				

				options.type = options.type || 'GET';
				options.url = '/restaurants/' +  (options.url || '');
				options.dataType = options.dataType || 'json';
				options.contentType = options.contentType || 'application/json; charset=UTF-8';
				options.success = success;
				options.error = (typeof error === 'function') ? error : 'error';

				options.beforeSend = function(xhr) {
				xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.token);
				};

				$.ajax(options);
}


