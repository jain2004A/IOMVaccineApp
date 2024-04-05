define({

   onNavigate: function(){
    this.view.preShow = this.preShow;
    this.view.postShow = this.onPostShow;
   this.view.flxAppoinment.onClick = this.Appoinment;
    this.view.flxNortification.onClick = this.Notification;
  },

  
   preShow: function(){
    this.segFemDet();
    this.Appoinment();
    this.view.menusec.setVisibility(false);
     this.view.flxSegment.setVisibility(false);

    this.view.flxMenu.onClick = this.open;
   

     this.view.lblMenu.text = "d";
     this.view.lblArrow.text = "N";
      
     this.view.flxLine.setVisibility(true);
     this.view.flxLine2.setVisibility(false);
     
     this.view.imgHeader.src = "header1.png";
     this.view.imgUpdate.src = "update.png";
       
     this.view.lblAppoinment.text = "Appointments";
     this.view.lblNortification.text = "Notifications";
     this.view.lblN.text="3";
          
     this.view.lblSeeAll.text ="See All";
     
     this.view.img1.src = "img1new1.png";
     this.view.img2.src = "img2new1.png";     
     
     this.view.flxNoAppointment.setVisibility(true);
     this.view.lblNoAppoinment.text = "There are no appointments to show.";
   },
  
  
  onPostShow : function(){
  

  },
  
  open: function(){
    this.view.menusec.setVisibility(true);
    
  },
  
  segFemDet: function(){
  var femData = [];
  for(var i=0; i<segmentData.length; i++){
    var Temp = {}; 
   Temp.lbl1 = {text: "Principal Applicant"};
   Temp.lbl2 = {text : segmentData[i].name};
   Temp.lblCertificate = {text : ")"};
   Temp.lbl3 = {text : "View Certificates"};
   Temp.lblVaccine = {text : "-"};
   Temp.lbl4 = {text : "View Vaccinations"};
    femData.push(Temp);
  }
   this.view.segment.setData(femData);
  },
  
  
   Appoinment : function(){
     this.view.flxNoAppointment.setVisibility(true);
     this.view.flxSegment.setVisibility(false);
    this.view.lblNortification.skin ="sknLblOnfocusBlue";
    this.view.flxNortification.skin = "sknFlxWOFocus";
    this.view.lblAppoinment.skin = "sknLblOnfocusBlk";
    this.view.flxAppoinment.skin = "sknFlxNorOnfocus";
    this.view.flxLineNo.setVisibility(true);
    this.view.flxLine2.setVisibility(false);   
    this.view.lblNoAppoinment.text = "There are no appointments to show.";
//     var appoinmentData = [];
//     for(var i=0; i<segAppoiment.length; i++){
//     var Temp1 = {}; 
//     Temp1.lblDate = {text:segAppoiment[i].date};
//     Temp1.lblCaseNumber = {text : segAppoiment[i].case};
//     Temp1.lblNote = {text : segAppoiment[i].note};
//     Temp1.lblArrow = {text : "N"};
//     appoinmentData.push(Temp1);
//   }
//    this.view.segAppoinment.setData(appoinmentData);
  },
  
  
  Notification : function(){
    this.view.flxNoAppointment.setVisibility(false);
    this.view.flxSegment.setVisibility(true);
    this.view.lblNortification.skin ="sknLblOnfocusBlk";
    this.view.flxNortification.skin = "sknFlxNorOnfocus";
    this.view.lblAppoinment.skin = "sknLblOnfocusBlue";
    this.view.flxAppoinment.skin = "sknFlxWOFocus";
    this.view.flxLine.setVisibility(false);
    this.view.flxLine2.setVisibility(true); 
    
       var notificationData = [];
    for(var i=0; i<segNotification.length; i++){
    var Temp2 = {}; 
    Temp2.lblDate = {text:segNotification[i].date};
    Temp2.lblCaseNumber = {text : segNotification[i].case};
    Temp2.lblNote = {text : segNotification[i].note};
    Temp2.lblArrow = {text : "N"};
    notificationData.push(Temp2);
  }
   this.view.segAppoinment.setData(notificationData);
  },
  
  




});