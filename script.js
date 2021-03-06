// Prometeus main script - Data handling

// ID Generation function for items

function generateItemId() {
  if(!localStorage.items) {
    return 0
  }
  else {
    var items = JSON.parse(localStorage.items)
    var i
    var ids =[]
    var check = true
    for (i = 0; i < items.length; i++) {
      ids.push(items[i].id)
    }
    i = 0
    while (check) {
      if (ids.indexOf(i) > -1) {
        i++
      }
      else {
        check = false
      }
    }
    return i
  }
}

// Item Constructor
function Item(parent, type, target) {
  this.id = generateItemId()
  this.parent = parent
  if (!type) {
    this.type = 'default'
    this.name = 'New Item'
  }
  else {
    this.type = type
    this.name = 'New ' + type
  }
  this.target = target
}

// Link Constructor
function Link(item1, item2, type, main) {
  this.id = generateLinkId()
  this.item1 = item1
  this.item2 = item2
  this.type = type
  this.main = main
}

function dataInitialize() {
  var context
  var items = []
  var links = []
  var types = []
  var user

  if (!localStorage.context) {
    context = {
      mode: 'local',
      path: '/',
      user: '',
      input: 'Agent',
      current: 'Activity',
      output: 'System'
    }
    types = [
      {"name":"Agent","img":"./src/img/agent.png"},
      {"name":"Activity","img":"./src/img/activity.jpg"},
      {"name":"System","img":"./src/img/system.png"}
    ]
    localStorage.context = JSON.stringify(context)
    localStorage.items = JSON.stringify(items)
    localStorage.links = JSON.stringify(links)
    localStorage.types = JSON.stringify(types)
  }
}

function changeName(e) {
  // Check "Enter" key
  if (e.key != 'Enter') {
    return false
  }
  var items = JSON.parse(localStorage.items)
  var newItems = JSON.parse(localStorage.newItems)
  var i, item
  for (i = 0; i < items.length; i++) {
    if (items[i].id == e.target.parentNode.id) {
      items[i].name = e.target.value
      break
    }
  }
  if (!item) {
    for (i = 0; i < newItems.length; i++) {
      if (newItems[i].id == e.target.parentNode.id) {
        item = new Item(newItems[i].parent, newItems[i].type, newItems[i].target)
        item.name = e.target.value
        items.push(item)
        break
      }
    }
  }
  localStorage.items = JSON.stringify(items)
  console.log(item)
}

function prometeus() {
  dataInitialize()
  page()
}

prometeus()
