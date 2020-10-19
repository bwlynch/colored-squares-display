import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground(e) {
    //e.target.style.background = 'blue';
    this.props.mouseOn(this.props.value)
  }

  render() {
    const cssStyle = {backgroundColor: this.props.color};
    return (
      <div className="square" onMouseOver={this.changeBackground} style={cssStyle}></div>
    );
  }
}

class Area extends React.Component {
  constructor(props) {
    super(props);
    this.mouseOn = this.mouseOn.bind(this);
    let initialSquares = [];
    let i;
    for (i = 0; i < 49; i++) {
      initialSquares.push('ForestGreen');
    }
    this.state = {squareColors: initialSquares, currentColorNum: 1};
  }

  mouseOn(value) {
    const colorList = ['ForestGreen', 'cyan', '#990000', 'blue', 'orange']
    let currentSquares = this.state.squareColors;
    currentSquares[value] = colorList[this.state.currentColorNum];
    this.setState({squareColors: currentSquares});
    let k;
    var colorDone = true;
    for (k = 0; k < 49; k++) {
      /*console.log('a');
      console.log(this.state.squareColors[k]);
      console.log(colorList[this.state.currentColorNum]);
      console.log('b');*/
      if (String(this.state.squareColors[k]) != String(colorList[this.state.currentColorNum])) {
        colorDone = false;
	//console.log('we got here');
        console.log(k);
	console.log(colorDone);
      }
    }
    console.log(colorDone);
    if (colorDone === true) {
      console.log('Why are we here?');
      let newColorNum = this.state.currentColorNum;
      console.log(newColorNum);
      newColorNum++;
      console.log(newColorNum);
      if (newColorNum > 4) {
        newColorNum = 0;
      }
      this.setState({currentColorNum: newColorNum});
    }
  }  

  render() {
    let i;
    let j;
    let keyValue;
    let squares = [];
    for (i = 0; i < 7; i++) {
       for (j = 0; j < 7; j++) {
         keyValue = i * 7 + j;
         //console.log(keyValue);
         squares.push(<Square mouseOn={this.mouseOn} value={keyValue} key={keyValue} color={this.state.squareColors[keyValue]}/>);
       }
    }
    return (
      <div className="area">
        {squares}
      </div> 

	   /* <div className="area-row">
  	  <Square />
          <Square />
        </div>
        <div className="area-row">
          var i;
          /*for (i = 0; i < 5; i++) {
            let abc = 0;
		  //<Square />
	  }*/
       // </div>
      //</div>
    );
  }
}


ReactDOM.render(
  <Area />,
  document.getElementById('root')
);
