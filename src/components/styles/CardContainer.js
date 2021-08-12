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
    display: inline-block;
    vertical-align: middle;
    border: 1px solid grey;
    border-radius: 12px;
    transition: transform 1s;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    perspective: 1000;
    -webkit-perspective: 1000;
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
    padding-right: 3px;
    transition-duration: .1s;
    border-top-right-radius: 10px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform:translate3d(0,0,0);
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
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.resultdetailsfront{
    height: calc(100% - 200px);
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 5px;
    padding-top: 10px;
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color:#5DAA68;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
}
.address{
    font-size: 16px;
    font-weight: bold;
}
.resultdetailsback{
    width: 100%;
    height: 100%;
    top: 0;
    text-align: center;
    font-size: 14px;
    padding: 5px;
    padding-top: 10px;
    position: absolute;
    transform: rotateY(180deg);
    background-color:#5DAA68;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
}
.detail{
    margin: 5px;
}
.detail p{
    text-decoration: underline;
    font-weight: bold;
    margin-bottom: 5px;
}`

