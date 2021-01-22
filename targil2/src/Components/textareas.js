import React, { Component } from 'react';



class TekstArias extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     saveMode: true
        // };
        // if (this.props.mode == "saveMode"){
        //     this.setState({ saveMode:true});
        // }

        // else  {
        //     this.setState({ saveMode:false});
        // }

        let newDate = "";
        let newName = "";
        let newCity = "";
        this.save = this.save.bind(this);
        this.renderSave = this.renderSave.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.edit = this.edit.bind(this);

    }


    edit(e) {
        e.preventDefault();
        this.props.onEdit(this.props.curr.id,this.newDate.value,this.newName.value,this.newCity.value)
    }


    save(e) {
        e.preventDefault();
        this.props.onSave({ id: null, date: this.newDate.value, name: this.newName.value, city: this.newCity.value })
    }


    renderSave() {
        return (
            <div>
                <form>
                    <textarea ref={input => (this.newDate = input)} />
                    <textarea ref={input => (this.newName = input)} />
                    <textarea ref={input => (this.newCity = input)} />
                    <button onClick={this.save}>Save</button>
                </form>
                {this.props.mode}
            </div>
        );
    }


    renderEdit() {
        console.log("kjhljkh");
        console.log(this.props.curr);

        return (<div>
            <form>
                <textarea placeholder ={this.props.curr} ref={input => (this.newDate = input)} />
                <textarea  placeholder ={this.props.curr.name} ref={input => (this.newName = input)} />
                <textarea placeholder ={this.props.curr.city} ref={input => (this.newCity = input)} />
                <button onClick={this.edit}>Edit</button>
            </form>
            {this.props.mode}
        </div>
        );
    }



    render() {
        return this.props.mode == "saveMode" ? this.renderSave() : this.renderEdit();
    }
}

export default TekstArias;