const React = require('react');

module.exports = function Stat({ allDecks }) {
  return (
    <section className="statistic">
      <ul className="progressList">
        {allDecks.map((el) => (
          <li key={el.id}>
            <label htmlFor={`progress${el.id}`}>
              {el.title}
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
