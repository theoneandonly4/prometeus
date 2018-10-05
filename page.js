// Prometeus secondary script - DOM Display handling

function changeUrl() {
  var context = JSON.parse(localStorage.context)
  var stateObj = { foo: "bar" };
  // window.history.pushState(stateObj, 'Prometeus', context.path)
}

function changePath() {
  var context = JSON.parse(localStorage.context)
  document.getElementById('path')
  path.innerHTML = context.path.replace(/\//g, ' > ')
}

function changeMain() {
  var context = JSON.parse(localStorage.context)
  var items = JSON.parse(localStorage.items)
  var rootNode = context.path.substr(1)
  var i
  if (rootNode.indexOf('/') > -1) {
    rootNode = rootNode.substr(0, rootNode.indexOf('/'))
  }
  switch (rootNode) {
    case 'Users':
        for (i = 0; i < items.length; i++) {
          if (items[i].type == 'User') {
            displayItem(items[i])
          }
        }
      break;
    case 'Home':

      break;
    case 'Orgas':

      break;
    case 'Projects':

      break;
    default:

  }
}

function displayItem(item) {

}


function page() {
  changeUrl()
  changePath()
  changeMain()
}
