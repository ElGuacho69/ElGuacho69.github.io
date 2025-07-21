(() => {
  // statblocks/typescript/logic/model/Templates.ts
  var statblockTemplate = `<div class="c-statblock" id="idSocket">
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
							<div class="c-statblock__unlock-condition">Se desbloquea a nivel neededLevelSocket</div>
						</div>`;
  var sectionTemplate = `
	<span class="c-statblock__section-name g--bold">titleSocket</span>
	<hr class="c-statblock__separator c-statblock__separator--thin" />
	<div class="g--black-text">
		textSocket
	</div>
`;
  var navbarItemTemplate = `<a href="#idSocket" class="c-navbar__item">nameSocket</a>`;
  var boldTemplate = `<span class="g--bold">boldTextSocket</span>`;
  var italicTemplate = `<span class="g--italic">italicTextSocket</span>`;
  var breakTemplate = "<br/>";

  // statblocks/typescript/logic/model/Animal.ts
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
    locked = false;
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
      template = template.replace("nameSocket", this.name).replace("sizeSocket", this.size).replace("armorClassSocket", this.armorClass.toString()).replace("hitPointsSocket", this.hitPoints.toString()).replace("speedSocket", this.speed.toString()).replace("strengthSocket", this.strength.toString()).replace("strengthModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.strength))).replace("dexteritySocket", this.dexterity.toString()).replace("dexterityModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.dexterity))).replace("constitutionSocket", this.constitution.toString()).replace("constitutionModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.constitution))).replace("intelligenceSocket", this.intelligence.toString()).replace("intelligenceModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.intelligence))).replace("wisdomSocket", this.wisdom.toString()).replace("wisdomModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.wisdom))).replace("charismaSocket", this.charisma.toString()).replace("charismaModifierSocket", _Animal.formatModifier(_Animal.scoreToModifier(this.charisma))).replace("skillsSocket", this.skills).replace("challengeRatingSocket", this.getFormattedChallengeRating()).replace("proficiencyBonusSocket", this.proficiencyBonus.toString()).replace("idSocket", this.getId()).replace("neededLevelSocket", this.getNeededLevel().toString());
      let sectionHtml = "";
      for (let i = 0; i < this.sections.length; i++) {
        sectionHtml += this.sections[i].toHtml();
        if (i != this.sections.length - 1) {
          sectionHtml += breakTemplate;
        }
      }
      template = template.replace("sectionsSocket", sectionHtml);
      if (this.locked) {
        template = template.replace("c-statblock", "c-statblock c-statblock--locked");
        template = template.replace("c-statblock__name g--black-text", "c-statblock__name c-statblock__name--locked g--white-text");
        template = template.replace("c-statblock__unlock-condition", "c-statblock__unlock-condition c-statblock__unlock-condition--locked");
      }
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
    getChallengeRating() {
      return this.challengeRating;
    }
    lock() {
      this.locked = true;
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
    getId() {
      return this.name.replace(" ", "-");
    }
    getName() {
      return this.name;
    }
    getIntelligence() {
      return this.intelligence;
    }
    setIntelligence(intelligence) {
      this.intelligence = intelligence;
    }
    getWisdom() {
      return this.wisdom;
    }
    setWisdom(wisdom) {
      this.wisdom = wisdom;
    }
    getCharisma() {
      return this.charisma;
    }
    setCharisma(charisma) {
      this.charisma = charisma;
    }
    getNeededLevel() {
      return Math.ceil(this.challengeRating * 3);
    }
  };

  // statblocks/typescript/logic/model/Section.ts
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
      for (let i = 0; i < this.sectionTexts.length; i++) {
        let sectionText = this.sectionTexts[i];
        sectionText = this.replaceAllByTemplate(sectionText, "*", boldTemplate, "boldTextSocket");
        sectionText = this.replaceAllByTemplate(sectionText, "_", italicTemplate, "italicTextSocket");
        fullSectionText += sectionText;
        if (i != this.sectionTexts.length - 1) {
          fullSectionText += breakTemplate;
          fullSectionText += breakTemplate;
        }
      }
      template = template.replace("textSocket", fullSectionText);
      return template;
    }
    replaceByTemplate(originalString, delimiter, template, socketName) {
      let splittedString = this.splitFirst(originalString, delimiter);
      const templateArray = template.split(socketName);
      splittedString.splice(1, 0, templateArray[0]);
      splittedString.splice(3, 0, templateArray[1]);
      return splittedString.join("");
    }
    splitFirst(originalString, delimiter) {
      const arr = originalString.split(delimiter);
      let result = arr.splice(0, 2);
      result.push(arr.join(delimiter));
      return result;
    }
    replaceAllByTemplate(originalString, delimiter, template, socketName) {
      while (originalString.split(delimiter).length != 1) {
        originalString = this.replaceByTemplate(originalString, delimiter, template, socketName);
      }
      return originalString;
    }
  };

  // statblocks/typescript/persistance/AnimalMapper.ts
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

  // statblocks/typescript/persistance/AnimalRepository.ts
  async function getAllAnimals() {
    const list = await fetchJson("../../animals/!list.json");
    const jsonArray = [];
    for (let i = 0; i < list.animals.length; i++) {
      let animal = list.animals[i];
      jsonArray.push(await fetchJson("../../animals/" + animal + ".json"));
    }
    const animalArray = jsonArray.map(animalJsonToAnimal);
    return animalArray;
  }
  async function fetchJson(url) {
    const response = await fetch(url);
    return await response.json();
  }

  // statblocks/typescript/logic/StatService.ts
  var StatService = class {
    getLevel() {
      return 4;
    }
    getIntelligence() {
      return 11;
    }
    getWisdom() {
      return 16;
    }
    getCharisma() {
      return 10;
    }
    constructor() {
    }
  };

  // statblocks/typescript/logic/AnimalService.ts
  async function loadAnimals() {
    let animals = await getAllAnimals();
    animals.sort(compareAnimals);
    const statblockContainer = document.getElementById("statblock-container");
    const navbar = document.getElementById("navbar");
    const statService = new StatService();
    animals.forEach((animal) => {
      if (animal.getNeededLevel() > statService.getLevel())
        animal.lock();
      const navbarHtml = navbarItemTemplate.replace("idSocket", animal.getId()).replace("nameSocket", animal.getName());
      navbar.insertAdjacentHTML("beforeend", navbarHtml);
      statblockContainer.insertAdjacentHTML("beforeend", animal.toHtml());
    });
  }
  function compareAnimals(a, b) {
    return a.getChallengeRating() - b.getChallengeRating();
  }

  // statblocks/typescript/presentation/LoadController.ts
  document.addEventListener("DOMContentLoaded", () => {
    loadAnimals();
  });
})();
