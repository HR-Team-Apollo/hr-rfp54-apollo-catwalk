import React from 'react';
import Overview from './components/overview';
import QuestionsAndAnswers from './components/questions';
import Related from './components/related';
import Reviews from './components/reviews';
import Modal from './utils/modal';
import AppContext from './appContext.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        modalShown: false,
        modalContent: null
      },
      product: {
        //GET from intial product info API call onComponentMount
        id: null,
        name: null,
        //GET from reviews/meta
        characteristics: {
          // "Size": {
          //   "id": 14,
          //   "value": "4.0000"
          // },
          // "Width": {
          //   "id": 15,
          //   "value": "3.5000"
          // },
          // "Comfort": {
          //   "id": 16,
          //   "value": "4.0000"
          // }
        }
      }
    };
  }


  closeModal() {
    this.setState({
      modal:{
        modalShown: false,
        modalContent: null
      }
    });
  }

  openModal(content){
    this.setState({
      modal:{
        modalShown: true,
        modalContent: content
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <AppContext.Provider value={{openModal: this.openModal.bind(this), characteristicsChart: {
          Size:[ 'A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
          Width: [ 'Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
          Comfort: [ 'Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
          Quality: [ 'Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
          Length: [ 'Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
          Fit: [ 'Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
        }}}>
          {
            (this.state.modal.modalShown && this.state.modal.modalContent)?
              <Modal modalContent={this.state.modal.modalContent} close={this.closeModal.bind(this)}/>:
              null
          }
          {/* <Overview />
          <Related />
          <QuestionsAndAnswers /> */}
          <Reviews />
        </AppContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;