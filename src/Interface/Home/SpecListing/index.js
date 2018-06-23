import React from 'react';

import FingerprintFilledIcon from 'Interface/Icons/FingerprintFilled';

import AVAILABLE_CONFIGS from 'Parser/AVAILABLE_CONFIGS';

import './SpecListing.css';

import Spec from './Spec';

class SpecListing extends React.PureComponent {
  render() {
    return (
      <section className="spec-listing">
        <header>
          <div className="row">
            <div className="col-md-12">
              <h1><FingerprintFilledIcon /> Specializations</h1>
            </div>
          </div>
        </header>

        <main>
          {AVAILABLE_CONFIGS
            .sort((a, b) => {
              if (a.spec.className < b.spec.className) {
                return -1;
              } else if (a.spec.className > b.spec.className) {
                return 1;
              }
              return a.spec.id - b.spec.id;
            })
            .map(config => <Spec {...config} />)}
        </main>
      </section>
    );
  }
}

export default SpecListing;
