export default function RatingStar() {
  const rate = Math.floor(Math.random() * (6));
  if (rate === 5) {
    return (
      <div className="text-lg pb-5 flex">
        <p className="text-yellow-400">★</p>
        <p className="text-yellow-400">★</p>
        <p className="text-yellow-400">★</p>
        <p className="text-yellow-400">★</p>
        <p className="text-yellow-400">★</p>
      </div>
    );
  }
  if (rate === 4) {
    return (
      <div className="text-lg pb-5 flex">
        <p className="text-yellow-400">★</p>
        <p className="text-yellow-400">★</p>
        <p className="text-yellow-400">★</p>
        <p className="text-yellow-400">★</p>
        <p className="text-slate-400">★</p>
      </div>
    );
  }
  if (rate === 3) {
    return (
      <div className="text-lg pb-5 flex">
        <p className="text-yellow-400">★</p>
        <p className="text-yellow-400">★</p>
        <p className="text-yellow-400">★</p>
        <p className="text-slate-400">★</p>
        <p className="text-slate-400">★</p>
      </div>
    );
  }
  if (rate === 2) {
    return (
      <div className="text-lg pb-5 flex">
        <p className="text-yellow-400">★</p>
        <p className="text-yellow-400">★</p>
        <p className="text-slate-400">★</p>
        <p className="text-slate-400">★</p>
        <p className="text-slate-400">★</p>
      </div>
    );
  }
  if (rate === 1) {
    return (
      <div className="text-lg pb-5 flex">
        <p className="text-yellow-400">★</p>
        <p className="text-slate-400">★</p>
        <p className="text-slate-400">★</p>
        <p className="text-slate-400">★</p>
        <p className="text-slate-400">★</p>
      </div>
    );
  }
  if (rate === 0) {
    return (
      <div className="text-lg pb-5 flex">
        <p className="text-slate-400">★</p>
        <p className="text-slate-400">★</p>
        <p className="text-slate-400">★</p>
        <p className="text-slate-400">★</p>
        <p className="text-slate-400">★</p>
      </div>
    );
  }
}
