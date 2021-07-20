# React Node.js Full Stack Blog App 

### with the help of tutorial series by [Lama Dev](https://www.youtube.com/watch?v=tlTdbc5byAs&list=PLj-4DlPRT48lGpll2kC4wOsLj7SEV_lYu)

- [Multer package](https://www.npmjs.com/package/multer)
> .single(__fieldname__) Accept a single file with the name fieldname. The single file will be stored in __req.file__.

```javascript
 var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
```
 
var upload = multer({ storage: storage })

### New things learned:

- when creating mongoose schema it is useful to use ``{ timestamps: true }`` to automatically manage createdAt and updatedAt properties on your documents

- when I was getting this error: "TypeError: Router.use() requires a middleware function but got a Object" the problem was that I forgot to export my auth.js file (by typing module.exports = router)

- when you want to hide the text after 4 lines with CSS only:
```css 
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
```

- use "autoFocus="true" in **input** html tag if you want to automatically focus after refreshing the page

- in order to convert "createdAt" date to the normal date: "new Date(post.createdAt).toDateString()"

- The **useLocation** hook helps us to access the location object, which contains the current URL location, search property.