import React, { Component } from 'react'

export default class Play extends Component {
  render() {
    return (
      <div className='quizbox'>
        <h1>Question</h1>
        <h4>1 of 15</h4>
        <h3>Which is the only mammal that can jump?</h3>
        <div className='optionbox'>
          <button className='option'>Dog</button>
          <button className='option'>Elephant</button>
          <button className='option'>Goat</button>
          <button className='option'>Lion</button>
        </div>
        <div className='buttons'>
          <button className='prev'>Previous</button>
          <button className='next'>Next</button>
          <button className='quiz'>Quiz</button>
        </div>
      </div>
    )
  }
}
