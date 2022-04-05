const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/tasklistresponse/applicationdetails/aboutyou/aboutyou-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var whereLive = req.session.data['detailsaboutyou']
  
    // Check whether the variable matches a condition
    if (whereLive == "yes"){
      // Send user to next page
      res.redirect('/tasklistresponse/applicationdetails/aboutyou/c8/start')
    } else {
      // Send user to ineligible page
      res.redirect('/tasklistresponse/applicationdetails/aboutyou/aboutyou-no')
    }
  
  });


  router.post('/tasklistresponse/applicationdetails/proceedings/courtproceedings-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var courtAnswer = req.session.data['courtproceedingsanswer']
  
    // Check whether the variable matches a condition
    if (courtAnswer == "yes"){
      // Send user to next page
      res.redirect('/tasklistresponse/applicationdetails/proceedings/courtproceedings')
    } else {
      // Send user to ineligible page
      res.redirect('/tasklistresponse/start')
    }
  
  })



module.exports = router
