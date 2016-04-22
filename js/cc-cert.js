// put in place the module number and links to github edit / issue submit
function setSectionNumbers( modnum, submod, itemnum) {
	$("#ccmodsect").text(itemnum);
	
	$("a#gh-issue-link").attr('href', 'https://github.com/creativecommons/cc-cert-map/issues/new?title=' + encodeURIComponent('Suggestions for Objective ' + $("#objtitle").text() ));
	
	$("a#gh-edit-link").attr('href', 'https://github.com/creativecommons/cc-cert-map/blob/gh-pages/content/module' + modnum + '/' + submod + '/' + itemnum + '.html');
}



$(document).ready(function() { 
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
});

