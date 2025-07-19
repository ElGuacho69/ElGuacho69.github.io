import { Animal } from '../logic/model/Animal';
import { Section } from '../logic/model/Section';
export function getAllAnimals(): Animal[] {
	return  [ new Animal('Perro', 'pequeño', 11, 4, 40, 11, 12, 12, 11, 16, 12, "Percepción +3, sigilo +4"
						, 1/8, 2, [new Section()]) ];
}
