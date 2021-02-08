import './App.scss'
import React, { Component, Fragment } from 'react'
import Header from './Components/Header/Header'
import Search from './Components/Search/Search'
import axios from 'axios'
import Card from 'react-bootstrap/Card'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      beers: null
    }
  }
  componentDidMount () {
    axios({
      url: 'https://api.punkapi.com/v2/beers?page=1&per_page=6',
      method: 'get',
      })
      .then(res => {
        this.setState({ beers: res.data })
      return res
    })
  }
  render() {
    let beersJsx
    if (this.state.beers === null) {
      beersJsx = 'Loading...'
    } else if (this.state.beers.length === 0) {
      beersJsx = "Your beers don't exist"
    } else {
      const beersList = this.state.beers.map(beer => (
        <Card key={beer.id} className="d-inline-flex" style={{ width: '24rem', height: '14rem' }}>
          <div className="card-content">
            <div className="card-image">
              <Card.Img className="beer-pics" variant="bottom" src={beer.image_url}/>
            </div>
            <div className="card-info">
              <Card.Body>
                <div className="star-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                </div>
                <Card.Title>{beer.name}</Card.Title>
                <Card.Text>
                  {beer.description}
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      ))
      beersJsx = (
        <ul>
          {beersList}
        </ul>
      )
    }
    return (
      <Fragment>
        <Header/>
        <Search/>
        {beersJsx}
      </Fragment>
    )
  }
}

export default App
