const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    category_id: [mongoose.Schema.Types.ObjectId],
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    social_profile:{
        linkedin: String,
        github: String,
        twitter: String,
        facebook: String,
        instagram: String
    },
    adresses:[
        {
            line1: String,
            city: String,
            state: String,
            pincode: String
        }
    ],
    blog_id: mongoose.Schema.Types.ObjectId,
}
);

const categorySchema = new mongoose.Schema({
    name: String,
}
);

const commentSchema = new mongoose.Schema({
    message: String,
    rating: Number,
    user_id: mongoose.Schema.Types.ObjectId,
    blog_id: mongoose.Schema.Types.ObjectId
}
);

const likeSchema = new mongoose.Schema({
    emoji: String,
    user_id: mongoose.Schema.Types.ObjectId,
    blog_id: mongoose.Schema.Types.ObjectId
}
);

const Blog = mongoose.model('Blog', blogSchema);
const User = mongoose.model('User', userSchema);
const Category = mongoose.model('Category', categorySchema);
const Comment = mongoose.model('Comment', commentSchema);
const Like = mongoose.model('Like', likeSchema);
