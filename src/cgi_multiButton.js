import Button from '@material-ui/core/Button';
import React from 'react';
var count=parseInt(0);
const changeText=(event)=>{
    console.log(event.target)

      count=parseInt(count)+1;
      event.target.innerText = parseInt(count);
    }
    const MultiButton=(num)=>{
        var output=[];
        for(let i=1;i<num+1;++i) {
        output.push(<CounterButton variant="contained" color="primary"
        onClick={changeText}>第{i}個按鍵</CounterButton>)
        }
        return output;
    }
    class CounterButton extends React.Component{
      constructor(props){
        super(props)
        this.state = {
          counter: 0
        }
        this.handleClick = this.handleClick.bind(this)
      }
      handleClick(event){
        this.setState({ counter: this.state.counter + 1});
        console.log(this.state);
      }
      render() {
        var text = this.state.counter;
        return(
          <Button variant="contained" color="primary" onClick={this.handleClick}>
            你點了 {text}次
          </Button>
        );
      }
    }
    export default MultiButton;
