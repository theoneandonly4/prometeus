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
  if (context.path == '/') {
    path.innerHTML = '<h3>' + ' > Prometeus' + '</h3>'
  }
  else {
    path.innerHTML = '<h3>' + context.path.replace(/\//g, ' > ') + '</h3>'
  }
}

function changeMain() {
  var context = JSON.parse(localStorage.context)
  var items = JSON.parse(localStorage.items)
  var links = JSON.parse(localStorage.links)

  var i, j
  // var inputEmpty = true
  // var currentEmpty = true
  // var outputEmpty = true

  var newInput, newCurrent, newOutput

  for (i = 0; i < items.length; i++) {
    if (items[i].parent == context.path) {
      displayItem(items[i])
      // switch (items[i].target) {
      //   case 'input':
      //     inputEmpty = false
      //     break;
      //   case 'current':
      //     currentEmpty = false
      //     break;
      //   case 'input':
      //     outputEmpty = false
      //     break;
      // }
    }
  }

  displayItem(new Item(context.path, context.input, 'input'))
  displayItem(new Item(context.path, context.current, 'current'))
  displayItem(new Item(context.path, context.output, 'output'))

// TODO: add parent button link to move up the path

}

function displayItem(item) {

  var target = document.getElementById(item.target)
  var div = document.createElement('div')
  var title = document.createElement('h4')
  var type = document.createElement('img')
  // TODO: add zoom image link to switch Item and move downpath

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
  target.appendChild(div)
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
