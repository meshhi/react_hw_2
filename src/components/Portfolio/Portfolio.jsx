import s from './Portfolio.module.css';
import ProjectList from '../ProjectList/ProjectList';
import Toolbar from '../Toolbar/Toolbar';

const Portfolio = () => {
    return(
        <div className={s.portfolio__container}>
            <Toolbar></Toolbar>
            <ProjectList></ProjectList>
        </div>
    )
}

export default Portfolio;