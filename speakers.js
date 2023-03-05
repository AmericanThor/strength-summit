const speakersData = [
  {
    id: 1,
    name: 'Kody Koester',
    topic: 'How to dress to impress',
    bio: 'Sweet vest huh?',
    urlImage: './assets/head1.jpg',
  },
  {
    id: 2,
    name: 'The Nutrition Guy',
    topic: 'How to eat to gain weight.',
    bio: 'This guy like avacados.',
    urlImage: './assets/head2.jpg',
  },
  {
    id: 3,
    name: 'The Athlete',
    topic: 'Become unstoppable.',
    bio: 'Big rugby fan.',
    urlImage: './assets/head5.jpg',
  },
  {
    id: 4,
    name: 'Cool Hair Guy',
    topic: 'How to let go of what people think of you.',
    bio: 'Might bring this hairdo back someday.',
    urlImage: './assets/head6.jpg',
  },
  {
    id: 5,
    name: 'Kody B. Koester',
    topic: 'Network your way to success!',
    bio: 'He also has cool hair.',
    urlImage: './assets/head4.jpg',
  },
  {
    id: 6,
    name: 'Mr. Koester',
    topic: 'How to build meaningful relationships.',
    bio: "It's salmon - not pink.",
    urlImage: './assets/head3.jpg',
  },
];

// create works project dynamically
const speakersContainer = document.querySelector('.speakers__container');
speakersData.forEach((speaker) => {
  const speakerProject = document.createElement('div');
  let speakerContent = '';
  speakerContent = `  
  <div class="speakers__list__item">
  <div class="speaker__list__item__img">
      <img src=${speaker.urlImage} alt="${speaker.name}" />
  </div>
  <div class="speaker__list__item__content">
      <h3>${speaker.name}</h3>
      <p class="speaker__list__item__content__bio">
         ${speaker.topic}
      </p>
      <div class="speakers__bio__line">

      </div>
      <p>
      ${speaker.bio}
      </p>
  </div>
</div>
`;

  speakerProject.innerHTML = speakerContent;
  speakersContainer.appendChild(speakerProject);
});
