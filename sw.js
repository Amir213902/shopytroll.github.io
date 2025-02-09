'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","style.css","script.js","/nextStep/script.js","/nextStep/index.html","/nextStep/style.css"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
