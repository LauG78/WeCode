## Git Commands ##
- Delete a branch locally
  - git branch -d BranchName
- See what files have conflicts during merge conflicts
 - git diff --name-only --diff-filter=U
- Get a colorfull nicely styled Git Log
  - git log --all --decorate --oneline --graph
## Github related ##
- Delete a branch from github
  - git push origin --delete BranchName
    - !!!NEVER DELETE THE MAIN OR PRODUCTION BRANCH PLEASE!!!
