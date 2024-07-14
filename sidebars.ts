import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sparkSidebar: {
    'spark': [
      'Home',
      'Installation',
      'Command-Usage',
      'Using-the-viewer',
      'Developer-API',
      'Configuration',
    ],
    'spark guides': [
      'guides/Finding-lag-spikes',
      'guides/The-tick-loop',
      'guides/TPS-and-MSPT',
    ],
    'spark misc': [
      'misc/spark-vs-others',
      'misc/Using-async-profiler',
      'misc/About-spark-metrics',
      'misc/Raw-spark-data',
      'misc/Placeholders',
      'misc/Info-points',
      'misc/Credits',
    ]
  },
};

export default sidebars;
