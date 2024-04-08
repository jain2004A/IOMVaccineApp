define({ 

  meridiem : null,
  //Type your controller code here 
  onNavigate : function(Data){
    this.FullName = Data.Name;
    this.SymptomsType = Data.SymptomsType;
    this.OtherSymptoms = Data.OtherSym;

    this.view.preShow = this.PreShow;
    this.view.postShow = this.PostShow;
    this.view.Head.onClickBack = this.NavSymptoms;
    this.view.lblAM.onTouchStart =  this.AMSelected;
    this.view.lblPM.onTouchStart = this.PMSelected;

    this.view.btnContinue.onClick = this.NavAllDetails;


    this.view.Calender.onSelection = this.SelectedDate;
    this.view.txtAppontmentTime.onDone = this.ValidateTime;
  },

  PreShow: function(){
    try{
    //     alert(this.SymptomsType);
    //     alert(this.OtherSymptoms);
    this.view.Head.textReport = "Report Health Issues After Vaccination";
    this.view.Head.isVisibleEllipse = true;
    this.view.Head.skinEllipseHome = "lblskinBkWhite";
    this.view.Head.skinEllipseSymptoms = "lblskinBkWhite";
    this.view.Head.skinEllipseDate = "lblskinBkWhite";
    this.view.Head.skinEllipseReview = "sknlblbkLightWhite";

    this.view.lblSelectIssues.text = "From when the family member started to experience health issues?";

    //Sample code to set the showCloseButton property of TextBox widget.


    //     this.view.txtAppontmentTime.showCloseButton=true;
    //     this.view.Calender.inputAccessoryViewType=constants.CALENDAR_INPUTACCESSORYVIEWTYPE_DEFAULT;

    this.view.lblDate.text = "Date";
    //     this.view.txtAppointmentDate.text = "5-May-2022";
    this.view.Calender.setVisibility(true);
    this.view.btnContinue.setEnabled(false);
    this.view.btnContinue.skin = "sknButtonEnable";

    this.view.lblTime.text = "Time";
   
    this.view.txtAppontmentTime.text = "";
    //     this.view.txtAppointmentDate.text = "";
    this.view.lblAM.text = "AM";
    this.view.lblPM.text = "PM";

    this.view.lblAM.skin = "sknlblBkBlue";
    this.view.lblPM.skin = "sknlbl1PxBlueBorder";


    this.meridiem = "AM";

    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    var monthNames = [
      "Jan", "Feb", "March", "April", "May", "June", "July",
      "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    //     alert(day+"/"+month+"/"+year);

    this.view.txtAppointmentDate.text = day+"-"+monthNames[month]+"-"+year;
      
       }catch(err){
      voltmx.print("PreShow " + err);
    }

  },

//   PostShow:function(){
//     if(this.view.txtAppontmentTime.text === null || this.view.txtAppontmentTime.text === "" ){
// //             alert("Please Enter Time");
// //       this.view.btnContinue.setEnabled(false);
//       this.view.btnContinue.skin = "sknButtonEnable";
//     }

//     else if( this.view.txtAppontmentTime.text == "0" ||this.view.txtAppontmentTime.text > 12){
// //       alert("Please Enter Valid Time");
// //       this.view.btnContinue.setEnabled(false);
//       this.view.btnContinue.skin = "sknButtonEnable";
//     }else{
//       //       alert("Valide");
// //       this.view.btnContinue.setEnabled(true);
// //       this.view.btnContinue.skin = "sknButton";
//     }

//   },




  SelectedDate: function(){

    try{
    //     var Date = this.view.Calender.formattedDate;
    //     this.view.txtAppointmentDate.text = Date;

    var Date1 = this.view.Calender.formattedDate;
    var parts = Date1.split('/');

    // Create a new Date object using the parts in yyyy/mm/dd format
    var dateObject = new Date(parts[2], parts[1] - 1, parts[0]);

    // Define an array of month names
    var monthNames = [
      "Jan", "Feb", "March", "April", "May", "June", "July",
      "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Get the day, month, and year from the date object
    var day = dateObject.getDate();
    var monthIndex = dateObject.getMonth();
    var year = dateObject.getFullYear();

    // Format the date as dd-month-yyyy
    var formattedDate = day + '-' + monthNames[monthIndex] + '-' + year;
    this.view.txtAppointmentDate.text = formattedDate;

       }catch(err){
      voltmx.print("PreShow " + err);
    }

  },

  ValidateTime:function(){
    if(this.view.txtAppontmentTime.text === null || this.view.txtAppontmentTime.text === "" ){
//             alert("Please Enter Time");
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknButtonEnable";
    }

    else if( this.view.txtAppontmentTime.text == "0" ||this.view.txtAppontmentTime.text > 12){
//             alert("Please Enter Valid Time");
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknButtonEnable";
    }else{
      //       alert("Valide");
      this.view.btnContinue.setEnabled(true);
      this.view.btnContinue.skin = "sknButton";
    }
  },

  NavSymptoms : function(){
    var SelectedName = {"FullName": this.FullName  };
    var nav = new voltmx.mvc.Navigation("frmSymptoms");
    nav.navigate(SelectedName);
  },

  AMSelected  : function(){
    this.view.lblAM.skin = "sknlblBkBlue";
    this.view.lblPM.skin = "sknlbl1PxBlueBorder";
    this.meridiem = "AM";

    if(this.view.txtAppontmentTime.text === null || this.view.txtAppontmentTime.text === "" ){
//             alert("Please Enter Time");
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknButtonEnable";
    }

    else if( this.view.txtAppontmentTime.text == "0" ||this.view.txtAppontmentTime.text > 12){
//             alert("Please Enter Valid Time");
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknButtonEnable";
    }else{
      //       alert("Valide");
//       this.view.btnContinue.setEnabled(true);
//       this.view.btnContinue.skin = "sknButton";
    }
  },

  PMSelected: function(){
    this.view.lblAM.skin = "sknlbl1PxBlueBorder";
    this.view.lblPM.skin = "sknlblBkBlue";
    this.meridiem = "PM";

    if(this.view.txtAppontmentTime.text === null || this.view.txtAppontmentTime.text === "" ){
//             alert("Please Enter Time");
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknButtonEnable";
    }

    else if( this.view.txtAppontmentTime.text == "0" ||this.view.txtAppontmentTime.text > 12){
//             alert("Please Enter Valid Time");
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknButtonEnable";
    }else{
      //       alert("Valide");
//       this.view.btnContinue.setEnabled(true);
//       this.view.btnContinue.skin = "sknButton";
    }
  },

  NavAllDetails : function(Symptoms){
    if(this.view.txtAppointmentDate.text === null || this.view.txtAppointmentDate.text === "" ){
//             alert("Please Select Date");
      this.view.btnContinue.skin = "sknButtonEnable";
    }

    else if(this.view.txtAppontmentTime.text === null || this.view.txtAppontmentTime.text === "" ){
//             alert("Please Enter Time");
      //         this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknButtonEnable";
    }

    else if( this.view.txtAppontmentTime.text == "0" ||this.view.txtAppontmentTime.text > 12){
//             alert("Please Enter Valid Time");
      //       this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknButtonEnable";
    }

    //     if(this.view.btnContinue.skin === "sknButtonEnable"){

    //     }
    else{
      //       alert("Valide");
      //       this.view.btnContinue.setEnabled(true);

      this.view.btnContinue.skin = "sknButton";
      //     alert(this.text);
      var Details = {"Name":this.FullName,"SymptomsType" : this.SymptomsType, "OtherSymptoms" : this.OtherSymptoms,"Time":this.view.txtAppontmentTime.text,"Appointment" : this.meridiem,"Date":this.view.txtAppointmentDate.text};
      var nav = new voltmx.mvc.Navigation("frmAllDetails");
      nav.navigate(Details);
    }

  },



});