// Prometeus secondary script - DOM Display handling

function changeUrl() {
  var context = JSON.parse(localStorage.context)
  var stateObj = { foo: "bar" };
  // window.history.pushState(stateObj, 'Prometeus', context.path)
}

function changePath() {
  var context = JSON.parse(localStorage.context)
  document.getElementById('path')
  path.addEventListener('mouseup', pathChange)
  path.innerHTML = '<h3>' + context.path.replace(/\//g, ' > ') + '</h3>'
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
  var main = document.getElementById('main')
  var div = document.createElement('div')
  var title = document.createElement('h4')
  var type = document.createElement('img')

  div.id = item.id
  div.classList.add('item')
  div.classList.add(item.type)

  title.classList.add('name')
  title.innerHTML = item.name
  title.addEventListener('mouseup', nameChange)

  type.classList.add('type')
  type.setAttribute('src', './src/img/pixel blue.png')
  type.addEventListener('mouseup', typeChange)

  div.appendChild(title)
  div.appendChild(type)
  main.appendChild(div)
}

function pathChange() {

}

function nameChange() {

}

function typeChange() {

}

function page() {
  //Remove Context Menu default behavior (right click)
  document.body.addEventListener('contextmenu', function(e) {
    e.preventDefault()
    return false
  })
  changeUrl()
  changePath()
  changeMain()
}
