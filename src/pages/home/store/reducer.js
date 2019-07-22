
import {fromJS} from 'immutable'
const defaultState=fromJS({
    topicList:[{
        id:1,
        title:'社会热点',
        imgUrl:''
    }],
    articleList:[{
        id:1,
        title:'朋友副业都1万加了，而我还在小公司混着',
        desc:'几个老相识的朋友，一年一度的聚会又开始了。边吃边聊，海阔天空。聊着聊着就聊到收入这一块。 “你今年又赚了不少吧？” “没...',
        imgUrl:'//upload-images.jianshu.io/upload_images/10975150-09eab74644d0cd90.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id:2,
        title:'朋友副业都1万加了，而我还在小公司混着',
        desc:'几个老相识的朋友，一年一度的聚会又开始了。边吃边聊，海阔天空。聊着聊着就聊到收入这一块。 “你今年又赚了不少吧？” “没...',
        imgUrl:'//upload-images.jianshu.io/upload_images/10975150-09eab74644d0cd90.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id:3,
        title:'朋友副业都1万加了，而我还在小公司混着',
        desc:'几个老相识的朋友，一年一度的聚会又开始了。边吃边聊，海阔天空。聊着聊着就聊到收入这一块。 “你今年又赚了不少吧？” “没...',
        imgUrl:'//upload-images.jianshu.io/upload_images/10975150-09eab74644d0cd90.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id:4,
        title:'朋友副业都1万加了，而我还在小公司混着',
        desc:'几个老相识的朋友，一年一度的聚会又开始了。边吃边聊，海阔天空。聊着聊着就聊到收入这一块。 “你今年又赚了不少吧？” “没...',
        imgUrl:'//upload-images.jianshu.io/upload_images/10975150-09eab74644d0cd90.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
]

 
})

export default (state=defaultState,action={})=>{
    switch(action.type){
        default:
            return state;
    }
    
}