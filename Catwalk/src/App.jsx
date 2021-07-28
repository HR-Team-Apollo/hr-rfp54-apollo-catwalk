import React from 'react';
import Overview from './components/overview';
import QuestionsAndAnswers from './components/questions';
import Related from './components/related';
import Reviews from './components/reviews';
import Modal from './utils/modal';
import ModalContext from './modalContext.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShown: false,
      modalContent: null
    };
  }

  closeModal() {
    this.setState({
      modalShown: false,
      modalContent: null
    });
  }

  openModal(content){
    this.setState({
      modalShown: true,
      modalContent: content
    });
  }

  render() {
    return (
      <React.Fragment>
        {
          (this.state.modalShown && this.state.modalContent)?
            <Modal modalContent={this.state.modalContent} close={this.closeModal.bind(this)}/>:
            null
        }
        <Overview />
        <ModalContext.Provider value={this.openModal.bind(this)}>
          <Related />
          <QuestionsAndAnswers />
          <Reviews />
        </ModalContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;