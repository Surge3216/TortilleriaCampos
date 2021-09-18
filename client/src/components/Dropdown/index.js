import React, { Component } from "react";
import './style.css'
import axios from "axios"

class Dropdown extends Component{

    constructor(props){
        super(props)

        this.state = {
            post: []
        }
    };

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const { posts } = this.state

        return(
        <div>

        {
            posts.length ?
            posts.map(post => <div key={post.id}>{post.title}</div>) : null
        }
    </div>
        )
    }
}

export default Dropdown;


// import M from 'materialize-css/dist/js/materialize';

    // componentDidMount()  {document.addEventListener('DOMContentLoaded', function() {
    //     var elems = document.querySelectorAll('.collapsible');
    //     var instances = M.Collapsible.init(elems, {});
    //   });
    // };
