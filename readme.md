## 0. SSR Build From Scratch

- **SSR vs. CSR**
- **Build SSR**
  - **Set up express server**
  - **Webpack build from server and client side**
    - **Server to render React**
    - **Client to render React**
    - **Adding styles**
    - **Using Route**
    - **Using Redux**
    - **Server Data Loading**
- **Traditional SSR's 'Hydration Pain Points'**
- **RenderToString**
- **renderToPipeableString** 
- **Pre-render Service**


## 1. Server Rendering & RSC Architecture

- **Client Components vs. Server Components**
- **SSR (Server-Side Rendering) vs. RSC (React Server Components)**
- **Partial Updates in Next.js**
- **RSC Payload:** The Network-Serialized Virtual DOM
- **Server Rendering Strategies:** Dynamic, Static, and Streaming

## 2. Routing System

- **Loading and Error UI Handling** (`loading.tsx`, `error.tsx`)
- **Under the Hood:** How React `<Suspense>` Works
- **Data Structure:** RSC Payload in Routing
- **Dynamic Routes**
- **Static Generation:** `generateStaticParams`
- **Parallel Routes**
- **Intercepting Routes**
- **Routing Redirects**

## 3. Image Optimization (`next/image`)

- **Under the Hood:** What Happens During Image Optimization
- **Display Physics:** Physical Pixels vs. CSS Pixels
- **Layout Stability:** Why `width` and `height` Are Required

## 4. Caching Mechanism

- **Level 1 (Baseline Rules):** The 4-Layer Caching Architecture
- **Level 2 (Dynamic Invalidation):** On-Demand Control via `revalidatePath` & `revalidateTag`

## 5. Client-Server Data Exchange

- **Server Actions**
  - Concept & Definition
  - Usage Patterns
  - Core Benefits & Advantages
  - Underlying Mechanism
- **RSC Payload Data Transfer**
- **How Next.js Patches `fetch` on the Server Side**

## 6. Middleware and Edge Runtime
  - Middleware in nextjs and .net
  - Nodejs vs Edge runtime