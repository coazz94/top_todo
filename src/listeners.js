
import {Project, Todo, FilterProjects } from "./todos";
import {buildTasks, buildProjects, changeProjecModalVisibility, changeToProject, createNewTask, getInfoInput, removeInput, createInputFields} from './pageLoad';
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



        document.body.addEventListener("dblclick", () =>{
            createInputFields();
        });
        

            //https://stackoverflow.com/questions/4402287/javascript-remove-event-listener
       

        // document.body.removeEventListener("dblclick", () => createInputFields());


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

