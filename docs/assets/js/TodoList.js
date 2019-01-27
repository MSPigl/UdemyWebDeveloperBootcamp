$("document").ready(function() {
	// Check off to-do items
	$("ul").on("click", "li", function() {
		$(this).toggleClass("completed");
	});

	// Click on X to delete to-do item
	$("ul").on("click", "li span", function(event) {
		$(this).parent().fadeOut(500, function() {
			$(this).remove();
		});

		event.stopPropagation();
	});

	$("input").on("keypress", function(event) {
		if (event.which === 13 && $(this).val() !== "")
		{
			let content = $(this).val();

			$('ul').append(generateListItem(content));

			$(this).val("");
		}
	});

	$("#plus").click(function() {
		$("input").fadeToggle();
	});
});

function generateListItem(content)
{
	//let li = $(document.createElement("li"));
	// let span = $(document.createElement("span"));
	// span.text("X");
	// li.append(span);
	// li.text(" " + content);

	return `<li><span class="hoverable"><i class="fas fa-trash-alt"></i></span> ${content}</li>`;
}
