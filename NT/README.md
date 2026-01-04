With OAuth, we have 2 integration methods:
1. Using Redirect_URI and navigate users to specific website (youtube.com -> IdP -> youtube.com/callback?authorizationCode=123&state=123)
2. Having a dedicated page of our own, and using js file to get the authorizationCode within the callback uri from IdP and notify back to the parent window using window messaging.
   (youtube.com -> IdP -> youtube-direct-custom (js get the authorization_code in url, window.postMessage(data)) -> Close popup window -> User still in the original page (youtube.com).
