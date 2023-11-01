import s from './Portfolio.module.css';
import ProjectList from '../ProjectList/ProjectList';
import Toolbar from '../Toolbar/Toolbar';
import { useState } from 'react';

const Portfolio = () => {
    const [projects, setProjects] = useState([{
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
        category: "Flayers"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
        category: "Flayers"
      }]);
    const [currentProjects, setCurrentProjects] = useState([...projects]);
    const [filters, setFilters] = useState(["All", "Websites", "Flayers", "Business Cards"]);
    const [currentFilter, setCurrentFilter] = useState(filters[0]);

    const handleSelectFilter = (e) => {
      setCurrentFilter(e.target.textContent);
      if (e.target.textContent === "All") {
        setCurrentProjects([...projects]);
      } else {
        setCurrentProjects(projects.filter(project => project.category === e.target.textContent));
      }
    };

    return(
        <div className={s.portfolio__container}>
            <Toolbar
              filters={filters}
              selected={currentFilter}
              onSelectFilter={handleSelectFilter}
            />
            <ProjectList projects={currentProjects}></ProjectList>
        </div>
    )
}

export default Portfolio;