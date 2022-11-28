
import {Project, Todo, FilterProjects } from "./todos";
import {buildTasks, buildProjects, changeProjecModalVisibility, changeToProject, createNewTask, getInfoInput, removeInput} from './pageLoad';
import {projects, today} from "./index";


const loadListeners = () => {
    //make the add task button workable
    addTaskListener();
    addModalListener();
    addProjectListener();
    projectChange();


};

const addTaskListener = () =>{

    document.querySelector(".btn2.btn_add").addEventListener("click", (e) => {

        // Listen for the next click
        e.stopPropagation()

        let active_project = document.querySelector(".project.active").dataset.name;
        const project = FilterProjects(projects, active_project);
        createNewTask();
        document.body.addEventListener("dblclick", (e) =>{
            const info = getInfoInput();
            const task = new Todo(info[0], "", info[1], "");
            project.addToProject(task);
            removeInput();
            buildTasks(project);
            //https://stackoverflow.com/questions/4402287/javascript-remove-event-listener

        })


    });
};

const addModalListener = () =>{
    const btt = document.getElementById("new_p_btt");
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    const close_btt = document.querySelector(".close-button");

    btt.addEventListener("click", () =>{
        changeProjecModalVisibility(true);
    })

    close_btt.addEventListener("click", ()=> {
        changeProjecModalVisibility(false);
    })

    // Add close button 
};

const addProjectListener = () =>{

    const add_btt = document.querySelector(".btn_add_p");

    add_btt.addEventListener("click", () => {
        
        const project_name = document.querySelector(".p_name").value;
        if (project_name){
            const project = new Project(project_name);
            projects.push(project);
            buildProjects(projects);
            changeProjecModalVisibility(false);    
            projectChange();
        }
    })
};

const projectChange = () => {
    let buttons = document.querySelectorAll(".project").forEach((e) =>{
        e.addEventListener("click",() => {
            // Change to the project with the name clicked
            changeToProject(e.dataset.name)
        })
    })

};



export  {loadListeners}

