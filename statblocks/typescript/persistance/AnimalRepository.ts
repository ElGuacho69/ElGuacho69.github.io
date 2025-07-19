import { Animal } from '../logic/model/Animal';
import { animalJsonToAnimal } from './AnimalMapper';

//Animal imports
import { dog } from '../../animals/dog';
import { rat } from '../../animals/rat';
import { slumbear } from '../../animals/slumbear';

export function getAllAnimals(): Animal[] {
	return [
		animalJsonToAnimal(dog),
		animalJsonToAnimal(rat),
		animalJsonToAnimal(slumbear)
	];
}
