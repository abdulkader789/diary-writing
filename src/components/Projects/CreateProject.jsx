import { useState } from 'react';
import { createProject } from '../../store/actions/createProject';
import { connect } from 'react-redux';

const CreateProject = ({ createProject }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleCreateProject = () => {
        // Dispatch the createProject action with the project data
        createProject({
            title,
            content
        });
    };



    return (
        <div className="flex flex-col items-center justify-center h-[600px] bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Create Project Entry</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        className="w-full h-32 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md focus:outline-none"
                    onClick={handleCreateProject}
                >
                    Create
                </button>
            </div>
        </div>
    );
};



const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    };
};

export default connect(null, mapDispatchToProps)(CreateProject);