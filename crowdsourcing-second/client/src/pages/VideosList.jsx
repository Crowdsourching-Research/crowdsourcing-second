import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'




class VideosList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllVideos().then(videos => {
            this.setState({
                videos: videos.data.data,
                isLoading: false,
            })
        })
    }

//current stopping point. Getting an error that videos on line 21 isn't devined (but its defined on line 12 as an empty array)

    render() {
        console.log(videos)
        return (
            <div>
                <p>In this page you'll see the list of movies</p>
            </div>
        )
    }
}

export default VideosList