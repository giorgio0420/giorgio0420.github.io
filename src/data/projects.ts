export interface Project {
  id: number | string;
  name: string;
  full_name?: string;
  title?: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  fork?: boolean;
  pushed_at?: string;
  gifUrl?: string;
}

// Which bucket each project falls into. Explicit rather than guessed from the
// description: substring matching turned 'ai' into a match for "domain" and
// "chain", which is what made the old filter unusable.
export const PROJECT_CATEGORY: Record<string, 'robotics' | 'ai' | 'other'> = {
  'aerial-robotics-project': 'robotics',
  'KUKA-iiwa-Obstacle-Avoidance': 'robotics',
  'Drone-UAV-Obstacle-Avoidance': 'robotics',

  'lhc-event-classification': 'ai',
  'CNN-and-RNN-regression': 'ai',
  'RemoteSensing-Segmentation-NN': 'ai',
  'Dental-Imagery-Generation-Segmentation-CV': 'ai',

  'computational-physics-lab': 'other',
  'median-consensus-multi-agent-system': 'other',
};

// Repos that are not portfolio projects: the profile README, this website,
// and qultura, which has its own card in the bento grid.
export const EXCLUDED_REPOS = new Set([
  'giorgio0420',
  'giorgio0420.github.io',
  'csv_project',
  'qultura',
]);

// Map of exact GIF URLs on raw.githubusercontent.com for Giorgio's real repos
// Every repository now keeps its demo as preview.gif, which the fallback in
// ProjectCard finds on its own. Add an entry here only for a repo that cannot.
export const KNOWN_REPO_GIFS: Record<string, string[]> = {};

// Custom language display overrides for specific repos
export const REPO_LANGUAGE_OVERRIDES: Record<string, string> = {
  'Drone-UAV-Obstacle-Avoidance': 'CoppeliaSim / Lua',
  'KUKA-iiwa-Obstacle-Avoidance': 'CoppeliaSim / MATLAB',
};

// Giorgio's actual real GitHub repositories (used as instant fallback if offline/rate-limited)
export const REAL_GITHUB_REPOS_FALLBACK: Project[] = [
  {
    id: 1226504158,
    name: 'KUKA-iiwa-Obstacle-Avoidance',
    title: 'KUKA iiwa Null-Space Obstacle Avoidance',
    description: 'Null-space obstacle avoidance and Cartesian trajectory tracking for redundant manipulators using MATLAB and CoppeliaSim.',
    html_url: 'https://github.com/giorgio0420/KUKA-iiwa-Obstacle-Avoidance',
    language: 'MATLAB',
    stargazers_count: 1,
    forks_count: 0,
    topics: ['kuka-iiwa', 'coppeliasim', 'matlab', 'null-space', 'obstacle-avoidance', 'robotics'],
    fork: false,
    gifUrl: 'https://raw.githubusercontent.com/giorgio0420/KUKA-iiwa-Obstacle-Avoidance/main/kuka_avoidance.gif',
  },
  {
    id: 1285850631,
    name: 'Drone-UAV-Obstacle-Avoidance',
    title: 'Drone / UAV Autonomous Obstacle Avoidance',
    description: 'UAV obstacle avoidance using vortex vector fields for safe and smooth autonomous navigation in cluttered environments.',
    html_url: 'https://github.com/giorgio0420/Drone-UAV-Obstacle-Avoidance',
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['uav', 'drone', 'obstacle-avoidance', 'vector-fields', 'robotics'],
    fork: true,
    gifUrl: 'https://raw.githubusercontent.com/giorgio0420/Drone-UAV-Obstacle-Avoidance/main/gif.gif',
  },
  {
    id: 1192660310,
    name: 'RemoteSensing-Segmentation-NN',
    title: 'Remote Sensing Semantic Segmentation NN',
    description: 'Deep learning for high-resolution semantic land-cover segmentation, featuring UNet and Swin Transformer architectures initialized with SatMAE++ pretrained models.',
    html_url: 'https://github.com/giorgio0420/RemoteSensing-Segmentation-NN',
    language: 'Python',
    stargazers_count: 0,
    forks_count: 1,
    topics: ['deep-learning', 'remote-sensing', 'unet', 'swin-transformer', 'segmentation'],
    fork: false,
    gifUrl: 'https://raw.githubusercontent.com/giorgio0420/RemoteSensing-Segmentation-NN/main/gif.gif',
  },
  {
    id: 1201102272,
    name: 'Dental-Imagery-Generation-Segmentation-CV',
    title: 'Dental Imagery Synthetic Generation & CV',
    description: 'Computer Vision Project - Deep learning pipeline for the synthetic generation and semantic segmentation of dental imagery.',
    html_url: 'https://github.com/giorgio0420/Dental-Imagery-Generation-Segmentation-CV',
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['computer-vision', 'deep-learning', 'medical-imaging', 'segmentation'],
    fork: true,
    gifUrl: 'https://raw.githubusercontent.com/giorgio0420/Dental-Imagery-Generation-Segmentation-CV/main/gif.gif',
  },
  {
    id: 1350508349,
    name: 'lhc-event-classification',
    title: 'LHC Features vs Detector Images',
    description: 'Hand-built physics features vs raw 32x32 detector images on the same LHC events: sklearn trees against a PyTorch network.',
    html_url: 'https://github.com/giorgio0420/lhc-feat-vs-img',
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['physics', 'pytorch', 'machine-learning', 'lhc', 'scikit-learn'],
    fork: false,
    pushed_at: '2026-08-29T11:01:23Z',
  },
];
