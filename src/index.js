
import { pageLoad, buildTasks, reloadTasks, reloadProjects, buildProjects, setProjectActive} from './pageLoad';
import {Project, CreatePlaceholder } from "./todos"
import {loadListeners} from "./listeners"


// Import the css
import './styles.css';

// When loading the site load the page
pageLoad();

// make a list of all projects
let projects = [];

// Create Basic Project
let today = new Project("today");
projects.push(today);


// Testing
let mjau = new Project("mjau");
projects.push(mjau);

// Create random posts for Testing
CreatePlaceholder(5, today);
CreatePlaceholder(9, mjau);


// make tasks and add to div
buildTasks(today);
// Build the basic Projects
buildProjects(projects);

// Set today as default active 
setProjectActive("today");


// Load the Listeners
loadListeners();



export{projects, today}