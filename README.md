jquery.sessionStorage
=====================

jQuery sessionStorage implementation. Interfaces like $.data

Usage Examples
--------------

Saving to sessionStorage:

    $(document).sessionStorage("full_name", "Joe Bloggs");
    $(document).sessionStorage("person_info", {"first_name": "Joe", "last_name": "Bloggs", "age": 52});

Getting values from sessionStorage:

    $(document).sessionStorage("full_name"); // returns string
    $(document).sessionStorage("personal_info"); // returns json object
