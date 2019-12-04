// square component
class Square extends React.Component {
  render () {
    return (
      <div>
        <h4>square</h4>
      </div>
    )
  }
}

// board component
class Board extends React.Component {
  render () {
    return (
      <div className='board'>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }
}

// player component
// access props inside player component
// since player component is a child of App it has access to props
class Player extends React.Component {
  render () {
    return (
      <div className={this.props.whichPlayer}>
        <h2>Player {this.props.whichPlayer} </h2>
        <h3>Wins: </h3>
      </div>
    )
  }
}

// header component
class Header extends React.Component {
  render () {
    return (
      <h1> React Tac Toe </h1>
    )
  }
}

// first component
// reusable components
// custom prop called whichPlayer
class App extends React.Component {
  // can only render one component
  render () {
    return (
      <div>
        <Header />
        <Player whichPlayer='X' />
        <Player whichPlayer='O'/>
        <Board />      
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
