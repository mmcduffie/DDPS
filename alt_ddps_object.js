$(document).ready(function() {
objects = [{
  "id" : "1",
  "name" : "Main"
},{
  "id" : "2",
  "name" : "Other"
}];

slots = [{ // Each object can have multiple slots.
  "id" : "1",
  "object_id" : "1",
},{
  "id" : "2",
  "object_id" : "1",
}
},{
  "id" : "3",
  "object_id" : "2",
}];

calls = [{ // If a call has a slot_id that matches one of our slots, we know it belongs there.
  "id" : "1",
  "slot_id" : "1",
  "called_object_id" : "2"
}];

params = [{ // Each call can have multiple params.
  "id" : "1",
  "call_id" : "1",
  "object_id" : "8"
},{
  "id" : "2",
  "call_id" : "1",
  "object_id" : "9"
}];

refs = [{ // Each slot can also have references.
  "id" : "1",
  "slot_id" : "2",
  "object_id" : "10"
},{
  "id" : "2",
  "slot_id" : "3",
  "object_id" : "11"
}];

alert(objects[1].name);

});