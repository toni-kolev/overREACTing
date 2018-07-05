//import React from './vendor/react';
//import ReactDOM from './vendor/react-dom';
import { Monkata } from './MonkataComp';

ReactDOM.render(React.createElement(
  'h1',
  null,
  'Your name HERE!!'
), document.getElementById('app'));

var myDiv = React.createElement(
  'div',
  { className: 'big' },
  'I AM A BIG DIV2'
);

ReactDOM.render(myDiv, document.getElementById('el1'));

////////////////////////////////////////////////////////////////////////

ReactDOM.render(React.createElement(
  'h1',
  null,
  2 + 3
), document.getElementById('el2'));

////////////////////////////////////////////////////////////////////////

const theBestString = 'tralalalala i am da best';

ReactDOM.render(React.createElement(
  'h1',
  null,
  theBestString
), document.getElementById('el3'));

////////////////////////////////////////////////////////////////////////

var goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

var gooseImg = React.createElement('img', { src: goose });

ReactDOM.render(gooseImg, document.getElementById('el4'));

////////////////////////////////////////////////////////////////////////

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = React.createElement('img', {
  width: '200px',
  onClick: makeDoggy,
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  alt: 'kitty' });

ReactDOM.render(kitty, document.getElementById('el5'));

////////////////////////////////////////////////////////////////////////
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = React.createElement('img', { src: pics.kitty, width: '100px' });
} else {
  img = React.createElement('img', { src: pics.doggy, width: '100px' });
}

ReactDOM.render(img, document.getElementById('el6'));

////////////////////////////////////////////////////////////////////////

const img2 = React.createElement('img', { src: pics[coinToss() === 'heads' ? 'kitty' : 'doggy'], width: '125px' });

ReactDOM.render(img2, document.getElementById('el7'));

////////////////////////////////////////////////////////////////////////
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
// expression goes here:
React.createElement(
  'li',
  null,
  person
));

// ReactDOM.render goes here:
ReactDOM.render(React.createElement(
  'ul',
  null,
  peopleLis
), document.getElementById('el8'));

////////////////////////////////////////////////////////////////////////

const peopleLis2 = people.map((person, i) =>
// expression goes here:
React.createElement(
  'li',
  { key: 'person_' + i },
  person
));

// ReactDOM.render goes here:
ReactDOM.render(React.createElement(
  'ul',
  null,
  peopleLis2
), document.getElementById('el9'));

////////////////////////////////////////////////////////////////////////
class ToniComponent extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'Hello world'
    );
  }
};

React.createElement(ToniComponent, null);

ReactDOM.render(React.createElement(ToniComponent, null), document.getElementById("el10"));

////////////////////////////////////////////////////////////////////////

class QuoteMaker extends React.Component {
  render() {
    return React.createElement(
      'blockquote',
      null,
      React.createElement(
        'p',
        null,
        'What is important now is to recover our senses.'
      ),
      React.createElement(
        'cite',
        null,
        React.createElement(
          'a',
          { target: '_blank', href: 'https://en.wikipedia.org/wiki/Susan_Sontag' },
          'Susan Sontag'
        )
      )
    );
  }
};

ReactDOM.render(React.createElement(QuoteMaker, null), document.getElementById('el11'));

////////////////////////////////////////////////////////////////////////

const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg',
  width: "250px"
};

// Component class starts here:
class Owl extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        owl.title
      ),
      React.createElement('img', { src: owl.src, alt: owl.title, width: owl.width })
    );
  }
}

ReactDOM.render(React.createElement(Owl, null), document.getElementById('el12'));

////////////////////////////////////////////////////////////////////////
const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    let Answer;
    if (fiftyFifty) {
      Answer = "Tonight I'm going out WOOO";
    } else {
      Answer = "Tonight I'm going to bed WOOO";
    }

    return React.createElement(
      'h1',
      null,
      Answer
    );
  }
}

ReactDOM.render(React.createElement(TonightsPlan, null), document.getElementById('el13'));

////////////////////////////////////////////////////////////////////////
class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return React.createElement(
      'button',
      { onClick: this.scream },
      'AAAAAH!'
    );
  }
}

ReactDOM.render(React.createElement(Button, null), document.getElementById('el14'));

////////////////////////////////////////////////////////////////////////

ReactDOM.render(React.createElement(Monkata, null), document.getElementById('el15'));
