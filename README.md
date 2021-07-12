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