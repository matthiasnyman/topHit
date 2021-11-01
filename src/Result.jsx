import React from 'react';
import arrow from './assets/arrow.svg';
import Popup from './Popup';

const Result = (props) => {
  const { img, title, artist } = props.content;
  const [shown, setShown] = React.useState(false);
  const [createdLink, setCreatedLink] = React.useState('');

  return (
    <div className="result">
      <img className="album-cover" src={img} alt="album cover" />
      <section className="album-info">
        <h2
          className="album-header"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <h3
          className="album-artist"
          dangerouslySetInnerHTML={{ __html: artist }}
        />

        <button onClick={() => setShown(true)}>
          Berätta för dina kompisar
        </button>

        <button id="back-button" onClick={() => props.clear()}>
          <img alt="back arrow" src={arrow} />
          Testa ett annat datum
        </button>
      </section>
      <Popup
        shown={shown}
        setShown={setShown}
        createdLink={createdLink}
        setCreatedLink={setCreatedLink}
      />
    </div>
  );
};

export default Result;
