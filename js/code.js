$(document).ready(function()
{
	// تخصيص مؤشر النزول
	
	$("html").niceScroll({
		
		cursorcolor:"#212b37",
		cursorborder:"5px solid #212b37",
		cursorborderradius:"50px",
		scrollspeed:65
	})

	$("ul, div").filter("#scrolls").niceScroll({
		
		cursorcolor:"#5564eb",
		cursorborder:"2px solid #5564eb",
		cursorborderradius:"50px",
		scrollspeed:65
	})
	
	// نهاية تخصيص مؤشر النزول
});