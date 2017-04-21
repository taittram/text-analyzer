
// use .val() to get text from textarea

function getWords(text) {
  text = text.replace(/[/\r?\n|\r/]/g, ' ').split(' ');
  return text.map(function(word) {
    return word.toLowerCase();
  });
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
    if (uniqueWords[words[i]] >= 1) {
      uniqueWords[words[i]] += 1;
    } else {
      uniqueWords[words[i]] = 1;
    }
  }
  for (var key in uniqueWords) {
    if (key === "") {
      continue;
    }
    if (uniqueWords[key] === 1) {
      uniqueCount++;
    }
  }
  return uniqueCount;
}

function getAverageWordLength(text) {
  var words = getWords(text);
  var wordTotal = 0;
  for (var i = 0; i < words.length; i++) {
    wordTotal += words[i].length;
  }
  var average = wordTotal / words.length;
  average = parseFloat(Math.round(average * 100) / 100).toFixed(2);
  return average;
}

$(function() {
  $('button').on('click', function() {
    $('dl').removeClass('hidden');
    event.preventDefault();
    var text = $('textarea').val();

    $('.js-word-count').text(countWords(text));
    $('.js-unique-words').text(getUniqueWords(text));
    $('.js-average-length').text(getAverageWordLength(text));
    
  });
});