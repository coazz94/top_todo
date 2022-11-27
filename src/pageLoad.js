

import { createHTMLElement } from './basic';

const modal = createHTMLElement("div", "modal", "modal");
const overlay = createHTMLElement("div", undefined, "overlay")
const body = document.querySelector("body");
const main_div = createHTMLElement("div", undefined, "content");



const pageLoad = () => {
    main_div.append(createSidebar(), createUserField(),createModal(), overlay)
    body.append(createHeading(), main_div);
    addModalListener();
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

    let modal_header = createHTMLElement("div", "modal-header");
    let modal_title = createHTMLElement("div", "title", undefined, "Example");
    let close_button = createHTMLElement("button", "close-button", undefined, "X")


    modal_header.append(modal_title, close_button);
    
    
    let modal_body = createHTMLElement("div", "modal-body", undefined, `
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    `);


    modal.append(modal_header, modal_body)


    return modal;

}

const buildTasks = (project) =>{

    for(let i = 0; i < project.getLength(); i++){
        let task = createHTMLElement("div", `task ${i}`, undefined, project.showTodos()[i].title);
        document.querySelector(".tasks").append(task)
    }

}

const buildProjects = (projects) =>{
    let div = document.querySelector(".projects");

    for (let i = 0; i < projects.length; i++){
        let project = createHTMLElement("div", `project_${i}`, undefined, projects[i].returnName());
        div.append(project);
    }
}

const AddTask = (task) =>{
    let taskx = createHTMLElement("div", `task ${i}`, undefined, project.showTodos()[i].title);
    document.querySelector(".tasks").append(taskx);
}

const reloadTasks = (project) => {
    document.querySelector(".tasks").innerHTML = "";
    buildTasks(project);
}

const reloadProjects = (projects) =>{
    document.querySelector(".projects").innerHTML = "";
    buildProjects(projects);

}

const addModalListener = () =>{
    const btt = document.getElementById("new_p_btt");
    btt.addEventListener("click", () =>{
        modal.classList.add("active");
        overlay.classList.add("active");
    })

    // Add close button 
}







export { pageLoad, buildTasks, AddTask, reloadTasks, reloadProjects, buildProjects};