
import { pageLoad, buildTasks, reloadTasks, reloadProjects, buildProjects} from './pageLoad';
import {Project, Todo, CreatePlaceholder } from "./todos"
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

// Create random posts for Testing
CreatePlaceholder(5, today);


// make tasks and add to div
buildTasks(today);
// Build the basic Projects
buildProjects(projects);

// Load the Listeners
loadListeners();



export{projects, today}