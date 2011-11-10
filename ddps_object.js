function find_object(id_to_find) {
  var found;
  for (var i = 0; i < object_table.length; i++) {
    if (object_table[i].ddps_object_id == id_to_find) {
		  found = object_table[i];
    }
  }
	return found;
}

object_table = [{
  "ddps_object_id" : "1",
  "name" : "Main",
  "attrib_types" : ["ref","value"],
  "attrib_ids" : ["2","3"]
},{
  "ddps_object_id" : "2",
  "name" : "Main",
  "attrib_types" : ["value"],
  "attrib_ids" : ["4"]
},{
  "ddps_object_id" : "3",
  "value" : "Hey!"
},{
  "ddps_object_id" : "4",
  "value" : "Hey Again!"
}]

var value;

var object = object_table[0];

if (object.attrib_types[1] === "value") {
  var value_id = object.attrib_ids[1]; // Grab value ref.
  value_object = find_object(value_id); // Find value object.
  value = value_object.value; // interrogate value object for it's value.
}

alert(value);