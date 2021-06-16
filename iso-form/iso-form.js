export function isoForm(words) {
  const forms = new Map();

  words.forEach((word) => {
    const form = positions(word);

    const key = JSON.stringify(form);
    const ws = forms.get(key) || [];
    forms.set(key, ws.concat(word));
  });
  return (Array.from(forms.values()))
}

export function positions(word) {
  const charArray = word.split('');

  const letters = new Map();
  charArray.forEach((character, pos) => {
    const current = letters.get(character) || []
    letters.set(character, current.concat([ pos ]))
  });
  return Array.from(letters.values())
}
