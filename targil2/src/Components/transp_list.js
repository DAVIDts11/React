import React, { Component } from 'react';
import TtranspItem from "./transp_item";




class TranspList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.eachTransp = this.eachTransp.bind(this);

    }


    eachTransp(item, i) {
        return (<TtranspItem key={i} index={item.id} date={item.date}
            name={item.name} city={item.city} onChange={this.props.onChange} onDelete={this.props.onDelete} />);
    }
   render(){
        return (
            <div className="ideas_list">
                {this.props.transportations.map(this.eachTransp)}
            </div>
        );
    }

}
export default TranspList;