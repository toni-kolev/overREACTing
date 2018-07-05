//import React from './vendor/react';
//import ReactDOM from './vendor/react-dom';
import { Monkata } from './MonkataComp';

ReactDOM.render(<h1>Your name HERE!!</h1>, document.getElementById('app'));

var myDiv = (
    <div className="big">I AM A BIG DIV2</div>
  );
  
ReactDOM.render(myDiv, document.getElementById('el1'));

////////////////////////////////////////////////////////////////////////

ReactDOM.render(
    <h1>{2 + 3}</h1>,
    document.getElementById('el2')
  );

////////////////////////////////////////////////////////////////////////

  const theBestString = 'tralalalala i am da best';
  
  ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('el3'));


////////////////////////////////////////////////////////////////////////

  var goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';
  
  var gooseImg = (
    <img src={goose} />
  );
  
  ReactDOM.render(gooseImg, document.getElementById('el4'));

////////////////////////////////////////////////////////////////////////

function makeDoggy(e) {
    // Call this extremely useful function on an <img>.
    // The <img> will become a picture of a doggy.
    e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
  }
  
  const kitty = (
      <img
         width = "200px"
         onClick={makeDoggy}
         src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
         alt="kitty" />
  );
  
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
    img = <img src={pics.kitty} width="100px"/>;
  } else {
    img = <img src={pics.doggy} width="100px" />;
  }
  
  ReactDOM.render(img, document.getElementById('el6'));


////////////////////////////////////////////////////////////////////////
  
const img2 = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} width="125px"/>;
  
  ReactDOM.render(
      img2, 
      document.getElementById('el7')
  );

////////////////////////////////////////////////////////////////////////
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
	<li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>,document.getElementById('el8'));


////////////////////////////////////////////////////////////////////////

const peopleLis2 = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis2}</ul>, document.getElementById('el9'));


////////////////////////////////////////////////////////////////////////
class ToniComponent extends React.Component {
  render() {
    return <h1>Hello world</h1>
  };
};

<ToniComponent />

ReactDOM.render(
  <ToniComponent />,
  document.getElementById("el10")
);


////////////////////////////////////////////////////////////////////////

class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          What is important now is to recover our senses.
        </p>
        <cite>
          <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">Susan Sontag</a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('el11')
);

////////////////////////////////////////////////////////////////////////

const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg',
  width: "250px"
};

// Component class starts here:
class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title} width={owl.width}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Owl />,
  document.getElementById('el12')
);

////////////////////////////////////////////////////////////////////////
const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    let Answer;
    if (fiftyFifty) {
      Answer = "Tonight I'm going out WOOO"
    } else {
      Answer = "Tonight I'm going to bed WOOO"
    }
    
    return <h1>{Answer}</h1>
  }
}

ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('el13')
);

////////////////////////////////////////////////////////////////////////
class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(
  <Button />,
  document.getElementById('el14')
);

////////////////////////////////////////////////////////////////////////

ReactDOM.render(<Monkata />, document.getElementById('el15'));