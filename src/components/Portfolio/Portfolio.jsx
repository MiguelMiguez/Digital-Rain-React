import React, { useState, useEffect } from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;

  useEffect(() => {
    fetch("/Portfolio/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error al cargar los proyectos:", error));
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="portfolio">
      <h2>Mis Proyectos</h2>
      <div className="slider">
        <button
          className="nav-button left"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          &lt;
        </button>

        <div className="projects-container">
          <div
            className="projects-wrapper"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
              transition: "transform 0.5s ease",
              display: "flex",
              width: `${(projects.length / projectsPerPage) * 100}%`,
            }}
          >
            {projects.map((project, index) => (
              <div className="project" key={index}>
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="nav-button right"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
