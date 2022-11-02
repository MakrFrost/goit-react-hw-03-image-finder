import { Component } from 'react';
import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '30054612-8d338f00f07d687f9e2b96ac6';
const API_SETTINGS = 'image_type=photo&orientation=horizontal&per_page=12';

export default class API extends Component {
  state = {
    toFind: '',
    album: [],
  };

  componentDidUpdate(prevProps) {
    const prevFind = prevProps.toFind;
    const nextFind = this.props.toFind;

    if (prevFind !== nextFind) {
      axios
        .get(
          `${API_URL}?q=${this.props.toFind}&page=1&key=${API_KEY}&${API_SETTINGS}`
        )
        .then(result => {
          const findPictures = result.data;
          console.log(findPictures);
        });
    }
  }

  render() {
    return (
      <div>
        <h1>kavo</h1>
      </div>
    );
  }
}
