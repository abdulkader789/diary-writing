import { connect } from 'react-redux';
import ProjectList from "../Projects/ProjectList";
import Notifications from "./Notifications";

const Dashboard = ({ projects }) => {
    return (
        <div>
            <ProjectList projects={projects} />
            <Notifications />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects // Assuming your projects are stored in the project reducer
    };
};

export default connect(mapStateToProps)(Dashboard);
