
import { pageLoad, buildTasks, reloadTasks, reloadProjects, buildProjects} from './pageLoad';
import {Project, Todo, CreatePlaceholder } from "./todos"


// Import the css
import './styles.css';

// When loading the site load the page
pageLoad();

// make a list of all projects
let projects = [];

// Create Basic Project
let today = new Project("today");
projects.push(today);

// Create random posts for Testing
CreatePlaceholder(5, today);


// make tasks and add to div
buildTasks(today);
// Build the basic Projects
buildProjects(projects);




//make the add task button workable
document.querySelector(".btn2.btn_add").addEventListener("click", () => {
    let task = new Todo(`test`, "abcdefgh", "test", "random");
    today.addToProject(task);
    reloadTasks(today);
});


//make the add Project button 
document.querySelector(".btn.btn_new_project").addEventListener("click", () => {
    
    // let project = new Project("namex");
    // projects.push(project);
    // reloadProjects(projects);
});