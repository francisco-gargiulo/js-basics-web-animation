function renderElement(tag, parent, src, cssClass) {
  const element = document.createElement(tag);

  if (cssClass) {
    element.classList.add(cssClass);
  }

  element.src = src;

  return document.getElementById(parent).appendChild(element);
};

function animateElement(element, frame, duration, delay, easing, direction) {
  const keyframes = {
    player: [{
      transform: "translateX(0)"
    }, {
      transform: "translateX(-100%)"
    }],
    cloud: [{
      transform: "translateX(0)"
    }, {
      transform: "translateX(-740px)"
    }],
    scenary: [{
      transform: "translateX(0)"
    }, {
      transform: "translateX(-640px)"
    }]
  }

  const options = {
    duration: duration,
    playbackRate: 1,
    iterations: Infinity
  }

  if (easing) {
    options.easing = easing;
  }

  if (direction) {
    options.direction = direction;
  }

  if (delay) {
    options.delay = delay;
  }

  const animation = element.animate(keyframes[frame], options);

  return animation;
};

function renderElements() {
  const cloudImg = "./img/super-mario_background--cloud.png";
  const marioStripeImg = "./img/super-mario_sprites.png";

  return [renderElement("img", "clouds", cloudImg, 'small'),
  renderElement("img", "clouds", cloudImg, 'medium'),
  renderElement("img", "clouds", cloudImg, 'big'),
  renderElement("img", "player", marioStripeImg)];
}

function init() {
  const [smallCloud,
    mediumCloud,
    bigCloud,
    player] = renderElements();

  const background = document.getElementById('background');
  const ground = document.getElementById('ground');

  animateElement(smallCloud, 'cloud', randomNumber(10000, 15000), randomNumber(1000, 5000));
  animateElement(mediumCloud, 'cloud', randomNumber(4000, 6000), randomNumber(1000, 5000));
  animateElement(bigCloud, 'cloud', randomNumber(3000, 4000), randomNumber(1000, 5000));
  animateElement(player, 'player', 500, 0, "steps(3, end)", "reverse");
  animateElement(background, 'scenary', 8000);
  animateElement(ground, 'scenary', 7000);
};

function togglePlay() {
  document.getElementById('frame')
    .getAnimations({ subtree: true })
    .forEach(animation => {
      if (animation.playState === "running") {
        animation.pause();
      } else {
        animation.play();
      }
    });
}
