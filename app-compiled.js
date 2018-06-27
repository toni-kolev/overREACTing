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

/////////////

ReactDOM.render(React.createElement(
  'h1',
  null,
  2 + 3
), document.getElementById('el2'));

////////////

const theBestString = 'tralalalala i am da best';

ReactDOM.render(React.createElement(
  'h1',
  null,
  theBestString
), document.getElementById('el3'));

///////

var goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

var gooseImg = React.createElement('img', { src: goose });

ReactDOM.render(gooseImg, document.getElementById('el4'));

/////////////////////

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
