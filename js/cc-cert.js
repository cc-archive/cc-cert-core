// generates title and the proper GitHub links for a module's performance objective

function getItemStuff( itemtitle, itemnum ) {
	
	// the base URl for the github repo
	
	var gh_base_url = 'https://github.com/creativecommons/cc-cert-map';
	// split the itemnum X.Y into an array
	var ccmodsect = itemnum.split(".");
	
	// return the whole string of stuff
	return (itemnum + ' ' + itemtitle + '<span class="gh-edit"><a href="' + gh_base_url + '/issues/new?title=' + encodeURIComponent('Suggestions for Performance Objective ' + itemnum + ' ' + itemtitle) + '" target="_blank" title="Add Suggestion for ' + itemtitle +'"><img width="25" height="25" alt="' + itemtitle +'" src="img/comment.png"></a> <a href="' + gh_base_url + '/blob/gh-pages/content/module' + ccmodsect[0] + '/' +  itemnum + '.html" target="_blank" title="Edit in GitHub" ><img width="25" height="25" alt="Edit in GitHub" src="img/mod.png"></a></span>');
	

	
}
