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
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevPage = prevProps.page;
    const nextPage = this.state.page;
    const prevFind = prevState.toFind;
    const nextFind = this.state.toFind;

    if (prevFind !== nextFind) {
      this.setState({ loading: true });
      const responce = await FetchPixabay(nextFind, nextPage)
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
      const data = responce.data;

      this.setState({ findPictures: data.hits });

      if (data.totalHits === 0) {
        toast.error('Error, not found images!');
      }
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

  //  if (prevState.page !== this.state.page && this.state.page !== 1) {

  //       pixabayApi(this.state.name, this.state.page)
  //         .then(q => query.hits)
  //         .then(q =>
  //           this.setState(prevState => ({
  //             query: [...prevState.query, ...query],
  //             status: 'resolved',
  //           })),
  //         );
  //     }

  onFormSubmit = value => {
    this.setState({ toFind: value, page: 1 });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  modalImageClick = () => {
    this.setState({ modalShow: true });
  };

  //!Остановился на модалке

  render() {
    const { modalShow, error, toFind, loading, findPictures } = this.state;

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
          <h2 className="start-message">Enter something to searching images</h2>
        )}
        {findPictures && <ImageGallery pictures={findPictures} />}

        {modalShow && <Modal modalClick={this.modalImageClick} />}
        {findPictures !== null && <Button loadMore={this.onLoadMore} />}
      </section>
    );
  }
}

export default ImageFinder;
