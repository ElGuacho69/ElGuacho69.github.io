(() => {
  // typescript/logic/model/Statblock.ts
  var template = `<div class="c-statblock" id="dog">
							<div class="c-statblock__name g--black-text g--bold">nameSocket</div>
							<p class="g--black-text g--italic">Animal, sizeSocket</p>
							<hr class="c-statblock__separator" />
							<div>
								<span class="g--bold">Clase de armadura(CA)</span> armorClassSocket
							</div>
							<div>
								<span class="g--bold">Puntos de vida</span> hitPointsSocket
							</div>
							<div>
								<span class="g--bold">Velocidad</span> speedSocket ft.
							</div>
							<hr class="c-statblock__separator" />
							<div class="l-stat-container">
								<span class="l-stat">
									<div>
										<div class="g--bold">STR</div>
									</div>
									<div>strengthSocket(strengthModifierSocket)</div>
								</span>
								<span class="l-stat">
									<div>
										<div class="g--bold">DEX</div>
									</div>
									<div>dexteritySocket(dexterityModifierSocket)</div>
								</span>
								<span class="l-stat">
									<div>
										<div class="g--bold">CON</div>
									</div>
									<div>constitutionSocket(constitutionModifierSocket)</div>
								</span>
								<span class="l-stat">
									<div>
										<div class="g--bold">INT</div>
									</div>
									<div>intelligenceSocket(intelligenceModifierSocket)</div>
								</span>
								<span class="l-stat">
									<div>
										<div class="g--bold">WIS</div>
									</div>
									<div>wisdomSocket(wisdomModifierSocket)</div>
								</span>
								<span class="l-stat">
									<div>
										<div class="g--bold">CHA</div>
									</div>
									<div>charismaSocket(charismaModifierSocket)</div>
								</span>

							</div>
							<hr class="c-statblock__separator" />
							<div class="g--margin-vertical-3">
								<span class="g--bold">Habilidades</span> skillsSocket
							</div>
							<div class="g--margin-vertical-3">
								<span class="g--bold">Valor de desaf\xEDo(VD)</span> challengeRatingSocket
							</div>
							<div class="g--margin-vertical-3">
								<span class="g--bold">Bonificador por competencia</span> +proficiencyBonusSocket
							</div>
							<hr class="c-statblock__separator" />
							<br />
							<div class="abilities">
								<span class="c-statblock__section-name g--bold">Rasgos</span>
								<hr class="c-statblock__separator c-statblock__separator--thin" />
								<div class="g--black-text">
									<span class="g--bold">Olfato y o\xEDdo agudos.</span> El perro tiene ventaja en las tiradas
									de percepci\xF3n basadas en olfato y o\xEDdo.
								</div>
								<br />
								<span class="c-statblock__section-name g--bold">Acciones</span>
								<hr class="c-statblock__separator c-statblock__separator--thin" />
								<div class="g--black-text">
									<span class="g--bold">Mordisco.</span><span class="g--italic"> Ataque cuerpo a cuerpo:</span> +2 a
									dar, sin alcance, un objetivo. <span class="g--italic">Da\xF1o:</span>
									2d4+2 perforante. El objetivo debe superar una tirada de salvaci\xF3n
									de fuerza CD 11 o caer al suelo.
								</div>
							</div>
						</div>`;

  // typescript/logic/model/Animal.ts
  var Animal = class _Animal {
    name;
    size;
    armorClass;
    hitPoints;
    speed;
    strength;
    dexterity;
    constitution;
    intelligence;
    wisdom;
    charisma;
    skills;
    challengeRating;
    proficiencyBonus;
    sections;
    constructor(name, size, armorClass, hitPoints, speed, strength, dexterity, constitution, intelligence, wisdom, charisma, skills, challengeRating, proficiencyBonus, sections) {
      this.name = name;
      this.size = size;
      this.armorClass = armorClass;
      this.hitPoints = hitPoints;
      this.speed = speed;
      this.strength = strength;
      this.dexterity = dexterity;
      this.constitution = constitution;
      this.intelligence = intelligence;
      this.wisdom = wisdom;
      this.charisma = charisma;
      this.skills = skills;
      this.challengeRating = challengeRating;
      this.proficiencyBonus = proficiencyBonus;
      this.sections = sections;
    }
    toHtml() {
      return template.replace("nameSocket", this.name).replace("sizeSocket", this.size).replace("armorClassSocket", this.armorClass.toString()).replace("hitPointsSocket", this.hitPoints.toString()).replace("speedSocket", this.speed.toString()).replace("strengthSocket", this.strength.toString()).replace("strengthModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.strength))).replace("dexteritySocket", this.dexterity.toString()).replace("dexterityModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.dexterity))).replace("constitutionSocket", this.constitution.toString()).replace("constitutionModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.constitution))).replace("intelligenceSocket", this.intelligence.toString()).replace("intelligenceModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.intelligence))).replace("wisdomSocket", this.wisdom.toString()).replace("wisdomModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.wisdom))).replace("charismaSocket", this.charisma.toString()).replace("charismaModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.charisma))).replace("skillsSocket", this.skills).replace("challengeRatingSocket", this.getFormattedChallengeRating()).replace("proficiencyBonusSocket", this.proficiencyBonus.toString());
    }
    getFormattedChallengeRating() {
      const cr = this.challengeRating;
      if (cr == 0.125) {
        return "1/8";
      } else if (cr == 0.25) {
        return "1/4";
      } else if (cr == 0.5) {
        return "1/2";
      } else {
        return cr.toString();
      }
    }
    static scoreToModifier(score) {
      return Math.floor((score - 10) / 2);
    }
    static formatModifier(modifier) {
      if (modifier >= 0) {
        return "+" + modifier.toString();
      } else {
        return modifier.toString();
      }
    }
  };

  // typescript/logic/model/Section.ts
  var Section = class {
    title;
    sectionTitles;
    sectionTexts;
    constructor() {
      this.title = "Rasgos";
      this.sectionTitles = ["Olfato y o\xEDdo agudos."];
      this.sectionTexts = ["El perro tiene ventaja en las tiradas de percepci\xF3n basadas en olfato y o\xEDdo."];
    }
  };

  // typescript/persistance/AnimalRepository.ts
  function getAllAnimals() {
    return [new Animal(
      "Perro",
      "peque\xF1o",
      11,
      4,
      40,
      11,
      12,
      12,
      11,
      16,
      12,
      "Percepci\xF3n +3, sigilo +4",
      1 / 8,
      2,
      [new Section()]
    )];
  }

  // typescript/logic/animal/AnimalService.ts
  function loadAnimals() {
    let animals = getAllAnimals();
    const statblockContainer = document.getElementById("statblock-container");
    animals.forEach((animal) => {
      console.log(animal.toHtml());
      statblockContainer.insertAdjacentHTML("beforeend", animal.toHtml());
    });
  }

  // typescript/presentation/LoadController.ts
  document.addEventListener("DOMContentLoaded", () => {
    loadAnimals();
  });
})();
