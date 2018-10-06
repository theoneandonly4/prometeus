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
function Item(parent, type) {
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
    context = {
      mode: 'local',
      path: '/Users',
      user: ''
    }

    user = new Item('Users', 'User')
    items.push(user)
    localStorage.context = JSON.stringify(context)
    localStorage.items = JSON.stringify(items)
  }
}


function prometeus() {
  dataInitialize()
  page()
}

prometeus()
