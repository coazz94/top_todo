
import {Project, Todo, CreatePlaceholder } from "./todos";
import {pageLoad, buildTasks, buildProjects, changeModalVisibiliy, changeToProject} from './pageLoad';
import {projects, today} from "./index";


const loadListeners = () => {
    //make the add task button workable
    addTaskListener();
    addModalListener();
    addProjectListener();
    projectChange();


};

const addTaskListener = () =>{
    document.querySelector(".btn2.btn_add").addEventListener("click", () => {
        let task = new Todo(`test`, "abcdefgh", "test", "random");
        today.addToProject(task);
        buildTasks(today);
    });
};

const addModalListener = () =>{
    const btt = document.getElementById("new_p_btt");
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    const close_btt = document.querySelector(".close-button");

    btt.addEventListener("click", () =>{
        changeModalVisibiliy(true);
    })

    close_btt.addEventListener("click", ()=> {
        changeModalVisibiliy(false);
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
            changeModalVisibiliy(false);    
            projectChange();
        }
    })
};

const projectChange = () => {
    let buttons = document.querySelectorAll("#project").forEach((e) =>{
        e.addEventListener("click",() => {
            // console.log(e.dataset.num);
            changeToProject(e.dataset.num)
        })
    })

}



export  {loadListeners}

