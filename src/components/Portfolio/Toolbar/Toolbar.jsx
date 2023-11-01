import s from './Toolbar.module.css';

const Toolbar = ({filters, selected, onSelectFilter}) => {
    return(
        <div className={s.toolbar__container}>
            {filters.map(filter => 
            <button 
                className={`${s.filter__button} ${filter === selected ? s.filter__button_selected : ''}`}
                onClick={onSelectFilter}
            >
                    {filter}
            </button>)}
        </div>
    )
}

export default Toolbar;