live-server --no-browser --entry-file=index.html
 
 mkdir version_00
 cd version_00
 
 
 mkdir version_24
 cd version_24
 cp -a ../version_23/. .
 
 

git add version_00 && git commit -m "Initial dist subtree commit"
git subtree push --prefix version_00  origin version_00


