##  Server Render React
### Problems to solve
1. import and require;
2. react-dom can not be used in node.js;
3. webpack default target is browser.(change to node);
4. node_modules is not needed to packed to the client side;
5. dev build ==> dev start. Two commands run separately.
### Solutions:
1. use webpack to compile;

4. using webpack-node-externals to exclude the node_modules folder.
5. npm-run-all. Run commands in parallel.
### Practice:
1. "react-dom": reactDom.render ==> "react-dom/server": reactDom.renderToString;\
   

