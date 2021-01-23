import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class TekstArias extends Component {
    constructor(props) {
        super(props);

        let newDate = "";
        let newName = "";
        let newCity = "";
        this.save = this.save.bind(this);
        this.renderSave = this.renderSave.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.edit = this.edit.bind(this);

    }


    edit(e) {
        // e.preventDefault();
        this.props.onEdit(this.props.curr.id, this.newDate.value, this.newName.value, this.newCity.value)
    }


    save(e) {
        e.preventDefault();
        this.props.onSave({ id: null, date: this.newDate.value, name: this.newName.value, city: this.newCity.value })
    }


    renderSave() {
        return (
            <div className="textarias">
                <form>
                    <textarea defaultValue="" ref={input => (this.newDate = input)} /> <br />
                    <textarea defaultValue="" ref={input => (this.newName = input)} /><br />
                    <textarea defaultValue="" ref={input => (this.newCity = input)} /><br />
                    <div className="centr" >
                        <Button variant="contained" onClick={this.save} color="secondary">
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        );
    }


    renderEdit() {

        return (
            <div className="textarias">
                <form >
                    <textarea defaultValue={this.props.curr.date} ref={input => (this.newDate = input)} /><br />
                    <textarea defaultValue={this.props.curr.name} ref={input => (this.newName = input)} /><br />
                    <textarea defaultValue={this.props.curr.city} ref={input => (this.newCity = input)} /><br />
                    <div className="centr" >
                        <Button variant="contained" onClick={this.edit} color="secondary">
                            Edit
                        </Button>
                    </div>
                </form>
            </div>
        );
    }



    render() {
        return this.props.mode == "saveMode" ? this.renderSave() : this.renderEdit();
    }
}

export default TekstArias;