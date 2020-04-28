import React, { Component } from 'react'
import axios from 'axios'
import divider from '../img/divider.png'

class ShowMenu extends Component {
  state = {
    foodItems: [],
    message: {},
    orderId: '',
    showOrder: false
  }

  componentDidMount () {
    axios.get('/products').then(response => {
      this.setState({
        foodItems: response.data.products
      })
    })
  }

  async addToOrder (event) {
    let id = event.target.parentElement.parentElement.parentElement.dataset.id
    let result
    if (this.state.orderId.hasOwnProperty('id')) {
      result = await axios.put(
        `/orders/${this.state.orderId.id}`,
        { product_id: id }
      )
    } else {
      result = await axios.post('/orders/', {
        product_id: id
      })
    }
    this.setState({
      message: { id: id, message: result.data.message },
      orderId: result.data.order
    })
  }

  render () {
    const foodItems = this.state.foodItems
    let menuList, menuDetails, renderOrderMessage

    if (foodItems.length > 0) {
      menuList = foodItems.map(foodItem => {
        return (
          <>
            <div
              className='two column row'
              key={foodItem.id}
              id={`menu-item-${foodItem.id}`}
              data-id={foodItem.id}
              data-price={foodItem.price}
            >
              <div className='thirteen wide column'>
                <section className='header'>{foodItem.name}</section>
                <section className='description'>
                  {foodItem.description}
                </section>
              </div>
              <div className='three wide column right aligned'>
                <section className='price'>{foodItem.price} SEK</section>
                <section className='addtocart'>
                  <button
                    id='button' className='ui positive button addToOrder' onClick={this.addToOrder.bind(this)}>Add</button>
                </section>
              </div>
            </div>
          </>
        )
      })
    }
    
    if(this.state.message){
      renderOrderMessage = (
      <div className="forms">{this.state.message.message}</div>
      )
    }

    if (this.state.orderId.hasOwnProperty('products')) {
      menuDetails = this.state.orderId.products.map(item => {
        return <li key={item.name}>{`${item.amount} x ${item.name}`}</li>
      })
    }
    return (
      <>
        {renderOrderMessage}
        <div className='ui center aligned container'>
          {this.state.orderId !== '' && (
            <button
              className='ui primary button'
              id='showOrder'
              onClick={() =>
                this.setState({ showOrder: !this.state.showOrder })
              }
            >
              View order
            </button>
          )}
          {this.state.showOrder && (
            <>
              <ul id='order-details'>{menuDetails}</ul>
              <p className='toPay'>
                To pay: {this.state.orderId.order_total} SEK
              </p>
            </>
          )}
        </div>
        <div className='ui container'>
          <img className='divider' src={divider} alt='divider' />
          <div className='ui vertically divided grid'>{menuList}</div>
        </div>
      </>
    )
  }
}

export default ShowMenu
