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


 


#### Routing & page Rendring
- not-found.js  to handle route error in the folder or nest folder
- content code error should be handle within the code.for example property null error
- error.js could also handle this error type
##### - Paraller rotuing
![avatar](/imgs/paralle-route.png)
![avatar](/imgs/paralle-page.png)
- default.js could solve the inconsistence
##### -catch all route
`[[...filter]]`
- params.filter will be an array
- it may conflicts with some route like page.js
  1. merge them into one;
  2. differenciate pages by params.filter
##### - intercepting route
##### - route groups
##### - middleware




#### Caching:
Nextjs Performs Aggressive Caching
- Request Memorization: avoid duplicate data fetches
  1. the same request(same configuration) across the application will be stored. 
- Date Cache: avoid unnecessary requests to the data source
  1. set revalidate to a number. the duration;(file-wide)
  2. set dynamic to a string value.the refresh patten.(`force-dynamic`,`force-static`) (file-wide)
  3. `unstable_noStore()`,component-wide
   
- Full route Cache: avoid unnecessary HTML render cycles & data fetches
  1. stores the rendered HTMl & RSC at build time;
  2. revalidate to refresh cache
  3.  set dynamic to a string value.the refresh patten.(`force-dynamic`,`force-static`) (file-wide)
   ![avatar](/imgs/static-prerender.png)
  4. `revalidatePath()`
- Router cache
 
##### on demand cache invalidation with revalidatePath and revalidateTag
- `revalidatePath()`
- `revalidateTag()`: set a tag group in fetch configuration to clear cache