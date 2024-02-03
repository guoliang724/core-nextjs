The process of SSR:

####  Server Render React
##### Problems to solve:
1. import and require;
2. react-dom can not be used in node.js;
3. webpack default target is browser.(change to node);
4. node_modules is not needed to packed to the client side;
5. dev build ==> dev start. Two commands run separately.
##### Solutions:
1. use webpack to compile;

4. using webpack-node-externals to exclude the node_modules folder.
5. npm-run-all. Run commands in parallel.
   
##### Practice:
1. "react-dom": reactDom.render ==> "react-dom/server": reactDom.renderToString;\
   

#### Client Render React
##### why?
1. the server side does not have a dom. As we know, events in react are delegated by document.Therefore, there are no events and react lifecircle. 
2. ![avatar](/imgs/client-render.png)

##### Practice：
1. principle: isomorphic rendering.
2. node_modules are needed in client side package.
3. client side package-output-js is requested from clinet and embedded in html tag
   ![avatar](/imgs/embedjs.png)
4. why is ReactDOM.hydrate, not ReactDOM.render? 
Because,server has rendered alread. client is only to regestier events.(take over interaction).No need to reRender.


##### Problems:
1. To obivate client caches,the output js file got to has hash. Consequently,the name of js file is not foretell. How to embedd it in the script tag?
 ![avatar](/imgs/hashNamedjs.png)
  ![avatar](/imgs/embedjs.png)

##### Solution:
1. By using fs module, read the file name synchronously. 


#### Introduce Style
##### Todo:
1. generate css file;
2. add a link element in source page;

##### Problems:
1. css bundle only need to be created only once, and classnames should be consistent with both side in source html. How? 
2. have yet to link css file to socur html 
##### Soultions:
1.  isomorphic-style-loader. Make sure that component is able to get accurate hase-named css by `className = {styles["name"]}`. 
2. by getLinks function as getScripts do. 