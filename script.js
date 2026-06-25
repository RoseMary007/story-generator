const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

const stories = [

`:name: woke up early and found a tiny unicorn hiding in the garden behind the house. The unicorn loved rainbow cookies and sparkling flowers that shimmered in the morning sunlight. :name: shared some snacks and played fun games with the unicorn all morning. Before leaving, the unicorn gifted :name: a tiny golden star. It was a magical and unforgettable day.`,

`:name: saw a flying turtle carrying colorful balloons across the bright blue sky. Curious and excited, :name: hopped onto its shell and flew above the fluffy white clouds. Together they waved to birds, counted rainbows, and watched the world below. :name: laughed so much that the turtle started laughing too. It was a wonderful adventure.`,

`One sunny morning, :name: found a talking banana sitting on the kitchen table. The banana loved singing silly songs and making funny faces that made everyone giggle. Soon, :name: and the banana were dancing around the room and putting on a funny concert. Even the family pet joined the fun. Everyone laughed until their cheeks hurt.`,

`:name: discovered a candy castle hidden behind a giant sunflower in a colorful field. Inside, friendly gummy bears were having a grand celebration with music and games. They invited :name: to join their party and taste delicious candy treats. Together they played treasure hunts and danced under sparkling lights. It felt like a dream come true.`,

`:name: met a baby dragon who could only breathe bubbles instead of fire. The bubbles floated into the sky and changed into beautiful shapes and colors. Together they built giant bubble castles and had bubble races in the park. People stopped to watch the magical show and cheer loudly. :name: felt proud to have such a special friend.`,

`While exploring outside, :name: found a sleepy cloud resting on the branch of a tall tree. The cloud looked lonely, so :name: sat down and read a favorite storybook aloud. The cloud smiled and listened carefully to every page. As a thank-you gift, it painted a bright rainbow across the sky. Everyone nearby stopped to admire it.`,

`:name: opened a mysterious treasure box and found a tiny dancing penguin wearing shiny silver shoes. The penguin loved music and could perform amazing dance moves. Soon, :name: and the penguin were practicing together and putting on a funny dance show. Their friends gathered around to clap and cheer. It became the most exciting performance in town.`,

`:name: found a magic paintbrush that could bring drawings to life. Excited to try it, :name: painted a purple elephant with bright yellow spots and a colorful hat. The elephant came to life and happily thanked :name:. Together they traveled through Candy Land, crossed chocolate rivers, and met friendly candy animals. It was an adventure full of surprises.`

];

randomize.addEventListener("click", generateStory);

function generateStory() {

    let randomStory =
        stories[Math.floor(Math.random() * stories.length)];

    let name = customName.value.trim();

    if(name === ""){
        name = "Rose";
    }

    randomStory = randomStory.replaceAll(":name:", name);

    story.textContent = randomStory;
}