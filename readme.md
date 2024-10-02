### Benefits of Next.js

- Different Rendering Techniques
   1. Static Site Generation
   2. Server Side Rendering
   3. Incremental Site Regneration

- Performance  
   1. code splitting
   2. Minifying files
   3. Image Optimazation
   4. Pre-fethching assets
   
- File Based Routing
   1. minifying files

- SEO
- Serveless Functions


### Next.js Routing

- Index routes
- Nested routes
- dynamic routes

#### Two rules of routing:
1. pages needs to be a React Component;
2. Components needs to be exported by default

#### Linking:
1. Non-dynamic/known pages: `<Link to="items">` 
2. Dynamic pages: `<Link to="items/<value>">`


#### Pre-rendering:
<strong>Nextjs</strong>
![avatar](/imgs/pre-rendering.png)
<strong>Plain React App</strong>
![avatar](/imgs/react-plain-render.png)


#### Data fetching:
##### 1. Static Generation(SSG)
- HTML is generated at Build time(Pre-download)
- without external data
- with external data
   1. fethc data
   2. then HTML is rendered

##### 2. Incremental Site Regeneration(ISP)
- getStaticProps with revalidate
- HTML is generated at a specific interval
 

##### 3. Server-side rendering(SSR)
- new HTML is generated for every request

##### getStaticProps:
<strong>rules:</strong>
1. can only be exported from a page file
2. meant for all routes
- only runs at build time
- only runs on server side
- will not be included in client bundle
- on dev, runs on client and server side

##### getStaticPaths:
<strong>rules:</strong>
1. can only be exported from a page file
2. meant for dynamic routes
3. page must also implement getStaticProps
- only runs at build time
- only runs on server side
- will not be included in client bundle
- on dev, runs on client and server side

###  Server Render React
Coding react component on the server side. 
##### Problems:
1. node.js cannot regnize jsx syntax and cannot us e import by defualt;
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
1. No doms and component life circle. How to solve it?
   ![avatar](/imgs/client-render.png)
   A: First of all, to request html page;
      Then, to request the server again on the behalf of js embedded in the html page.
      Then, the browser is to take over the subsequent process. 

2. The html structure on both side should be same. What is hydrate? what is the difference between render() and hydrate()?
   A: As the server has parsed each React element, on the client side, it does not have to be rendered again, where only events need to be added to. Instead of using render, using hydrate is more approperiate。
   ![avatar](/imgs/embedjs.png)


#### Introduce Style
##### Todo:
1. to be able to import a css file;
2. to add a link element in html source page;

##### Problems:
1. Css-output need to be created only once, and classnames should be consistent within both side. How? 
   A. isomorphic-style-loader. Make sure that components are able to get accurate hase-named css by `className = {styles["name"]}`. 
   The client side needs to have a complete style dependecies, while the server side need not. However, make sure that each element className on both side are same.
2. To dynamically link css file to socur html and js can do it.

#### Introduce router
##### how to use router in server side
1. BrowserRouter run on the clinet regularly need dom. As it will operate browser API,like history.
   A: by using staticRouter.  
   ```
      <StaticRouter location = {location} content ={ content }></StaticRouter>
   ```