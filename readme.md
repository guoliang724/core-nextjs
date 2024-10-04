### Build a SSR application from scratch:

#### 1. build express server

#### 2. server render React
react component on the server side. 
```js
import Home from "./pages/Home"

// ReactDom.render(<Home/>,doucment.getElementById("app"));
```
##### Problems:
1. node.js cannot regnize jsx syntax and cannot use import by defualt;
   A: use webpack to compile, transer the `JSXs` to `createElement()`. Packages involved: `babel-loader` and `preset-react`;

2. react-dom is used for browser, not for node.js
   A: instead of ReactDom.render(), we use ReactDom.renderToString().

3. webpack will include react and other packages in its output, how to exclude node_modules?
   there is no neccessary to include backend packages into bundlejs. What front end need is just a html page.
   A: using `webpack-node-externals` to exclude node_modules
   
4. register a domEvent on the server side, while the code is passed to the client side, the event does not exist on the source code, why?
   A: The server side will display the original html(pure string). It does not have doms on it. We know that in React, events in JSX will be trasfer to the code: 
   ```
   dom.addEventListener('x',()=>{},false);
   ```
   however,there is no dom on server. Neither is the component life circle 

#### Client Render React
1. No doms and component life circle. How to solve it?
   ![avatar](/imgs/client-render.png)
   A: First of all, to request html page;
      on this html page, there should be a `<script>` to request js file.
      when js file reach the broswer,browser is to take over the subsequent process. 

2. The html structure on both side should be same. What is hydrate? what is the difference between render() and hydrate()?
   A: As the server has parsed each React element, on the client side, it does not have to be rendered again, where only events need to be added to. Instead of using render, using hydrate is more approperiate。
   (virtual dom is created, but real dom is not)
   ![avatar](/imgs/embedjs.png)


#### Introduce Style
##### Todo:
1. to be able to import a css file; 
2. to add a link element in html source page;

##### Problems:
1. Css-output need to be created only once, and classnames should be consistent within both side. How? 
   A. isomorphic-style-loader. Make sure that components are able to get accurate hase-named css by `className = {styles["name"]}`. 
   The client side needs to have a complete style dependecies, while the server side need not. However, make sure that each element className on both side are same.
2. add `<link>` tag into source html page to get the css file.

#### Introduce router
##### how to use router in server side
1. BrowserRouter run on the clinet regularly need dom. As it will operate browser API,like history.
   A: by using staticRouter.  
   ```
      <StaticRouter location = {location} content ={ content }></StaticRouter>
   ```