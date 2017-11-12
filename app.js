$(document).ready(function() 
{
	var i = 0;
	$("#root").append("<ul></ul>")
	$("ul").append("<li></li>")
	$("li").append("<span>Сделать задание #3 по web-программированию</span>")
	$("li").append("<button>Удалить</button>").click(function() 
	{
		$(this).remove();
	});
	$("#root").append("<input id='add_task_input'>")
	$("#root").append("<button id='add_task'>Ввести</button>")
	$("#add_task").click(function() 
	{		
		i = i + 1;
		var inputstring = $("input").val();
		$("ul").append($("<li></li>").attr("id", i));
		inputstring = "<span>" + inputstring + "</span>";
		$("#" + i).append(inputstring);

		$("#" + i).append("<button>Удалить</button>").click(function() 
		{
			$(this).remove();
		});

	});
});
