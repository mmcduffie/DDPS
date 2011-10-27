$(document).ready(function() {

  var object_table = []; // All objects should be stored in here.
  
  function object(name,ddps_type) { // Constuctor for new objects.
    this.name = name;
    this.ddps_type = ddps_type;
    object_table.push(this); // Store for later serialization.
  }
  
  var test_object = new object("Object Name","proc_object");
  
  function render_object(object) {
    template = "\
    <img class=\"up\" src=\"up.png\"></img>\
      <div class=\"object_frame\">\
        <div class=\"object_header\">\
          <div class=\"object_title\">{{name}}</div>\
          <img class=\"object_options\" src=\"gear.png\"></img>\
        </div>\
        <div class=\"object_body\">\
          <div class=\"slot\">\
            <div class=\"slot_options\">\
              <img src=\"delete.png\"></img>\
            </div>\
            <div class=\"slot_name\">Attribute Name</div>\
            <div class=\"call\">Function Name</div>\
            <div class=\"reference\">Object Reference</div>\
            <div class=\"data\">Data</div>\
          </div>\
          <div class=\"slot\">\
            <div class=\"slot_options\">\
              <img src=\"delete.png\"></img>\
            </div>\
            <div class=\"slot_name\">Attribute Name</div>\
            <div class=\"data\">Data</div>\
          </div>\
        </div>\
        <div class=\"object_footer\">DDPS Type: {{ddps_type}}</div>\
      </div>";
    html = Mustache.to_html(template, object);  
    $("#object").html(html);
  }
  
  render_object(object_table[0]); // Render the first one on the stack.
  
});