import React from 'react';

import { Cloake, Zerotorescue } from 'CONTRIBUTORS';
import SPECS from 'common/SPECS';
import Warning from 'common/Alert/Warning';

import CHANGELOG from './CHANGELOG';

export default {
  // The people that have contributed to this spec recently. People don't have to sign up to be long-time maintainers to be included in this list. If someone built a large part of the spec or contributed something recently to that spec, they can be added to the contributors list.
  contributors: [Cloake, Zerotorescue],
  // The WoW client patch this spec was last updated to be fully compatible with.
  patchCompatibility: '8.0',
  // Explain the status of this spec's analysis here. Try to mention how complete it is, and perhaps show links to places users can learn more.
  // If this spec's analysis does not show a complete picture please mention this in the `<Warning>` component.
  description: (
    <React.Fragment>
      <Warning>
        Hey there! A good basis has been implemented for this spec, but it needs to be fleshed out more to provide all the feedback possible.<br /><br />

        This spec needs a focused maintainer. If you want to give it a try, check <a href="https://github.com/WoWAnalyzer/WoWAnalyzer">GitHub</a> for more information.
      </Warning>
      <br />
      <Warning>
        Hi <kbd>@Zerotorescue</kbd> here. I updated this spec to be compatible with BFA, but I'm no Assassination expert. If there's anything wrong please @poke me on Discord and I'll fix it if I can.
      </Warning>
    </React.Fragment>
  ),
  // A recent example report to see interesting parts of the spec. Will be shown on the homepage.
  exampleReport: '/report/zRbrjmWkMfnQpC2c/4-Mythic+Garothi+Worldbreaker+-+Kill+(4:26)/80-Nightshades',

  // Don't change anything below this line;
  // The current spec identifier. This is the only place (in code) that specifies which spec this parser is about.
  spec: SPECS.ASSASSINATION_ROGUE,
  // The contents of your changelog.
  changelog: CHANGELOG,
  // The CombatLogParser class for your spec.
  parser: () => import('./CombatLogParser' /* webpackChunkName: "Rogue" */).then(exports => exports.default),
  // The path to the current directory (relative form project root). This is used for generating a GitHub link directly to your spec's code.
  path: __dirname,
};
