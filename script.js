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
    var check
    for (i = 0; i < items.length; i++) {
      ids.push(items[i].id)
    }
    i = 0
    while (!check) {
      check = ids.indexOf(i) > -1
      i++
    }
    return i
  }
}

// Item Constructor
function Item(parent, type) {
  this.id = generateItemId()
  this.parent = parent
  if (!type) {
    this.type = 'default'
    this.name = 'New Item'
  }
  else {
    this.type = type
    this.name = 'New' + type
  }
}

// Link Constructor
function Link(item1, item2, type) {
  this.id = generateLinkId()
  this.item1 = item1
  this.item2 = item2
}

function dataInitialize() {
  var context
  var items = []
  var links = []
  var user

  if (!localStorage.context) {
    console.log('ok')
    context = {
      mode: 'local',
      path: '/home',
      user: 'New User'
    }

    user = new Item()

    localStorage.context = JSON.stringify(context)
  }
}


function prometeus() {
  dataInitialize()
}

prometeus()
