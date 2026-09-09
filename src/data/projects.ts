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

// Map of exact GIF URLs on raw.githubusercontent.com for Giorgio's real repos
export const KNOWN_REPO_GIFS: Record<string, string[]> = {
  'KUKA-iiwa-Obstacle-Avoidance': [
    'https://raw.githubusercontent.com/giorgio0420/KUKA-iiwa-Obstacle-Avoidance/main/kuka_avoidance.gif',
    'https://raw.githubusercontent.com/giorgio0420/KUKA-iiwa-Obstacle-Avoidance/main/control_scheme.png',
  ],
  'Drone-UAV-Obstacle-Avoidance': [
    'https://raw.githubusercontent.com/giorgio0420/Drone-UAV-Obstacle-Avoidance/main/gif.gif',
  ],
  'RemoteSensing-Segmentation-NN': [
    'https://raw.githubusercontent.com/giorgio0420/RemoteSensing-Segmentation-NN/main/gif.gif',
  ],
  'Dental-Imagery-Generation-Segmentation-CV': [
    'https://raw.githubusercontent.com/giorgio0420/Dental-Imagery-Generation-Segmentation-CV/main/gif.gif',
  ],
};

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
    name: 'lhc-feat-vs-img',
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
