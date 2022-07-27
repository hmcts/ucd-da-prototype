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
                                            if (reasonAdjust == "No, I do not need any support at this time"){
                                              // Send user to next page
                                              res.redirect('/tasklistresponse/aboutyou/tellusyourhearingneeds/checkanswersreqs')

                                            }else {
                                                // Send user to ineligible page
                                                res.redirect('/tasklistresponse/aboutyou/tellusyourhearingneeds/documents')
                                            }

                                          });




//darespondenttasklist's forms below

  router.post('/darespondenttasklist/aboutyou/confidentiality/start-answer', function (req, res) {
    // Make a variable and give it the value from 'how-many-balls'
    var confDetails = req.session.data['confidential']

    // Check whether the variable matches a condition
    if (confDetails == "yes"){
      // Send user to next page
      res.redirect('/darespondenttasklist/aboutyou/confidentiality/feedback')

    }else {
        // Send user to ineligible page
        res.redirect('/darespondenttasklist/aboutyou/confidentiality/feedbackno')
    }

  });

  router.post('/darespondenttasklist/aboutyou/confidentiality/startalternative-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var noConf = req.session.data['confidential']

      // Check whether the variable matches a condition
      if (noConf == "yes"){
        // Send user to next page
        res.redirect('/darespondenttasklist/aboutyou/confidentiality/feedback')

      }else {
          // Send user to ineligible page
          res.redirect('/darespondenttasklist/aboutyou/confidentiality/feedbackno')
      }

    });

    router.post('/darespondenttasklist/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var detailsKnown = req.session.data['detailsknown']

        // Check whether the variable matches a condition
        if (detailsKnown == "yes"){
          // Send user to next page
          res.redirect('/darespondenttasklist/aboutyou/confidentiality/startalternative')

        }else {
            // Send user to ineligible page
            res.redirect('/darespondenttasklist/aboutyou/confidentiality/start')
        }

      });

      router.post('/darespondenttasklist/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var reasonAdj = req.session.data['reasonable-adjustments']

          // Check whether the variable matches a condition
          if (reasonAdj == "No"){
            // Send user to next page
            res.redirect('../../submit/reviewandsubmit')

          }else {
              // Send user to ineligible page
              res.redirect('/darespondenttasklist/aboutyou/tellusyourhearingneeds/documents')
          }

        });

//respondenttasklist's forms below

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
  router.post('/respondenttasklist/applications/responsetoallegations/paperform/start-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var paperAlleg = req.session.data['answer']
      // Check whether the variable matches a condition
      if (paperAlleg == "yes"){
        // Send user to next page
        res.redirect('/respondenttasklist/applications/responsetoallegations/paperform/applicantabuse')
      }else {
          // Send user to ineligible page
          res.redirect('/respondenttasklist/applications/responsetoallegations/paperform/checkanswers-no')
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
          res.redirect('/respondenttasklist/aboutyou/tellusyourhearingneeds/checkanswersreqs')
        }else {
            // Send user to ineligible page
            res.redirect('/respondenttasklist/aboutyou/tellusyourhearingneeds/documents')
        }
      });





  //Ameet's forms below



  router.post('/applicanttasklist/aboutyou/confidentiality/start-answer', function (req, res) {
    // Make a variable and give it the value from 'how-many-balls'
    var confDetails = req.session.data['confidential']

    // Check whether the variable matches a condition
    if (confDetails == "yes"){
      // Send user to next page
      res.redirect('/applicanttasklist/aboutyou/confidentiality/feedback')

    }else {
        // Send user to ineligible page
        res.redirect('/applicanttasklist/aboutyou/confidentiality/feedbackno')
    }

  });

  router.post('/applicanttasklist/aboutyou/confidentiality/startalternative-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var noConf = req.session.data['confidential']

      // Check whether the variable matches a condition
      if (noConf == "yes"){
        // Send user to next page
        res.redirect('/applicanttasklist/aboutyou/confidentiality/feedback')

      }else {
          // Send user to ineligible page
          res.redirect('/applicanttasklist/aboutyou/confidentiality/feedbackno')
      }

    });


    router.post('/applicanttasklist/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var detailsKnown = req.session.data['detailsknown']

        // Check whether the variable matches a condition
        if (detailsKnown == "yes"){
          // Send user to next page
          res.redirect('/applicanttasklist/aboutyou/confidentiality/startalternative')

        }else {
            // Send user to ineligible page
            res.redirect('/applicanttasklist/aboutyou/confidentiality/start')
        }

      });

      router.post('/applicanttasklist/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var reasonAdjust = req.session.data['reasonable-adjustments']

          // Check whether the variable matches a condition
          if (reasonAdjust == "No"){
            // Send user to next page
            res.redirect('/applicanttasklist/aboutyou/tellusyourhearingneeds/checkanswersreqs')

          }else {
              // Send user to ineligible page
              res.redirect('/applicanttasklist/aboutyou/tellusyourhearingneeds/documents')
          }

        });

        router.post('/c100/legalrepresentation-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var legRep = req.session.data['solicitor']

            // Check whether the variable matches a condition
            if (legRep == "Yes"){
              // Send user to next page
              res.redirect('/c100/legalrepresentationapplication')

            }else {
                // Send user to ineligible page
                res.redirect('permissions')
            }

          });

          router.post('/c100/legalrepresentationapplication-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var repCon = req.session.data['solicitorapplication']

              // Check whether the variable matches a condition
              if (repCon == "Yes"){
                // Send user to next page
                res.redirect('contactrepresentative')

              }else {
                  // Send user to ineligible page
                  res.redirect('legalrepresentationdetails')
              }

            });

            router.post('/c100/permissions-answer', function (req, res) {
                // Make a variable and give it the value from 'how-many-balls'
                var permNeed = req.session.data['permission']

                // Check whether the variable matches a condition
                if (permNeed == "Yes"){
                  // Send user to next page
                  res.redirect('permissionswhy')

                }else {
                    // Send user to ineligible page
                    res.redirect('miam/miamotherproceedings')
                }

              });

              router.post('/c100/permissionsrequested-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var permReq = req.session.data['permissionsrequested']

                  // Check whether the variable matches a condition
                  if (permReq == "Yes"){
                    // Send user to next page
                    res.redirect('miam/miamotherproceedings')

                  }else {
                      // Send user to ineligible page
                      res.redirect('permissionsguidance')
                  }

                });

                router.post('/c100/safetyconcerns/generalabuse-answer', function (req, res) {
                    // Make a variable and give it the value from 'how-many-balls'
                    var genAbuse = req.session.data['generalabuse']

                    // Check whether the variable matches a condition
                    if (genAbuse == "Yes"){
                      // Send user to next page
                      res.redirect('concernabout')

                    }else {
                        // Send user to ineligible page
                        res.redirect('../internationalelement/start')
                    }

                  });

                  router.post('/c100/safetyconcerns/concernabout-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var whoVic = req.session.data['concernabout']

                      // Check whether the variable matches a condition
                      if (whoVic == "thechildren"){
                        // Send user to next page
                        res.redirect('childabuse')

                      }else {
                          // Send user to ineligible page
                          res.redirect('typeofabuse')
                      }

                    });

                    router.post('/c100/safetyconcerns/childabuse-answer', function (req, res) {
                        // Make a variable and give it the value from 'how-many-balls'
                        var abduct = req.session.data['childabuse']

                        // Check whether the variable matches a condition
                        if (abduct == "Abduction"){
                          // Send user to next page
                          res.redirect('abduction/childlocation')

                        }else {
                            // Send user to ineligible page
                            res.redirect('physicaldescriptionchild')
                        }

                      });

              router.post('/c100/safetyconcerns/abduction/abduction-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var childAbd = req.session.data['abduction']

                  // Check whether the variable matches a condition
                  if (childAbd == "yes"){
                    // Send user to next page
                    res.redirect('/c100/safetyconcerns/abduction/policeinvolvement')
                  } else {
                    // Send user to ineligible page
                    res.redirect('/c100/safetyconcerns/abduction/checkanswers')
                  }

                });

                router.post('/c100/safetyconcerns/abduction/threats-answer', function (req, res) {
                    // Make a variable and give it the value from 'how-many-balls'
                    var abdThreat = req.session.data['threat']

                    // Check whether the variable matches a condition
                    if (abdThreat == "yes"){
                      // Send user to next page
                      res.redirect('/c100/safetyconcerns/abduction/previousabductions')
                    } else {
                      // Send user to ineligible page
                      res.redirect('../otherconcerns/drugs')
                    }

                  });

                router.post('/c100/safetyconcerns/abduction/passportoffice-answer', function (req, res) {
                    // Make a variable and give it the value from 'how-many-balls'
                    var passport = req.session.data['passport']

                    // Check whether the variable matches a condition
                    if (passport == "yes"){
                      // Send user to next page
                      res.redirect('/c100/safetyconcerns/abduction/passportamount')
                    } else {
                      // Send user to ineligible page
                      res.redirect('/c100/safetyconcerns/abduction/threats')
                    }

                  });

                  router.post('/c100/typeoforder/courtorder-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var typeOrder = req.session.data['typeoforder']

                      // Check whether the variable matches a condition
                      if (typeOrder == "child_arrangements_home"){
                        // Send user to next page
                        res.redirect('caorder')
                      } else {
                        // Send user to ineligible page
                        res.redirect('')
                      }

                    });

                    router.post('/c100/confidentiality/start-answer', function (req, res) {
                        // Make a variable and give it the value from 'how-many-balls'
                        var conDetails = req.session.data['confidential']

                        // Check whether the variable matches a condition
                        if (conDetails == "yes"){
                          // Send user to next page
                          res.redirect('feedback')

                        }else {
                            // Send user to ineligible page
                            res.redirect('feedbackno')
                        }

                      });

                      router.post('/c100/confidentiality/startalternative-answer', function (req, res) {
                          // Make a variable and give it the value from 'how-many-balls'
                          var noConDe = req.session.data['confidential']

                          // Check whether the variable matches a condition
                          if (noConDe == "yes"){
                            // Send user to next page
                            res.redirect('feedback')

                          }else {
                              // Send user to ineligible page
                              res.redirect('feedbackno')
                          }

                        });

                      router.post('/c100/confidentiality/detailsknown-answer', function (req, res) {
                          // Make a variable and give it the value from 'how-many-balls'
                          var detKnown = req.session.data['detailsknown']

                          // Check whether the variable matches a condition
                          if (detKnown == "yes"){
                            // Send user to next page
                            res.redirect('startalternative')

                          }else {
                              // Send user to ineligible page
                              res.redirect('start')
                          }

                          });

                          router.post('/c100/typeofhearing/urgent-answer', function (req, res) {
                              // Make a variable and give it the value from 'how-many-balls'
                              var urgHear = req.session.data['urgenthering']

                              // Check whether the variable matches a condition
                              if (urgHear == "yes"){
                                // Send user to next page
                                res.redirect('urgentdetails')

                              }else {
                                  // Send user to ineligible page
                                  res.redirect('withoutnotice')
                              }

                              });

                              router.post('/c100/typeofhearing/withoutnotice-answer', function (req, res) {
                                  // Make a variable and give it the value from 'how-many-balls'
                                  var withNotice = req.session.data['withoutnotice']

                                  // Check whether the variable matches a condition
                                  if (withNotice == "yes"){
                                    // Send user to next page
                                    res.redirect('withoutnoticedetails')

                                  }else {
                                      // Send user to ineligible page
                                      res.redirect('../confidentiality/detailsknown')
                                  }

                                  });

                                  router.post('/c100/consentagreement-answer', function (req, res) {
                                      // Make a variable and give it the value from 'how-many-balls'
                                      var consAgr = req.session.data['consentagreement']

                                      // Check whether the variable matches a condition
                                      if (consAgr == "yes"){
                                        // Send user to next page
                                        res.redirect('typeoforder/courtorder')

                                      }else {
                                          // Send user to ineligible page
                                          res.redirect('alternativeresolution/goingtocourt')
                                      }

                                      });

                    router.post('/c100/proceedings/start-answer', function (req, res) {
                        // Make a variable and give it the value from 'how-many-balls'
                        var protProceedings = req.session.data['protection']
                        var proceedings = req.session.data['childrenorders']

                        // Check whether the variable matches a condition
                        if (proceedings == "yes" || protProceedings == "yes"){
                          // Send user to next page
                          res.redirect('/c100/proceedings/courtproceedings')
                        } else {
                          // Send user to ineligible page
                          res.redirect('../safetyconcerns/concernguidance')
                        }

                      });

                      router.post('/c100/safetyconcerns/childabuse-answer', function (req, res) {
                          // Make a variable and give it the value from 'how-many-balls'
                          var chilAbuse = req.session.data['childabuse']

                          // Check whether the variable matches a condition
                          if (chilAbuse == "physicalabuse" ){
                            // Send user to next page
                            res.redirect('/c100/safetyconcerns/physicaldescriptionchild')
                          }

                          else {
                            // Send user to ineligible page
                            res.redirect('/c100/safetyconcerns/otherconcerns/drugs')
                          }

                        });



                            router.post('/c100/tellusyourhearingneeds/start-answer', function (req, res) {
                                // Make a variable and give it the value from 'how-many-balls'
                                var reasonAdjust = req.session.data['reasonable-adjustments']

                                // Check whether the variable matches a condition
                                if (reasonAdjust == "No"){
                                  // Send user to next page
                                  res.redirect('../submit/reviewandsubmit')

                                }else {
                                    // Send user to ineligible page
                                    res.redirect('/c100/tellusyourhearingneeds/documents')
                                }

                              });

                              router.post('/c100/miam/miamotherproceedings-answer', function (req, res) {
                                  // Make a variable and give it the value from 'how-many-balls'
                                  var miamProc = req.session.data['miamproceedings']

                                  // Check whether the variable matches a condition
                                  if (miamProc == "yes"){
                                    // Send user to next page
                                    res.redirect('miamnoneed')

                                  }else {
                                      // Send user to ineligible page
                                      res.redirect('miaminfo')
                                  }

                                });

                                router.post('/c100/miam/miamattendance-answer', function (req, res) {
                                    // Make a variable and give it the value from 'how-many-balls'
                                    var miamAtt = req.session.data['miamattendance']

                                    // Check whether the variable matches a condition
                                    if (miamAtt == "yes"){
                                      // Send user to next page
                                      res.redirect('miamdocument')

                                    }else {
                                        // Send user to ineligible page
                                        res.redirect('mediatorconfirmation')
                                    }

                                  });

                                  router.post('/c100/miam/miamdocument-answer', function (req, res) {
                                      // Make a variable and give it the value from 'how-many-balls'
                                      var miamDoc = req.session.data['miamdocument']

                                      // Check whether the variable matches a condition
                                      if (miamDoc == "yes"){
                                        // Send user to next page
                                        res.redirect('miamdate')

                                      }else {
                                          // Send user to ineligible page
                                          res.redirect('miamgetdoc')
                                      }

                                    });


                                    router.post('/c100/miam/mediatorconfirmation-answer', function (req, res) {
                                        // Make a variable and give it the value from 'how-many-balls'
                                        var medConf = req.session.data['mediatorconfirmation']

                                        // Check whether the variable matches a condition
                                        if (medConf == "yes"){
                                          // Send user to next page
                                          res.redirect('mediatordocument')

                                        }else {
                                            // Send user to ineligible page
                                            res.redirect('validreason')
                                        }

                                      });

                                      router.post('/c100/miam/mediatordocument-answer', function (req, res) {
                                          // Make a variable and give it the value from 'how-many-balls'
                                          var medDoc = req.session.data['mediatordocument']

                                          // Check whether the variable matches a condition
                                          if (medDoc == "yes"){
                                            // Send user to next page
                                            res.redirect('miamdate')

                                          }else {
                                              // Send user to ineligible page
                                              res.redirect('miamgetdoc')
                                          }

                                        });

                                        router.post('/c100/miam/validreason-answer', function (req, res) {
                                            // Make a variable and give it the value from 'how-many-balls'
                                            var valReas = req.session.data['validreason']

                                            // Check whether the variable matches a condition
                                            if (valReas == "yes"){
                                              // Send user to next page
                                              res.redirect('generalreasons')

                                            }else {
                                                // Send user to ineligible page
                                                res.redirect('miamgetmediator')
                                            }

                                          });

                                          router.post('/c100/miam/generalreasons-answer', function (req, res) {
                                              // Make a variable and give it the value from 'how-many-balls'
                                              var valReas = req.session.data['exemptionreasons']

                                              // Check whether the variable matches a condition
                                              if (valReas == "Urgency"){
                                                // Send user to next page
                                                res.redirect('miamurgency')

                                              }else {
                                                  // Send user to ineligible page
                                                  res.redirect('miamdomesticabuse')
                                              }

                                            });



                                            router.post('/c100/miam/miamurgency-answer', function (req, res) {
                                                // Make a variable and give it the value from 'how-many-balls'
                                                var urgReason = req.session.data['urgency']

                                                // Check whether the variable matches a condition
                                                if (urgReason == "No"){
                                                  // Send user to next page
                                                  res.redirect('miampreviousattendance')

                                                }else {
                                                    // Send user to ineligible page
                                                    res.redirect('../typeofhearing/urgent')
                                                }

                                              });

                                              router.post('/c100/proceedings/emergencyprotectionorder-answer', function (req, res) {
                                                  // Make a variable and give it the value from 'how-many-balls'
                                                  var ordCopy = req.session.data['ordercopy']

                                                  // Check whether the variable matches a condition
                                                  if (ordCopy == "yes"){
                                                    // Send user to next page
                                                    res.redirect('emergencyupload')

                                                  }else {
                                                      // Send user to ineligible page
                                                      res.redirect('../safetyconcerns/concernguidance')
                                                  }

                                                });

                                                router.post('/c100/proceedings/courtproceedings-answer', function (req, res) {
                                                    // Make a variable and give it the value from 'how-many-balls'
                                                    var curOrders = req.session.data['proceedings']

                                                    // Check whether the variable matches a condition
                                                    if (curOrders == "Emergency Protection Order"){
                                                      // Send user to next page
                                                      res.redirect('emergencyprotectionorder')

                                                    }else {
                                                        // Send user to ineligible page
                                                        res.redirect('../safetyconcerns/concernguidance')
                                                    }

                                                  });

                                                  router.post('/c100/proceedings/otherorder-answer', function (req, res) {
                                                      // Make a variable and give it the value from 'how-many-balls'
                                                      var othOrder = req.session.data['ordercopy']

                                                      // Check whether the variable matches a condition
                                                      if (othOrder == "yes"){
                                                        // Send user to next page
                                                        res.redirect('otherordersupload')

                                                      }else {
                                                          // Send user to ineligible page
                                                          res.redirect('../safetyconcerns/concernguidance')
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



      router.post('/applicantjourney/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var reasonAdj = req.session.data['reasonable-adjustments']

        // Check whether the variable matches a condition
        if (reasonAdj == "No"){
          // Send user to next page
          res.redirect('/applicantjourney/aboutyou/tellusyourhearingneeds/safetyrequirements')

        }else {
            // Send user to ineligible page
            res.redirect('/applicantjourney/aboutyou/tellusyourhearingneeds/documents')
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


        router.post('/applicantjourneyca/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var detKnown = req.session.data['detailsknown']
  
          // Check whether the variable matches a condition
          if (detKnown == "yes"){
            // Send user to next page
            res.redirect('/applicantjourneyca/aboutyou/confidentiality/startalternative')
  
          }else {
              // Send user to ineligible page
              res.redirect('/applicantjourneyca/aboutyou/confidentiality/start')
          }
  
        });
  
  
  
        router.post('/applicantjourneyca/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var reasonAdj = req.session.data['reasonable-adjustments']
  
          // Check whether the variable matches a condition
          if (reasonAdj == "No"){
            // Send user to next page
            res.redirect('/applicantjourneyca/aboutyou/tellusyourhearingneeds/safetyrequirements')
  
          }else {
              // Send user to ineligible page
              res.redirect('/applicantjourneyca/aboutyou/tellusyourhearingneeds/documents')
          }
  
        });


          //Solicitors respondent journey:


        router.post('/solicitortasklistresponse/safetyconcerns/abduction/abduction-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var childAbd = req.session.data['abduction']
        
          // Check whether the variable matches a condition
          if (childAbd == "yes"){
            // Send user to next page
            res.redirect('/solicitortasklistresponse/safetyconcerns/abduction/policeinvolvement')
          } else {
            // Send user to ineligible page
            res.redirect('/solicitortasklistresponse/safetyconcerns/abduction/checkanswers')
          }
        
        });
        
        router.post('/solicitortasklistresponse/safetyconcerns/abduction/threats-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var abdThreat = req.session.data['threat']
        
            // Check whether the variable matches a condition
            if (abdThreat == "yes"){
              // Send user to next page
              res.redirect('/solicitortasklistresponse/safetyconcerns/abduction/previousabductions')
            } else {
              // Send user to ineligible page
              res.redirect('/solicitortasklistresponse/safetyconcerns/abduction/childlocation')
            }
        
          });
        
        router.post('/solicitortasklistresponse/safetyconcerns/abduction/passportoffice-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var passport = req.session.data['passport']
        
            // Check whether the variable matches a condition
            if (passport == "yes"){
              // Send user to next page
              res.redirect('/solicitortasklistresponse/safetyconcerns/abduction/passportamount')
            } else {
              // Send user to ineligible page
              res.redirect('/solicitortasklistresponse/safetyconcerns/abduction/threats')
            }
        
          });
        
          router.post('/solicitortasklistresponse/applicationdetails/proceedings/start-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var protProceedings = req.session.data['protection']
              var proceedings = req.session.data['childrenorders']
        
              // Check whether the variable matches a condition
              if (proceedings == "yes" || protProceedings == "yes"){
                // Send user to next page
                res.redirect('/solicitortasklistresponse/applicationdetails/proceedings/courtproceedings')
              } else {
                // Send user to ineligible page
                res.redirect('/solicitortasklistresponse/applicationdetails/proceedings/checkanswers-proceedings')
              }
        
            });
        
        
            router.post('/solicitortasklistresponse/applicationdetails/miam/start-answer', function (req, res) {
                // Make a variable and give it the value from 'how-many-balls'
                var miam = req.session.data['MIAM']
        
                // Check whether the variable matches a condition
                if (miam == "yes"){
                  // Send user to next page
                  res.redirect('/solicitortasklistresponse/applicationdetails/miam/checkanswers-MIAMyes')
        
                }else {
                    // Send user to ineligible page
                    res.redirect('/solicitortasklistresponse/applicationdetails/miam/willingnesstoattend')
                }
        
              });
        
              router.post('/solicitortasklistresponse/applicationdetails/miam/willingnesstoattend-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var miamWill = req.session.data['MIAM-willing']
        
                  // Check whether the variable matches a condition
                  if (miamWill == "yes"){
                    // Send user to next page
                    res.redirect('/solicitortasklistresponse/applicationdetails/miam/checkanswers-MIAM')
        
                  }else {
                      // Send user to ineligible page
                      res.redirect('/solicitortasklistresponse/applicationdetails/miam/checkanswers-MIAMnono')
                  }
        
                });
        
              router.post('/solicitortasklistresponse/safetyconcerns/yoursafety/sexualabuse-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var sexAbuse = req.session.data['sexualabuse']
        
                  // Check whether the variable matches a condition
                  if (sexAbuse == "yes"){
                    // Send user to next page
                    res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/sexualdescription')
        
                  }else {
                      // Send user to ineligible page
                      res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/physicalabuse')
                  }
        
                });
        
                router.post('/solicitortasklistresponse/safetyconcerns/yoursafety/physicalabuse-answer', function (req, res) {
                    // Make a variable and give it the value from 'how-many-balls'
                    var physAbuse = req.session.data['physicalabuseq']
        
                    // Check whether the variable matches a condition
                    if (physAbuse == "yes"){
                      // Send user to next page
                      res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/physicaldescription')
        
                    }else {
                        // Send user to ineligible page
                        res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/financialabuse')
                    }
        
                  });
        
                  router.post('/solicitortasklistresponse/safetyconcerns/yoursafety/financialabuse-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var finAbuse = req.session.data['finanicalabuseq']
        
                      // Check whether the variable matches a condition
                      if (finAbuse == "yes"){
                        // Send user to next page
                        res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/financialdescription')
        
                      }else {
                          // Send user to ineligible page
                          res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/psychologicalabuse')
                      }
        
                    });
        
                    router.post('/solicitortasklistresponse/safetyconcerns/yoursafety/psychologicalabuse-answer', function (req, res) {
                        // Make a variable and give it the value from 'how-many-balls'
                        var psychAbuse = req.session.data['psychologicalabuseq']
        
                        // Check whether the variable matches a condition
                        if (psychAbuse == "yes"){
                          // Send user to next page
                          res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/psychologicaldescription')
        
                        }else {
                            // Send user to ineligible page
                            res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/emotionalabuse')
                        }
        
                      });
        
                      router.post('/solicitortasklistresponse/safetyconcerns/yoursafety/emotionalabuse-answer', function (req, res) {
                          // Make a variable and give it the value from 'how-many-balls'
                          var emoAbuse = req.session.data['emotionalabuseq']
        
                          // Check whether the variable matches a condition
                          if (emoAbuse == "yes"){
                            // Send user to next page
                            res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/emotionaldescription')
        
                          }else {
                              // Send user to ineligible page
                              res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/checkanswers')
                          }
        
                        });
        
                        router.post('/solicitortasklistresponse/safetyconcerns/yoursafety/generalquestions-answer', function (req, res) {
                            // Make a variable and give it the value from 'how-many-balls'
                            var genAbuse = req.session.data['generalabuse']
        
                            // Check whether the variable matches a condition
                            if (genAbuse == "yes"){
                              // Send user to next page
                              res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/sexualabuse')
        
                            }else {
                                // Send user to ineligible page
                                res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/generalno')
                            }
        
                          });
        
                          router.post('/solicitortasklistresponse/safetyconcerns/childrensafety/childrenabuse-answer', function (req, res) {
                              // Make a variable and give it the value from 'how-many-balls'
                              var genAbuse = req.session.data['generalabuse']
        
                              // Check whether the variable matches a condition
                              if (genAbuse == "yes"){
                                // Send user to next page
                                res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/start')
        
                              }else {
                                  // Send user to ineligible page
                                  res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/generalno')
                              }
        
                            });
        
                            router.post('/solicitortasklistresponse/safetyconcerns/childrensafety/sexualabuse-answer', function (req, res) {
                                // Make a variable and give it the value from 'how-many-balls'
                                var sexChildAbuse = req.session.data['sexualabuse']
        
                                // Check whether the variable matches a condition
                                if (sexChildAbuse == "yes"){
                                  // Send user to next page
                                  res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/sexualdescription')
        
                                }else {
                                    // Send user to ineligible page
                                    res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/physicalabuse')
                                }
        
                              });
        
                              router.post('/solicitortasklistresponse/safetyconcerns/childrensafety/physicalabuse-answer', function (req, res) {
                                  // Make a variable and give it the value from 'how-many-balls'
                                  var physChildAbuse = req.session.data['physicalabuseq']
        
                                  // Check whether the variable matches a condition
                                  if (physChildAbuse == "yes"){
                                    // Send user to next page
                                    res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/physicaldescription')
        
                                  }else {
                                      // Send user to ineligible page
                                      res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/financialabuse')
                                  }
        
                                });
        
                                router.post('/solicitortasklistresponse/safetyconcerns/childrensafety/financialabuse-answer', function (req, res) {
                                    // Make a variable and give it the value from 'how-many-balls'
                                    var finChildAbuse = req.session.data['finanicalabuseq']
        
                                    // Check whether the variable matches a condition
                                    if (finChildAbuse == "yes"){
                                      // Send user to next page
                                      res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/financialdescription')
        
                                    }else {
                                        // Send user to ineligible page
                                        res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/psychologicalabuse')
                                    }
        
                                  });
        
                                  router.post('/solicitortasklistresponse/safetyconcerns/childrensafety/psychologicalabuse-answer', function (req, res) {
                                      // Make a variable and give it the value from 'how-many-balls'
                                      var psychChildAbuse = req.session.data['psychologicalabuseq']
        
                                      // Check whether the variable matches a condition
                                      if (psychChildAbuse == "yes"){
                                        // Send user to next page
                                        res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/psychologicaldescription')
        
                                      }else {
                                          // Send user to ineligible page
                                          res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/emotionalabuse')
                                      }
        
                                    });
        
                                    router.post('/solicitortasklistresponse/safetyconcerns/childrensafety/emotionalabuse-answer', function (req, res) {
                                        // Make a variable and give it the value from 'how-many-balls'
                                        var emoChildAbuse = req.session.data['emotionalabuseq']
        
                                        // Check whether the variable matches a condition
                                        if (emoChildAbuse == "yes"){
                                          // Send user to next page
                                          res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/emotionaldescription')
        
                                        }else {
                                            // Send user to ineligible page
                                            res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/checkanswers')
                                        }
        
                                      });
        
                                      router.post('/solicitortasklistresponse/safetyconcerns/existingorders/orders-answer', function (req, res) {
                                          // Make a variable and give it the value from 'how-many-balls'
                                          var existOrders = req.session.data['existingorders']
        
                                          // Check whether the variable matches a condition
                                          if (existOrders == "yes"){
                                            // Send user to next page
                                            res.redirect('/solicitortasklistresponse/safetyconcerns/existingorders/ordersmade')
        
                                          }else {
                                              // Send user to ineligible page
                                              res.redirect('/solicitortasklistresponse/safetyconcerns/existingorders/checkanswers')
                                          }
        
                                        });
        
                                        router.post('/solicitortasklistresponse/legalrepresentation/start-answer', function (req, res) {
                                            // Make a variable and give it the value from 'how-many-balls'
                                            var legRep = req.session.data['solicitor']
        
                                            // Check whether the variable matches a condition
                                            if (legRep == "yes"){
                                              // Send user to next page
                                              res.redirect('/solicitortasklistresponse/legalrepresentation/solicitordirect')
        
                                            }else {
                                                // Send user to ineligible page
                                                res.redirect('/solicitortasklistresponse/legalrepresentation/solicitornotdirect')
                                            }
        
                                          });
        
                                          router.post('/solicitortasklistresponse/legalrepresentation/solicitorresponse-answer', function (req, res) {
                                              // Make a variable and give it the value from 'how-many-balls'
                                              var legRep = req.session.data['selffill']
        
                                              // Check whether the variable matches a condition
                                              if (legRep == "yes"){
                                                // Send user to next page
                                                res.redirect('/solicitortasklistresponse/legalrepresentation/solicitornotdirect')
        
                                              }else {
                                                  // Send user to ineligible page
                                                  res.redirect('/solicitortasklistresponse/legalrepresentation/solicitordirect')
                                              }
        
                                            });
        
                                            router.post('/solicitortasklistresponse/aboutyou/confidentiality/start-answer', function (req, res) {
                                                // Make a variable and give it the value from 'how-many-balls'
                                                var conDetails = req.session.data['confidential']
        
                                                // Check whether the variable matches a condition
                                                if (conDetails == "yes"){
                                                  // Send user to next page
                                                  res.redirect('/solicitortasklistresponse/aboutyou/confidentiality/feedback')
        
                                                }else {
                                                    // Send user to ineligible page
                                                    res.redirect('/solicitortasklistresponse/aboutyou/confidentiality/feedbackno')
                                                }
        
                                              });
        
                                              router.post('/solicitortasklistresponse/aboutyou/confidentiality/startalternative-answer', function (req, res) {
                                                  // Make a variable and give it the value from 'how-many-balls'
                                                  var noConDe = req.session.data['confidential']
        
                                                  // Check whether the variable matches a condition
                                                  if (noConDe == "yes"){
                                                    // Send user to next page
                                                    res.redirect('/solicitortasklistresponse/aboutyou/confidentiality/feedback')
        
                                                  }else {
                                                      // Send user to ineligible page
                                                      res.redirect('/solicitortasklistresponse/aboutyou/confidentiality/feedbackno')
                                                  }
        
                                                });
        
                                              router.post('/solicitortasklistresponse/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
                                                  // Make a variable and give it the value from 'how-many-balls'
                                                  var detKnown = req.session.data['detailsknown']
        
                                                  // Check whether the variable matches a condition
                                                  if (detKnown == "yes"){
                                                    // Send user to next page
                                                    res.redirect('/solicitortasklistresponse/aboutyou/confidentiality/startalternative')
        
                                                  }else {
                                                      // Send user to ineligible page
                                                      res.redirect('/solicitortasklistresponse/aboutyou/confidentiality/start')
                                                  }
        
                                                });
                                                router.post('/solicitortasklistresponse/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
                                                    // Make a variable and give it the value from 'how-many-balls'
                                                    var reasonAdjust = req.session.data['reasonable-adjustments']
        
                                                    // Check whether the variable matches a condition
                                                    if (reasonAdjust == "No"){
                                                      // Send user to next page
                                                      res.redirect('/solicitortasklistresponse/aboutyou/tellusyourhearingneeds/checkanswersreqs')
        
                                                    }else {
                                                        // Send user to ineligible page
                                                        res.redirect('/solicitortasklistresponse/aboutyou/tellusyourhearingneeds/documents')
                                                    }
        
                                                  });







module.exports = router
