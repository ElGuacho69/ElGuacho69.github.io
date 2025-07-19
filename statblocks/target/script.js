(() => {
  // typescript/logic/model/Templates.ts
  var statblockTemplate = `<div class="c-statblock" id="dog">
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
								sectionsSocket
							</div>
						</div>`;
  var sectionTemplate = `
	<span class="c-statblock__section-name g--bold">titleSocket</span>
	<hr class="c-statblock__separator c-statblock__separator--thin" />
	<div class="g--black-text">
		textSocket
	</div>
`;
  var boldTemplate = `<span class="g--bold">boldTextSocket</span>`;
  var italicTemplate = `<span class="g--italic">italicTextSocket</span>`;
  var breakTemplate = "<br/>";

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
      let template = statblockTemplate;
      template = template.replace("nameSocket", this.name).replace("sizeSocket", this.size).replace("armorClassSocket", this.armorClass.toString()).replace("hitPointsSocket", this.hitPoints.toString()).replace("speedSocket", this.speed.toString()).replace("strengthSocket", this.strength.toString()).replace("strengthModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.strength))).replace("dexteritySocket", this.dexterity.toString()).replace("dexterityModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.dexterity))).replace("constitutionSocket", this.constitution.toString()).replace("constitutionModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.constitution))).replace("intelligenceSocket", this.intelligence.toString()).replace("intelligenceModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.intelligence))).replace("wisdomSocket", this.wisdom.toString()).replace("wisdomModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.wisdom))).replace("charismaSocket", this.charisma.toString()).replace("charismaModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.charisma))).replace("skillsSocket", this.skills).replace("challengeRatingSocket", this.getFormattedChallengeRating()).replace("proficiencyBonusSocket", this.proficiencyBonus.toString());
      let sectionHtml = "";
      for (let i = 0; i < this.sections.length; i++) {
        sectionHtml += this.sections[i].toHtml();
        if (i != this.sections.length - 1) {
          sectionHtml += breakTemplate;
        }
      }
      template = template.replace("sectionsSocket", sectionHtml);
      return template;
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
    sectionTexts;
    constructor(title, sectionTexts) {
      this.title = title;
      this.sectionTexts = sectionTexts;
    }
    toHtml() {
      let template = sectionTemplate;
      template = template.replace("titleSocket", this.title);
      let fullSectionText = "";
      this.sectionTexts.forEach((sectionText) => {
        sectionText = this.replaceAllByTemplate(sectionText, "*", boldTemplate, "boldTextSocket");
        sectionText = this.replaceAllByTemplate(sectionText, "_", italicTemplate, "italicTextSocket");
        fullSectionText += sectionText;
      });
      template = template.replace("textSocket", fullSectionText);
      return template;
    }
    replaceByTemplate(originalString, delimiter, template, socketName) {
      let splittedString = originalString.split(delimiter);
      let templateArray = template.split(socketName);
      splittedString.splice(1, 0, templateArray[0]);
      splittedString.splice(3, 0, templateArray[1]);
      return splittedString.join("");
    }
    replaceAllByTemplate(originalString, delimiter, template, socketName) {
      while (originalString.split(delimiter).length != 1) {
        originalString = this.replaceByTemplate(originalString, delimiter, template, socketName);
      }
      return originalString;
    }
  };

  // typescript/persistance/AnimalMapper.ts
  function animalJsonToAnimal(json) {
    const JSONsections = json.sections;
    const sections = [];
    JSONsections.forEach((section) => {
      sections.push(new Section(section.title, section.texts));
    });
    const animal = new Animal(
      json.name,
      json.size,
      json.armorClass,
      json.hitPoints,
      json.speed,
      json.strength,
      json.dexterity,
      json.constitution,
      json.intelligence,
      json.wisdom,
      json.charisma,
      json.skills,
      json.challengeRating,
      json.proficiencyBonus,
      sections
    );
    return animal;
  }

  // animals/dog.ts
  var dog = {
    "name": "Perro",
    "size": "peque\xF1o",
    "armorClass": 11,
    "hitPoints": 4,
    "speed": 40,
    "strength": 11,
    "dexterity": 12,
    "constitution": 12,
    "intelligence": 11,
    "wisdom": 16,
    "charisma": 12,
    "skills": "Percepci\xF3n +3, sigilo +4",
    "challengeRating": 1 / 8,
    "proficiencyBonus": 2,
    "sections": [
      {
        "title": "Rasgos",
        "texts": ["*Olfato y o\xEDdo agudos.* El perro tiene ventaja en las tiradas de percepci\xF3n basadas en olfato y o\xEDdo."]
      },
      {
        "title": "Acciones",
        "texts": ["*Mordisco.* _Ataque cuerpo a cuerpo:_ +2 a dar, sin alcance, un objetivo. _Da\xF1o:_ 2d4+2 perforante. El objetivo debe superar una tirada de salvaci\xF3n de fuerza CD 11 o caer al suelo."]
      }
    ]
  };

  // animals/rat.ts
  var rat = {
    "name": "Rata",
    "size": "min\xFAsculo",
    "armorClass": 10,
    "hitPoints": 1,
    "speed": 20,
    "strength": 2,
    "dexterity": 11,
    "constitution": 9,
    "intelligence": 11,
    "wisdom": 16,
    "charisma": 12,
    "skills": "Visi\xF3n en la oscuridad 10 ft.",
    "challengeRating": 0,
    "proficiencyBonus": 2,
    "sections": [
      {
        "title": "Rasgos",
        "texts": ["*Olfato agudo.* La rata tiene ventaja en las tiradas de percepci\xF3n basadas en olfato."]
      },
      {
        "title": "Acciones",
        "texts": ["*Mordisco.* _Ataque cuerpo a cuerpo:_ +0 a dar, sin alcance, un objetivo. _Da\xF1o:_ 1 perforante."]
      }
    ]
  };

  // typescript/persistance/AnimalRepository.ts
  function getAllAnimals() {
    return [
      animalJsonToAnimal(dog),
      animalJsonToAnimal(rat)
    ];
  }

  // typescript/logic/AnimalService.ts
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
