#!/usr/bin/env node
import childProcess from 'child_process'
import yargs from 'yargs'
import moment from 'moment'
import chalk from 'chalk'

let nloopArgs = yargs
  .usage(`Usage: nloop -n [num] -m -- <command to execute>`)
  .alias('n', 'Number of iterations')
  .alias('m', 'Enable multi-thread')
  .option('m')
  .boolean('m')
  .default('m', false)
  .demandOption(['n']).argv

const iterations = parseInt(nloopArgs.n.toString(), 10)
if (!iterations || isNaN(iterations)) {
  process.stdout.write('Invalid loop count')
  process.exit(1)
}

const command = nloopArgs._.join(' ')

if (nloopArgs.m) {
  for (var i = 0; i < iterations; i++) {
    childProcess.exec(command, (err, stdout, stderr) => {
      if (err) {
        process.stderr.write(err.message)
      }
      if (stdout) {
        process.stdout.write(stdout)
      }
      if (stderr) {
        process.stderr.write(stderr)
      }
    })
  }
} else {
  for (let i = 0; i < iterations; i++) {
    childProcess.execSync(command, { stdio: 'inherit' })
  }
}
