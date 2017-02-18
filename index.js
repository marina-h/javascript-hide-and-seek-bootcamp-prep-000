function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankedListLi = document.querySelectorAll('.ranked-list li');
  rankedListLi.forEach(function(list) {
    list.innerHTML = parseInt(list.innerHTML) + n;
  });
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
  var deepestNode = grandNode.children[0];
  while (deepestNode.children[0]) {
    deepestNode = deepestNode.children[0];
  }
  return deepestNode;
}