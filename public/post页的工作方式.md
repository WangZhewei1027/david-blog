通过 /post/[slug] 向这一页传递slug这个param，然后getBlogPost会去找同名的md。

这个过程中都是server组件，因为只有在server上能进行fs的读取。

通过递归的方式进行查询。

## 自己写的post需要遵循的guize

- 文件名无所谓，文件名就是slug字段，在获取和展示的过程中对用户都是隐藏的，不用管。
- post的组成是 {metadata, slug, content}

各种异常怎么处理？

如果没有metadata：忽略它，不加入post[]

https://chris.lu/web_development/tutorials/next-js-static-mdx-blog/optimizing-using-next-image

