#! /bin/bash
echo "adding known hosts"
echo -e "Host 159.203.169.240\n\tHostName 159.203.169.240\n\tUser dokku\n\tStrictHostKeyChecking no\n\tIdentityFile ~/.ssh/id_rsa\n" >> ~/.ssh/config
echo "adding dokku remote"
git remote add dokkuRemote dokku@159.203.169.240:it_homelessness
echo "pushing master to dokku"
git push dokkuRemote master