import { Component } from 'react';
import axios from 'axios';
// import { toast } from 'react-toastify';

// import { Loader } from '../Loader/Loader';
// import ImageGallery from '../ImageGallery/ImageGallery';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '30054612-8d338f00f07d687f9e2b96ac6';
const API_SETTINGS = 'image_type=photo&orientation=horizontal&per_page=12';

export default class API extends Component {
  state = {
    findPictures: null,
  };

  async componentDidUpdate(prevProps) {
    const prevFind = prevProps.toFind;
    const nextFind = this.props.toFind;
    const page = this.props.page;

    if (prevFind !== nextFind) {
      this.setState({ loading: true });
      axios.get(
        `${API_URL}?q=${this.props.toFind}&page=${page}&key=${API_KEY}&${API_SETTINGS}`
      );

      //!
    }
  }
}

//         .then(result => {
//           const findPictures = result.data;

//           if (findPictures.hits > 0) {
//             console.log(findPictures);
//             this.setState({ findPictures: [...findPictures] });
//             console.log(this.state.findPictures);
//           }

//           // else {
//           //   toast.error('Error, not found images!');
//           // }
//         })
//         .catch(error => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

//   render() {
//     const { loading, findPictures, error } = this.state;
//     const { toFind } = this.props;

//     return (
//       <div>
//         {error && toast.error('Error, try again later!')}
//         {loading && (
//           <div className="start-loader">
//             <Loader />
//             Searching...
//           </div>
//         )}
//         {!toFind && (
//           <h2 className="start-message">Enter something to searching images</h2>
//         )}
//         {findPictures && <ImageGallery pictures={findPictures} />}
//       </div>
//     );
//   }
// }
