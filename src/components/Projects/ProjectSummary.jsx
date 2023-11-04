
// ProjectSummary component
const ProjectSummary = ({ project }) => {
    console.log('Project in ProjectSummary:', project);
    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.content}</p>
            {/* Render other project details */}
        </div>
    );
};

export default ProjectSummary;