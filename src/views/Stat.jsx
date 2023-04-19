const React = require('react');

module.exports = function Stat({ userStat }) {
  return (
    <section className="statistic">
      <ul className="progressList">
        {userStat.map((el) => (
          <li key={el.id}>
            <label htmlFor={`progress${el.id}`}>
              {el.Deck.title}
              <progress
                id={`progress${el.id}`}
                className="progress"
                max={20}
                value={0}
              />
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};
