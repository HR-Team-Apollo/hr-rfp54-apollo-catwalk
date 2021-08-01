import React from 'react';

class ReviewBody extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      textOverflow: (this.props.text.length > 250),
      showAllText: (this.props.text.length < 250)
    };
  }

  render(){
    return (
      <div className='body' style={{overflowWrap: 'break-word'}}>
        {
          this.state.showAllText?
            this.props.text:
            `${this.props.text.slice(0,250)}...`
        }
        {
          this.state.textOverflow?
            <button
              className='clickMe'
              style={{
                fontFamily: 'inherit'
              }}
              onClick={()=>{
                const currState = this.state.showAllText;
                this.setState({showAllText: !currState});
              }}>
              {
                this.state.showAllText?
                  'Show Less':
                  'Show More'
              }
            </button>:
            null
        }
      </div>
    );
  }
}

export default ReviewBody;