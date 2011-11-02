$(document).ready(function() {

  var object_table = []; // All objects should be stored in here.
  
  var used_id_table = []; // Keep track of how many objects exist, keep numbers unique.
  
  function object(name,ddps_object_type,attributes) { // Constuctor for new objects.
    this.name = name;
    this.ddps_object_type = ddps_object_type;
    this.ddps_object_id = used_id_table.length + 1; // New ID is next in sequence, old IDs are never re-used.
    this.attributes = attributes; // If an attribute has a value, it shouldn't have and object ID. The reverse is also true.
    used_id_table.push(this.ddps_object_id); // New objects's ID stored on used ID table for future reference.
    object_table.push(this); // Store for later serialization.
  }
  
  var test_object = new object("Object Name","proc_object",[]);
  var test_object2 = new object("Function Name","function_object",[]);
  var test_object3 = new object("Function Name","function_object",[]);
  
  test_object.attributes = [{ name: "nill", value: "nill", ddps_object_id: "2" },{ name: "Number", value: "3", ddps_object_id: "nill" }];
  
  function find_object(id_to_find) {
    var found;
    for (var i = 0; i < object_table.length; i++) {
      if (object_table[i].ddps_object_id == id_to_find) {
		found = object_table[i];
      }
    }
	return found;
  }
  
  function render_object(object) {
    var slot_html = "";
    for (var i = 0; i < object.attributes.length; i++) {
      var name = object.attributes[i].name;
      var value = object.attributes[i].value;
      var ddps_object_id = object.attributes[i].ddps_object_id;
      var html = "";
      if ( name === "nill" && value === "nill" ) { // reference.
        
        html = "\
          <div class=\"slot\">\
            <div class=\"slot_options\">\
              <img src=\"delete.png\"></img>\
            </div>\
            <div class=\"slot_name\">" + name + "</div>\
            <div class=\"call\">" + find_object(ddps_object_id).name + "</div>\
            <div class=\"reference\">Object Reference</div>\
            <div class=\"data\">" + value + "</div>\
          </div>";
      }
      else if ( ddps_object_id === "nill" ){ // value.
        html = "\
          <div class=\"slot\">\
            <div class=\"slot_options\">\
              <img src=\"delete.png\"></img>\
            </div>\
            <div class=\"slot_name\">" + name + "</div>\
            <div class=\"data\">" + value + "</div>\
          </div>";
      }
      else {
        html = "\
          <div class=\"slot\">\
            <div class=\"slot_options\">\
              <img src=\"delete.png\"></img>\
            </div>\
            <div class=\"slot_name\">ERROR: Object does not match the expected format. The object can not be shown.</div>\
          </div>";
      }
      slot_html = slot_html + html;
    }
    template = "\
    <img class=\"up\" src=\"up.png\"></img>\
      <div class=\"object_frame\">\
        <div class=\"object_header\">\
          <div class=\"object_title\">{{name}}</div>\
          <img class=\"object_options\" src=\"gear.png\"></img>\
        </div>\
        <div class=\"object_body\">" + slot_html + "</div>\
        <div class=\"object_footer\">DDPS Type: {{ddps_object_type}}</div>\
      </div>";
    html = Mustache.to_html(template, object);  
    $("#object").html(html);
  }
  
  render_object(object_table[0]); // Render the first one on the stack.
  
});