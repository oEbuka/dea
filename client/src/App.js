import React from 'react';
import './index.css';
import MainRouter from './MainRouter';
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
      <MainRouter />
  </BrowserRouter>
);


export default App;













/*  constructor(props) {
    super(props)
    //state
    this.state = {
      users: [],
      loading: false
    };
    //bind
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    this.setState({
      loading: true
    })
    axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response => this.setState({
        users: [...this.state.users, ...response.data.results],
        loading: false
      }))
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
    console.log('more users loaded');
  }
  
  componentDidMount(){
    this.getUsers();
  }

  render() {
    const{loading, users} = this.state;
    return (
      <div className="App">
        {!loading ? users.map(user =>
          <div key={user.id.value}>
            <h3 style={{ color: 'blue'}}>{user.name.first}</h3>
            <p>{user.email}</p>
            <hr />
            <form onSubmit={this.handleSubmit}>
              <input type= "submit" value= "load users"/>
            </form>
          </div>) : <Loading message = " Let's gooo"/>}
      </div>
    );
  }*/