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
      initialSquares.push('#000000');
    }
    this.state = {squareColors: initialSquares, currentColor: '#000000'};
  }

  mouseOn(value) {
    let currentSquares = this.state.squareColors;
    currentSquares[value] = this.state.currentColor;
    this.setState({squareColors: currentSquares});
    let k;
    var colorDone = true;
    for (k = 0; k < 49; k++) {
      if (String(this.state.squareColors[k]) != String(this.state.currentColor)) {
        colorDone = false;
      }
    }
    if (colorDone === true) {
      var randomColor = '#';
      let h;
      for (h = 0; h < 6; h++) {
	var newNum = Math.floor(Math.random()*16).toString(16);
	newNum = (newNum == 10) ? 'f' : newNum;
	randomColor = randomColor.concat(newNum);
      }
      this.setState({currentColor: randomColor});
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
  <Area colorList={['#000000', '#eeeeee', '#33bb55', 'cyan', '#990000', '#dddd44', 'blue', '#ddbbbb', 'orange']} />,
  document.getElementById('root')
);
