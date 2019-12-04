console.table(products)

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      products: products,
      name: '',
      price: 0,
      description: 'Describe this item',
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }
  render () {
    return (
      <div>
        <h1> Big Time Shopping </h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" value={this.state.name} onChange={this.handleChange} id="name" placeholder='name of product'/>
        </form>
        <ul>
          {this.state.products.map(product => {
            return (
              <li>{product.name} {product.price}</li>)}
            )
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
