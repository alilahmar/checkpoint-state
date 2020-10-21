import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Nelson Rolihlahla Mandela",
        biog:
          "Nelson Rolihlahla Mandela 18 July 1918 – 5 December 2013) was a South African anti-apartheid revolutionary, political leader and philanthropist who served as President of South Africa from 1994 to 1999.  He was the country's first black head of state and the first elected in a fully representative democratic election. His government focused on dismantling the legacy of apartheid by tackling institutionalised racism and fostering racial reconciliation.",
        imgSrc: "nelson.jpg",
        profession: "political leader",
      },
      show: false,
      timer: new Date().toLocaleTimeString(),
    };
    
  }
  componentDidMount() {
  setInterval(()=>{
    this.setState({
      timer:new Date().toLocaleTimeString()
    })
  },0)
  }
  componentDidUpdate() {

  }
  componentWillUnmount() {
    alert('  ');
  }
  togleShow = () => {
    this.setState({ show: !this.state.show });
    // or
    // if(this.state.show){
    //   this.setState({show:false})
    // }else{
    //   this.setState({show:true})
    // }
  };
  render() {
    let { fullName, biog, imgSrc, profession } = this.state.person;
    return (
      <div className="App">
        <p>{this.state.timer}</p>
        <button className='btn' onClick={this.togleShow}>
          {this.state.show ? "hide" : "show"}
        </button>
        {this.state.show ? (
            <div className='general'>
            <div className='full-biog'>
            <h1 className="full">{fullName}</h1>
            <br></br>
            <h2 className="biog">{biog}</h2>
            <br></br>
            </div>
           <div className='nelson-profession'>
            <img className='nelson-img' src={imgSrc} alt="img" />
            <br></br>
            <h3 className="profession">{profession}</h3>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
