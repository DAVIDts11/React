import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


class TtranspItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.delete = this.delete.bind(this);
        this.setEdit = this.setEdit.bind(this);

    }



    delete() {
        this.props.onDelete(this.props.index);
    }

    setEdit() {
        console.log("setEdit in item");
        this.props.onChange(this.props.index);

    }

    render() {
        return (
            <div className="transp_item">
                {this.props.id} {this.props.date} {this.props.name} {this.props.city}
                <Fab color="primary" onClick={this.delete} color="secondary" aria-label="delete" size="small">
                    <DeleteIcon />
                </Fab>
                <Fab color="primary" onClick={this.setEdit} color="secondary" aria-label="edit" size="small">
                    <EditIcon />
                </Fab>

            </div>
        );
    }

}


export default TtranspItem;