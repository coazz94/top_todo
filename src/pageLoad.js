

import { createHTMLElement } from './basic';
import {projects} from "./index";
import {FilterProjects, Todo} from "./todos";


const overlay = createHTMLElement("div", undefined, "overlay")
const body = document.querySelector("body");
const main_div = createHTMLElement("div", undefined, "content");
const modal = createHTMLElement("div", "modal", "modal");





const pageLoad = () => {
    main_div.append(createSidebar(), createUserField(),createModal(), overlay)
    body.append(createHeading(), main_div);

}

const createSidebar = () => {
    let sidediv = createHTMLElement("div", "sidebar");
    let heading = createHTMLElement("div", undefined, "side_head", "Projects");

    let projects = createHTMLElement("div", "projects");

    let div_button = createHTMLElement("div", "btn btn_new_project", "new_p_btt");
    let button_new = createHTMLElement("span", undefined, undefined, "New Project");

    div_button.append(button_new);

    sidediv.append(heading, projects, div_button);

    return sidediv; 
}

const createHeading = () => {  
    let heading = createHTMLElement("div", "heading", undefined, "TO DO List");
    
    return heading;
}

const createUserField = () =>{
    let userfield = createHTMLElement("div", "container");
    let tasklist = createHTMLElement("div", "task_interface");

    let heading = createHTMLElement("div", "user_head", undefined, "Today");
    let tasks = createHTMLElement("div", "tasks");

    let div_button = createHTMLElement("div", "btn2 btn_add");
    let button_new = createHTMLElement("span", undefined, undefined, "Add a new Task");

    div_button.appendChild(button_new);


    tasklist.append(heading, tasks, div_button);
    userfield.append(tasklist);

    return userfield;
}

const createModal = () =>{

    const modal_header = createHTMLElement("div", "modal-header");
    const modal_title = createHTMLElement("div", "title", undefined, "Add a new Project");
    const close_button = createHTMLElement("button", "close-button", undefined, "X")


    modal_header.append(modal_title, close_button);
    
    
    const modal_body = createHTMLElement("div", "modal-body");

    const project_name = createHTMLElement("input", "p_name");
    const project_add_btt = createHTMLElement("button", "btn_add_p", undefined, "Add Project");


    modal_body.append(project_name, project_add_btt);


    modal.append(modal_header, modal_body)


    return modal;

}

const buildTasks = (project) =>{
    const tasks = document.querySelector(".tasks");
    tasks.innerHTML = "";

    for(let i = 0; i < project.getLength(); i++){
        // console.log(tasks)
        // project.showTodos()[i].title
        const task = createHTMLElement("div", `task ${i}`);
        
        const task_name = createHTMLElement("div", "task_name", undefined, project.showTodos()[i].title);

        const task_checkbox = createHTMLElement("input", "check");
        task_checkbox.type = "checkbox"

        const date = createHTMLElement("text", "due_date");
        date.textContent = "data";

        const del_button = createHTMLElement("button", "del_btt", undefined, "X");
        const edit_button = createHTMLElement("button", "edit_btt", undefined, "/");

        task.append(task_checkbox, task_name, date, edit_button,del_button );
        tasks.append(task)
    }
}

const buildProjects = (projects) =>{

    const projects_div = document.querySelector(".projects");
    projects_div.innerHTML = "";

    for (let i = 0; i < projects.length; i++){
        let project = createHTMLElement("div", `project`, "project", projects[i].returnName());
        project.dataset.name = projects[i].returnName();
        projects_div.append(project);
    }
}

const changeProjecModalVisibility = (state) =>{


    if (state) {
        modal.classList.add("active");
        overlay.classList.add("active");
    }else{
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }


}

const changeToProject = (project_name) =>{
    // change class = user_head to project name ( first = "", than change)
    // change tasks to ""
    // build tasks acordin to proejct

    // remove all actives
    document.querySelectorAll("#project").forEach((proj) => {
        proj.classList.remove("active")
    })

    // add this to active
    const project_div = document.querySelector(`[data-name="${project_name}"]`);
    project_div.classList.add("active");
    
    // Change hedaing of tasks
    document.querySelector(".user_head").innerHTML = project_name;

    // Delete tasks shwon
    document.querySelector(".tasks").innerHTML = "";


    const project = FilterProjects(projects, project_name);


    // add Tasks accroding to project
    buildTasks(project);

}

const setProjectActive = (project_name) =>{

    let project = document.querySelector(`[data-name="${project_name}"]`);
    project.classList.add("active");
}

const createNewTask = () => {


    const task = createHTMLElement("div", `task input`);
        
    const task_name = createHTMLElement("input", "task_input_name");

    const date = createHTMLElement("input", "due_input_date");
    date.type = "date";

    // const status_l = createHTMLElement("input", "status_l", undefined);
    // status_l.type = "checkbox";
    // const status_m = createHTMLElement("input", "status m");
    // status_m.type = "checkbox";
    // const status_h = createHTMLElement("input", "status h");
    // status_h.type = "checkbox";

    task.append( task_name, date);

    const tasks = document.querySelector(".tasks");
    tasks.append(task);

    return true;

}



const getInfoInput = () =>{

    const name = document.querySelector(".task_input_name").value;
    const date = document.querySelector(".due_input_date").value;


    return ([name, date]);
}



const removeInput = () =>{
    document.querySelector(".task.input").remove();
}


const createInputFields = () =>{

    let active_project = document.querySelector(".project.active").dataset.name;
    const project = FilterProjects(projects, active_project);
    console.log("called");

    const info = getInfoInput();
    const task = new Todo(info[0], "", info[1], "");
    project.addToProject(task);
    removeInput();
    buildTasks(project);
}


export { pageLoad, buildTasks, buildProjects, changeProjecModalVisibility, changeToProject, setProjectActive, createNewTask, getInfoInput, removeInput, createInputFields};