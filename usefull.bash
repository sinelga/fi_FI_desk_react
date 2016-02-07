 
 mkdir version_00
 cd version_00
 
 
 mkdir version_24
 cd version_24
 cp -a ../version_23/. .
 
 

git add version_00 && git commit -m "Initial dist subtree commit"
git subtree push --prefix version_00  origin version_00

git add version_18 && git commit -m "Initial dist subtree commit"
git subtree push --prefix version_18  origin version_18

git add version_19 && git commit -m "Initial dist subtree commit"
git subtree push --prefix version_19  origin version_19

git add version_20 && git commit -m "Initial dist subtree commit"
git subtree push --prefix version_20  origin version_20

git add version_22 && git commit -m "Initial dist subtree commit"
git subtree push --prefix version_22  origin version_22

git add version_23 && git commit -m "Initial dist subtree commit"
git subtree push --prefix version_23  origin version_23

git add version_24 && git commit -m "Initial dist subtree commit"
git subtree push --prefix version_24  origin version_24
