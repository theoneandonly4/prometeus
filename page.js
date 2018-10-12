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
  var newInput
  var newCurrent
  var newOutput
  var newItems

  var newInput, newCurrent, newOutput

  for (i = 0; i < items.length; i++) {
    if (items[i].parent == context.path) {
      displayItem(items[i])
    }
  }

  newInput = new Item(context.path, context.input, 'input')
  newCurrent = new Item(context.path, context.current, 'current')
  newOutput = new Item(context.path, context.output, 'output')
  newInput.id = 'newInput'
  newCurrent.id = 'newCurrent'
  newOutput.id = 'newOutput'

  newItems = [newInput, newCurrent, newOutput]
  localStorage.newItems = JSON.stringify(newItems)

  displayItem(newInput)
  displayItem(newCurrent)
  displayItem(newOutput)

// TODO: add parent button link to move up the path

}

function displayItem(item) {

  var target = document.getElementById(item.target)
  var div = document.createElement('div')
  var title = document.createElement('h4')
  var type = document.createElement('img')
  var zoom = document.createElement('img')

  //Get types
  var types = JSON.parse(localStorage.types)
  var typeImg
  var i
  for (i = 0; i < types.length; i++) {
    if (types[i].name == item.type) {
      typeImg = types[i].img
      break
    }
  }

  div.id = item.id
  div.classList.add('item')
  div.classList.add(item.type)

  title.classList.add('name')
  title.innerHTML = item.name
  title.addEventListener('mouseup', nameChange)

  type.classList.add('type')
  type.setAttribute('src', typeImg)
  type.addEventListener('mouseup', typeChange)

  zoom.classList.add('zoom')
  zoom.setAttribute('src', './src/img/zoom.ico')
  zoom.addEventListener('mouseup', zoom)

  div.appendChild(title)
  div.appendChild(type)
  div.appendChild(zoom)
  target.appendChild(div)
}

function pathChange(e) {

}

function nameChange(e) {

  //Check Right click
  if (e.button != 2) {
    return false
  }

  var items = JSON.parse(localStorage.items)
  var newItems = JSON.parse(localStorage.newItems)
  //Remove any other Inputs - entered values are lost
  var inputs = document.getElementsByTagName('input')
  var i, j, title, id, name
  for (i = 0; i < inputs.length; i++) {
    title = document.createElement('h4')
    id = inputs[i].parentNode.id
    for (j = 0; j < items.length; j++) {
      if (items[j].id == id) {
        name = items[j].name
        break
      }
    }
    if (!name) {
      for (j = 0; j < newItems.length; j++) {
        if (newItems[j].id == id) {
          name = newItems[j].name
          break
        }
      }
    }
    title.classList.add('name')
    title.innerHTML = name
    title.addEventListener('mouseup', nameChange)

    inputs[i].parentNode.replaceChild(title, inputs[i])
  }

  var div = document.getElementById(e.target.parentNode.id)
  var titles = div.getElementsByClassName('name')
  var title = titles[0]
  var titleInput = document.createElement('input')

  titleInput.classList.add('nameInput')
  titleInput.setAttribute('type', 'text')
  titleInput.setAttribute('name', 'name')
  titleInput.setAttribute('value', e.target.innerText)
  titleInput.setAttribute('size', '20')
  titleInput.setAttribute('maxlength', '20')
  titleInput.addEventListener('keypress', changeName)

  div.replaceChild(titleInput, title)

}

function typeChange(e) {

}

function zoom(e) {

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
