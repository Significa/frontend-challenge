export default function isCharacterKeyPress(
  evt: React.KeyboardEvent<HTMLInputElement>
) {
  if (evt.key.length > 1) {
    return false;
  }
  return true;
}
