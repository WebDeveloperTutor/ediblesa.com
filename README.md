# Victory Lane SA Website Redesign



### Setup (c9.io)
- Fork the base repo on your github account from `https://github.com/WebDeveloperTutor/ediblesa.com`
- Using git, clone from your fork to your c9.io environment and then `cd` into the new directory (working directory)
- If you don't already have the gulp-cli installed run `npm install -g gulp-cli`
- If you don't already have jekyll 3.4.3 installed run `gem install jekyll -v '3.4.3'`
- Run `npm install` to install the local dependencies
- Run `gulp` in the working directory of the project
- Preview the running application to verify all works

### Getting updates from base repository (Syncing a fork)
1. List the current configured repository for your fork, run `git remote -v` 
2. Specify a new remote `upstream` repository that will be synced with the fork, run `git remote add upstream https://github.com/WebDeveloperTutor/ediblesa.com.git`
3. Verify the new `upstream` repository you've specified for your fork, run `git remote -v`
4. Fetch from the `upstream` repository, run `git fetch upstream` (**Repeat steps 4 - 7 every time before starting your work**)
5. Run, `git checkout gh-pages` in the case you are in a different branch
6. Run, `git log gh-pages..upstream/gh-pages` or `git diff  gh-pages upstream/gh-pages` to see any new changes in the base repo
7. Only do this if new changes are found in the base repo, run `git merge upstream/gh-pages`

### Creating a pull request after you make a contribution to your local fork
- After you commit any local changes and have push them to your fork, open the forked repository's page on your github account
- Create a Pull Request to submit your changes to be reviewed by the admin of the base repo
- If all works, the admin will notify you that your changes were merged successfully


#### References
[Configuring a remote fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)

[Syncing a fork](https://help.github.com/articles/syncing-a-fork/)

[Find changes](https://stackoverflow.com/questions/10678495/where-to-find-changes-due-to-git-fetch?answertab=active#tab-top)



