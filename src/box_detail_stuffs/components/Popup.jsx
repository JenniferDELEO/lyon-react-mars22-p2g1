export default function Popup({
  popup,
  close,
  auteur,
  titre
}) {
  const text = ['', ''];
  if (popup === 'borrow') {
    text[0] = 'emprunté';
    text[1] = 'Bonne lecture !!';
  }
  if (popup === 'delete') {
    text[0] = 'supprimé';
    text[1] = 'Nous vous remercions de tenir les stocks à jour.';
  }
  if (popup === 'depot') {
    text[0] = 'deposé';
    text[1] = 'Nous vous remercions de faire vivre les BAL.';
  }

  return (
    <div className="popup-bg flex justify-center z-50">
      <div className="popup small flex flex-col items-center justifty-between text-xs w-full">
        <p onClick={close} className="quit-btn text-red-500 mr-2 mt-1 self-end cursor-pointer">X</p>
        <p>Vous avez {text[0]} :</p>
        <p>'{titre}' de '{auteur}'</p>
        <p>{text[1]}</p>
      </div>
    </div>
  );
}
