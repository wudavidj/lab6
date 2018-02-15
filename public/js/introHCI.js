'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);

}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();
	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	console.log(projectID);
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	console.log(idNumber);
	var result = idNumber;
	$.get('/project/'+ idNumber, appendElement);
	console.log("User clicked on project " + idNumber);
}

function appendElement(result) {
	var id = result.id;
	var idNumber = result.idNumber;
  var projectHTML =
		'<a href="#" class="thumbnail">' +
    '<img src="' + result['image'] +
		'" class="img">' +
    '<p>' +
		result['title'] +
		'</p>' +
    '<p><small>' +
		result['date'] +
		'</p>' +
    '<p>' +
		result['summary'] +
    '</p></a>'; 
		$('#' + id + '.details').html(projectHTML);
}
