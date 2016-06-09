var $ = require('jquery');
var _ = require('underscore');
var handlebars = require('handlebars');
var githubtoken = require('./githubapikey.js');

console.log(githubtoken.token);

if(githubtoken !== undefined){
console.log('testing');
  $.ajaxSetup({
    headers: {
      'Authorization': 'token ' + githubtoken.token
    }
  });
}



var myUrl = "https://api.github.com/users/vierello";

$.ajax(myUrl).done(function(data){
  console.log(data);
})
