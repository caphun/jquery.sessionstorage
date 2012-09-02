jquery.sessionStorage
=====================

jQuery sessionStorage implementation. Interfaces like $.data

Usage Examples
--------------

Saving to sessionStorage:

$(document).sessionStorage("a_string", "Some Value");
$(document).sessionStorage("a_json", {"first_name": "Joe", "last_name": "Bloggs", "age": 52});

Getting values from sessionStorage:

$(document).sessionStorage("a_string"); // returns string
$(document).sessionStorage("a_json"); // returns json object
