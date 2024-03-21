npm init -y
npm install typescript ts-node-dev ts-node @types/node -D

mkdir src docs build test config
type nul > src\index.ts
type nul > .gitignore
echo node_modules >> .gitignore
type nul > config\.development.env
echo PORT=3000 >> config\.development.env
echo HOST=localhost >> config\.development.env

mkdir src\controller src\model src\view
type nul > src\controller\indexController.ts
type nul > src\model\indexModel.ts
type nul > src\view\indexView.ts
