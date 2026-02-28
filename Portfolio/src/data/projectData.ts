export interface Project {
  id: string;
  type: 'Solo Development' | 'Game Jam' | 'paper' | 'Semester Project' | 'GameInDevelopment' | 'ProjectInDevelopment';
  title: string;
  description: string;
  myRole?: string; // What I did / my role in the project
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
    id: 'P8',
    type: 'ProjectInDevelopment',
    title: 'Semester 8 Project: Esport analytic tool',
    images: [
      '/SemesterProjects/P8_Placeholder.jpg',
    ],
    description: 'Making a tool for esports coaches to help them analyze training sessions and competitive plays.',
    date: 'February 2026 - May 2026',
    collaborators: 'Collaborators: DGI aalborg',
    tags: ['Esport']
  },
  {
    id: 'Trading Bot',
    type: 'ProjectInDevelopment',
    title: 'Trading Bot',
    images: [
      '/SemesterProjects/Traing_Placeholder.png',
    ],
    description: 'A Python bot using the <strong>Saxo API</strong> that scans <strong>1-hour candlesticks</strong> for high-probability patterns, confirms <strong>Fibonacci retracements</strong>, and executes trades with <strong>strict risk management</strong>.',
    tags: ['Training Bot', 'Python', 'Saxo API']
  },
  {
    id: 'Project Kaos',
    type: 'GameInDevelopment',
    title: 'Project Kaos',
    description: '<strong>Creature-collection tactical autochess</strong> with 6v6 tactical battles where you assign roles before combat',
    myRole: '<strong>Solo Developer</strong>, Designing, coding, and building the entire game. | <strong>Unity (C#)</strong>',
    video: 'https://youtu.be/ioW6l8ruLxc',
    tags: ['Creature-collection', 'Open-world', 'Unity', 'C#', 'Pixelart', 'Multiplayer', 'Solo Dev', '2D']
  },
  {
    id: 'Train-em',
    type: 'Solo Development',
    title: 'Train\'Em',
    description: '<strong>Creature-collection adventure</strong> with real-time combat, open-world exploration, and multiplayer.',
    myRole: '<strong>Solo Developer</strong>, Full-time over 1.5 years; Designed, coded, and built the entire game. | <strong>Unity (C#)</strong> | Published: Oct 2021',
    video: 'https://youtu.be/wgnoPE7cfVI',
    link: 'https://store.steampowered.com/app/1686390/Trainem/',
    buttonText: 'Steam Page',
    tags: ['Creature-collection', 'Open-world', 'Unity', 'C#', 'Pixelart', 'Multiplayer', 'Solo Dev', '2D']
  },
  {
    id: 'P7',
    type: 'Semester Project',
    title: 'Semester 7 Project: Framework for pedagogical tutoring system with the use of Large Language Models',
    description: 'A <strong>framework for an Intelligent Tutoring System (ITS)</strong> for 2nd-grade math, combining <strong>LLMs</strong> with <strong>Knowledge Graphs</strong> for factual grounding and <strong>Logistic Knowledge Tracing</strong> to dynamically adapt task difficulty to each student.',
    myRole: '<strong>Lead Programmer</strong>, <strong>System Integrator</strong> & <strong>Co-Director</strong> (Team of 5) | <strong>Python & LLM</strong>',
    video: 'https://youtu.be/ioc55BGYXgA',
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
    description: 'A <strong>VR experience</strong> for the Oculus Quest 3 preserving <strong>Ju/\'Hoansi San cultural heritage</strong> through the myth <strong>"The Ostrich in the Sky"</strong>, featuring original language recordings, interactive <strong>hand-tracking</strong>, and a community-inspired low-poly art style.',
    myRole: '<strong>Lead Programmer</strong>, <strong>Game Integrator</strong> & <strong>Co-Director</strong> (Team of 5) | <strong>VR</strong>  & <strong>Unity (C#)</strong>',
    video: 'https://youtu.be/rGu95Zn5a3k',
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
    description: 'Investigated how <strong>human-like NPC behavior</strong> impacts <strong>social presence</strong> in a <strong>VR</strong> office simulation, found that dynamic emotional NPCs increase immersion but can reduce engagement due to perceived loss of freedom.',
    myRole: '<strong>Lead Programmer</strong>, <strong>Game Integrator</strong>, <strong>Co-Director</strong> & <strong>Level Designer</strong> (Team of 5) | <strong>VR</strong> & <strong>Unity (C#)</strong>',
    video: 'https://youtu.be/xtEV5xaMkZc',
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
    description: 'Developed and compared <strong>Dynamic Spectral Matching (DSM)</strong> algorithms in <strong>C++</strong> and <strong>MATLAB</strong> to enhance <strong>audio signal dynamics</strong>. Under a confidentiality agreement, no video or link available.',
    myRole: '<strong>Programmer</strong> & <strong>Co-Designer</strong> (Team of 4) | <strong>C++ & MATLAB</strong>',
    date: 'February 2024 - May 2024',
    collaborators: 'Collaborators: Sony',
    tags: ['Audio Signal Processing ', 'Dynamic Spectral Matching ']
  },
  {
    id: 'P3',
    type: 'Semester Project',
    title: 'Semester 3 Project: Automating regabilitation assessment',
    description: 'Automated <strong>stroke rehabilitation</strong> assessment using an <strong>RGB camera</strong> and <strong>color thresholding</strong> to track joint angles and provide real-time feedback on <strong>repetitions, quality, and trunk compensation</strong>.',
    myRole: '<strong>Lead Programmer</strong>, <strong>System Integrator</strong> & <strong>Lead Designer</strong> (Team of 5) | <strong>Computer Vision (Python)</strong>',
    video: 'https://youtu.be/d-oOsSOwWr8',
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
    description: 'Used a <strong>2D pixel-art maze game</strong> set in the <strong>myth of the Minotaur</strong> to study <strong>Greek cultural heritage</strong> preservation, found gameplay was more engaging, but traditional reading yielded better <strong>knowledge retention</strong>.',
    myRole: '<strong>Lead Programmer</strong>, <strong>Game Integrator</strong>, <strong>Co-Director</strong> & <strong>Level Designer</strong> (Team of 6) | <strong>Unity (C#)</strong>',
    video: 'https://youtu.be/8Dbp56F9FpU',
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
    description: '<strong>Procedural dungeon crawler</strong> with strong roguelike elements and multiplayer.',
    myRole: '<strong>Solo Developer</strong>, Spare-time over 1 year; Designed, coded, and built the entire game. | <strong>Unity (C#)</strong> | Published: Sep 2020',
    video: 'https://youtu.be/f9Kzc2vk0PE',
    link: 'https://store.steampowered.com/app/1253760/Little_Adventures/',
    buttonText: 'Steam Page',
    tags: ['Procedural', 'Dungeon Crawler', 'Roguelike', 'Unity', 'C#', 'Pixelart', 'Multiplayer', 'Solo Dev', '2D']
  },
  {
    id: 'My-Mafia-Boyfriends',
    type: 'Game Jam',
    title: 'My Mafia Boyfriend(s)',
    description: '<strong>Branching romance-crime visual novel</strong> where you infiltrate a mafia as an undercover FBI agent and navigate love, choices, and consequences.',
    myRole: '<strong>The Programmer</strong>, <strong>Game Integrator</strong> & <strong>Co-Director</strong> (Team of 2) | <strong>Unity (C#)</strong> | Create Jam 2025 Fall (45h)',
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
    description: '<strong>Cooperative rage-platformer</strong> with physics-based climbing challenges in a linked character setup.',
    myRole: '<strong>Lead Programmer</strong>, <strong>Game Integrator</strong> & <strong>Artist</strong> (Team of 6) | <strong>Unity (C#)</strong> | Weekend Jam 2025',
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
    description: '<strong>Horror Phasmophobia</strong> where players perform task to survive paranormal encounters in a fitness center.',
    myRole: '<strong>Lead Programmer</strong>, <strong>Game Integrator</strong>, <strong>Co-Director</strong> & <strong>Level Designer</strong> (Team of 7) | <strong>Unity (C#)</strong> | Create Jam 2024 Fall (45h)',
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
    description: '<strong>Fast-paced zombie shooter</strong> where players blast through hordes of unpredictable zombie combat with random weapon outcomes and chaotic twist mechanics.',
    myRole: '<strong>Lead Programmer</strong>, <strong>Game Integrator</strong>, <strong>Co-Director</strong> & <strong>Level Designer</strong> (Team of 9) | <strong>Unity (C#)</strong> | Create Jam 2025 Spring (45h)',
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
    description: '<strong>2D hunting adventure</strong> about Namibian stories, developed in collaboration with a local community in Namibia.',
    myRole: '<strong>Lead Programmer</strong>, <strong>Game Integrator</strong>, <strong>Co-Director</strong> & <strong>Artist</strong> (Team of 6) | <strong>Unity (C#)</strong> | University GameJam 2022',
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
    description: '<strong>Casual 3D puzzle-adventure</strong> about a seagull doing physics-based challenges.',
    myRole: '<strong>Lead Programmer</strong>, <strong>Game Integrator</strong>, <strong>Co-Director</strong> & <strong>Level Designer</strong> (Team of 7) | <strong>Unity (C#)</strong> | Create Jam 2023 Spring (45h)',
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
    description: '<strong>Steampunk-inspired action restaurant simulator</strong> where players serve customers and manage a chaotic diner in a cozy-themed.',
    myRole: '<strong>Lead Programmer</strong>, <strong>Game Integrator</strong>, <strong>Co-Director</strong> & <strong>Level Designer</strong> (Team of 5) | <strong>Unity (C#)</strong> | Create Jam 2022 Fall (45h)',
    images: [
      'GameJams/Pictures/not-2B Diner Dash/not-2b-diner-dash-3.png',
      'GameJams/Pictures/not-2B Diner Dash/not-2b-diner-dash-2.png',
      'GameJams/Pictures/not-2B Diner Dash/not-2b-diner-dash-1.png',
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
  return ids.flatMap(id => projectsData.filter(project => project.id === id));
};

// Helper function to get projects by type
export const getProjectsByType = (type: 'Solo Development' | 'Game Jam' | 'paper' | 'Semester Project' | 'GameInDevelopment' | 'ProjectInDevelopment'): Project[] => {
  return projectsData.filter(project => project.type === type);
};

// Helper function to get projects by tags
export const getProjectsByTags = (tags: string[]): Project[] => {
  return projectsData.filter(project =>
    tags.some(tag => project.tags?.includes(tag))
  );
};