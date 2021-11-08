import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import  './app.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.' , salary: 800,  increase: false, like: true, id: 1},
                {name: 'Alex M.' , salary: 3000, increase: true, like: false, id: 2},
                {name: 'Carl W.' , salary: 5000, increase: false, like: false, id: 3}
            ]
        }
        this.maxId = 4; // new for regeneration
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            /*
            // method array => true -> index elem
            // const index = data.findIndex(elem => elem.id === id);

            // 0 - last index
            const before = data.slice(0, index);
            // from found + 1 - end array
            const after = data.slice(index + 1);

            const newArray = [...before, ...after];
            */
            return {
                // new.Array (item -> если id != which  receive)
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
    }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
      /* this.setState(({data}) => {
           const index = data.findIndex(elem => elem.id === id);
            // copy object
           const old = data[index];
           // Разворот object{...old} -> newObject
           // , properties = {...old} -> write after replace old properties
           // new properties -> value = increase - properties.
           const newItem = {...old, increase: !old.increase};
           const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

           return {
               data: newArr
           }
       })
       */
        this.setState(({data}) => ({
            data: data.map(item => { // return new Array
                if (item.id === id) {
                    // return new Object witch properties(old Object).
                    return {...item, [prop]: !item[prop]}
                }
                return item; // array object with one modified value
            })
        }))
    }


    render () {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    addItem={this.addItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}
// data - array data
export default App;