import React from 'react';
import NewsList from './components/NewsList';
import './App.scss';

class App extends React.Component {
  state = {
    data : [],
    searchInput: ''
  }
  searchRef = React.createRef();
  async componentDidMount(){
    const fetchData = await fetch('https://newsapi.org/v2/top-headlines?country=de&apiKey=5db703a91c394101924891bbad926a0c');
    const rec = await fetchData.json();
    this.setState({ data : rec.articles});
  }

  search = () =>{
    this.setState({searchInput : this.searchRef.current.value});
  }
  render(){
    let searchFilter = this.state.data;
    searchFilter =  searchFilter.filter(data =>{
      return data.title.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1
    })
    return(
      <div className="app">
          <header>
            <div>German News</div>
            <div>
              <input type='text' placeholder="Search" ref={this.searchRef} onChange={this.search}/> 
            </div>
          </header>
          <NewsList data={searchFilter} />
      </div>
    );
  }
 
}


export default App;
