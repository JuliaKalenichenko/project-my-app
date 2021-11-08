import {Component} from "react";
import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    // событие
    onSubmit = (e) => {
        // отменяет
        e.preventDefault();

        if (this.state.name.length < 2 || !this.state.salary) return;

        // добавить в props new data
        this.props.onAdd(this.state.name, this.state.salary);
        // изменям state -> пустые значения аргументы
        this.setState({
            name: '',
            salary: ''
        })
    }

render () {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                       className="form-control new-post-label"
                       placeholder="Как его зовут?"
                       name="name"
                       value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                       className="form-control new-post-label"
                       placeholder="З/П в $?"
                       name="salary"
                       value={salary}
                       onChange={this.onValueChange}/>
                 <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;