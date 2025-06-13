调试webpack的记录，当前还没看完，只是记录在羽雀， 后面看完了会在这里补一个流程图

https://www.yuque.com/jiaowobiaobiaojiuhaole/gabc5d/rcwxcy0hss4gf2rr

# 安装依赖
cd webpack
yarn install
yarn link

cd ../

cd test-app
yarn install
yarn link webpck


cd ../

cd webpack-cli/packages/webpack-cli
yarn install
yarn link

yarn global add ndb




# 调试
cd test-app

ndb webpack

https://juejin.cn/column/6978684601921175583