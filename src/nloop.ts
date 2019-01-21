#!/usr/bin/env node
import childProcess from 'child_process'
import moment from 'moment'
import chalk from 'chalk'

const nloopArgs = process.argv

const iterations = parseInt(nloopArgs[2], 10)

if (!iterations || isNaN(iterations)) {
  process.stdout.write('Invalid loop count')
  process.exit(1)
}

nloopArgs.splice(0, 3)

const command = nloopArgs.join(' ')

for (let i = 0; i < iterations; i++) {
  childProcess.execSync(command, { stdio: 'inherit' })
}
