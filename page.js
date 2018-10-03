// Prometeus secondary script - DOM Display handling

function changeUrl() {
  var context = JSON.parse(localStorage.context)
  var stateObj = { foo: "bar" };
  // window.history.pushState(stateObj, 'Prometeus', context.path)
}

function changePath() {
  var context = JSON.parse(localStorage.context)
  document.getElementById('path')
  path.innerHTML = context.path
}

function page() {
changeUrl()
changePath()
}

page()
