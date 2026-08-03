(() => {

    "use strict";

    const container = document.querySelector("[data-project-grid]");

    const projects = window.THB_PROJECTS;
    
    if (!container || !Array.isArray(projects)) {
        return;
    }

    const createProjectCard = (project, index) => {
        const article = document.createElement("article");

        article.className = "project-card";
        article.dataset.project = project.id;
        article.dataset.accent = project.accent;
        article.dataset.reveal = "";
        
        article.style.setProperty(
            "--project-delay",
            `${index * 80}ms`
        );

        article.innerHTML = `

        <div class="project-card-top">

            <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
            <span class="project-year"> ${project.year} </span>

        </div>

        <div class="project-card-content">
            
            <p class="project-category"> ${project.category} </p>
            <h3 class="project-title"> ${project.title} </h3>
            <p class="project-description> ${project.description}
        
        </div>

        <div class="project-card-bottom">

            <div class="project-tags">
                ${project.tags
                    .map((tag) =>
                            `<span>${tag}</span>`
                )
                .join("")}
            </div>

            <span class="project-arrow">
                ↗
            </span>
        
        </div>

        <span class="project-status">
            ${project.status}
        </span>

    `;

    return article;

    };

    projects
        .filter(
            (project) =>
                project.featured
        )
        .forEach(
            (project, index) => {

                container.appendChild(
                    createProjectCard(
                        project, index
                    )
                );
            }
        );
})();