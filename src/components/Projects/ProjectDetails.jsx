import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <p className="">Diary details page {id}</p>
        </div>
    );
};

export default ProjectDetails;