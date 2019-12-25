import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        track_list : [],
        heading : 'Top 10 Tracks'
    }

    componentDidMount(){
        console.log(process.env)
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top
        &page=1&page_size=10&country=in&f_has_lyrics=1&apikey=469bdaf92cd89e58ede824bf07b2c28e`)
        .then(res => {
            this.setState({
                track_list : res.data.message.body.track_list
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;