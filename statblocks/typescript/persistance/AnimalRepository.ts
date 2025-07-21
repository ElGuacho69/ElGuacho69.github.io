import { Animal } from '../logic/model/Animal';
import { animalJsonToAnimal } from './AnimalMapper';

export async function getAllAnimals(): Promise<Animal[]> {
	const list: any = await fetchJson('/statblocks/animals/_list.json');
	const jsonArray: any[] = [];
	for(let i: number = 0; i < list.animals.length; i++) {
		let animal = list.animals[i];
		jsonArray.push(await fetchJson('/statblocks/animals/' + animal + '.json'))
	}
	const animalArray: Animal[] = jsonArray.map(animalJsonToAnimal);
	return animalArray;
}

async function fetchJson(url: string): Promise<any> {
	const response = await fetch(url);
	return await response.json();
}
