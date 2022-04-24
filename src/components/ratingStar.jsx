export default function RatingStar({ rate, id }) {
  console.log(typeof id);
  const yellowStar = new Array(rate).fill('');
  const greyStar = new Array(5 - rate).fill('');
  return (
    <div className="text-xl pb-5 flex">
      {yellowStar.map(() => (
        <p key={id} className="text-yellow-400">
          ★
        </p>
      ))}
      {greyStar.map(() => (
        <p key={id} className="text-slate-400">
          ★
        </p>
      ))}
    </div>
  );
}
