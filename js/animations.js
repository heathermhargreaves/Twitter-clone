$('document').ready(function(){


$('.tweet-compose').on('click', function() {
    $(this).height(60);
    $('#tweet-controls').show();
});


var maxChar = 140;
$('#char-count').text(maxChar);

$('.tweet-compose').bind("keyup keydown", function() {
  var count = $('#char-count');
  var characters = $(this).val().length;
  count.text(maxChar - characters);

  if((maxChar - characters) < 11 ) {
    count.css("color", "red");
  }
  else {
    count.css("color", '#999');
  }

  if(characters > maxChar) {
    $('#tweet-submit').addClass('disabled');
  }
  else {
    $('#tweet-submit').addClass('disabled');
  }

  $('#tweet-submit').on('click', function() {
    var tweetWords = $('.tweet-compose').val();
    var newTweet = $('.tweet').clone().eq(0);
    var myName = $('#myName').html();
    var picture = $('#twitterpic').attr('src');

    newTweet.find('.tweet-text').html(tweetWords);
    newTweet.find('.fullname').html(myName);
    newTweet.find('.username').html("@Ben");
    newTweet.find('.avatar').attr('src', picture);

    newTweet.prependTo('#stream');
    //$('#stream').prepend($(newTweet));
    $('textarea').val('');
    $('#char-count').text("140");
  });

});






var twitterFeed = [];

var addTweet = function(tweet) {
    if(tweet) {
        tweet = new Tweet(tweet);
        twitterFeed.push(task);

        $('.tweet-compose').val('');
          $('#newList').append(
                        '<a href="#finish" class="" id="item">' +
                        '<li class="list-group-item">' +
                        '<h3>' + task.task + '</h3>'+
                        '<span class="arrow pull-right">' +
                        '<i class="glyphicon glyphicon-arrow-right">' +
                        '</span>' +
                        '</li>' +
                        '</a>'
                    );

    }
};



});
