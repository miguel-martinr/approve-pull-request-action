'use strict'

const core = require('@actions/core')
const github = require('@actions/github')

const main = async () => {
  const token = core.getInput('github-token')
  const octokit = github.getOctokit(token)

  const repoObject = github.context.repo
  const prOwner = github.context.payload.pull_request.user.login

  // Approve PR only if the PR is created by the owner of the repo
  if (repoObject.owner !== prOwner) {
    core.info('PR is not created by the owner of the repo')
    return
  }

  core.info(`Approving PR since it is created by the owner of the repo: prOwner: ${prOwner}, repoOwner: ${repoObject.owner}`)

  const prNumber = github.context.payload.pull_request.number

  await octokit.rest.pulls.createReview({
    ...repoObject,
    pull_number: prNumber,
    event: 'APPROVE'
  })
}

main().catch(err => core.setFailed(err.message))
