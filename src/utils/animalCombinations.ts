export const COMBINATIONS = {
  'cat-dog': 'bark bark',
  'bird-dog': 'trina barks',
  'dog-lion': 'bark roar',
  'cat-lion': 'roars'
} as const;

export function checkAnimalCombination(animals: string[]): string | null {
  if (animals.length !== 2) return null;
  const sortedAnimals = [...animals].sort().join('-');
  return COMBINATIONS[sortedAnimals as keyof typeof COMBINATIONS] || null;
}