var recipes = {a:"b"}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,[key]:value)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.[key] = [key]:value
  return object
}

function deleteFromObjectByKey(object, key){
  Object.assign({},)
}

function destructivelDeleteFromObjectByKey(object, key){
  delete objet.key
}