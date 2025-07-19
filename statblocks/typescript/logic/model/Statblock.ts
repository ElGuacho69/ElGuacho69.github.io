const template: string = `<div class="c-statblock" id="dog">
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
								<span class="g--bold">Valor de desafío(VD)</span> challengeRatingSocket
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
									<span class="g--bold">Olfato y oído agudos.</span> El perro tiene ventaja en las tiradas
									de percepción basadas en olfato y oído.
								</div>
								<br />
								<span class="c-statblock__section-name g--bold">Acciones</span>
								<hr class="c-statblock__separator c-statblock__separator--thin" />
								<div class="g--black-text">
									<span class="g--bold">Mordisco.</span><span class="g--italic"> Ataque cuerpo a cuerpo:</span> +2 a
									dar, sin alcance, un objetivo. <span class="g--italic">Daño:</span>
									2d4+2 perforante. El objetivo debe superar una tirada de salvación
									de fuerza CD 11 o caer al suelo.
								</div>
							</div>
						</div>`;
	export { template };
