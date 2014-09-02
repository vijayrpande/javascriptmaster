$("document").ready(function() {
            buildBookmarks('h3', 'header');
			addEvents();
        });

function buildBookmarks(strWhichTag, sBookMarkNode) {
	var i;
	var cAnchorCount = 0;

	// create the list that will hold the bookmark links
	var oTable = $("<table id='bookmarksList' class='table toc'>");

	// for each one of the header tags, create a new named anchor and insert it into
	// the header tag. Then add a new link to the list that points to the named anchor
	$("div:not([id=header]) " + strWhichTag).each(function() {
		var oRow = $("<tr>");
		oTable.append(oRow);
		oRow.append("<td>" + (cAnchorCount + 1) + "</td>");
		$(this).html("<a name='bookmark" + cAnchorCount + "'></a>" + $(this).html());
		oRow.append($("<td><a href='#bookmark" + cAnchorCount++ + "'> " + $(this).text() + "</a></td>"));
	});

	// now find the ID of the bookmark container and append it
	$("#" + sBookMarkNode).append(oTable);
}


function addEvents() {
        $("#bookmarksList tr:even").addClass("stripe1");
        $("#bookmarksList tr:odd").addClass("stripe2");

        $("#bookmarksList tr").hover(
            function() {
                $(this).toggleClass("highlight");
            },
            function() {
                $(this).toggleClass("highlight");
            }
        );
    };