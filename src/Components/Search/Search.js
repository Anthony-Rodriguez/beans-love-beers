import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import axios from 'axios'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      beer: ''
    }
  }
  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSubmit = event => {
    const { beer } = this.state
    event.preventDefault()
    axios({
      url: `https://api.punkapi.com/v2/beers?beer_name=${beer}`,
      method:`get`
    })
      .then(res => {
        this.setState({ beer: ' ' })
      })
  }

  render () {
    const  { beer } = this.state
    console.log(this.state)
    return (
      <div className="row">
        <div className="col-10 col-md-8 col-lg-5 mx-auto mt-5 mb-3">
          <Form onSubmit={this.onSubmit}>
            <InputGroup size="lg">
              <Form.Control
                required
                type="string"
                name="beer"
                value={beer}
                placeholder="Search for beer..."
                onChange={this.handleChange}
              />
              <InputGroup.Append>
                <Button
                  variant="primary"
                  type="submit"
                >
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
      </div>
    )
  }
}
export default SearchBar
