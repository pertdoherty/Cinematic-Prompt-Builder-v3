export const cinematicDataset = {
  stylePrompt: [
    "Photorealistic", "Cinematic", "Hyperrealistic", "Documentary Style", "Film Still",
    "Anime", "Manga", "3D Render", "Octane Render", "Unreal Engine Style", "Illustration",
    "Watercolor", "Oil Painting", "Concept Art", "Cyberpunk", "Sci-Fi", "Noir",
    "Minimalist", "Surreal", "Vintage Film", "Futuristic"
  ],
  shotSize: [
    "Extreme Close-Up", "Close-Up", "Medium Close-Up", "Medium Shot", "Medium Wide Shot",
    "Wide Shot", "Extreme Wide Shot", "Full Body Shot", "Cowboy Shot",
    "Over-the-Shoulder Shot", "Establishing Shot"
  ],
  angleElevation: [
    "Eye Level", "Low Angle", "High Angle", "Dutch Angle", "Bird’s Eye View",
    "Worm’s Eye View", "Overhead", "Ground Level", "Tilted Frame"
  ],
  viewpoint: [
    "Front View", "Side Profile", "Three-Quarter View", "Rear View",
    "Over-the-Shoulder", "POV Shot", "Isometric View", "Top-Down View"
  ],
  compositionSystem: [
    "Rule of Thirds", "Centered Composition", "Symmetry", "Asymmetry",
    "Golden Ratio", "Leading Lines", "Frame Within a Frame", "Negative Space",
    "Layered Framing", "Diagonal Composition", "Minimalist Framing"
  ],
  perspective: [
    "One-Point Perspective", "Two-Point Perspective", "Three-Point Perspective",
    "Isometric Perspective", "Forced Perspective", "Wide Perspective",
    "Telephoto Compression", "Distorted Perspective", "Macro Perspective",
    "Deep Focus Perspective"
  ],
  depthLayers: [
    "Flat Composition", "Shallow Depth of Field", "Deep Depth of Field",
    "Strong Foreground Element", "Foreground Silhouette",
    "Layered Foreground-Midground-Background", "Atmospheric Depth",
    "Volumetric Depth", "Background Blur", "Bokeh Background"
  ],
  aperture: [
    "f/1.0", "f/1.2", "f/1.4", "f/1.8", "f/2.0", "f/2.8", "f/4", "f/5.6", "f/8", "f/11", "f/16", "f/22"
  ],
  focalLength: [
    "14mm", "18mm", "24mm", "28mm", "35mm", "50mm", "85mm", "100mm", "135mm", "200mm"
  ],
  timeOfDay: [
    "Blue Hour", "Golden Hour", "Sunrise", "Early Morning", "Midday", "Afternoon",
    "Sunset", "Twilight", "Night", "Midnight"
  ],
  weather: [
    "Clear Sky", "Partly Cloudy", "Overcast", "Light Rain", "Heavy Rain",
    "Thunderstorm", "Fog", "Mist", "Snow", "Dust Storm", "Windy"
  ],
  lightingSource: [
    "Natural Light", "Window Light", "Studio Softbox", "Ring Light", "Neon Light",
    "LED Panels", "Practical Lighting", "Candlelight", "Firelight", "Street Light", "Moonlight"
  ],
  lightingStyle: [
    "High Key Lighting", "Low Key Lighting", "Rembrandt Lighting", "Split Lighting",
    "Butterfly Lighting", "Rim Lighting", "Backlighting", "Silhouette Lighting",
    "Volumetric Lighting", "Soft Diffused Lighting", "Hard Light"
  ],
  filmStock: [
    "Kodak Portra 400", "Kodak Ektachrome", "Kodak Vision3", "Fujifilm Pro 400H",
    "Fujifilm Velvia", "Ilford HP5", "Cinestill 800T", "Vintage 35mm Film", "IMAX Film Look"
  ],
  movies: [
    { label: "Blade Runner", year: "1982", image: "movies/Blade_Runner_1982.webp" },
    { label: "Blade Runner 2049", year: "2017", image: "movies/Blade_Runner_2049_2017.webp" },
    { label: "2001: A Space Odyssey", year: "1968", image: "movies/2001_A_Space_Odyssey_1968.webp" },
    { label: "1917", year: "2019", image: "movies/1917_2019.webp" },
    { label: "A Clockwork Orange", year: "1971", image: "movies/A_Clockwork_Orange_1971.webp" },
    { label: "Akira", year: "1988", image: "movies/Akira_1988.webp" },
    { label: "Alien", year: "1979", image: "movies/Alien_1979.webp" },
    { label: "Amélie", year: "2001", image: "movies/Amlie_2001.webp" },
    { label: "Eraserhead", year: "1977", image: "movies/Amlie_2001.webp" },
    { label: "The Grand Budapest Hotel", year: "2014", image: "movies/Amlie_2001.webp" },
    { label: "Inception", year: "2010", image: "" },
    { label: "Mad Max: Fury Road", year: "2015", image: "" },
    { label: "The Revenant", year: "2015", image: "" },
    { label: "Dune", year: "2021", image: "" },
    { label: "Seven", year: "1995", image: "" },
    { label: "Stalker", year: "1979", image: "" },
    { label: "The Lord of the Rings: The Fellowship of the Ring", year: "2001", image: "" },
{ label: "The Lord of the Rings: The Two Towers", year: "2002", image: "" },
{ label: "The Lord of the Rings: The Return of the King", year: "2003", image: "" },
{ label: "The Matrix", year: "1999", image: "" },
{ label: "The Godfather", year: "1972", image: "" },
{ label: "Apocalypse Now", year: "1979", image: "" },
{ label: "The Tree of Life", year: "2011", image: "" },
{ label: "The Lighthouse", year: "2019", image: "" },
{ label: "There Will Be Blood", year: "2007", image: "" },
{ label: "Hero", year: "2002", image: "" },
{ label: "House of Flying Daggers", year: "2004", image: "" },
{ label: "Ran", year: "1985", image: "" },
{ label: "Spirited Away", year: "2001", image: "" },
{ label: "Princess Mononoke", year: "1997", image: "" },
{ label: "My Neighbor Totoro", year: "1988", image: "" },
{ label: "Grave of the Fireflies", year: "1988", image: "" },
{ label: "Ghost in the Shell", year: "1995", image: "" },
{ label: "Sin City", year: "2005", image: "" },
{ label: "The Fall", year: "2006", image: "" },
{ label: "Roma", year: "2018", image: "" },
{ label: "Parasite", year: "2019", image: "" },
{ label: "La La Land", year: "2016", image: "" },
{ label: "The Neon Demon", year: "2016", image: "" },
{ label: "The Assassination of Jesse James by the Coward Robert Ford", year: "2007", image: "" },
{ label: "Barry Lyndon", year: "1975", image: "" },
{ label: "Metropolis", year: "1927", image: "" },
{ label: "The Cabinet of Dr. Caligari", year: "1920", image: "" },
{ label: "Lawrence of Arabia", year: "1962", image: "" },
{ label: "Enter the Void", year: "2009", image: "" },
{ label: "Suspiria", year: "1977", image: "" },
{ label: "The Shining", year: "1980", image: "" },
{ label: "Pan's Labyrinth", year: "2006", image: "" },
{ label: "Interstellar", year: "2014", image: "" },
{ label: "The Fifth Element", year: "1997", image: "" },
{ label: "Chungking Express", year: "1994", image: "" },
{ label: "In the Mood for Love", year: "2000", image: "" },
{ label: "Oldboy", year: "2003", image: "" },
{ label: "Children of Men", year: "2006", image: "" },
{ label: "The Dark Knight", year: "2008", image: "" },
{ label: "The Shape of Water", year: "2017", image: "" }
  ],
  directors: [
    "Christopher Nolan",
    "Wes Anderson",
    "Denis Villeneuve",
    "David Fincher",
    "Hayao Miyazaki",
    "The Coen Brothers",
    "Greta Gerwig",
    "Stanley Kubrick",
    "Martin Scorsese",
    "Quentin Tarantino",
    "Guillermo del Toro",
    "Ridley Scott",
    "Wong Kar-wai",
    "Majid Majidi",
    "Akira Kurosawa",
    "Andrei Tarkovsky",
    "Ingmar Bergman",
    "Alfred Hitchcock",
    "Paul Thomas Anderson",
    "Terrence Malick",
    "Yorgos Lanthimos",
    "Park Chan-wook",
    "Bong Joon-ho",
    "Zack Snyder",
    "Michael Bay",
    "Damien Chazelle",
    "Barry Jenkins",
    "Spike Lee",
    "Sofia Coppola",
    "Robert Eggers",
    "Ari Aster",
    "Jordan Peele",
    "Alejandro González Iñárritu",
    "Emir Kusturica",
    "Pedro Almodóvar",
    "Gaspar Noé",
    "Nicolas Winding Refn",
    "Sam Mendes",
    "James Cameron",
    "George Miller",
    "Taika Waititi",
    "Chloé Zhao",
    "John Woo",
    "Ang Lee",
    "Apichatpong Weerasethakul",
    "Asghar Farhadi",
    "Luca Guadagnino",
    "Edward Yang",
    "Hou Hsiao-hsien",
    "Béla Tarr",
    "Robert Rodriguez",
    "Baz Luhrmann",
    "Harmony Korine",
    "Krzysztof Kieślowski"
  ],
  filter: [
    "Soft Bloom", "Cinematic Color Grade", "Teal and Orange", "Black and White",
    "Sepia Tone", "High Contrast", "Low Contrast", "Film Grain", "Vignette",
    "HDR Effect", "Matte Finish"
  ],
  aspectRatio: [
    "1:1", "4:3", "3:2", "16:9", "2.35:1", "9:16", "21:9", "IMAX Ratio"
  ],
  lensType: [
    "Prime Lens", "Zoom Lens", "Wide Angle Lens", "Ultra Wide Lens", "Telephoto Lens",
    "Macro Lens", "Anamorphic Lens", "Vintage Lens", "Tilt-Shift Lens", "Fisheye Lens",
    "Cine Lens", "Soft Focus Lens", "Portrait Lens", "Pancake Lens", "Probe Lens"
  ],
  atmosphere: [
    "Moody", "Dark", "Bright and Airy", "Dramatic", "Tense", "Melancholic",
    "Romantic", "Dreamlike", "Ethereal", "Mysterious", "Hopeful", "Intimate",
    "Lonely", "Epic", "Grand", "Peaceful", "Serene", "Chaotic", "Gritty",
    "Cold and Harsh", "Warm and Inviting", "Suspenseful", "Nostalgic",
    "Futuristic", "Whimsical"
  ],
  cameraBodies: [
    "ARRI Alexa Mini", "ARRI Alexa Mini LF", "ARRI Alexa LF", "ARRI Alexa 35",
    "ARRI Alexa 65", "ARRI Amira", "ARRI Alexa XT",
    "RED Komodo 6K", "RED V-Raptor 8K", "RED V-Raptor XL", "RED Helium 8K",
    "RED Monstro 8K VV", "RED Dragon-X",
    "Sony Venice", "Sony Venice 2", "Sony FX3", "Sony FX6", "Sony FX9",
    "Panavision Millennium DXL2", "Panavision DXL", "Panavision Panaflex Millennium XL2", "Panavision Genesis",
    "IMAX MSM 9802", "IMAX MKIV", "IMAX Digital 2D Camera",
    "Blackmagic URSA Mini Pro 12K", "Blackmagic URSA Cine 12K", "Blackmagic Pocket Cinema Camera 6K",
    "Canon C70", "Canon C300 Mark III", "Canon C500 Mark II",
    "Panasonic Varicam LT", "Panasonic Varicam 35",
    "Kinefinity MAVO Edge 8K", "Z CAM E2-F8",
    "Phantom Flex 4K", "Phantom Flex 4K-GS"
  ]
};
