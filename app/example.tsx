// const { signal } = new AbortController()

// async function getItem() {
//     // The `fetch` function is automatically memoized and the result
//     // is cached
//     const res = await fetch('https://.../item/1', { signal })
//     return res.json()
//   }

//   // This function is called twice, but only executed the first time
//   const item = await getItem() // cache MISS

//   // The second call could be anywhere in your route
//   const item = await getItem() // cache HIT
