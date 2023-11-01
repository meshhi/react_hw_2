import s from './ProjectList.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

const ProjectList = ({projects}) => {
    return(
        <div className={s.project_list__container}>
            {projects.map(projectData => <ProjectCard projectData={projectData}></ProjectCard>)};
        </div>
    )
}

export default ProjectList;