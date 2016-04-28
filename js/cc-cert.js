// put in place the module number and links to github edit / issue submit
function setSectionNumbers( modnum, submod, itemnum) {

	$("#ccmodsect_" + itemnum).text(itemnum);
	
	$("a#gh-issue-link_" + itemnum).attr('href', 'https://github.com/creativecommons/cc-cert-map/issues/new?title=' + encodeURIComponent('Suggestions for Objective ' + $("#objtitle").text() ));

	$("a#gh-edit-link_" + itemnum).attr('href', 'https://github.com/creativecommons/cc-cert-map/blob/gh-pages/content/module' + modnum + '/' + submod + '/' + itemnum + '.html');
}

function getItemStuff( itemtitle, itemnum ) {
	
	// the base URl for the github repo
	
	var gh_base_url = 'https://github.com/creativecommons/cc-cert-map';
	// split the itemnum X.Y.Z into an array
	var ccmodsect = itemnum.split(".");
	
	// return the whole string of stuff
	return (itemnum + ' ' + itemtitle + '<span class="gh-edit"><a href="' + gh_base_url + '/issues/new?title=' + encodeURIComponent('Suggestions for Objective ' + itemnum + ' ' + itemtitle) + '" target="_blank" title="' + itemtitle +'"><img width="25" height="25" alt="' + itemtitle +'" src="img/edit.png"></a> <a href="' + gh_base_url + '/blob/gh-pages/content/module' + ccmodsect[0] + '/' + ccmodsect[0] + '/' +  itemnum + '.html" target="_blank" title="Edit in GitHub" ><img width="25" height="25" alt="Edit in GitHub" src="img/wrench.png"></a></span>');
	

	
}
