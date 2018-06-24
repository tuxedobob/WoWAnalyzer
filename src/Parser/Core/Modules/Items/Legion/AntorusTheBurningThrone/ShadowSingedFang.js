import React from 'react';

import SPELLS from 'common/SPELLS';
import ITEMS from 'common/ITEMS';
import { formatNumber, formatPercentage } from 'common/format';
import { calculateSecondaryStatDefault } from 'common/stats';

import Analyzer from 'Parser/Core/Analyzer';


/*
* Shadow-Singed Fang
* Equip: Your melee and ranged abilities have a chance to increase your Strength or Agility by 5,458 for 12 sec.
*
* Equip: Your autoattacks have a chance to increase your Critical Strike by 2,642 for 12 sec.
*/

class ShadowSingedFang extends Analyzer {
	mainStatBuff = 0
	critStatBuff = 0

	mainProc = 0
	critProc = 0

	constructor(...args) {
    super(...args);
		this.active = this.selectedCombatant.hasTrinket(ITEMS.SHADOW_SINGED_FANG.id);
		if (this.active) {
			this.mainStatBuff = calculateSecondaryStatDefault(930, 5458, this.selectedCombatant.getItem(ITEMS.SHADOW_SINGED_FANG.id).itemLevel);
			this.critStatBuff = calculateSecondaryStatDefault(930, 2642, this.selectedCombatant.getItem(ITEMS.SHADOW_SINGED_FANG.id).itemLevel);
		}
	}

	on_byPlayer_applybuff(event){
		const spellId = event.ability.guid;
		if(spellId === SPELLS.FLAMES_OF_FHARG.id){
			this.mainProc++;
		}
		if(spellId === SPELLS.CORRUPTION_OF_SHATUG.id){
			this.critProc++;
		}
	}

	on_byPlayer_refreshbuff(event){
		const spellId = event.ability.guid;
		if(spellId === SPELLS.FLAMES_OF_FHARG.id){
			this.mainProc++;
		}
		if(spellId === SPELLS.CORRUPTION_OF_SHATUG.id){
			this.critProc++;
		}
	}

	item(){
		const mainUptime = this.selectedCombatant.getBuffUptime(SPELLS.FLAMES_OF_FHARG.id) / this.owner.fightDuration;
		const critUptime = this.selectedCombatant.getBuffUptime(SPELLS.CORRUPTION_OF_SHATUG.id) / this.owner.fightDuration;

		const averageMain = mainUptime * this.mainStatBuff;
		const averageCrit = critUptime * this.critStatBuff;
		return {
			item: ITEMS.SHADOW_SINGED_FANG,
			result: (
				<div>
					<dfn data-tip={`Proced the ${this.selectedCombatant.spec.primaryStat} stat buff <b>${this.mainProc}</b> times with <b>${formatPercentage(mainUptime)}</b> % uptime`}>
						{formatNumber(averageMain)} average {this.selectedCombatant.spec.primaryStat}
					</dfn>
					<br />
					<dfn data-tip={`Proced the Crit stat buff <b>${this.critProc}</b> times with <b>${formatPercentage(critUptime)}</b> % uptime`}>
						{formatNumber(averageCrit)} average Crit
					</dfn>
				</div>
			),
		};
	}
}

export default ShadowSingedFang;
