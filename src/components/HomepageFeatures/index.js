import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Language Agnostic',
    Svg: require('@site/static/img/E1C1.svg').default,
    description: (
      <>
        Whether you're working with NodeJS, .NET, Rust (or anything else!) you'll be able to follow our detailed recipes and implement them in any language.
      </>
    ),
  },
  {
    title: 'Ready-made Code Samples',
    Svg: require('@site/static/img/1F957.svg').default,
    description: (
      <>
        Cut to the chase. Every recipe has language-specific downloadable applications that show the feature in action.
      </>
    ),
  },
  {
    title: 'For Beginners & Pros Alike',
    Svg: require('@site/static/img/1F64B-1F3FD-200D-2642-FE0F.svg').default,
    description: (
      <>
        Just starting out? Download one of our code samples to see the recipe in action. 
        Already have years of experience? Use the recipe as a guide and add your own spin.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
