document.addEventListener("DOMContentLoaded", function(evt) {
  var params = {},
      pairs = document.URL.split('?').pop().split('&');
  for (var i = 0, p; i < pairs.length; i++) {
    p = pairs[i].split('=');
    params[ p[0] ] =  decodeURIComponent(p[1]);
  }

  var response = {};
  
  console.log(params);

  if (params.code) {
    response.body = {
      code: params.code,
      clientData: params.clientData,
	  scope: params.scope
    };
  } else if (params.err) {
    response.err = params.err;
  } else {
    response.err = "AUTHORIZATION_CODE_UNAVAILABLE";
  }

  window.opener.postMessage(response.body, '*');
});

//sb-wxndm37697580-1@personal.example.com / gK0yN0?2


/*
https://www.sandbox.paypal.com/signin/authorize?flowEntry=static&client_id=CLIENT-ID&scope=LIST-OF-SCOPES&redirect_uri=RETURN-URL

https://www.sandbox.paypal.com/signin/authorize?flowEntry=static&client_id=AfYM6PAFXXXye0u4jgdOlynUkuJNzsJYXtshXoQlDHhXjtP-OgwrRV-NUjJPxqX-Ea2ABPk10i3GIngM&scope=openid&redirect_uri=https://example.com



https://www.sandbox.paypal.com/connect/?flowEntry=static&client_id=AfYM6PAFXXXye0u4jgdOlynUkuJNzsJYXtshXoQlDHhXjtP-OgwrRV-NUjJPxqX-Ea2ABPk10i3GIngM&response_type=code&scope=openid profile email address&redirect_uri=https%3A%2F%2Fexample.com


&state=123456 : ?????
*/
