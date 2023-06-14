
const express = require('express');
const { showFormDataPage } = require('../controllers/helperController');
const { showHomePage, showHome2Page, showHome3Page, showHome4Page, showFaqPage, showPrivacyPage, showGalleryPage, showAboutPage, showCoursePage, showCourseSinglePage, showEvent1Page, showEvent2Page, showEvent3Page, showTeacherSinglePage, showTeacher2Page, showTeacherPage, showBlogSinglePage, showBlogPage, showShopPage, showShopSinglePage, showContactPage, showContact2Page, showHomeP, showHome2 } = require('../controllers/pageController');

//init router 
const router = express.Router();
//create router
//home page router
router.get('/', showHomePage );
router.get('/home2', showHome2Page );
router.get('/home3', showHome3Page );
router.get('/home4', showHome4Page );
//pages page router
router.get('/about', showAboutPage);
router.get('/gallery', showGalleryPage);
router.get('/privacy',showPrivacyPage);
router.get('/faq', showFaqPage);
//course page router
router.get('/course', showCoursePage);
router.get('/course_single', showCourseSinglePage);
//Event pages router
router.get('/event1', showEvent1Page);
router.get('/event2', showEvent2Page);
router.get('/event3', showEvent3Page);
//teacher pages router
router.get('/teacher', showTeacherPage);
router.get('/teacher2', showTeacher2Page);
router.get('/teacher_single', showTeacherSinglePage);
//blog page router
router.get('/blog', showBlogPage);
router.get('/blog_single', showBlogSinglePage);
//shop page router
router.get('/shop', showShopPage);
router.get('/shop_single', showShopSinglePage);
//contact page router
router.get('/contact', showContactPage);
router.get('/contact2', showContact2Page);
//contact form data page router
router.post('/form_data', showFormDataPage);


//export router
module.exports = router;