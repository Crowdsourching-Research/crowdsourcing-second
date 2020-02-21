


import React, { Component } from 'react'
import { getAllVideos } from '../api'
//  import Table from 'react'
// import api from '../api'
 import apis from '../api'
// import ReactTable from 'react-table'

// import styled from 'styled-components'

// import 'react-table/react-table.css'

// const Wrapper = styled.div
// `padding: 0 40px 40px 40px`
//   run = async () => {
//         const videoslisthopefully = await apis.getAllVideos();
//         console.log("this is from the run() function" + videoslisthopefully.data)
//     };
    //  run();

class VideosList extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         videos: [],
    //         columns: [],
    //         isLoading: false
    //     }
    //     console.log("are the props showing up" + props)
    // }

    // componentDidMount = async () => {
    //     this.setState({isLoading: true})
    //     await apis.getAllVideos().then(videos => {
    //         this.setState({
    //             videos: videos.data,
    //             isLoading: false,
    //         })
    //     })
    //     console.log("comp did mount " + api.getAllVideos())
    // };

  


    render() {
        return(
            <div>
            <p>In this page you'll see the form to add a videos</p>
        </div>
        )
    }
   
}

    export default VideosList
    
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