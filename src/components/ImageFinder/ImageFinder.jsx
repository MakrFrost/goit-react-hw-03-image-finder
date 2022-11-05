import React, { Component } from 'react';
import { toast } from 'react-toastify';

//? Форма поиска
import Searchbar from './Searchbar/Searchbar';
//? Фетч функция
import FetchPixabay from './API/PixabayApi';
//? Колесо загрузки
import { Loader } from './Loader/Loader';
//? Галерея карточек
import ImageGallery from './ImageGallery/ImageGallery';
//? Модалка
import Modal from './Modal/Modal';
//? Кнопка загрузить ещё
import Button from './Button/Button';

class ImageFinder extends Component {
  state = {
    toFind: '',
    page: 1,
    findPictures: null,
    loading: false,
    error: null,
    modalShow: false,
    loadMore: false,
    largeImageURL: null,
    // status: 'idle',
  };

  async componentDidUpdate(_, prevState) {
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    const prevFind = prevState.toFind;
    const nextFind = this.state.toFind;

    if (prevFind !== nextFind) {
      this.setState({ loading: true });

      const responce = await FetchPixabay(nextFind, nextPage)
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));

      const data = responce.data;

      if (data.totalHits > 12 || data.totalHits === 13) {
        this.setState({ loadMore: true });
      }
      if (data.totalHits === 0) {
        toast.error('Error, not found images!');
      }

      this.setState({ findPictures: null, page: 1 });
      this.setState({ findPictures: data.hits });
    }
    if (prevPage !== nextPage && nextPage !== 1) {
      const responce = await FetchPixabay(nextFind, nextPage)
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));

      const data = responce.data;

      this.setState(prevState => ({
        findPictures: [...prevState.findPictures, ...data.hits],
      }));
    }
  }

  onFormSubmit = value => {
    this.setState({ toFind: value, page: 1 });
  };
  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  modalImageClick = url => {
    this.setState(({ modalShow }) => ({ modalShow: !modalShow }));
    this.setState(() => ({ largeImageURL: url }));
  };

  render() {
    const {
      // status,
      largeImageURL,
      loadMore,
      modalShow,
      error,
      toFind,
      loading,
      findPictures,
    } = this.state;

    // if (status === 'idle') {
    //   return <div></div>;
    // }

    return (
      <section className="app">
        {error && toast.error('Error, try again later!')}
        <Searchbar onSubmit={this.onFormSubmit} />
        {loading && (
          <div className="start-loader">
            <Loader />
            Searching...
          </div>
        )}
        {!toFind && (
          <h2 className="start-message">
            Enter something to searching images...
          </h2>
        )}

        {findPictures && (
          <ImageGallery
            pictures={findPictures}
            modalClick={this.modalImageClick}
          />
        )}

        {modalShow && (
          <Modal
            modalClick={this.modalImageClick}
            largeImageURL={largeImageURL}
          />
        )}

        {loadMore && <Button loadMore={this.onLoadMore} />}
      </section>
    );
  }
}

export default ImageFinder;
