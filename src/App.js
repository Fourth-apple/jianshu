import React,{Component} from 'react'
import Header from './commom/header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import {Provider} from 'react-redux'
import store from './store'

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <div>
        <Header/>
        <Router>
          <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
          </div>
        </Router>
        </div>
      </Provider>
    )
  }
}
export default App;



