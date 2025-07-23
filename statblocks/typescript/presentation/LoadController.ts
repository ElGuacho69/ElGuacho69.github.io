import { loadAnimals } from '../logic/AnimalService';
import { setUpObservers } from './LockedStatblocksController';
document.addEventListener('DOMContentLoaded', async () => {
	await loadAnimals();
	setUpObservers();
});
