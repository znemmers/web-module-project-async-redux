import {connect} from 'react-redux'
import GifList from './components/GifList';
import GifForm from './components/GifForm';
import React from 'react';
import './App.css';

function App(props) {
  const {loading, error} = props


  return (
    <div className="App">
      <h1>Gif Search</h1>
      <GifForm />
      {
        (error !== '') && <h3>{error}</h3>
      }
      {
        loading ? <h3>Coming right up!</h3> : <GifList />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);