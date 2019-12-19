$(document).ready(function()){
$.getJSON("/data",function(d){

	$("#name").text(d.name);
	$("#regno").text(d.regno);
	$("#clg").text(d.clg);
	})
})