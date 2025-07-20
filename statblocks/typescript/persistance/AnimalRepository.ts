import { Animal } from '../logic/model/Animal';
import { animalJsonToAnimal } from './AnimalMapper';

//Animal imports
import { dog } from '../../animals/dog';
import { rat } from '../../animals/rat';
import { ferret } from '../../animals/ferret';
import { pig } from '../../animals/pig';
import { giant_rat } from '../../animals/giant_rat';
import { slumbear } from '../../animals/slumbear';
import { crabbrain } from '../../animals/crabbrain';
export function getAllAnimals(): Animal[] {
	return [
		animalJsonToAnimal(dog),
		animalJsonToAnimal(rat),
		animalJsonToAnimal(ferret),
		animalJsonToAnimal(pig),
		animalJsonToAnimal(giant_rat),
		animalJsonToAnimal(slumbear),
		animalJsonToAnimal(crabbrain)
	];
}
