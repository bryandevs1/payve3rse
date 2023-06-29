import React from 'react';
import products from './Wordlist';

class VoiceFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchVoices();
  }

  fetchVoices = () => {
    const { data } = products;

    data.forEach((item) => {
      const { word, meaning } = item;
      const utterance = new SpeechSynthesisUtterance(meaning);
      item.voice = utterance; // Store the utterance in the data item

      // Add click event listener to speak the word
      item.speak = () => {
        speechSynthesis.speak(utterance);
      };
    });

    this.setState({ data });
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        {data.map((item) => (
          <div key={item.word} onClick={item.speak}>
            <strong>{item.word}</strong>: {item.meaning}
          </div>
        ))}
      </div>
    );
  }
}

export default VoiceFetcher;
