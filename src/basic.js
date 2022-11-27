

const createHTMLElement = (type="div", class_name, id_name, innertext) =>{

    let element = document.createElement(type);

    if (class_name) element.className = class_name;
    if (id_name) element.setAttribute("id", id_name);
    if (innertext) element.textContent = innertext;
    
    return element;
}


export { createHTMLElement };



// Make a js with Dom manipulation 
// Make a js only with listeners
// one js with todo acitons