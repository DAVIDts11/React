import React, { Component } from 'react';
import TekstArias from "./textareas"
import TranspList from './transp_list'
import traspData from '../Data/transData.json';



class MainSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transportations: [],
            textarieMode: "saveMode",
            currentTransp: {}

        }


        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.renderSave = this.renderSave.bind(this);

    }
    componentDidMount() {
        traspData.map(item => this.add({ id: item.id, date: item.date, name: item.name, city: item.city }));
    }

    update(id, date, name, city) {
        this.setState(prevState => ({
            transportations: prevState.transportations.map(
                trnsp => trnsp.id !== id ? trnsp : { id: id, date: date, name: name, city: city })
        }));
        this.setState({ textarieMode: "saveMode" });
    }

    delete(id) {
        this.setState(prevState => ({
            transportations: prevState.transportations.filter(trnsp => trnsp.id !== id)
        }));
    }


    add({ id = null, date = "1.1.2021", name = 'Almoni', city = 'Tel-Aviv' }) {
        this.setState(prevState => ({
            transportations: [
                ...prevState.transportations, {
                    id: id !== null ? id : this.nextId(prevState.transportations),
                    date: date,
                    name: name,
                    city: city
                }]
        }))
    }
    nextId(transportations = []) {
        let max = transportations.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 1);
        return ++max;
    }


    setUpdate(id) {
        let a = this.state.transportations[id - 1];
        this.setState({ textarieMode: "editMode" });
        this.setState({ currentTransp: a })
    }




    renderSave() {
        return (
            <div className="main_section">
                <TranspList transportations={this.state.transportations} onChange={this.setUpdate} onDelete={this.delete} >
                </TranspList>
                <TekstArias mode={this.state.textarieMode} onSave={this.add}>
                </TekstArias>
            </div>
        )
    }

    renderEdit() {
        return (
            <div className="main_section">
                <TranspList transportations={this.state.transportations} onChange={this.setUpdate} onDelete={this.delete} >
                </TranspList>
                <TekstArias mode={this.state.textarieMode} curr={this.state.currentTransp} onEdit={this.update} >
                </TekstArias>
            </div>
        )
    }

    render() {
        return this.state.textarieMode == "saveMode" ? this.renderSave() : this.renderEdit();

    }
}

export default MainSection;
