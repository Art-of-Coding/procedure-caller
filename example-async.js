'use strict'

/*
  It's just as easy to use either Promises or async functions.
  This example shows an async function that gets a GitHub repo's metainfo from
  the GitHub API using gh-got. The response body is then returned.
  On the calling side we can treat it like a Promise, by using then().
 */

const ghGot = require('gh-got')
const ProcedureCaller = require('./index')

const pc = new ProcedureCaller()

pc.define('repo', async function (user, repo) {
  const response = await ghGot(`repos/${user}/${repo}`)
  return response.body
})

pc.call('repo', 'Art-of-Coding', 'procedure-caller').then(repo => {
  console.log(repo)
})
