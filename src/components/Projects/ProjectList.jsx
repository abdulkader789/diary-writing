import ProjectSummary from "./ProjectSummary";

// ProjectList component
const ProjectList = ({ projects }) => {
    console.log('Projects in ProjectList:', projects);
    return (
        <div>
            {projects.map(project => (
                <ProjectSummary key={project.id} project={project} />
            ))}
        </div>
    );
};


export default ProjectList;