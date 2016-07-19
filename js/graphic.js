//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "https://docs.google.com/spreadsheets/d/11Kg9rF6CHTzf9y4x0Vqqb7ajO7fFYqwSnwynIy3I5SM/pubhtml?gid=2111134496&single=true";
  
  
//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [{
  "data": "Resource",
  "title": "Resource"
}, {
  "data": "URL",
  "title": "URL"
}, {
  "data": "Source",
  "title": "Source"
}, {
  "data": "Type",
  "title": "Type"
}, {
  "data": "License",
  "title": "License"
}, {
  "data": "Certification",
  "title": "Certification"
}, {
  "data": "Module",
  "title": "Module"
}, {
  "data": "Objective",
  "title": "Objective"

}];

$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive" id="mySelection"  width="100%"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "order": [
        [0, "asc"]
      ], //order on second column
      "pagingType": "simple" //no page numbers
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
        ,
        "columnDefs": [
        
       		 {
                // add url to column 0 as link with url in column 1
                "render": function ( data, type, row ) {
                    return '<a href="' + row[1] + '" target="_blank">' + data + '</a>';
                },
                "targets": 0
            },
        	{ "visible": false,  "targets": [ 1 ] }
        ]
    });
  }
});
//end of writeTable
