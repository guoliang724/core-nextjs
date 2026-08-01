## Router APP

### Pre-rendering:

<strong>Nextjs</strong> ![avatar](/imgs/pre-rendering.png)
<strong>React App</strong> ![avatar](/imgs/react-plain-render.png)

### Next.js Routin

#### - Paraller rotuing

![avatar](/imgs/paralle-route.png)

#### -catch all route

`[[...filter]]`

#### - intercepting route

`()image`

#### - route groups

- it does not account for a route within an url
- every route group has its layout.tsx
- only main page group has page.tsx
- other files in the same level like no-found,error page should be included in one of the group
  `(content)`, under it, there is no page.tsx
  `(marketing)`, this is main page and it has page.tsx

### Data mutation:

##### Server Actions:

- number one way to change data in a next app
- browser send form info to server
- the excute the server action
- send requested data back to browser

```js
const async createSnippet(code:string, formDate:FormDate){
   const title = formDate.get('tile') as string;
   // do something db actions
   const newSnippet = await db.snippet.create({
    data: {title,code}

   })
   redirect('/')
}
```

```js
/* with parameters */
onst createSinppet = createSnippet.bind(null,code);
<form action="{createSnippet}"></form>
```

- Traditional request:
  ![avatar](/imgs/traditional-request.png)
- Nextjs request:
  ![avatar](/imgs/next-request.png)

##### Error handling with Server Actions

- **a big point of forms is thaat they can work without js in the browser**
- forms in our pages are sending info to a server action
- we need to somehow communicate info from a server action **back to a page**
- React-dom contains a hook called `useFormState` specifically for this.
  (similiarly in .net mvc, how server validation return errors to browser)
- when useFormState with a {mesage:' '} object in a client component, it will embedded the message into the html and send the formData(the message also included) into the server, and then it will return a new html with the error message

```js
const [formState,action] = useFormState(createSnippet,{message:""})
<form aciton='action'></form>
```

- when the server action throw an error, define a error.tsx page or catch the error

### Caching:

Nextjs Performs Aggressive Caching

- **Request Memorization**: avoid duplicate data fetches
  1. the same request(same configuration) across the application will be stored.
- **Date Cache**: avoid unnecessary requests to the data source
  1. set revalidate to a number. the duration;(file-wide)
  2. set dynamic to a string value.the refresh
     patten.(`force-dynamic`,`force-static`) (file-wide)
  3. `unstable_noStore()`,component-wide
- **Full route Cache**: avoid unnecessary HTML render cycles & data fetches
  1. stores the rendered HTMl & RSC at build time;
  2. revalidate to refresh cache
  3. set dynamic to a string value.the refreshpatten.(`force-dynamic`,`force-static`) (file-wide)
     ![avatar](/imgs/static-prerender.png)
  4. `revalidatePath()`

#### change static route to dynamic route:

- calling a 'dynamic function' or referencing a 'dynamic variable' when you
  route renders:
  1. `cookie.set()`,`cookies.delete`,`useSearchParams()`,`searchParams props`
- assigning specific 'route segment config' options:
  1. `export const dynamic = 'force-dynamic'`,`export const revalidate = 0`
- Calling `fetch` and opting out of caching of the response
  1. `fetch('...',{next:{revalidate:0}})`
- Using a dynamic route
  1. `/news/[id]/page.tsx`
  2. `/news/[id]/edit/page.tsx`

##### change dynamic page to static page:

- will render each page and cache them
- by using generateStaticPath
- it is a pure production mode

![avatar](/imgs/dynamictostatic.png)

```js
 // inside the [id]/page.tsx
  export async function generateStaticParams(){
   const allNews = await db.news.findMany();
   return allNews.map((new)=>{
      return {
         id:news.id // must be a string
      }
   })
  }
```

![avatar](/imgs/multiple-id-page.png)

##### Several ways to control caching

- Time-based: every x seconds, ignore the cached response and fetch new data;
- On-demand: Forcibly purge a cached reponse;
- Disable Caching: Do not do any caching at all

##### on demand cache invalidation with revalidatePath and revalidateTag

- `revalidatePath()`
- `revalidateTag()`: set a tag group in fetch configuration to set cache to `stale` status

##### third party to manipulate data

- cach() from `react` to wrappe the server action to make it a request cachable
- nostable_cach from `next/cach` to wrappe the cach() to make it a data cachable
