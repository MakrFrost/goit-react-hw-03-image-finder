import { Component } from 'react';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    value: '',
  };

  submitOnForm = event => {
    event.preventDefault();

    if (this.state.value.trim() === '') {
      toast.warn('Заполните поле для поиска картинок!');
      return;
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  onInputChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.submitOnForm}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
