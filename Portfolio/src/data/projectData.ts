export interface Project {
  id: string;
  type: 'Solo Development' | 'Game Jam' | 'paper' | 'Semester Project';
  title: string;
  description: string;
  images?: string[]; // Optional for papers/projects that might not have images
  video?: string; // Optional video URL for projects/games
  link?: string; // Optional for papers that might not have external links
  date?: string; // Optional date for projects/papers
  buttonText?: string; // Custom text for the action button
  download?: boolean; // If true, the generated anchor will include the `download` attribute (useful for PDFs)
  tags?: string[]; // Technologies, categories, etc.
  collaborators?: string; // Optional collaborators/team info
}

export const projectsData: Project[] = [
  {
    id: 'paper-1',
    type: 'paper',
    title: 'Research Paper on Game AI',
    description: 'A comprehensive study on implementing advanced AI algorithms in modern game development, focusing on procedural content generation and adaptive difficulty systems.',
    link: 'https://example.com/paper1.pdf',
    buttonText: 'Read Full Paper',
    download: true,
    tags: ['AI', 'Game Development', 'Research', 'Procedural Generation']
  },
  {
    id: 'Train-em',
    type: 'Solo Development',
    title: 'Train\'Em',
    description: '<ul><li><strong>Creature-collection adventure</strong> with real-time combat, open-world exploration, and multiplayer.</li><li><strong>Full-time solo development over 1.5 years; </strong>Designed, coded, and built the entire game. </li> <li><strong>Unity (C#) | Published: </strong> Oct 2021</li></ul>',
    video: '/SoloDevGames/TrainEm.mp4', 
    link: 'https://store.steampowered.com/app/1686390/Trainem/',
    buttonText: 'Steam Page',
    tags: ['Creature-collection', 'Open-world', 'Unity', 'C#', 'Pixelart', 'Multiplayer', 'Solo Dev', '2D']
  },
  {
    id: 'P7',
    type: 'Semester Project',
    title: 'Semester 7 Project: Framework for pedagogical tutoring system with the use of Large Language Models',
    description: 'Developed in collaboration with <strong>Sct. Mariæ Skole</strong> & <strong>AIST Japan</strong>, this project details a <strong>framework for an Intelligent Tutoring System (ITS) </strong>designed for a 2nd-grade mathematics curriculum that combines the conversational strengths of <strong>Large Language Models (LLMs)</strong> with structured pedagogical modules. To mitigate common LLM issues like "factual hallucinations" and a lack of instructional grounding, the system integrates <strong>Knowledge Graphs</strong> for factual accuracy and a <strong>Logistic Knowledge Tracing (LKT)</strong> module to dynamically assess a student\'s knowledge and select tasks at an optimal difficulty level. ',
    video: '/SemesterProjects/P7_Video.mp4',
    link: '/SemesterProjects/P7_Paper.pdf',
    buttonText: 'Download Report',
    download: true,
    date: 'September 2025 - December 2025',
    collaborators: 'Collaborators: Sct. Mariæ Skole & AIST Japan',
    tags: ['Intelligent Tutoring Systems', 'Large Language Models', 'Knowledge Tracing']
  },
  {
    id: 'Bachelor',
    type: 'Semester Project',
    title: 'Bachelor Project: Indigenous Star Lore; Perserving and SafeGuarding Intangible Cultural Heritage Via Virtual Reality',
    description: 'This project investigates how <strong>Virtual Reality (VR)</strong> can be utilized to preserve and communicate the  <strong>intangible cultural heritage</strong> of the Ju/’Hoansi San community in Namibia. By developing a VR prototype for the Oculus Quest 3 centered on the myth  <strong>"The Ostrich in the Sky,"</strong> the experience integrates original  <strong>Ju/’hoan language recordings</strong>, interactive  <strong>hand-tracking</strong>, and a  <strong>low-poly art style</strong> inspired by authentic community drawings to tell the story of how the moon and stars were created.',
    video: '/SemesterProjects/P6_Video.mp4',
    link: '/SemesterProjects/P6_Report.pdf',
    buttonText: 'Download Report',
    download: true,
    date: 'February 2025 - May 2025',
    collaborators: 'Collaborators: Namibia University of science and technology',
    tags: ['Virtual Reality', 'Ju/’Hoansi San Lore', 'Cultural Heritage Preservation']
  },
  {
    id: 'P5',
    type: 'Semester Project',
    title: 'Semester 5 Project: Immersive NPC interactions in VR',
    description: 'This study investigates how <strong>human-like NPC behavior</strong> affects <strong>user engagement</strong> and <strong>social presence</strong> in a <strong>Virtual Reality (VR)</strong> office simulation. By comparing a  <strong>responsive "smart" NPC</strong>, capable of dynamic emotional reactions, with a <strong>basic scripted version</strong>, We found that while immersive interactions significantly increase the sense of presence, they may simultaneously introduce a trade-off by potentially reducing user engagement due to a perceived loss of freedom.',
    video: '/SemesterProjects/P5_Video.mp4',
    link: '/SemesterProjects/P5_Report.pdf',
    buttonText: 'Download Report',
    download: true,
    date: 'September 2024 - December 2024',
    tags: ['Virtual Reality', 'NPC Interactions', 'Social Presence']
  },
  {
    id: 'P4',
    type: 'Semester Project',
    title: '(Confidential) Semester 4 Project: Dynamic Matching in C++',
    images: [
      '/SemesterProjects/P4_Picture.png',
    ],
    description: 'This project investigates the development and performance of <strong>Dynamic Spectral Matching (DSM)</strong> algorithms, comparing implementations in <strong>C++</strong> and <strong>MATLAB</strong> to enhance <strong>audio signal dynamics</strong>. By evaluating methods such as <strong>windowed RMS</strong>, <strong>absolute waveform</strong>, and <strong>windowed peak level</strong>. This project remains under a confidentiality agreement. Therefore, only a brief description can be provided, and no video or external link can be shared.',
    date: 'February 2024 - May 2024',
    collaborators: 'Collaborators: Sony',
    tags: ['Audio Signal Processing ', 'Dynamic Spectral Matching ']
  },
  {
    id: 'P3',
    type: 'Semester Project',
    title: 'Semester 3 Project: Automating regabilitation assessment',
    description: 'This automated system uses an <strong>RGB camera</strong> and <strong>color thresholding</strong> to assess <strong>stroke rehabilitation</strong> exercises. By tracking <strong>colored Velcro bands</strong> at key joints, the software calculates angles to evaluate performance against expert-defined checkpoints. The application provides real-time feedback on <strong>repetitions, quality, and trunk compensation</strong> for exercises such as bicep curls and sit-to-stand.',
    video: '/SemesterProjects/P3_Video.mp4',
    link: '/SemesterProjects/P3_Report.pdf',
    buttonText: 'Download Report',
    download: true,
    date: 'September 2023 - December 2023',
    collaborators: 'Collaborators: Bispebjerg and Frederiksberg Hospital',
    tags: ['Stroke Rehabilitation', 'Computer Vision', 'Automated Assessment']
  },
  {
    id: 'P1',
    type: 'Semester Project',
    title: 'Semester 1 Project: Preserving Greek Culture through Video Games',
    description: 'Project investigates using a <strong>serious game</strong> to preserve <strong>Greek cultural heritage</strong> through the <strong>myth of the Minotaur</strong>. Using a custom <strong>2D pixel-art maze</strong> game, We compared <strong>interactive gameplay with traditional reading among university students. While the game proved highly <strong>engaging</strong>, the study concluded that traditional reading led to superior <strong>knowledge retention</strong>.',
    video: '/SemesterProjects/P1_Video.mp4',
    link: '/SemesterProjects/P1_Report.pdf',
    buttonText: 'Download Report',
    download: true,
    date: 'October 2022 - December 2022',
    tags: ['Greek Mythology ', 'Serious Game', 'Cultural Heritage']
  },
  {
    id: 'Little-Adventures',
    type: 'Solo Development',
    title: 'Little Adventures',
    description: '<ul><li><strong>Procedural dungeon crawler</strong> with strong roguelike elements and multiplayer. </li><li><strong>Spare-time solo development over 1 year</strong> Designed, coded, and built the entire game. </li> <li><strong>Unity (C#) | Published: </strong> Sep 2020 </li></ul>',
    video: '/SoloDevGames/LittleAdventures.mp4', 
    link: 'https://store.steampowered.com/app/1253760/Little_Adventures/',
    buttonText: 'Steam Page',
    tags: ['Procedural', 'Dungeon Crawler', 'Roguelike', 'Unity', 'C#', 'Pixelart', 'Multiplayer', 'Solo Dev', '2D']
  },
  {
    id: 'My-Mafia-Boyfriends',
    type: 'Game Jam',
    title: 'My Mafia Boyfriend(s)',
    description: '<ul><li><strong>Branching romance-crime visual novel</strong> where you infiltrate a mafia as an undercover FBI agent and navigate love, choices, and consequences. </li><li><strong>The Programmer, The Game Integrator & Co-Director</strong> (Team of 2) </li> <li><strong>Unity (C#) | Create Jam 2025 Fall (45h) </strong></li></ul>',
    images: [
      'GameJams/Pictures/My Mafia Boyfriend(s)/my-mafia-boyfriends-1.png',
      'GameJams/Pictures/My Mafia Boyfriend(s)/my-mafia-boyfriends-2.png',
      'GameJams/Pictures/My Mafia Boyfriend(s)/my-mafia-boyfriends-4.png',
      'GameJams/Pictures/My Mafia Boyfriend(s)/my-mafia-boyfriends-6.png',
      'GameJams/Pictures/My Mafia Boyfriend(s)/my-mafia-boyfriends-3.png',
      'GameJams/Pictures/My Mafia Boyfriend(s)/my-mafia-boyfriends-5.png',
      'GameJams/Pictures/My Mafia Boyfriend(s)/my-mafia-boyfriends-7.png',
    ],
    link: 'https://andersonlund.itch.io/my-mafia-boyfriend',
    buttonText: 'Itch.io Page',
    tags: ['Branching', 'Visual Novel', 'Dating Sim', 'Marfia', 'Unity', 'C#', 'Team Project', 'Drawing', '2D', 'Game Jam']
  },
  {
    id: 'Linked-Together',
    type: 'Game Jam',
    title: 'Linked Together',
    description: '<ul><li><strong>Cooperative rage-platformer</strong> with physics-based climbing challenges in a linked character setup. </li><li><strong>Lead Programmer, The Game Integrator & Artist</strong> (Team of 6) </li> <li><strong>Unity (C#) | Weekend 2025 </strong></li></ul>',
    images: [
      'GameJams/Pictures/Linked Together/linked-together-2.png',
      'GameJams/Pictures/Linked Together/linked-together-3.png',
      'GameJams/Pictures/Linked Together/linked-together-6.png',
      'GameJams/Pictures/Linked Together/linked-together-5.png',
      'GameJams/Pictures/Linked Together/linked-together-4.png',
    ],
    link: 'https://andersonlund.itch.io/linkedtogether',
    buttonText: 'Itch.io Page',
    tags: ['Cooperative', 'Co-op', 'Rage', 'Platformer', 'Unity', 'C#', 'Team Project', 'Pixelart', '2D']
  },
  {
    id: 'Fitness-Phasmo',
    type: 'Game Jam',
    title: 'Fitness Phasmo',
    description: '<ul><li><strong>Horror Phasmophobia</strong> where players perform task to survive paranormal encounters in a fitness center. </li><li><strong>Lead Programmer, The Game Integrator, Co-Director & Level Designer</strong> (Team of 7) </li> <li><strong>Unity (C#) | Create Jam 2024 Fall (45h)</strong></li></ul>',
    images: [
      'GameJams/Pictures/Fitness Phasmo/fitness-phasmo-3.png',
      'GameJams/Pictures/Fitness Phasmo/fitness-phasmo-1.png',
      'GameJams/Pictures/Fitness Phasmo/fitness-phasmo-5.png',
      'GameJams/Pictures/Fitness Phasmo/fitness-phasmo-4.png',
      'GameJams/Pictures/Fitness Phasmo/fitness-phasmo-2.png',
    ],
    link: 'https://jako5822.itch.io/fitness-phasmo',
    buttonText: 'Itch.io Page',
    tags: ['Horror', 'Phasmophobia', 'Fitness', 'Unity', 'C#', '3D', 'Game Jam', 'Team Project']
  },
  {
    id: 'Zombie-Surprise-Shooter-Reloaded',
    type: 'Game Jam',
    title: 'Zombie Surprise Shooter',
    description: '<ul><li><strong>Fast-paced zombie shooter</strong> where players blast through hordes of unpredictable zombie combat with random weapon outcomes and chaotic twist mechanics. </li><li><strong>Lead Programmer, The Game Integrator, Co-Director & Level Designer</strong> (Team of 9) </li> <li><strong>Unity (C#) | Create Jam 2025 Spring (45h) </strong></li></ul>',
    images: [
      'GameJams/Pictures/Zombie Surprise Shooter Reloaded/zombie-surprise-shooter-reloaded-4.png',
      'GameJams/Pictures/Zombie Surprise Shooter Reloaded/zombie-surprise-shooter-reloaded-3.png',
      'GameJams/Pictures/Zombie Surprise Shooter Reloaded/zombie-surprise-shooter-reloaded-1.png',
      'GameJams/Pictures/Zombie Surprise Shooter Reloaded/zombie-surprise-shooter-reloaded-2.png',
    ],
    link: 'https://jako5822.itch.io/zombie-surprise-shooter-reloaded',
    buttonText: 'Itch.io Page',
    tags: ['Zombie', 'Action', 'Shooter', 'Unity', 'C#', 'Team Project', '3D', 'Game Jam']
  },
  {
    id: 'Kudu-Hunt',
    type: 'Game Jam',
    title: 'Kudu Hunt',
    description: '<ul><li><strong>2D hunting adventure</strong> about Namibian stories, developed in collaboration with a local community in Namibia. </li><li><strong>Lead Programmer, The Game Integrator, Co-Director & Artist</strong> (Team of 6) </li> <li><strong>Unity (C#) | University GameJam 2022 </strong></li></ul>',
    images: [
      'GameJams/Pictures/Kudu Hunt/kudu-hunt-1.png',
      'GameJams/Pictures/Kudu Hunt/kudu-hunt-3.png',
      'GameJams/Pictures/Kudu Hunt/kudu-hunt-2.png',
      'GameJams/Pictures/Kudu Hunt/kudu-hunt-4.png',
    ],
    link: 'https://schniebster.itch.io/namibia-gamejam-2022',
    buttonText: 'Itch.io Page',
    tags: ['Adventure', 'Hunting', 'Namibian', 'Collaboration', 'Unity', 'C#', 'Team Project', 'Pixelart', '2D', 'Game Jam']
  },
  {
    id: 'Gulles-Incompetent-Pirates',
    type: 'Game Jam',
    title: 'Gulle\'s Incompetent Pirates',
    description: '<ul><li><strong>Casual 3D puzzle-adventure</strong> about a seagull doing physics-based challenges. </li><li><strong>Lead Programmer, The Game Integrator, Co-Director & Level Designer</strong> (Team of 7) </li> <li><strong>Unity (C#) | Create Jam 2023 Spring (45h)</strong></li></ul>',
    images: [
      'GameJams/Pictures/Gulle\'s Incompetent Pirates/gulles-incompetent-pirates-4.png',
      'GameJams/Pictures/Gulle\'s Incompetent Pirates/gulles-incompetent-pirates-2.png',
      'GameJams/Pictures/Gulle\'s Incompetent Pirates/gulles-incompetent-pirates-3.png',
      'GameJams/Pictures/Gulle\'s Incompetent Pirates/gulles-incompetent-pirates-1.png',
    ],
    link: 'https://klas123.itch.io/gulls-incompetent-pirates',
    buttonText: 'Itch.io Page',
    tags: ['Casual', '3D', 'Puzzle', 'Adventure', 'Unity', 'C#', 'Game Jam', 'Team Project']
  },
  {
    id: 'not-2B-Diner-Dash',
    type: 'Game Jam',
    title: 'Not-2B Diner Dash',
    description: '<ul><li><strong>Steampunk-inspired action restaurant simulator</strong> where players serve customers and manage a chaotic diner in a cozy-themed. </li><li><strong>Lead Programmer, The Game Integrator, Co-Director & Level Designer</strong> (Team of 5) </li> <li><strong>Unity (C#) | Create Jam 2022 Fall (45h) </strong></li></ul>',
    images: [
      'GameJams/Pictures/Not-2B Diner Dash/not-2b-diner-dash-3.png',
      'GameJams/Pictures/Not-2B Diner Dash/not-2b-diner-dash-2.png',
      'GameJams/Pictures/Not-2B Diner Dash/not-2b-diner-dash-1.png',
    ],
    link: 'https://mishimads.itch.io/3b-diner-dash',
    buttonText: 'Itch.io Page',
    tags: ['Steampunk', 'Action', 'Restaurant', 'Simulator', 'Unity', 'C#', 'Team Project', 'Pixelart', '2D', 'Game Jam']
  },
];

// Helper function to get a project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};

// Helper function to get multiple projects by IDs
export const getProjectsByIds = (ids: string[]): Project[] => {
  return projectsData.filter(project => ids.includes(project.id));
};

// Helper function to get projects by type
export const getProjectsByType = (type: 'Solo Development' | 'Game Jam' | 'paper' | 'Semester Project'): Project[] => {
  return projectsData.filter(project => project.type === type);
};

// Helper function to get projects by tags
export const getProjectsByTags = (tags: string[]): Project[] => {
  return projectsData.filter(project =>
    tags.some(tag => project.tags?.includes(tag))
  );
};