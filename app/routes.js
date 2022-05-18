const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'




      router.post('/tasklistresponse/safetyconcerns/abduction/abduction-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var childAbd = req.session.data['abduction']

          // Check whether the variable matches a condition
          if (childAbd == "yes"){
            // Send user to next page
            res.redirect('/tasklistresponse/safetyconcerns/abduction/policeinvolvement')
          } else {
            // Send user to ineligible page
            res.redirect('/tasklistresponse/safetyconcerns/abduction/checkanswers')
          }

        });

        router.post('/tasklistresponse/safetyconcerns/abduction/threats-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var abdThreat = req.session.data['threat']

            // Check whether the variable matches a condition
            if (abdThreat == "yes"){
              // Send user to next page
              res.redirect('/tasklistresponse/safetyconcerns/abduction/previousabductions')
            } else {
              // Send user to ineligible page
              res.redirect('/tasklistresponse/safetyconcerns/abduction/childlocation')
            }

          });

        router.post('/tasklistresponse/safetyconcerns/abduction/passportoffice-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var passport = req.session.data['passport']

            // Check whether the variable matches a condition
            if (passport == "yes"){
              // Send user to next page
              res.redirect('/tasklistresponse/safetyconcerns/abduction/passportamount')
            } else {
              // Send user to ineligible page
              res.redirect('/tasklistresponse/safetyconcerns/abduction/threats')
            }

          });

          router.post('/tasklistresponse/applicationdetails/proceedings/start-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var protProceedings = req.session.data['protection']
              var proceedings = req.session.data['childrenorders']

              // Check whether the variable matches a condition
              if (proceedings == "yes" || protProceedings == "yes"){
                // Send user to next page
                res.redirect('/tasklistresponse/applicationdetails/proceedings/courtproceedings')
              } else {
                // Send user to ineligible page
                res.redirect('/tasklistresponse/applicationdetails/proceedings/checkanswers-proceedings')
              }

            });


            router.post('/tasklistresponse/applicationdetails/miam/start-answer', function (req, res) {
                // Make a variable and give it the value from 'how-many-balls'
                var miam = req.session.data['MIAM']

                // Check whether the variable matches a condition
                if (miam == "yes"){
                  // Send user to next page
                  res.redirect('/tasklistresponse/applicationdetails/miam/checkanswers-MIAMyes')

                }else {
                    // Send user to ineligible page
                    res.redirect('/tasklistresponse/applicationdetails/miam/willingnesstoattend')
                }

              });

              router.post('/tasklistresponse/applicationdetails/miam/willingnesstoattend-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var miamWill = req.session.data['MIAM-willing']

                  // Check whether the variable matches a condition
                  if (miamWill == "yes"){
                    // Send user to next page
                    res.redirect('/tasklistresponse/applicationdetails/miam/checkanswers-MIAM')

                  }else {
                      // Send user to ineligible page
                      res.redirect('/tasklistresponse/applicationdetails/miam/checkanswers-MIAMnono')
                  }

                });

              router.post('/tasklistresponse/safetyconcerns/yoursafety/sexualabuse-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var sexAbuse = req.session.data['sexualabuse']

                  // Check whether the variable matches a condition
                  if (sexAbuse == "yes"){
                    // Send user to next page
                    res.redirect('/tasklistresponse/safetyconcerns/yoursafety/sexualdescription')

                  }else {
                      // Send user to ineligible page
                      res.redirect('/tasklistresponse/safetyconcerns/yoursafety/physicalabuse')
                  }

                });

                router.post('/tasklistresponse/safetyconcerns/yoursafety/physicalabuse-answer', function (req, res) {
                    // Make a variable and give it the value from 'how-many-balls'
                    var physAbuse = req.session.data['physicalabuseq']

                    // Check whether the variable matches a condition
                    if (physAbuse == "yes"){
                      // Send user to next page
                      res.redirect('/tasklistresponse/safetyconcerns/yoursafety/physicaldescription')

                    }else {
                        // Send user to ineligible page
                        res.redirect('/tasklistresponse/safetyconcerns/yoursafety/financialabuse')
                    }

                  });

                  router.post('/tasklistresponse/safetyconcerns/yoursafety/financialabuse-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var finAbuse = req.session.data['finanicalabuseq']

                      // Check whether the variable matches a condition
                      if (finAbuse == "yes"){
                        // Send user to next page
                        res.redirect('/tasklistresponse/safetyconcerns/yoursafety/financialdescription')

                      }else {
                          // Send user to ineligible page
                          res.redirect('/tasklistresponse/safetyconcerns/yoursafety/psychologicalabuse')
                      }

                    });

                    router.post('/tasklistresponse/safetyconcerns/yoursafety/psychologicalabuse-answer', function (req, res) {
                        // Make a variable and give it the value from 'how-many-balls'
                        var psychAbuse = req.session.data['psychologicalabuseq']

                        // Check whether the variable matches a condition
                        if (psychAbuse == "yes"){
                          // Send user to next page
                          res.redirect('/tasklistresponse/safetyconcerns/yoursafety/psychologicaldescription')

                        }else {
                            // Send user to ineligible page
                            res.redirect('/tasklistresponse/safetyconcerns/yoursafety/emotionalabuse')
                        }

                      });

                      router.post('/tasklistresponse/safetyconcerns/yoursafety/emotionalabuse-answer', function (req, res) {
                          // Make a variable and give it the value from 'how-many-balls'
                          var emoAbuse = req.session.data['emotionalabuseq']

                          // Check whether the variable matches a condition
                          if (emoAbuse == "yes"){
                            // Send user to next page
                            res.redirect('/tasklistresponse/safetyconcerns/yoursafety/emotionaldescription')

                          }else {
                              // Send user to ineligible page
                              res.redirect('/tasklistresponse/safetyconcerns/yoursafety/checkanswers')
                          }

                        });

                        router.post('/tasklistresponse/safetyconcerns/yoursafety/generalquestions-answer', function (req, res) {
                            // Make a variable and give it the value from 'how-many-balls'
                            var genAbuse = req.session.data['generalabuse']

                            // Check whether the variable matches a condition
                            if (genAbuse == "yes"){
                              // Send user to next page
                              res.redirect('/tasklistresponse/safetyconcerns/yoursafety/sexualabuse')

                            }else {
                                // Send user to ineligible page
                                res.redirect('/tasklistresponse/safetyconcerns/yoursafety/generalno')
                            }

                          });

                          router.post('/tasklistresponse/safetyconcerns/childrensafety/childrenabuse-answer', function (req, res) {
                              // Make a variable and give it the value from 'how-many-balls'
                              var genAbuse = req.session.data['generalabuse']

                              // Check whether the variable matches a condition
                              if (genAbuse == "yes"){
                                // Send user to next page
                                res.redirect('/tasklistresponse/safetyconcerns/childrensafety/start')

                              }else {
                                  // Send user to ineligible page
                                  res.redirect('/tasklistresponse/safetyconcerns/childrensafety/generalno')
                              }

                            });

                            router.post('/tasklistresponse/safetyconcerns/childrensafety/sexualabuse-answer', function (req, res) {
                                // Make a variable and give it the value from 'how-many-balls'
                                var sexChildAbuse = req.session.data['sexualabuse']

                                // Check whether the variable matches a condition
                                if (sexChildAbuse == "yes"){
                                  // Send user to next page
                                  res.redirect('/tasklistresponse/safetyconcerns/childrensafety/sexualdescription')

                                }else {
                                    // Send user to ineligible page
                                    res.redirect('/tasklistresponse/safetyconcerns/childrensafety/physicalabuse')
                                }

                              });

                              router.post('/tasklistresponse/safetyconcerns/childrensafety/physicalabuse-answer', function (req, res) {
                                  // Make a variable and give it the value from 'how-many-balls'
                                  var physChildAbuse = req.session.data['physicalabuseq']

                                  // Check whether the variable matches a condition
                                  if (physChildAbuse == "yes"){
                                    // Send user to next page
                                    res.redirect('/tasklistresponse/safetyconcerns/childrensafety/physicaldescription')

                                  }else {
                                      // Send user to ineligible page
                                      res.redirect('/tasklistresponse/safetyconcerns/childrensafety/financialabuse')
                                  }

                                });

                                router.post('/tasklistresponse/safetyconcerns/childrensafety/financialabuse-answer', function (req, res) {
                                    // Make a variable and give it the value from 'how-many-balls'
                                    var finChildAbuse = req.session.data['finanicalabuseq']

                                    // Check whether the variable matches a condition
                                    if (finChildAbuse == "yes"){
                                      // Send user to next page
                                      res.redirect('/tasklistresponse/safetyconcerns/childrensafety/financialdescription')

                                    }else {
                                        // Send user to ineligible page
                                        res.redirect('/tasklistresponse/safetyconcerns/childrensafety/psychologicalabuse')
                                    }

                                  });

                                  router.post('/tasklistresponse/safetyconcerns/childrensafety/psychologicalabuse-answer', function (req, res) {
                                      // Make a variable and give it the value from 'how-many-balls'
                                      var psychChildAbuse = req.session.data['psychologicalabuseq']

                                      // Check whether the variable matches a condition
                                      if (psychChildAbuse == "yes"){
                                        // Send user to next page
                                        res.redirect('/tasklistresponse/safetyconcerns/childrensafety/psychologicaldescription')

                                      }else {
                                          // Send user to ineligible page
                                          res.redirect('/tasklistresponse/safetyconcerns/childrensafety/emotionalabuse')
                                      }

                                    });

                                    router.post('/tasklistresponse/safetyconcerns/childrensafety/emotionalabuse-answer', function (req, res) {
                                        // Make a variable and give it the value from 'how-many-balls'
                                        var emoChildAbuse = req.session.data['emotionalabuseq']

                                        // Check whether the variable matches a condition
                                        if (emoChildAbuse == "yes"){
                                          // Send user to next page
                                          res.redirect('/tasklistresponse/safetyconcerns/childrensafety/emotionaldescription')

                                        }else {
                                            // Send user to ineligible page
                                            res.redirect('/tasklistresponse/safetyconcerns/childrensafety/checkanswers')
                                        }

                                      });

                                      router.post('/tasklistresponse/safetyconcerns/existingorders/orders-answer', function (req, res) {
                                          // Make a variable and give it the value from 'how-many-balls'
                                          var existOrders = req.session.data['existingorders']

                                          // Check whether the variable matches a condition
                                          if (existOrders == "yes"){
                                            // Send user to next page
                                            res.redirect('/tasklistresponse/safetyconcerns/existingorders/ordersmade')

                                          }else {
                                              // Send user to ineligible page
                                              res.redirect('/tasklistresponse/safetyconcerns/existingorders/checkanswers')
                                          }

                                        });

                                        router.post('/tasklistresponse/legalrepresentation/start-answer', function (req, res) {
                                            // Make a variable and give it the value from 'how-many-balls'
                                            var legRep = req.session.data['solicitor']

                                            // Check whether the variable matches a condition
                                            if (legRep == "yes"){
                                              // Send user to next page
                                              res.redirect('/tasklistresponse/legalrepresentation/solicitordirect')

                                            }else {
                                                // Send user to ineligible page
                                                res.redirect('/tasklistresponse/legalrepresentation/solicitornotdirect')
                                            }

                                          });

                                          router.post('/tasklistresponse/legalrepresentation/solicitorresponse-answer', function (req, res) {
                                              // Make a variable and give it the value from 'how-many-balls'
                                              var legRep = req.session.data['selffill']

                                              // Check whether the variable matches a condition
                                              if (legRep == "yes"){
                                                // Send user to next page
                                                res.redirect('/tasklistresponse/legalrepresentation/solicitornotdirect')

                                              }else {
                                                  // Send user to ineligible page
                                                  res.redirect('/tasklistresponse/legalrepresentation/solicitordirect')
                                              }

                                            });

                                            router.post('/tasklistresponse/aboutyou/confidentiality/start-answer', function (req, res) {
                                                // Make a variable and give it the value from 'how-many-balls'
                                                var conDetails = req.session.data['confidential']

                                                // Check whether the variable matches a condition
                                                if (conDetails == "yes"){
                                                  // Send user to next page
                                                  res.redirect('/tasklistresponse/aboutyou/confidentiality/feedback')

                                                }else {
                                                    // Send user to ineligible page
                                                    res.redirect('/tasklistresponse/aboutyou/confidentiality/feedbackno')
                                                }

                                              });

                                              router.post('/tasklistresponse/aboutyou/confidentiality/startalternative-answer', function (req, res) {
                                                  // Make a variable and give it the value from 'how-many-balls'
                                                  var noConDe = req.session.data['confidential']

                                                  // Check whether the variable matches a condition
                                                  if (noConDe == "yes"){
                                                    // Send user to next page
                                                    res.redirect('/tasklistresponse/aboutyou/confidentiality/feedback')

                                                  }else {
                                                      // Send user to ineligible page
                                                      res.redirect('/tasklistresponse/aboutyou/confidentiality/feedbackno')
                                                  }

                                                });

                                              router.post('/tasklistresponse/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
                                                  // Make a variable and give it the value from 'how-many-balls'
                                                  var detKnown = req.session.data['detailsknown']

                                                  // Check whether the variable matches a condition
                                                  if (detKnown == "yes"){
                                                    // Send user to next page
                                                    res.redirect('/tasklistresponse/aboutyou/confidentiality/startalternative')

                                                  }else {
                                                      // Send user to ineligible page
                                                      res.redirect('/tasklistresponse/aboutyou/confidentiality/start')
                                                  }

                                                });
                                                router.post('/tasklistresponse/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
                                                    // Make a variable and give it the value from 'how-many-balls'
                                                    var reasonAdjust = req.session.data['reasonable-adjustments']

                                                    // Check whether the variable matches a condition
                                                    if (reasonAdjust == "No"){
                                                      // Send user to next page
                                                      res.redirect('/tasklistresponse/aboutyou/tellusyourhearingneeds/preventfromparticipating')

                                                    }else {
                                                        // Send user to ineligible page
                                                        res.redirect('/tasklistresponse/aboutyou/tellusyourhearingneeds/documents')
                                                    }

                                                  });




  //Ameet's forms below


        router.post('/respondenttasklist/aboutyou/confidentiality/start-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var confDetails = req.session.data['confidential']

            // Check whether the variable matches a condition
            if (confDetails == "yes"){
              // Send user to next page
              res.redirect('/respondenttasklist/aboutyou/confidentiality/feedback')

            }else {
                // Send user to ineligible page
                res.redirect('/respondenttasklist/aboutyou/confidentiality/feedbackno')
            }

          });

          router.post('/respondenttasklist/aboutyou/confidentiality/startalternative-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var noConf = req.session.data['confidential']

              // Check whether the variable matches a condition
              if (noConf == "yes"){
                // Send user to next page
                res.redirect('/respondenttasklist/aboutyou/confidentiality/feedback')

              }else {
                  // Send user to ineligible page
                  res.redirect('/respondenttasklist/aboutyou/confidentiality/feedbackno')
              }

            });

          router.post('/respondenttasklist/applications/responsetoallegations/start-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var ansAlleg = req.session.data['answer']

              // Check whether the variable matches a condition
              if (ansAlleg == "yes"){
                // Send user to next page
                res.redirect('/respondenttasklist/applications/responsetoallegations/applicantabuse')

              }else {
                  // Send user to ineligible page
                  res.redirect('/respondenttasklist/applications/responsetoallegations/checkanswers-no')
              }

            });

            router.post('/respondenttasklist/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
                // Make a variable and give it the value from 'how-many-balls'
                var detailsKnown = req.session.data['detailsknown']

                // Check whether the variable matches a condition
                if (detailsKnown == "yes"){
                  // Send user to next page
                  res.redirect('/respondenttasklist/aboutyou/confidentiality/startalternative')

                }else {
                    // Send user to ineligible page
                    res.redirect('/respondenttasklist/aboutyou/confidentiality/start')
                }

              });

              router.post('/respondenttasklist/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var reasonAdj = req.session.data['reasonable-adjustments']

                  // Check whether the variable matches a condition
                  if (reasonAdj == "No"){
                    // Send user to next page
                    res.redirect('/respondenttasklist/aboutyou/tellusyourhearingneeds/preventfromparticipating')

                  }else {
                      // Send user to ineligible page
                      res.redirect('/respondenttasklist/aboutyou/tellusyourhearingneeds/documents')
                  }

                });





  //Nadeems forms below:

  router.post('/applicantjourney/aboutyou/confidentiality/start-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var conDetails = req.session.data['confidential']

      // Check whether the variable matches a condition
      if (conDetails == "yes"){
        // Send user to next page
        res.redirect('/applicantjourney/aboutyou/confidentiality/feedback')

      }else {
          // Send user to ineligible page
          res.redirect('/applicantjourney/aboutyou/confidentiality/feedbackno')
      }

    });

    router.post('/applicantjourney/aboutyou/confidentiality/startalternative-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var noConDe = req.session.data['confidential']

        // Check whether the variable matches a condition
        if (noConDe == "yes"){
          // Send user to next page
          res.redirect('/applicantjourney/aboutyou/confidentiality/feedback')

        }else {
            // Send user to ineligible page
            res.redirect('/applicantjourney/aboutyou/confidentiality/feedbackno')
        }

      });

    router.post('/applicantjourney/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var detKnown = req.session.data['detailsknown']

        // Check whether the variable matches a condition
        if (detKnown == "yes"){
          // Send user to next page
          res.redirect('/applicantjourney/aboutyou/confidentiality/startalternative')

        }else {
            // Send user to ineligible page
            res.redirect('/applicantjourney/aboutyou/confidentiality/start')
        }

      });



      router.post('/applicantjourney/tellusyourhearingneeds/start-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var reasonAdj = req.session.data['reasonable-adjustments']

        // Check whether the variable matches a condition
        if (reasonAdj == "No"){
          // Send user to next page
          res.redirect('/applicantjourney/tellusyourhearingneeds/safetyrequirements')

        }else {
            // Send user to ineligible page
            res.redirect('/applicantjourney/tellusyourhearingneeds/documents')
        }

      });



      router.post('/applicantjourneyca/aboutyou/confidentiality/start-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var conDetails = req.session.data['confidential']
  
        // Check whether the variable matches a condition
        if (conDetails == "yes"){
          // Send user to next page
          res.redirect('/applicantjourneyca/aboutyou/confidentiality/feedback')
  
        }else {
            // Send user to ineligible page
            res.redirect('/applicantjourneyca/aboutyou/confidentiality/feedbackno')
        }
  
      });
  
      router.post('/applicantjourneyca/aboutyou/confidentiality/startalternative-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var noConDe = req.session.data['confidential']
  
          // Check whether the variable matches a condition
          if (noConDe == "yes"){
            // Send user to next page
            res.redirect('/applicantjourneyca/aboutyou/confidentiality/feedback')
  
          }else {
              // Send user to ineligible page
              res.redirect('/applicantjourneyca/aboutyou/confidentiality/feedbackno')
          }
  
        });



module.exports = router
