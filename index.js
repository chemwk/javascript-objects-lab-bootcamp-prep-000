var recipes = {a:"b"}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.[key] = {[key]:value}
  return object
}

function deleteFromObjectByKey(object, key){
 var object_new = Object.assign({},object)
 delete object_new.key
 return object_new
}

function destructivelDeleteFromObjectByKey(object, key){
  delete object.key
}