document.onreadystatechange = function() {
  var loadingElement = document.getElementById('loading');

  if (document.readyState === 'loading') {
    loadingElement.style.display = 'flex';
  }else if (document.readyState === 'complete') {
    loadingElement.style.display = 'none';
  }
};
