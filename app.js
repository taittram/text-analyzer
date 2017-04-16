
// use .val() to get text from textarea

function getWords(text) {
  text = text.replace(/[/\r?\n|\r/]/g, ' ');
  return text.replace(/[^a-zA-Z ]/g, "").split(' ');
}

function countWords(text) {
  var words = getWords(text);
  var totalCount = 0;
  for (var i = 0; i < words.length; i++) {
    totalCount++;
  }
  return totalCount;
}

function getUniqueWords(text) {
  var words = getWords(text);
  var uniqueWords = {};
  var uniqueCount = 0;
  for (var i = 0; i < words.length; i++) {
    if (uniqueWords[words[i]] === 1) {
      uniqueWords[words[i]] += 1;
    } else {
      uniqueWords[words[i]] = 1;
    }
  }
  for (var key in uniqueWords) {
    if (uniqueWords[key] === 1) {
      uniqueCount++;
    }
  }
  return uniqueCount;
}

$(function() {
  $('button').on('click', function() {
    $('dl').removeClass('hidden');
    event.preventDefault();
    var text = $('textarea').val();

    $('.js-word-count').text(countWords(text));
    $('.js-unique-words').text(getUniqueWords(text));
    
  });
});