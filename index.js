const subjects = ['I', 'You', 'We', 'They'];
const verbs = ['eat', 'sleep', 'run', 'play'];
const objects = ['apples', 'books', 'games', 'music'];

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateRandomSentence() {
  const subject = getRandomElement(subjects);
  const verb = getRandomElement(verbs);
  const object = getRandomElement(objects);

  const sentence = `${subject} ${verb} ${object}.`;
  return sentence;
}

const generateBtn = document.getElementById('generateBtn');
const output = document.getElementById('output');

generateBtn.addEventListener('click', () => {
  const randomSentence = generateRandomSentence();
  output.textContent = randomSentence;
});
