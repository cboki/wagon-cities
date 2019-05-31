import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from './city';

class CityList extends Component {


  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return(
      <div className='cities'>
        {this.props.cities.map((city) => <City city={city} key={city.name}/>)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  }
}

function mapDispacthToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispacthToProps)(CityList);
