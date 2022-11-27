
class Todo {
    constructor(
        title = "empty",
        description = "none", 
        dueDate = "1.1.1999",
        priority = "low"
    ){

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Project {
    constructor(
        name = "project_x"
    ){
    this.name = name;
    this.project = []; 
    }

    addToProject = (todo) =>{
        this.project.push(todo);
    }

    showTodos = () =>{
        return this.project;
    }

    getLength = () => {
        return this.project.length
    };

    returnName = () => {return this.name};

}

const CreatePlaceholder = (num, project) => {

    for (let i = 1; i < num+1; i++){
        let todo = new Todo(`titlex_${i}`, "abcdefgh", "test", "random");
        project.addToProject(todo);

    }

}



export{Project, Todo, CreatePlaceholder}