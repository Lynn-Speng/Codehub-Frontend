# 接口文档

* /api/courses
    * GET 请求
    * 返回一个列表，即所有的课程列表
    * eg: 
```json
[
	{
		id: 1,
		title: "C++ 入门",
		description: "这是一门 C++ 入门课程",
		cover: "the.url.of.the.cover.of.this.course"
	}，
	{
		id: 2,
		title: "Python 入门",
		description: "这是一门 Python 入门课程",
		cover: "the.url.of.the.cover.of.this.course"
	}，
	{
		id: 3,
		title: "Java 入门",
		description: "这是一门 Java 入门课程",
		cover: "the.url.of.the.cover.of.this.course"
	}
]
```
备注：```cover``` 是课程的封面图片地址

* /api/courses?q=<searchContent>
    * 	GET 请求
    * 	返回一个列表，即根据```<searchContent>```搜索后的课程列表
    * 	eg: 请求 /api/courses?q=c ， 返回如下:
```json
[
	{
		id: 1,
		title: "C++ 入门",
		description: "这是一门 C++ 入门课程",
		cover: "the.url.of.the.cover.of.this.course"
	}，
	{
		id: 4,
		title: "C 入门",
		description: "这是一门 C 入门课程",
		cover: "the.url.of.the.cover.of.this.course"
	}，
	{
		id: 15,
		title: "Basic 入门",
		description: "这是一门 Basic 入门课程",
		cover: "the.url.of.the.cover.of.this.course"
	}
]
```

备注： 搜索内容不区分大小写，对搜索结果顺序无特殊要求。

* /api/course?id=<courseId>

    * GET 

    * 返回一个对象，即与```<courseId>``` 匹配的课程对象，其结构可参考下面的例子

    * eg: 
```json
{
	id: 1,
    title: "C++ Starter",
    description: "Fugiat excepteur ipsum aute veniam quis fugiat.",
    chapters: [
		{
            title: "Chapter 1",
            discription: "Eiusmod nulla amet ut magna proident cillum dolor do labore.",
            lectures: [
                {
                    title: "Lecture 1",
                    url: "/jupyter"
                },
                {
                    title: "Lecture 2",
                    url: "/jupyter"
                },
                {
                    title: "Lecture 3",
                    url: "/jupyter"
                }
            ]
		},
		{
            title: "Chapter 1",
            discription: "Eiusmod nulla amet ut magna proident cillum dolor do labore.",
            lectures: [
                {
                    title: "Lecture 4",
                    url: "/jupyter"
                },
                {
                    title: "Lecture 5",
                    url: "/jupyter"
                },
                {
                    title: "Lecture 6",
                    url: "/jupyter"
                },
                {
                    title: "Lecture 7",
                    url: "/jupyter"
                }
            ]
		},
		{
            title: "Chapter 1",
            discription: "Eiusmod nulla amet ut magna proident cillum dolor do labore.",
            lectures: [
                {
                    title: "Lecture 8",
                    url: "/jupyter"
                },
                {
                    title: "Lecture 9",
                    url: "/jupyter"
                }
            ]
		}    
	]
}
```

备注：该对象的```chapters``` 属性为一个列表， 其中的每一个元素为一个对象，记作```chapter``` ，```chapter``` 的 ```lectures``` 属性为一个列表，其中的每一个元素为一个对象，记作```lecture``` ， ```lecture``` 中的 ```url``` 属性为该课时对应的 ```jupyter``` 跳转链接， **是一个网址**

* /api/notices

    * GET

    * 返回一个列表，即所有的通知列表

    * eg: 

```json

```
