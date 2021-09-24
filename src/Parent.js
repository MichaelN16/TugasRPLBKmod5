import { Component } from "react"; import React from "react";
import SmartPhone from "./SmartPhone";
class Parent extends Component {
    state = {
        SmartPhone: false
    }
    listSmartPhone = () => {
        this.setState(() => {
            return {
                SmartPhone: !this.state.SmartPhone
            }
        })
    }
    handleCallback = (childData) =>{
        this.setState({data: childData})
    }
    render() {
        return (
            <>
                <h1>List Smartphone</h1>
                <div style={{ display: "grid" }}>
                    <div style={{ width: "100%" }}>
                        <button
                            onClick={this.listSmartPhone}>{this.state.SmartPhone ? 'Sembunyikan' :
                                'Perlihatkan'} List Smartphone!</button>
                        {this.state.SmartPhone && <SmartPhone />}
                    </div>
                </div>

            </>
        );
    }
}
export default Parent;