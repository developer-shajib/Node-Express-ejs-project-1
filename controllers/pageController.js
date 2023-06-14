const {json} = require('express');
const { readFileSync } = require('fs');
const path = require('path');

//show Home page page
const showHomePage = (req,res)=>{
    res.render('index');
}
const showHome2Page = (req,res)=>{
    res.render('index-2');
}
const showHome3Page = (req,res)=>{
    res.render('index-3');
}
const showHome4Page = (req,res)=>{
    res.render('index-4');
}
//show pages page
const showAboutPage = (req,res)=>{
    res.render('about')
}
const showGalleryPage = (req,res)=>{
    res.render('gallery')
}
const showPrivacyPage = (req,res)=>{
    res.render('policy')
}
const showFaqPage = (req,res)=>{
    res.render('faq')
}
//course page controller
const showCoursePage = (req,res)=>{
    res.render('courses');
}
const showCourseSinglePage = (req,res)=>{
    res.render('courses-single');
}
//event page controller
const showEvent1Page = (req,res)=>{
    res.render('events');
}
const showEvent2Page = (req,res)=>{
    res.render('events-2');
}
const showEvent3Page = (req,res)=>{
    res.render('events-single');
}
//teacher pages controller
const showTeacherPage = (req,res)=>{
    const teacherList = readFileSync(path.join(__dirname,'../db/teacher.json'));
    res.render('teachers',{
        teacherList : JSON.parse(teacherList.toString())
    });
};
const showTeacher2Page = (req,res)=>{
    res.render('teachers-2');
};
const showTeacherSinglePage = (req,res)=>{
    res.render('teachers-single');
};
//blog pages controller
const showBlogPage = (req,res)=>{
    res.render('blog');
};
const showBlogSinglePage = (req,res)=>{
    res.render('blog-single');
};
//shop page controller
const showShopPage = (req,res)=>{
    res.render('shop');
};
const showShopSinglePage = (req,res)=>{
    res.render('shop-single');
};
//contact page controller
const showContactPage = (req,res)=>{
    res.render('contact');
};
const showContact2Page = (req,res)=>{
    res.render('contact-2');
};




module.exports = {
    showHomePage,
    showHome2Page,
    showHome3Page,
    showHome4Page,
    showAboutPage,
    showGalleryPage,
    showPrivacyPage,
    showFaqPage,
    showCoursePage,
    showCourseSinglePage,
    showEvent1Page,
    showEvent2Page,
    showEvent3Page,
    showTeacherPage,
    showTeacher2Page,
    showTeacherSinglePage,
    showBlogPage,
    showBlogSinglePage,
    showShopPage,
    showShopSinglePage,
    showContactPage,
    showContact2Page

}