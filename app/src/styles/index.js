import Styled from "styled-components"
import Background1 from "../media/friends.jpg"
import Background2 from "../media/jellyfish.jpg"
import Background3 from "../media/swim.jpg"
import Video from "../media/Video.mp4"

export const BackgroundContainer = Styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
background: linear-gradient(19deg, rgba(63,94,251,0.6895133053221288) 0%, rgba(252,70,107,0.6222864145658263) 100%);
margin: 5% 0;
width: 60%;
text-align: center;
border-radius:25px;
`
export const ExcellentHeader = Styled.h1 `
display: flex;
justify-content:center;
text-align:center;
padding: 2%;
margin: 5% 0;
color: white;
font-size: 1.8em;
`
export const LinkContainerDiv = Styled.div`
margin-bottom: 5%;
`

//Main Page

export const ImageBackground = Styled.div `
display: flex;
justify-content:center;
background-image: url(${Background1});
background-size:cover;
height:100vmin;
width: auto;
`

export const ImageBackground2 = Styled.div `
display: flex;
justify-content:center;
background-image: url(${Background3});
background-size:cover;
height:100vmin;
width: auto;
`

export const ContainerDiv = Styled.div`
display:flex;
flex-wrap:wrap;
flex-direction: column;
text-align: center;
`
//Form
export const AwesomeInput = Styled.input `
display:flex;
justify-content:center;
text-align: center;
color: white;
font-size: 1rem;
background: transparent;
border: none;
border-bottom: 2px solid white;
width: 70%;
margin: 10% 15%;
outline:none;
flex-wrap: nowrap;
`
export const AwesomeLabel = Styled.label `
margin: 35% 3%;
`

export const AwesomeButton = Styled.button `
box-shadow: 5px 5px 8px blue;
padding:2%;
border-radius: 5px;
font-size: .7em;
margin: 5% 1%;
outline:none;
width: 80%;
background: linear-gradient(to right, blue, cornFlowerBlue);
color:lightBlue;
`
//FriendList

export const CardContainerDiv = Styled.div`
display:flex;
text-align: center;
width: 80%;
margin: 0 auto;
flex-direction:row;
flex-wrap: wrap;
`

//Friend Card

export const CardDiv = Styled.div`
width:20%;
text-align: center;
margin: 2% auto;
padding:4.5%;
font-size: .8rem;
color: white;
border-radius: 15px;
border-bottom: 2px solid purple;
box-shadow: 5px 5px 5px purple;
`