/* eslint-disable react/no-array-index-key */
export default function RatingStar({ rate, padding = 'pb-5', size }) {
  const yellowStar = new Array(rate).fill('');
  const greyStar = new Array(5 - rate).fill('');

  const stars = `${size} ${padding} flex`;

  return (
    <div className={stars}>
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
