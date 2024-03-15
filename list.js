let taskFormEl=document.getElementById('task-form');

taskFormEl.addEventListener('submit',function(event)
{
	event.preventDefault();
	let taskInputEl=document.getElementById('input-el');
	let task=taskInputEl.value.trim();
	

	let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

	taskList.unshift(task);

	localStorage.setItem("tasks",JSON.stringify(taskList));

	displayTasks();

});



//Display Tasks

function displayTasks()
{
	let taskListEl=document.getElementById('task-list-el');
	let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

	let eachTask=``;
	for(let task of taskList)
	{
		eachTask+=`<li class="list-group-item mt-1 list-group-item-primary">
						<span >${task}</span>
						<button type="button" class="btn-close float-end" aria-label="Close"></button>


					</li>`
	}
	taskListEl.innerHTML=eachTask;
}

displayTasks();


//Delete Functionality
let taskListEl=document.getElementById('task-list-el');

taskListEl.addEventListener('click',function(event)
{
	let targetEl=event.target;

	if(targetEl.classList.contains('btn-close'))
	{
		let actualEl=targetEl.parentElement.parentElement;
		let selectedText=actualEl.innerText;

		let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];


		taskList=taskList.filter((task)=>
		{
			return task.trim()!==selectedText.trim();
		});


		localStorage.setItem("tasks",JSON.stringify(taskList));

		displayTasks();


	}
})

