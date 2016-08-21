var $ = require('jquery');
var _ = require('underscore');
var handlebars = require('handlebars');
var githubtoken = require('./githubapikey.js');
var moment = require('moment');
var tabs = ('./bootstrap.min.js');
//
// if(githubtoken !== undefined){
//   $.ajaxSetup({
//     headers: {
//       'Authorization': 'token ' + githubtoken.token
//     }
//   });
// }



var myUrl = "https://api.github.com/users/vierello";

$.ajax(myUrl).done(function(users){
  displayUsers(users);
  displayUsers1(users);
});

function displayUsers(users){
  var source = $('#followers-template').html();
  var followersTemplate = handlebars.compile(source);
  var renderFollowersTemplate = followersTemplate(users);

  $('.followers-info').append(renderFollowersTemplate);
}

function displayUsers1(users){
  var source = $('#following-template').html();
  var followingTemplate = handlebars.compile(source);
  var renderFollowingTemplate = followingTemplate(users);

  $('.following-info').append(renderFollowingTemplate);
}

var repoUrl = myUrl + '/repos'

$.ajax(repoUrl).done(function(repos){
  //console.log(repos);
  displayRepos(repos);
});


function displayRepos(repos){
  _.each(repos, function(repo, index, array){
  var source = $('#repo-template').html();
  var repoTemplate = handlebars.compile(source);
  var context = {'repo': repo};
  var renderRepoTemplate = repoTemplate(context);

  console.log(repo.updated_at);
  $('.updated').html(moment(repo.updated_at).fromNow());
  $('.repos-list').prepend(renderRepoTemplate);
  });
}

$('#overview').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$('#repositories').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$('#activity').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
