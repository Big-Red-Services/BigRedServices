const ProjectList = ({projects,title}) => {
    return ( 
        <div className = "project-list">
            <h2>{title}</h2>
            {projects.map((project) => (
                <div className='project-preview' key={project.id}>
                    <h1>{project.title}</h1>
                    <h2>{project.author}</h2>
                    <h3>{project.email}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
     );
}
 
export default ProjectList;