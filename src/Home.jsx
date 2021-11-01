import './App.css';

const Home = (props) => {
  const { date, setDate, fetchChartByDate } = props;

  return (
    <section className="home">
      <h1 className="header-start">
        Vilken låt toppade listorna den dagen du föddes?
      </h1>
      <input
        type="number"
        autoComplete="off"
        id="date"
        maxLength={6}
        placeholder="ÅÅMMDD"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={() => fetchChartByDate(date)}>Kolla!</button>
    </section>
  );
};

export default Home;
