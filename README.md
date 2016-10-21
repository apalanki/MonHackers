# GH6 Team Repository [![Build Status](https://travis-ci.com/apalanki/GH6.svg?token=zmTG4HkcpHLCYrQEdmn6&branch=master)](https://travis-ci.com/apalanki/GH6)
- This is a node + react based application
- Travis builds get deployed on every successful push
- Travis deploys the build to Dokku installed on Digital Ocean VM

## Digital Ocean Configuration
- Get Dokku App on Digital Ocean
- Generate SSH key and add that key for root access
- Run this command on DO: ```$ cat ~/.ssh/authorized_keys | sudo sshcommand acl-add dokku admin```
- Create app on Dokku: ```$ dokku apps:create <app name>```
- Enable Travis build for github project
- Add Dokku's private key on Travis
- Add Dokku's private key to GitHub Repo and enable read permissions for that key
- This should enable Travis to pick up new pushes to Github.

## Installation
Before you start you need to install nodejs with npm on your computer!

Install globally:
- gulp - task runner to automatize building process
- nodemon - helps to restart server application each time there is modification in watched file

## Build and run
- Locally: ```$ npm run dev```
- Prod: ```$ npm start```

## To Deploy
- ```$ git commit -m "<message>"```
- ```$ npm run deploy```

## House Rules
- Never use FORCE push
- Always pull for changes before pushing
