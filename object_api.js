$(document).ready(function() {

used_ids = 0; // Holds last ID used, so we can keep them unique in this module.

objects = []; // Holds all DDPS objects.
slots = []; // Holds all slots.

function create_object(name) { // Name is optional.
  object = new Object();
  used_ids++;
  object.id = used_ids;
  if (name == undefined) {
    object.name = "nill";
  }
  else {
    object.name = name;
  }
  objects.push(object);
}

function create_slot(object_id) { // Object_id is mandatory.
  slot = new Object();
  used_ids++;
  slot.id = used_ids;
  slot.object_id = object_id; // Each slot belongs to one object.
  slots.push(slot);
}

function create_call(slot_id,called_object_id) { // Slot_id is mandatory.

}

create_object();
create_slot(1);

});