const dog = {
	"name": "Perro",
	"size": "pequeño",
	"armorClass": 11,
	"hitPoints": 4,
	"speed": 40,
	"strength": 11,
	"dexterity": 12,
	"constitution": 12,
	"intelligence": 3,
	"wisdom": 12,
	"charisma": 11,
	"skills": "Percepción +3, sigilo +4",
	"challengeRating": 1/8,
	"proficiencyBonus": 2,
	"sections": [
		{
			"title": "Rasgos",
			"texts": ["*Olfato y oído agudos.* El perro tiene ventaja en las tiradas de percepción basadas en olfato y oído."]
		},
		{
			"title": "Acciones",
			"texts": ["*Mordisco.* _Ataque cuerpo a cuerpo:_ +2 a dar, sin alcance, un objetivo. _Daño:_ 2d4+2 perforante. El objetivo debe superar una tirada de salvación de fuerza CD 11 o caer al suelo."]
		}
	]
};
export { dog };
