import React, { Component } from 'react'
// for data fetching first step is:
// first step we import the axios library and post this component
import axios from 'axios'

class PostList extends Component {
    // second step we need to create state property which will store the list of posts
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             error: ''
        }
    }
    // third step use axios to make a get request to the Json placeholder api(https://jsonplaceholder.typicode.com/) the question is where do we place the code to make the get request,  the answer is in component did mount lifecycle method

    componentDidMount() {
        // as we know this method will be executed when the component mounts for the first time and this only executed once during components lifecycle a perfect place for our get request, to make a get request we invoke the get method on the axios library
        axios.get('https://jsonplaceholder.typicode.com/posts')//this methods accepts the API endpoint as its arguments(now we are making a get request), but how do we access tje data that is returned, well axios is promised based library 
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retreiving data'})
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                List of Posts
                {
                    posts.length?
                    posts.map(post => <div key={post.id}>{post.title}</div> ):
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList
