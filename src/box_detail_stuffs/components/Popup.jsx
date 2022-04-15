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
    <div className="popup-bg text-sm">
      <div className="popup small">
        <p onClick={close} className="quit-btn cursor-pointer">X</p>
        <p>Vous avez {text[0]} :</p>
        <p>{titre} de {auteur}</p>
        <p>{text[1]}</p>
      </div>
    </div>
  );
}
