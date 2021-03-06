import styled from 'styled-components'

export const SearchWrapper = styled.div`

#wrapper{
  background-color:#5DAA68;
  margin:auto;
  padding:1em;
  width:360px;
  border-radius: 10px;
}
@media(min-width: 500px){
  #wrapper{
      width: 500px;
  }
}
  form{
    position: relative;
  }
  .text-filter {
    background-color:#FAF1CF;
    border:solid 1px;
    box-sizing:border-box;
    font:inherit;
    padding:.25em .5em;
    width:100%;
  }
  .list{
    color: #FAF1CF;
    position: absolute;
    z-index: 1000;
    width: 100%;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  }
  #addresslabel{
    display: none;
    justify-content: space-evenly;
    margin-left: -10%;
    background-color: #5DAA68;
  }
  ul {
    border: none;
    list-style:none;
    margin:0;
    overflow:auto;
    padding:0;
    li {
      padding:.25em .5em;
      cursor: pointer;
      background-color: #5DAA68;
      &:nth-child(odd) {
        background-color:#3F6844;
      }
      .address{
        margin-right: 1em;
      }
      span {
        display:inline-block;
        font-size: 14px;
        width:5em;
      }
      span:nth-child(2){
        width:8em;
      }
      span:nth-child(3){
        width:3em;
      }
      @media(min-width: 500px){
        span {
          width:9em;
        }
        span:nth-child(3){
          width:5em;
        }
      }
    }
}`