import {Component} from "react";
import './employers-add-form.css';

const styleForError = { borderColor: '#ff0000', backgroundColor: '#fff3f3' };

class EmployersAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            nameError: false,
            salaryError: false
        }
    }

    onValueChange = (event, errorFieldKey) => {
        this.setState({
            [event.target.name]: event.target.value,
            [errorFieldKey]: false
        });
    }
    // событие
    onSubmit = (e) => {
        // отменяет
        e.preventDefault();

        if (this.state.name.length < 2) {
            this.setState({ nameError: true });
        }

        if (!this.state.salary) {
            this.setState({ salaryError: true });
        }

        if (this.state.name.length < 2 || !this.state.salary) {
            return;
        }

        // добавить в props new data
        this.props.onAdd(this.state.name, this.state.salary);
        // изменям state -> пустые значения аргументы
        this.setState({
            name: '',
            salary: ''
        })
    }

    render () {
        const {name, salary, nameError, salaryError} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                       style={ nameError ? styleForError : null }
                       className="form-control new-post-label"
                       placeholder="Как его зовут?"
                       name="name"
                       value={name}
                       onChange={ (e) => this.onValueChange(e, 'nameError') }/>
                    <input type="number"
                       className="form-control new-post-label"
                       style={ salaryError ? styleForError : null }
                       placeholder="З/П в $?"
                       name="salary"
                       value={salary}
                       onChange={ (e) => this.onValueChange(e, 'salaryError') }/>
                 <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;