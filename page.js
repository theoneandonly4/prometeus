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
  if (localStorage.items) {
    var links = JSON.parse(localStorage.links)
  }
  var rootNode = context.path.substr(1)
  var i, j
  if (rootNode.indexOf('/') > -1) {
    rootNode = rootNode.substr(0, rootNode.indexOf('/'))
  }
  switch (rootNode) {
    case 'Users':
        //Display Existing Users
        for (i = 0; i < items.length; i++) {
          if (items[i].type == 'User') {
            displayItem(items[i].id)
            for (j = 0; links.length; j++) {
              if (links.item1 == item[i].id) {
                displayItem()
              }
            }
          }
        }
        //Display New User
        user = new Item('Users', 'User')
        displayItem(user)


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

function displayItem(id) {
  var items = JSON.parse(localStorage.items)
  var item, i
  for (i = 0; i < items.length; i++) {
      if (items[i].id = id) {
        item = items[i]
        break
      }
  }
  if (!item) {
    return false
  }
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
