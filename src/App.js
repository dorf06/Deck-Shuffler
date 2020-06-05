import React, { Component } from 'react';
import { DetailsList, DefaultButton } from '@fluentui/react';

class App extends Component {

    constructor (props) {
        super(props);

        this.state = {
            deck: makeDeck()
        }

        makeDeck('hearts');
    }

    shuffleDeck(deck) {
        let newDeck = deck.reverse();

        this.setState({
            deck: newDeck
        })
    }

    render() {
        console.log(this.state.deck);

        return(
            <>
                <h1>Testing</h1>
                <DefaultButton text="Shuffle" onClick={() => this.shuffleDeck(this.state.deck)}/>
                <DetailsList items={this.state.deck} />
            </>
        );
    }
}

function makeDeck() {
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];

    let deck = [];

    suits.map(suit => 
        [...new Array(13).keys()].map((card, index) => 
            deck.push(
                {
                    suit: suit,
                    value: index + 1
                }
            )    
        )    
    );

    return deck;
}

export default App;