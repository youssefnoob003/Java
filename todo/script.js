const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
aff();

function add()
{
    
    let task = document.querySelector(".js-input").value;
    let day = document.querySelector(".js-day").value;
    let el = {
        task,
        day
    }
    tasks.push(el);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    aff();
    document.querySelector(".js-input").value = "";
}

function aff()
{
    let aff = "";

    for (let i = 0; i < tasks.length; i++)
    {
        aff += `<p class = "element">${tasks[i].task}  ${tasks[i].day}</p><button class = "js-del" onclick="tasks.splice(${i}, 1);aff();del();">Delete</button>`
    }
    

    document.querySelector(".js-list").innerHTML = aff;
}

function del()
{
    localStorage.setItem("tasks", JSON.stringify(tasks));
}