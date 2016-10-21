#! /bin/bash
echo "adding known hosts"
echo -e "Host 104.236.202.220\n\tHostName 104.236.202.220\n\tUser dokku\n\tStrictHostKeyChecking no\n\tIdentityFile ~/.ssh/id_rsa\n" >> ~/.ssh/config
echo "adding dokku remote"
git remote add dokkuRemote dokku@104.236.202.220:gh6
echo "pushing master to dokku"
git push dokkuRemote master