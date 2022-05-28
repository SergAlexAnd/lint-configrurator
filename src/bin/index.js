#!/usr/bin/env node

import program from "commander";
// { prompt } = require('inquirer'),
// chalk = require('chalk'),
// fs = require('fs')

// eslint-disable-next-line import/extensions
import { version } from "../../package.json";

program
  .version(version)
  .description("Lint configuration files creator.")
  .parse(process.argv);

if (!program.args.length) program.help();
