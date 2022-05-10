export default function BoxHeader({ displayForm, getBoxInfo }) {
  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="text-center flex flex-col justify-around border-black border font-bold text-white color-bg rounded-xl h-16 w-4/6">
        <h3>{getBoxInfo.adresse}</h3>
        <p>
          {getBoxInfo.quantity}
          {' '}
          livre(s)
        </p>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={displayForm}
          className="color-bg hover:bg-blue-700 text-1xl text-white font-bold py-2 px-6 rounded m-5 border-black border transition-all duration-1000"
        >
          deposer un livre
        </button>
      </div>
    </div>
  );
}
