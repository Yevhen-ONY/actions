const core = require('@actions/core');

function run() {
  const bucket = core.getInput('bucket', { required: true });
  const region = core.getInput('region', { required: true });
  const folder = core.getInput('folder', { required: true });

  core.notice(`Bucket = ${bucket}`)
  core.notice(`Region = ${region}`)
  core.notice(`Folder = ${folder}`)
}

run();
