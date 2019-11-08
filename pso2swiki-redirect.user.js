// ==UserScript==
// @name        PSO2 swiki redirect.
// @description Redirect PSO2 swiki to mirror site in google search for oversea users.
// @include     *
// @namespace   https://github.com/rogeraabbccdd/pso2swiki-redirect
// @updateURL   https://raw.githubusercontent.com/rogeraabbccdd/pso2swiki-redirect/master/pso2swiki-redirect.user.js
// @downloadURL https://raw.githubusercontent.com/rogeraabbccdd/pso2swiki-redirect/master/pso2swiki-redirect.user.js
// @version     1.2
// @author      rogeraabbccdd
// ==/UserScript==
let urls = document.getElementsByTagName("a");
for(let url of urls){
    let link = url.href;
    if(link.includes("pso2.swiki")){
        let newhref = link.replace("pso2.swiki","pso2m.swiki");
        url.href = newhref;
        // block mousedown event for firefox
        url.onmousedown = function(e){
            return false;
        }
    }
}
