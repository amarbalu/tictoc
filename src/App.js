import React from 'react';
import './App.css';


//     console.log(document.querySelector('.menu').getBoundingClientRect().height);
//       var top =document.querySelector('.menu').getBoundingClientRect().bottom
//   window.addEventListener('scroll', function() {
//       if (window.pageYOffset >= top) {
//         document.querySelector('.menu1').style.position = 'fixed';
//         document.querySelector('.menu1').style.top = '65px';
         
//       } else {
//         document.querySelector('.menu1').style.position = 'static';
//         document.querySelector('.menu1').style.top = '';
//       }
//   });

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      option:"X",
      cellCount:["0","1","2","3","4","5","6","7","8"],
      resultCheck:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
      winner:""
    }
    this.gameAction=this.gameAction.bind(this)
  }
  gameAction=(cellvalue)=>{
    const array=[...this.state.cellCount]
    array[cellvalue]=this.state.option
    this.setState({cellCount:array,option:this.state.option==="X"?"O":"X"},()=>{

  for(let value=0;value<this.state.resultCheck.length;value++){
let a=this.state.cellCount[this.state.resultCheck[value][0]] ;
let b=this.state.cellCount[this.state.resultCheck[value][1]];
let c=this.state.cellCount[this.state.resultCheck[value][2]];
  if(a===b && b===c && c===a ){

  this.setState({winner:a})
  break
}
  }
    
  })
    
    
  }
  render(){
  return (
    
    <React.Fragment>
      <div>Tic Toc Game</div>
      <div className="play-area">
        
        {this.state.cellCount.map((value,index)=>
          <button disabled={value==="X" || value === "O"|| this.state.winner} key={index} style={{width:"50px",height:"50px",backgroundColor:"black",color:value==="X"|| value==="O"?"white":"black"}}
          onClick={()=>this.gameAction(index)}>{value}</button>
          
          )}
          <div>{!this.state.winner?`The Option is ${this.state.option}`:`${this.state.winner} is winner`}</div>



      </div>
      </React.Fragment>


  )}}
export default App;
