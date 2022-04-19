const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'


  router.post('/tasklistresponse/safetyconcerns/riskofharm/childrenabuse-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var childAbuse = req.session.data['abuse']

      // Check whether the variable matches a condition
      if (childAbuse == "yes"){
        // Send user to next page
        res.redirect('/tasklistresponse/safetyconcerns/riskofharm/description')
      } else {
        // Send user to ineligible page
        res.redirect('/tasklistresponse/start')
      }

    });

    router.post('/tasklistresponse/safetyconcerns/riskofharm/start-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var respAbuse = req.session.data['abuse']

        // Check whether the variable matches a condition
        if (respAbuse == "yes"){
          // Send user to next page
          res.redirect('/tasklistresponse/safetyconcerns/riskofharm/descriptionrespondent')
        } else {
          // Send user to ineligible page
          res.redirect('/tasklistresponse/safetyconcerns/riskofharm/childrenabuse')
        }

      });

      router.post('/tasklistresponse/safetyconcerns/riskofharm/abduction-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var childAbd = req.session.data['abduction']

          // Check whether the variable matches a condition
          if (childAbd == "yes"){
            // Send user to next page
            res.redirect('/tasklistresponse/safetyconcerns/riskofharm/threats')
          } else {
            // Send user to ineligible page
            res.redirect('/tasklistresponse/safetyconcerns/riskofharm/drugs')
          }

        });

        router.post('/tasklistresponse/safetyconcerns/riskofharm/threats-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var abdThreat = req.session.data['threat']

            // Check whether the variable matches a condition
            if (abdThreat == "yes"){
              // Send user to next page
              res.redirect('/tasklistresponse/safetyconcerns/riskofharm/policeinvolvement')
            } else {
              // Send user to ineligible page
              res.redirect('/tasklistresponse/safetyconcerns/riskofharm/childlocation')
            }

          });

        router.post('/tasklistresponse/safetyconcerns/riskofharm/passportoffice-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var passport = req.session.data['passport']

            // Check whether the variable matches a condition
            if (passport == "yes"){
              // Send user to next page
              res.redirect('/tasklistresponse/safetyconcerns/riskofharm/passportamount')
            } else {
              // Send user to ineligible page
              res.redirect('/tasklistresponse/safetyconcerns/riskofharm/drugs')
            }

          });

          router.post('/tasklistresponse/applicationdetails/proceedings/start-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var proceedings = req.session.data['answer']

              // Check whether the variable matches a condition
              if (proceedings == "yes"){
                // Send user to next page
                res.redirect('/tasklistresponse/applicationdetails/proceedings/courtproceedings')
              } else {
                // Send user to ineligible page
                res.redirect('/tasklistresponse/start')
              }

            }) 

module.exports = router
