


import React, { Component, Card, ListItem } from 'react'

import ReactTable from 'react-table-6'

import apis from '../api'

import Videopost  from '../components/Videopost/index'

// import { Card, ListItem, Button, Icon } from 'react-native-elements'


class VideosList extends Component {
 hmm = async () => {
        const videoslisthopefully = await apis.getAllVideos();
        console.log(videoslisthopefully.data)
    };
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            columns: [],
            isLoading: false
        }
        console.log("are the props showing up" + props)
    };


    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await apis.getAllVideos().then(videoslisthopefully => {
            this.setState({
                videos: videoslisthopefully.data,
                isLoading: false,
            })
        }); 
    };

    render() {
        const { videos, isLoading } = this.state
        console.log('TCL: MoviesList -> render -> movies', videos)

        const columns = [
            // {
            //     Header: 'ID',
            //     accessor: '_id',
            //     filterable: true
            // },
            {
                Header: 'papername',
                accessor: 'paperName',
                filterable: true
            }
        ]
        return (

            <ReactTable 
                data={videos}
                columns={columns}
                // loading={isLoading} 
                />
                // <Videopost
                // title={videos}
                // />

        // <Card>
            // <ListItem
            // data={videos}
            //   columns={columns}
            //  loading={isLoading}/>
        // </Card>

        // <div>
        //     <h3>Video Title: <a href={this.props.videos}></a></h3>
        // </div>

        )
    }

}

export default VideosList



    //     <div>
            //     <p>In this page you'll see the form to add a videos</p>
            // </div>

    // const {videos, isLoading} = this.state
        // console.log ('is this working ha', videos)
        // const columns = [
        //     {
        //         Header:'ID',
        //         accessor:'_id',
        //         filterable:true
        //     },
        //     {
        //         Header:'papername',
        //         accessor:'paperName',
        //         filterable:true
        //     }
        // ]

        // let showTable = true
        // if (!videos.length) {
        //     showTable = false
        // } // {/* <Wrapper>
        //     {showTable &&(
        //         <ReactTable
        //         data={videos}
        //         columns={columns}
        //         loading={isLoading}/>
        //     )}
        // </Wrapper></div> */}



        //  import ReactTable from 'react-table'


//   run  = async () => {
//         const videoslisthopefully = await apis.getAllVideos();
//         console.log("this is from the run() function" + videoslisthopefully.data)
//     };
//      run();

    // componentDidMount = async () => {
    //     this.setState({ isLoading: true })
    //     await apis.getAllVideos().then(videos => {
    //         this.setState({
    //             videos: videos.data,
    //             isLoading: false,
    //         })
    //     }); console.log("comp did mount " + apis.getAllVideos())
    // };

    //  test = console.log("comp did mount " + api.getAllVideos())
    // };