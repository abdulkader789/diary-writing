
const initState = {
    projects: [
        {
            id: 1,
            title: 'Project 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            title: 'Project 2',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
        {
            id: 3,
            title: 'Project 3',
            content: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
        },
        {
            id: 4,
            title: 'Project 4',
            content: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.',
        },
        {
            id: 5,
            title: 'Project 5',
            content: 'Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
        },
    ]
}
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);

            return {
                ...state,
                projects: [...state.projects, action.project]
            };
        default:
            return state;
    }
};

export default projectReducer