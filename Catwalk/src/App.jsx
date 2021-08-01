import React from 'react';
import Overview from './components/overview';
import QuestionsAndAnswers from './components/questions';
import Related from './components/related';
import Reviews from './components/reviews';
import Modal from './utils/modal';
import AppContext from './appContext.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        modalShown: false,
        modalContent: null,
        product: null
      },
      characterDescriptions: {
        Size:[ 'A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
        Width: [ 'Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
        Comfort: [ 'Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
        Quality: [ 'Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
        Length: [ 'Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
        Fit: [ 'Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
      }
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/reviews/chars?product_id=17070')
      .then(res => {
        console.log(res);
        this.setState({
          product: res.data
        });
      })
      .catch(err => {
        console.log('failed to fetch data', err);
      });
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

  handleProductChange(id) {
    axios.get(`http://localhost:3001/api/reviews/chars?product_id=${id}`)
      .then(res => {
        this.setState({
          product: res.data
        });
      })
      .catch(err => {
        console.log('failed to fetch data', err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <AppContext.Provider value={{openModal: this.openModal.bind(this),
          characteristicsChart: this.state.product ? this.state.product.characteristics : null,
          product: this.state.product ? this.state.product : null,
          characterDescriptions: this.state.characterDescriptions}}>
          {
            (this.state.modal.modalShown && this.state.modal.modalContent)?
              <Modal modalContent={this.state.modal.modalContent} close={this.closeModal.bind(this)}/>:
              null
          }
          {/* <Overview /> */}
          <Related handleProductChange = {this.handleProductChange.bind(this)}/>
          {/* <QuestionsAndAnswers /> */}
          {
            this.state.product?
              <Reviews id={this.state.product.id}/>: null
          }
        </AppContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;