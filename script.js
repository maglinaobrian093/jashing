const closedBook = document.getElementById("closedBook");
const openButton = document.getElementById("openBook");
const openBookView = document.getElementById("openBookView");
const spread = document.getElementById("spread");
const pageLeft = document.getElementById("pageLeft");
const pageRight = document.getElementById("pageRight");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");
const swipeHint = document.getElementById("swipeHint");

const spreads = [
  {
    left: `
  <div class="page-content letter-page">
    <p class="kicker"></p>

    <h2>My Jasha,</h2>

    <div class="letter-text">
      <p>
        It still amazes me how a random match on OmeTV led me to you.
        We were literally just two strangers who happened to talk,
        exchanged Instagram, and somehow ended up becoming this important
        to each other. From the random chats, kulitan, asaran, movie nights,
        and watching the World Cup together, everything slowly became
        something I looked forward to.
      </p>

      <p>
        I still remember when we finally met for the first time. I was
        honestly so shy around you, but being with you felt so easy.
        We watched Spider-Man, ate together, walked around Roxas at night,
        got caught in the rain, went to a cafe, shared earphones, and ended
        the night at the terminal. That night is still one of my favorite
        memories with you.
      </p>

      <p>
        Especially those moments at the terminal when we just sat there
        together. I still remember the way we looked at each other while
        we were sitting there. I don’t even know what was going through
        your mind at that time, but I remember how I felt.
      </p>

      <p>
        There was just something about that moment that stayed with me.
        I think that was one of those quiet moments where I started
        realizing that I was slowly falling for you. It wasn’t anything
        big or dramatic. It was just us sitting there, looking at each
        other, and somehow that became one of our core memories.
      </p>

      <p>
        But your birthday will always have a special place in my heart.
        Everything about that day just felt so perfect. Seeing you happy,
        eating the things you were craving, walking around, having ice
        cream and fries, looking at the moon, and waiting for the sunrise
        while listening to The 1975 with you. I honestly wish I could go
        back to that night sometimes. It was one of those moments where
        I just wanted everything to stay that way a little longer.
      </p>

      <p>
        I think that was also when I realized how much I actually liked
        you. I realized that you were no longer just someone I enjoyed
        talking to. You had slowly become someone I genuinely cared about,
        someone I wanted in my life.
      </p>

      <p>
        And I love that my feelings for you were never sudden. They grew
        slowly, little by little, through every conversation, every laugh,
        every sleep call, every “I miss you,” and every little moment we
        shared. I just woke up one day and realized that I had fallen so
        deeply for you.
      </p>

      <p>
        I’m really thankful that you came into my life. I appreciate you
        more than you probably know. I appreciate the way you make me
        happy, the way you make even the simplest moments feel special,
        and just the way you are. I’m also so proud of you and everything
        you’ve been doing and becoming.
      </p>

      <p>
        I hope you always know that you are loved, appreciated, and valued
        by me. I may not always have the right words to say everything I
        feel, but I hope through all these little things, you can feel how
        much you mean to me.
      </p>
    </div>

    <p class="handwritten letter-signature">
      — anthon ♡
    </p>

    <span class="page-number">01</span>
  </div>`,
    right: `
      <div class="page-content">
        <div class="tape"></div>
        <p class="kicker"></p>
        <div class="photo-frame">
        <img src="pic1.jfif" alt="Our first memory">
        </div>
        <p class="handwritten" style="text-align:center;"></p>
        <p style="text-align:center;">who knew OmeTV would lead me to you.</p>
        <span class="page-number">02</span>
      </div>`
  },
  {
    left: `
  <div class="page-content envelope-page">
    <p class="kicker"></p>
    <h2 class="love-title">Things I love<br>About You. ♡</h2> 

    <div class="envelope-grid">
      <button class="envelope" type="button" data-message="I love the way you can make even the most ordinary days feel special.">
        <span class="envelope-flap"></span>
        <span class="envelope-label">open me</span>
      </button>

      <button class="envelope" type="button" data-message="I love how you see things differently. The way ka mag think is something i find really attractive about you">
        <span class="envelope-flap"></span>
        <span class="envelope-label">open me</span>
      </button>

      <button class="envelope" type="button" data-message="I love how you made me question the way i used to see thingsr">
        <span class="envelope-flap"></span>
        <span class="envelope-label">open me</span>
      </button>

      <button class="envelope" type="button" data-message="I love how you always try to understand things beyond your own experience. The way you see the world and understand people is one of the things I love most about you.">
        <span class="envelope-flap"></span>
        <span class="envelope-label">open me</span>
      </button>

      <button class="envelope" type="button" data-message="Your dreamy eyes. like i could stare in your dreamy eyes forever">
        <span class="envelope-flap"></span>
        <span class="envelope-label">open me</span>
      </button>

      <button class="envelope" type="button" data-message="Your purity">
        <span class="envelope-flap"></span>
        <span class="envelope-label">open me</span>
      </button>

      <button class="envelope" type="button" data-message="I love you for exactly who you are">
        <span class="envelope-flap"></span>
        <span class="envelope-label">open me</span>
      </button>

      <button class="envelope" type="button" data-message="i just love you">
        <span class="envelope-flap"></span>
        <span class="envelope-label">open me</span>
      </button>
    </div>

    <div class="envelope-note" aria-hidden="true">
      <button class="close-note" type="button" aria-label="Close note">×</button>
      <p class="note-kicker"></p>
      <p class="note-message"></p>
    </div>

    <span class="page-number">03</span>
  </div>`,
   right: `
  <div class="page-content songs-page">

    <div class="songs-title">
      <p class="kicker"></p>
      <h2>songs</h2><br><h2>That reminds me of you</h2>
      <p></p>
    </div>

    <div class="song-decoration flower-left">❀</div>
    <div class="song-decoration flower-right">✿</div>

    <div class="song-list">

      <button class="song-card song-a" type="button" data-song="songs/mrld.mp3">
        <span class="song-title">An Art Gallery Could Never Be as Unique As You</span>
        <span class="song-progress"><i></i></span>
        <span class="song-controls">♡ &nbsp; ◀ &nbsp; ▶</span>
        <span class="song-flower">✿</span>
      </button>

      <button class="song-card song-b" type="button" data-song="songs/lany.mp3">
        <span class="song-title">Anything 4 u</span>
        <span class="song-progress"><i></i></span>
        <span class="song-controls">♡ &nbsp; ◀ &nbsp; ▶</span>
      </button>

      <button class="song-card song-c" type="button" data-song="songs/arthur.mp3">
        <span class="song-title">Isa lang</span>
        <span class="song-progress"><i></i></span>
        <span class="song-controls">♡ &nbsp; ◀ &nbsp; ▶</span>
      </button>

      <button class="song-card song-d" type="button" data-song="songs/1975fa.mp3">
        <span class="song-title">Fallingforyou</span>
        <span class="song-progress"><i></i></span>
        <span class="song-controls">♡ &nbsp; ◀ &nbsp; ▶</span>
      </button>

      <button class="song-card song-e" type="button" data-song="songs/its.mp3">
        <span class="song-title">It's Not Living(When It's Not With You)</span>
        <span class="song-progress"><i></i></span>
        <span class="song-controls">♡ &nbsp; ◀ &nbsp; ▶</span>
      </button>

      <button class="song-card song-f" type="button" data-song="songs/Rico.mp3">
        <span class="song-title">Your Universe</span>
        <span class="song-progress"><i></i></span>
        <span class="song-controls">♡ &nbsp; ◀ &nbsp; ▶</span>
      </button>

      <button class="song-card song-g" type="button" data-song="songs/robbers.mp3">
        <span class="song-title">Robbers</span>
        <span class="song-progress"><i></i></span>
        <span class="song-controls">♡ &nbsp; ◀ &nbsp; ▶</span>
      </button>

      <button class="song-card song-h" type="button" data-song="songs/blots.mp3">
        <span class="song-title">Rorschach Blots</span>
        <span class="song-progress"><i></i></span>
        <span class="song-controls">♡ &nbsp; ◀ &nbsp; ▶</span>
      </button>


    </div>

    <div class="songs-now-playing" id="songsPlaying">
      <span>♡</span> tap a song to play
    </div>

    <span class="page-number">03</span>
  </div>`,

  },
  {
    left: `
  <div class="page-content chapter-video-page">

    <p class="kicker"></p>

    <h2 class="video-title">Povs i'd choose every time</h2>

    <div class="video-polaroid">
      <div class="video-photo">
        <video id="gfVideo" playsinline preload="metadata">
          <source src="jash.mp4" type="video/mp4">
        </video>

        <button
          class="video-play"
          id="videoPlay"
          type="button"
          aria-label="Play video">
          ▶
        </button>
      </div>

      <p class="video-caption"></p>
    </div>

    <p class="video-subcaption">
      Not planned, still worth remembering
    </p>

    <span class="page-number">05</span>

  </div>`,
    right: `
  <div class="page-content three-memory-page">

    <p class="kicker"></p>

    <h2 class="three-memory-title">
     
    </h2>

    <div class="memory-layout">

      <div class="memory-item memory-one">
        <div class="memory-polaroid">
          <img src="first.jfif" alt="Memory 1">
        </div>

        <p class="memory-text">
       
        </p>
      </div>


      <div class="memory-item memory-two">
        <p class="memory-text">
   
        </p>

        <div class="memory-polaroid">
          <img src="second.jfif" alt="Memory 2">
        </div>
      </div>


      <div class="memory-item memory-three">
        <div class="memory-polaroid">
          <img src="third.jfif" alt="Memory 3">
        </div>

        <p class="memory-text">
     
        </p>
      </div>

    </div>

    <span class="page-number">09</span>

  </div>`,
  },
  {
    left: `
       <div class="page-content three-memory-page">

    <p class="kicker"></p>

    <h2 class="three-memory-title">
     
    </h2>

    <div class="memory-layout">

      <div class="memory-item memory-one">
        <div class="memory-polaroid">
          <img src="2.jfif" alt="Memory 1">
        </div>

        <p class="memory-text">   
        </p>
      </div>


      <div class="memory-item memory-two">
        <p class="memory-text">
        </p>

        <div class="memory-polaroid">
          <img src="1.jfif" alt="Memory 2">
        </div>
      </div>


      <div class="memory-item memory-three">
        <div class="memory-polaroid">
          <img src="3.jfif" alt="Memory 3">
        </div>

        <p class="memory-text">

        </p>
      </div>

    </div>

    <span class="page-number">09</span>

  </div>`,
    right: `
       <div class="page-content chapter-video-page">

    <p class="kicker"></p>

    <h2 class="video-title"></h2>

    <div class="video-polaroid landscape-video">
      <div class="video-photo">
        <video id="gfVideo" playsinline preload="metadata">
          <source src="ja.mp4" type="video/mp4">
        </video>

        <button
          class="video-play"
          id="videoPlay"
          type="button"
          aria-label="Play video">
          ▶
        </button>
      </div>

      <p class="video-caption"></p>
    </div>

    <p class="video-subcaption">
      one of my favorite momemnts with you
    </p>

    <span class="page-number">07</span>

  </div>`,
  },
  {
    left: `
 <div class="page-content final-collage-page">

  <div class="final-collage">

    <!-- TALL PHOTOBOOTH -->
    <div class="final-polaroid final-strip">
      <div class="final-photo">
        <img src="photobooth.jfif" alt="Our photobooth">
      </div>
      <p>our little memories</p>
    </div>

    <!-- NORMAL PHOTO 1 -->
    <div class="final-polaroid final-photo-one">
      <div class="final-photo">
        <img src="b.jfif" alt="">
      </div>
    </div>

    <!-- NORMAL PHOTO 2 -->
    <div class="final-polaroid final-photo-two">
      <div class="final-photo">
        <img src="a.jfif" alt="">
      </div>
    </div>

    <!-- PHOTO 3 -->
    <div class="final-polaroid final-photo-three">
      <div class="final-photo">
        <img src="j.jfif" alt="">
      </div>
    </div>

  </div>

  <span class="page-number">09</span>
</div>`,
      right: `
  <div class="page-content sp-page">

    <div class="sp-stage">
      <div class="sp-record"><div class="sp-label">✦</div></div>
      <div class="sp-polaroid">
        <div class="sp-tape"></div>
        <img src="jashang.jfif" alt="Her">
        <p class="handwritten sp-title">Be With You</p>
        <p class="sp-artist">The Ridleys</p>
      </div>
    </div>

    <div class="sp-controls">
      <div class="sp-bar"><span class="sp-dot">♥</span></div>
      <div class="sp-times"><span class="sp-now">0:00</span><span>3:24</span></div>
      <button class="sp-play" onclick="
        const p=this.closest('.sp-page');
        const a=p.querySelector('audio');
        if(a.paused){a.play();p.classList.add('playing');this.textContent='❚❚';}
        else{a.pause();p.classList.remove('playing');this.textContent='▶';}
      ">▶</button>
    </div>

    <audio src="songs/be.mp3" ontimeupdate="
      const p=this.closest('.sp-page');
      p.querySelector('.sp-dot').style.left=(this.currentTime/this.duration*100)+'%';
      const s=Math.floor(this.currentTime);
      p.querySelector('.sp-now').textContent=Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
    "></audio>

    <p class="handwritten sp-note">End of this chapter. Not the story.</p>
    <span class="page-number">10</span>
  </div>`
  }
];

let index = 0;
let isOpen = false;
let isAnimating = false;
let pointerStartX = 0;
let pointerStartY = 0;
let pointerActive = false;

function renderSpread() {
  pageLeft.innerHTML = spreads[index].left;
  pageRight.innerHTML = spreads[index].right;

  const current = String(index * 2 + 1).padStart(2, "0");
  const total = String(spreads.length * 2).padStart(2, "0");
  pageIndicator.textContent = `${current} / ${total}`;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === spreads.length - 1;
}

function openBook() {
  if (isOpen) return;
  isOpen = true;
  closedBook.classList.add("is-opening");
  openBookView.setAttribute("aria-hidden", "false");
  window.setTimeout(() => {
    openBookView.classList.add("visible");
    renderSpread();
  }, 280);
}

function turn(direction) {
  if (!isOpen || isAnimating) return;

  const target = index + direction;
  if (target < 0 || target >= spreads.length) return;

  isAnimating = true;
  spread.classList.remove("turning-left", "turning-right");
  void spread.offsetWidth;
  spread.classList.add(direction > 0 ? "turning-left" : "turning-right");

  window.setTimeout(() => {
    index = target;
    renderSpread();
  }, 335);

  window.setTimeout(() => {
    spread.classList.remove("turning-left", "turning-right");
    isAnimating = false;
  }, 700);

  swipeHint.classList.add("hide");
}

openButton.addEventListener("click", openBook);
prevBtn.addEventListener("click", () => turn(-1));
nextBtn.addEventListener("click", () => turn(1));

document.addEventListener("click", (event) => {
  const envelope = event.target.closest(".envelope");

  if (envelope) {
    const note = document.querySelector(".envelope-note");
    const message = document.querySelector(".note-message");

    if (!note || !message) return;

    message.textContent = envelope.dataset.message;
    note.classList.add("visible");
    note.setAttribute("aria-hidden", "false");
    return;
  }

  if (event.target.closest(".close-note")) {
    const note = document.querySelector(".envelope-note");

    if (!note) return;

    note.classList.remove("visible");
    note.setAttribute("aria-hidden", "true");
  }
});

document.addEventListener("keydown", (event) => {
  if (!isOpen) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openBook();
    }
    return;
  }

  if (event.key === "ArrowLeft") turn(-1);
  if (event.key === "ArrowRight") turn(1);
  if (event.key === "Escape") {
    // Intentionally does nothing: prevents accidental closing while browsing.
  }
});

spread.addEventListener("pointerdown", (event) => {
  if (isAnimating || event.pointerType === "mouse" && event.button !== 0) return;
  pointerActive = true;
  pointerStartX = event.clientX;
  pointerStartY = event.clientY;
  spread.setPointerCapture?.(event.pointerId);
});

spread.addEventListener("pointerup", (event) => {
  if (!pointerActive) return;
  pointerActive = false;

  const dx = event.clientX - pointerStartX;
  const dy = event.clientY - pointerStartY;

  // Horizontal intent must clearly exceed vertical intent.
  // This prevents normal vertical page gestures from changing pages.
  const horizontalIntent = Math.abs(dx) > Math.abs(dy) * 1.25;
  const swipeDistance = Math.max(55, Math.min(110, window.innerWidth * 0.13));

  if (!horizontalIntent || Math.abs(dx) < swipeDistance) return;

  if (dx < 0) turn(1);
  else turn(-1);
});

spread.addEventListener("pointercancel", () => {
  pointerActive = false;
});

renderSpread();

let activeAudio = null;
let activeSongCard = null;

document.addEventListener("click", (event) => {
  const card = event.target.closest(".song-card");

  if (!card) return;

  const file = card.dataset.song;

  /* Clicking the same song */
  if (activeSongCard === card && activeAudio) {

    if (activeAudio.paused) {
      activeAudio.play();
      card.classList.add("playing");
      setPlayingText(card);
    } else {
      activeAudio.pause();
      card.classList.remove("playing");

      const status = document.getElementById("songsPlaying");

      if (status) {
        status.innerHTML = "<span>♡</span> paused";
      }
    }

    return;
  }

  /* Stop previous song */
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
  }

  if (activeSongCard) {
    activeSongCard.classList.remove("playing");
  }

  /* Create audio */
  activeAudio = new Audio(file);
  activeSongCard = card;

  activeAudio.volume = 0.85;

  activeAudio.play()
    .then(() => {
      card.classList.add("playing");
      setPlayingText(card);
    })
    .catch(() => {
      const status = document.getElementById("songsPlaying");

      if (status) {
        status.innerHTML =
          "<span>♡</span> couldn't play this song";
      }
    });

  activeAudio.addEventListener("ended", () => {

    card.classList.remove("playing");

    const status = document.getElementById("songsPlaying");

    if (status) {
      status.innerHTML =
        "<span>♡</span> tap a song to play";
    }

    activeAudio = null;
    activeSongCard = null;
  });
});


function setPlayingText(card) {

  const title = card.querySelector(".song-title");
  const status = document.getElementById("songsPlaying");

  if (!title || !status) return;

  status.innerHTML =
    `<span>♡</span> now playing — ${title.textContent}`;
}

// =========================================
// POLAROID VIDEO PLAYER
// =========================================

document.addEventListener("click", (event) => {
  const button = event.target.closest("#videoPlay");

  if (!button) return;

  const video = document.getElementById("gfVideo");
  const photo = document.querySelector(".video-photo");

  if (!video || !photo) return;

  if (video.paused) {
    video.play();

    photo.classList.add("playing");
    button.textContent = "❚❚";
  } else {
    video.pause();

    photo.classList.remove("playing");
    button.textContent = "▶";
  }
});

document.addEventListener("ended", (event) => {
  if (event.target.id !== "gfVideo") return;

  const photo = document.querySelector(".video-photo");
  const button = document.getElementById("videoPlay");

  photo?.classList.remove("playing");

  if (button) {
    button.textContent = "▶";
  }
});

