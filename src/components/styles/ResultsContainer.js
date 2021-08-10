import styled from 'styled-components'
import image1 from '../images/market1.png'
import image2 from '../images/market2.png'
import image3 from '../images/market3.png'
import image4 from '../images/market4.png'


export const ResultsContainer = styled.div`
#results{
    display: none;
    margin: 15px auto auto auto;
    text-align: center;
    z-index: 1;
}
#resultsheader{
    text-align: center;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: bold;
}
.card{
    display: inline-flex;
    width: 250px;
    height: 400px;
    margin: 10px;
    perspective: 600px;
    cursor: pointer;
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
.datacard:hover{
    box-shadow: 0px 3px 15px rgba(255,255,255,0.2);
}
.datacard.is-flipped {
    transform: rotateY(180deg);
  }
.resultname{
    width: 125px;
    position: absolute;
    top: 0;
    right: 0;
    background-color:#5DAA68;
    font-size: 16px;
    font-weight: bold;
    padding: 5px;
    border-top-right-radius: 10px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
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
.card:nth-of-type(1n) .resultimage{
    background-image: url(${image1});
}
.card:nth-of-type(2n) .resultimage{
    background-image: url(${image2});
}
.card:nth-of-type(3n) .resultimage{
    background-image: url(${image3});
}
.card:nth-of-type(4n) .resultimage{
    background-image: url(${image4});
}
.resultdistance{
    position: absolute;
    bottom: 50%;
    left: 15px;
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    transition-duration: .1s;
}
.resultdetailsfront{
    width: 100%;
    height: 100%;
    margin-top: 5px;
    text-align: center;
    font-size: 14px;
    padding: 5px;
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
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
.detail p{
    text-decoration: underline;
    font-weight: bold;
}
`