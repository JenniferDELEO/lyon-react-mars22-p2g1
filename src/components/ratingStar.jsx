/* eslint-disable react/no-array-index-key */
export default function RatingStar({ rate, padding, size }) {
  const yellowStar = new Array(rate).fill('');
  const greyStar = new Array(5 - rate).fill('');

  const class1 = `${size} ${padding} flex`;

  return (
    <div className={class1}>
      {yellowStar.map((_, i) => (
        <p key={i} className="text-yellow-400">
          ★
        </p>
      ))}
      {greyStar.map((_, i) => (
        <p key={i} className="text-slate-400">
          ★
        </p>
      ))}
    </div>
  );
}
