// ==UserScript==
// @name        PSO2 swiki redirect.
// @description Redirect PSO2 swiki to mirror site in google search for oversea users.
// @include     https://www.google.com/search?*
// @namespace   https://github.com/rogeraabbccdd/pso2swiki-redirect
// @updateURL   https://raw.githubusercontent.com/rogeraabbccdd/pso2swiki-redirect/master/pso2swiki-redirect.user.js
// @downloadURL https://raw.githubusercontent.com/rogeraabbccdd/pso2swiki-redirect/master/pso2swiki-redirect.user.js
// @version     1.1
// @author      rogeraabbccdd
// ==/UserScript==
let urls = document.getElementsByTagName("a");
for(let i=0;i<urls.length;i++){
    let link = urls[i].href;
    if(link.includes("https://pso2.swiki")){
        let newhref = link.replace("https://pso2.swiki","https://pso2m.swiki");
        urls[i].href = newhref;
        // block mousedown event for firefox
        urls[i].onmousedown = function(e){
            return false;
        }
    }
}
