const React = require('react');

module.exports = function Stat({ userStat }) {
  return (
    <section className="statistic">
      <ul className="progressList">
        {userStat.map((el) => (
          <li key={el.id}>
            <label htmlFor={`progress${el.id}`}>
              {el.title}
              <progress
                id={`progress${el.id}`}
                className="progress"
                value={el.trueCardCount.length}
                max={el.cardCount.length}
              />
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};
