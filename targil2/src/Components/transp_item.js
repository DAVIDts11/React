import React, { Component } from 'react';


class TtranspItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        // this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.setEdit = this.setEdit.bind(this);

    }



    delete(){
        this.props.onDelete(this.props.index);
    }

    setEdit(){
        console.log("setEdit in item");
        this.props.onChange(this.props.index);
       
    }

    render(){
        return(
            <div className="transp_item">
                {this.props.id} {this.props.date} {this.props.name} {this.props.city}
            <button onClick={this.delete}>Delete</button>
            <button onClick={this.setEdit}>Edit</button>
             </div>
        );
    }

}


export default TtranspItem;