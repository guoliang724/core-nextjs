The process of SSR:

####  Server Render React
Coding react component on the server side. 
##### Problems:
1. node.js cannot regnize jsx syntax and cannot use import by defualt;
   A: use webpack to compile, transer the JSXs to createElement(). Packages involved: `babel-loader` and `preset-react`;

2. react-dom is used for browser, not for node.js
   A: instead of ReactDom.render(), we use ReactDom.renderToString().

3. webpack will include react and other packages in its output, how to exclude node_modules?
   A: using `webpack-node-externals`. when react and other packages are done their works, we do not need it to exist on the output.
   
4. register a domEvent on the server side, while the code is passed to the client side, the event does not exist on the source code, why?
   A: The server side will display the original html(pure string). It does not have doms on it. We know that in React, events in JSX will be trasfer to the code: 
   ```
   dom.addEventListener('x',()=>{},false);
   ```
   however,there is no dom on server. Neither the component life circle 

#### Client Render React
##### why?
1. No doms and component life circle. How to solve it?
   ![avatar](/imgs/client-render.png)
   A: First of all, to request html page;
      Then, to request the server again on the behalf of js embedded in the html page.
      Then, the browser is to take over the subsequent process. 

2. The html structure on both side should be same. What is hydrate? what is the difference between render() and hydrate()?
   A: As the server has parsed each React element, on the client side, it does not have to be rendered again, where only events need to be added to. Instead of using render, using hydrate is more approperiate。

##### Practice：
1. principle: isomorphic rendering.
2. node_modules are needed in client side package.
3. client side package-output-js is requested from clinet and embedded in html tag
   ![avatar](/imgs/embedjs.png)



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


#### Introduce Images
1. server side need to handle imges as well, but it does not need to generate it again.
so, set file-loader emit option to false. 
2. how to deal with img imported in css by url()? As imges bundled, the path in url() is changed.Through public path.
