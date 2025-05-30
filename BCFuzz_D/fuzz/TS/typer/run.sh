npm config set proxy http://127.0.0.1:8006
npm config set https-proxy http://127.0.0.1:8006
sudo npm install -g typescript --registry https://registry.npm.taobao.org
npm config set registry http://registry.npm.taobao.org

npm outdated
# 可以根据outdated的结构，手工修改package.json中对应module的版本
# 然后执行 npm install更新module
npm update


npm config delete proxy
npm config delete https-proxy
npm config delete registry