import React, {useState} from "react";

// import images
import aguaDeLuz from "../../img/aguaDeLuz.png";
import todo from "../../img/todolist.png";

import HiddenModalDescription from "./hiddenModals.description";

export default function HiddenModals() {
    const [projects, setProjects] = useState([
        {
            name: "agualuz",
            image: aguaDeLuz,
            status: "View Live Demo",
            ref: "./AguaDeLuz/index.html",
            description: [
                "Морское веб-приложение для предоставления информации о ходе выполнения услуг и ценах.",
                "Разработано с использованием HTML5, CSS3, Bootstrap, Webpack, Wordpress и ReactJS."
            ]
        },
        {
            name: "todolist",
            image: todo,
            status: "View Live Demo",
            ref: "./todoList/index.html",
            description: [
                "Простой лист заданий. Поможет вам не забыть домашние дела",
                "Разработано с использованием HTML5, CSS3, Bootstrap, Webpack, Wordpress и ReactJS."
            ]
        }
    ]);

    function hideModal(name) {
        const modalBG = document.getElementById("gallery-card");
        const modal = document.getElementById(name);
        modalBG.style.display = "none";
        modal.style.display = "none";
    }

    const style = {
        textAlign: "right",
        fontWeight: 900,
        fontSize: 2 + "rem",
        cursor: "pointer"
    }

    return(
        <div>
            <div id="gallery-card">
                {projects.map((project, index) => (
                    <div id={project.name} className="modal-card" key={index}>
                        <div className="visual">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="modal-info">
                            <h2>{project.name}</h2>
                            <HiddenModalDescription description={project.description} />
                            <div className="modal-bottom">
                                <a href={project.ref} target="_blank">
                                    <h3>{project.status}</h3>
                                </a>
                                <p className="close-icon" style={style} onClick={() => hideModal(project.name)}>&#10005;</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button style={{
                width: '100%',
                height: '50px',
                fontSize: '20px',
                color: '#fff',
                backgroundColor: '#007BFF',
                border: 'none',
         
                bottom: '0',
                left: '0',
                cursor: 'pointer'
            }} onClick={() => window.location.href = 'https://github.com/Dishka123'}>
                Еще
            </button>
        </div>
    );
}
