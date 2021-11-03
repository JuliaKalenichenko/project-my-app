import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

// array with object -> sort item -> return new array.
const  EmployersList = ({data}) => {

    const elements = data.map(item => {
        //Destructuring by residual principle
        const{id, ...itemProps} = item;
        return (
           // array with components
           // name={item.name} salary={item.salary}
           <EmployersListItem key={id} {...itemProps}/>
       )
    });

    // console.log(elements);

    // return elements(object)
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;