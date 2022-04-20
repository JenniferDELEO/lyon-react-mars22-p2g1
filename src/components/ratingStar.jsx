export default function RatingStar({ rate }) {
  const yellowStar = new Array(rate).fill('');
  const greyStar = new Array(5 - rate).fill('');

  function uniqId() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    <div className="text-xl pb-5 flex">
      {yellowStar.map(() => (
        <p key={uniqId()} className="text-yellow-400">
          ★
        </p>
      ))}
      {greyStar.map(() => (
        <p key={uniqId()} className="text-slate-400">
          ★
        </p>
      ))}
    </div>
  );
}
