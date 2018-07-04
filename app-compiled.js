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
