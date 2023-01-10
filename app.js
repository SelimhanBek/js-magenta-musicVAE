const process = require("process");
const mvae = require("@magenta/music/node/music_vae");
const core = require("@magenta/music/node/core");

const model = new mvae.MusicVAE(
  "https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_2bar_small"
);

model.initialize().then(() => model.sample(1).then(() => {
    console.log(model);
}));

process.stdin.resume();

// const player = new core.Player();
// model
//   .initialize()
//   .then(() => model.sample(1))
//   .then((samples) => {
//     player.resumeContext();
//     player.start(samples[0]);
//   });
