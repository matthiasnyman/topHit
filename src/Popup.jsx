import close from './assets/close.svg';

const Popup = (props) => {
  const { shown, setShown, createdLink, setCreatedLink } = props;
  return (
    <section className={shown ? 'popup-form' : 'hidden'}>
      {!createdLink ? (
        <div className="form">
          <img
            alt="close"
            className="close"
            src={close}
            onClick={() => setShown(false)}
          />
          <p>Vad heter du</p>
          <textarea id="name" type="textarea" cols="40" rows="5" />
          <button
            onClick={() =>
              setCreatedLink(
                'https://dagenshit.se/share.html?name=olle&date=1976-07-22'
              )
            }
          >
            Skapa länk
          </button>
        </div>
      ) : (
        <div className="form">
          <img
            alt="close"
            className="close"
            src={close}
            onClick={() => setShown(false)}
          />
          <p
            onClick={() => {
              navigator.clipboard.writeText(createdLink);
            }}
          >
            {createdLink}
          </p>
        </div>
      )}
    </section>
  );
};

export default Popup;
