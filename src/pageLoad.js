

import { createHTMLElement } from './basic';


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
        let task = createHTMLElement("div", `task ${i}`, undefined, project.showTodos()[i].title);
        tasks.append(task)
    }
}

const buildProjects = (projects) =>{

    const projects_div = document.querySelector(".projects");
    projects_div.innerHTML = "";

    for (let i = 0; i < projects.length; i++){
        let project = createHTMLElement("div", `project ${i}`, "project", projects[i].returnName());
        project.dataset.num = i;
        projects_div.append(project);
    }
}


const AddTask = (task) =>{
    let taskx = createHTMLElement("div", `task ${i}`, undefined, project.showTodos()[i].title);
    document.querySelector(".tasks").append(taskx);
}


const changeModalVisibiliy = (state) =>{


    if (state) {
        modal.classList.add("active");
        overlay.classList.add("active");
    }else{
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }


}


const changeToProject = (e) =>{
    console.log(e)
}



export { pageLoad, buildTasks, AddTask, buildProjects, changeModalVisibiliy, changeToProject};