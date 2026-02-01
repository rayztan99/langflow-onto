# OntoPiano: pull from github weekly, coding.
# Weekly sync
git remote -v
git fetch upstream
git checkout main
git merge upstream/main

# Daily dev (optional)
git checkout onto-feature
git rebase main
# ... coding/testing ...

# MacBook: do rsync and then git commit
cd ~/Applications/PIANO/langflow-onto

/usr/local/bin/rsync -avzh --delete \
  --info=progress2 \
  --exclude='.cursor/' \
  --exclude='.composio.lock' \
  --exclude='src/frontend/node_modules/' \
  --exclude='node_modules/' \
  -e 'ssh -p 9022' \
  raytan@ontopiano:/home/raytan/application/langflow-onto/ \
  .

source .venv/bin/activate
git status
git add . && git commit -m "..."
# if the above has any failed, redo the above line
git fetch origin
git push --force-with-lease origin onto-feature
