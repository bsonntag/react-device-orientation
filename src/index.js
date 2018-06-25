import { Component } from 'react';
import PropTypes from 'prop-types';

export default class DeviceOrientation extends Component {

  static propTypes = {
    children: PropTypes.func,
  };

  static defaultProps = {
    children: () => null,
  };

  state = {
    absolute: true,
    alpha: 0,
    beta: 0,
    gamma: 0,
  };

  handleOrientation = event => {
    const { absolute, alpha, beta, gamma } = event;

    this.setState({ absolute, alpha, beta, gamma });
  };

  componentDidMount() {
    window.addEventListener('deviceorientation', this.handleOrientation, true);
  }

  componentWillUnmount() {
    window.removeEventListener('deviceorientation', this.handleOrientation, true);
  }

  render() {
    return this.props.children(this.state);
  }

}
