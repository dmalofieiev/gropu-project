const React = require('react');

module.exports = function Stat({ userStat }) {
  return (
    <section className="statistic">
      <ul className="progressList">
        {userStat.map((el) => (
          <li className="stat-li" key={el.id}>
            <label className="stat-label" htmlFor={`progress${el.id}`}>
              <p className="stat-p">{el.title}</p>
              <p className="from">
                {el.trueCardCount.length}/{el.cardCount.length}
              </p>
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
