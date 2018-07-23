var recipes = {a:"b"}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = '[value]'
  return object
}

function deleteFromObjectByKey(object, key){
 var objectnew = Object.assign({},object)
 delete objectnew.key
 return objectnew
}

function destructivelDeleteFromObjectByKey(object, key){
  delete object.key
  return object
}