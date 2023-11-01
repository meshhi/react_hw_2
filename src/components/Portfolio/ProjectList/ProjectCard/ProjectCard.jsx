import s from './ProjectCard.module.css';

const ProjectCard = ({projectData}) => {
    return(
        <div className={s.project_card__container}>
            <img className={s.project_card__image} src={projectData.img} alt="" />
        </div>
    )
};

export default ProjectCard;

