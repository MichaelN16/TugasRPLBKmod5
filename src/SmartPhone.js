import React from 'react';
import axios from "axios";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

export default class SmartPhone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smartphone: [],
            visible: false,
        };
    }
    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:3000/data",
            headers: {
                accept: "/",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    smartphone: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {

        return (
            <div style={{ marginTop: 20 }}>
                {this.state.smartphone.map((results, index) => {
                    return (
                        <Card>
                            <CardActionArea onClick={() => this.handleButton(results.address.city)}>
                                <CardContent style={{ backgroundColor: '#9EADB6' }}>
                                    <Typography> Nama Product: {results.produk}</Typography>
                                    <Typography> Warna Produk: {results.warna}</Typography>
                                    <Typography> Harga: {results.harga}</Typography>
                                    <Typography> Memory: {results.memori}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    );
                })}
            </div>
        );
    }
}