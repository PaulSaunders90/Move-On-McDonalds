import styled from 'styled-components'
import image1 from '../images/market1.png'
import image2 from '../images/market2.png'
import image3 from '../images/market3.png'
import image4 from '../images/market4.png'

export const CardStyle = styled.div`
.card{
    display: flex;
    width: 100%;
    height: 400px;
    margin: 10px;
    perspective: 600px;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none; 
            user-select: none; 
}
.datacard{
    width: 100%;
    height: 100%;
    position: relative;
    background-color:#5DAA68;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid grey;
    border-radius: 10px;
    transition: transform 1s;
    transform-style: preserve-3d;
}
.datacard.is-flipped{
    transform: rotateY(180deg);
}
.datacard:hover{
    box-shadow: 0px 3px 15px rgba(255,255,255,0.2);
}
.resultname{
    width: 125px;
    position: absolute;
    top: 0;
    right: 0;
    background-color:#5DAA68;
    font-size: 14px;
    font-weight: bold;
    padding: 5px;
    border-top-right-radius: 10px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 0;
    visibility:visible;
}
.resultimage{
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 0;
    visibility:visible;
}
.link{
    text-decoration: none;
    font-weight: bold;
    color: #FAF1CF;
    vertical-align: bottom;
    position: absolute;
    bottom: 15px;
    left: 25%;
}
.link:hover{
    text-decoration: underline;
}
&:nth-of-type(1n) .resultimage{
    background-image: url(${image1});
}
&:nth-of-type(2n) .resultimage{
    background-image: url(${image2});
}
&:nth-of-type(3n) .resultimage{
    background-image: url(${image3});
}
&:nth-of-type(4n) .resultimage{
    background-image: url(${image4});
}
.resultdistance{
    position: absolute;
    bottom: 0;
    left: 15px;
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
    transition-duration: .1s;
}
.resultdetailsfront{
    height: calc(100% - 200px);
    width: 100%;
    margin-top: 5px;
    text-align: center;
    font-size: 14px;
    padding: 5px;
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 0;
    visibility:visible;
}
.address{
    font-size: 16px;
    font-weight: bold;
}
.resultdetailsback{
    width: 100%;
    height: 100%;
    top: 0;
    margin-top: 5px;
    text-align: center;
    font-size: 14px;
    padding: 5px;
    position: absolute;
    transform: rotateY(180deg);
}
.detail{
    margin: 5px;
}
.detail p{
    text-decoration: underline;
    font-weight: bold;
    margin-bottom: 5px;
}`

