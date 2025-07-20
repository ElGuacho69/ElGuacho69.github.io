const pig = {
	"name": "Cerdo",
	"size": "mediano",
	"armorClass": 11,
	"hitPoints": 11,
	"speed": 25,
	"strength": 13,
	"dexterity": 10,
	"constitution": 12,
	"intelligence": 3,
	"wisdom": 7,
	"charisma": 4,
	"skills": "Percepción +3",
	"challengeRating": 1/8,
	"proficiencyBonus": 2,
	"sections": [
		{
			"title": "Rasgos",
			"texts": [
				"*Olfato agudo.* El cerdo tiene ventaja en las tiradas de percepción basadas en olfato.",
				"*Carga.* Si el cerdo se mueve al menos 20 ft. en linea recta y golpea a un objetivo en el mismo turno, este recibe 1d4 de daño extra y debe superar una tirada de salvación CD 11 o caer al suelo."
			]
		},
		{
			"title": "Acciones",
			"texts": ["*Placaje.* _Ataque cuerpo a cuerpo:_ +3 a dar, sin alcance, un objetivo. _Daño:_ 1d4+1 contundente."]
		}
	]
};
export { pig };
