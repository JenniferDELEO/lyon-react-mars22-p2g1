export default function BoxHeader({ displayForm, getBoxInfo, display }) {
  return (
    <div className={!display ? 'mt-4 flex flex-col items-center' : 'hidden'}>
      <div className="text-center flex flex-col justify-around font-bold text-black h-16 w-4/6">
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
