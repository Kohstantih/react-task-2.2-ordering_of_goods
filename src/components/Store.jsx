import React from "react";
import { IconSwitch } from "./IconSwitch";
import { ListView } from "./ListView";
import { CardsView } from "./CardsView";

export class Store extends React.Component {
    constructor(props) {
        super(props);
        this.icons = props.icons;
        this.products = props.products;

        this.state = {status: 0};

        this.onSwitch = this.onSwitch.bind(this);
    }

    onSwitch() {
        const result = this.state.status === 0 ? 1 : 0;

        this.setState({status: result});
    }

    render() {
        let list = null;
        if(this.state.status === 0) {
            list = <ListView products={this.products}/>
        } else {
            list = <CardsView products={this.products}/>
        }
        return (
            <div className="container">
                <div className="header">
                    <IconSwitch icon={this.icons[this.state.status]} onSwitch={this.onSwitch}/>
                </div>
                {list}
            </div>
        )
    }
}