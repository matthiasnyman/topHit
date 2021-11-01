import './App.css';
import React from 'react';
import Home from './Home';
import Result from './Result';

const apiBaseUrl = 'https://www.sverigetopplistan.se/api/netdata/ghj001.mbr';

const App = () => {
  const [date, setDate] = React.useState('');
  const [content, setContent] = React.useState();

  const fetchChartByDate = (date) => {
    if (date) {
      const formatDate = `${date.slice(0, 2)}-${date.slice(2, 4)}-${date.slice(
        4,
        6
      )}`;
      const week = getWeekNumber(new Date(formatDate));
      let year = week[0];
      let weekNo = week[1];

      if (year < 1974) {
        alert('sorry but you are to old...');
      }
      if (year < 1994 && weekNo % 2 === 0) {
        weekNo = weekNo - 1;
      }

      fetch(apiBaseUrl + `/chart.json?liid=41&dspy=${year}&dspp=${weekNo}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let values = {
            title: data.chart[0].tit,
            artist: data.chart[0].arso,
            img: 'https://www.sverigetopplistan.se/img' + data.chart[0].kva,
          };
          setContent(values);
        })
        .catch((error) => console.error('FETCH ERROR:', error));
    }
  };

  const clear = () => {
    setDate();
    setContent();
  };

  return (
    <section>
      {!content ? (
        <Home
          fetchChartByDate={fetchChartByDate}
          date={date}
          setDate={setDate}
        />
      ) : (
        <Result content={content} clear={clear} />
      )}
    </section>
  );
};

const getWeekNumber = (d) => {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return [d.getUTCFullYear(), weekNo];
};

export default App;
