export function uuid () {
  return Math.random().toString(16).slice(2)
}

export function articleImage() {
  const images = [
    'bible.jpg',
    'coding.jpg',
    'confidence.jpg',
    'dogs.png', 
    'nature.jpg',
    'prayer.jpg',
    'priest.jpg',
  ]
  return images[Math.floor(Math.random() * images.length)];
}