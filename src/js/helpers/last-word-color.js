const categoryTitle = document.querySelector('.js-last-word');
const sentence = categoryTitle.innerHTML;
const words = sentence.split(' ');
const lastWord = words[words.length - 1];
const newSentence = sentence.replace(
  lastWord,
  "<span style='color:rgba(79, 46, 232, 1)'>" + lastWord + '</span>'
);
categoryTitle.innerHTML = newSentence;
