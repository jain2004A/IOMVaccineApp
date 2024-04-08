define({ 

 //Type your controller code here 
  onNavigate : function(Details){
    this.FullName = Details.Name;
    this.AppointmentTime = Details.Time;
    this.AppointmentDate = Details.Date;
    this.AppointMent = Details.Appointment;
    this.SymptomsType = Details.SymptomsType;
    this.OtherSymptoms = Details.OtherSymptoms;
//     this.Pain = Details.Pain;
//      this.General = Details.General;
    
    this.view.preShow = this.PreShow;
    this.view.postShow = this.PostShow;
    this.view.Head.onClickBack = this.NavDateAndTime;
   
     this.view.lblimgAlternativeNo.onTouchStart = this.AlternativeNumber;
    this.view.btnContinue.onClick = this.NavSubmit;
     this.view.btnContinue.onDone = this.NavSubmitOnDone;
  },
  
  PreShow: function(){
   try{
     this.view.Head.textReport = "Report Health Issues After Vaccination";
     this.view.Head.isVisibleEllipse = true;
    this.view.Head.skinEllipseHome = "lblskinBkWhite";
    this.view.Head.skinEllipseSymptoms = "lblskinBkWhite";
    this.view.Head.skinEllipseDate = "lblskinBkWhite";
    this.view.Head.skinEllipseReview = "lblskinBkWhite";
    this.view.txtNo.text = "";
     
      this.view.btnContinue.setEnabled(true);
     this.view.btnContinue.skin = "sknButton";
//      if(this.SymptomsType === " "){
//        this.view.lblissueDescribe.text = this.OtherSymptoms;
//      }
//      else if(this.OtherSymptoms === ""){
//        this.view.lblissueDescribe.text = this.SymptomsType;
//      }
     if (this.SymptomsType === " " && this.OtherSymptoms === ""){
       this.view.lblissueDescribe.text = "Not Selected Any Sympthoms";
     }
     else if(this.SymptomsType === " "){
       this.view.lblissueDescribe.text = this.OtherSymptoms;
     }
     else if(this.OtherSymptoms === ""){
       this.view.lblissueDescribe.text = this.SymptomsType;
     }
     else{
       this.view.lblissueDescribe.text = this.SymptomsType + "\n" + this.OtherSymptoms;
     }
     
     this.view.lblReviewInformation.text = "Review information";
    
    this.view.lbNam.text = "Name";
    this.view.lblName.text = this.FullName;
    this.view.lblWhen.text = "From when the family member started to experience health issues?";
    this.view.lblHealthIsuueDate.text = this.AppointmentDate + " @ " + this.AppointmentTime + " " + this.AppointMent ;
    this.view.lblIssue.text = "Health Issues";
//     this.view.lblissueDescribe.text = this.SymptomsType + "\n" + this.OtherSymptoms;
//   this.view.lblissueDescribe.text = this.Pain + this.General;
    this.view.lblCommunication.text = "Communication Details";
    this.view.lblAlternativeMobile.text = "Use alternative mobile";
    this.view.lblimgAlternativeNo.text = "w";
    this.view.lblNo.text = "Alternative Mobile";
    
    this.view.lblNo.isVisible = false;
    this.view.txtNo.isVisible = false;
      this.view.flxLine.setVisibility(true);
    
       }catch(err){
      voltmx.print("PreShow " + err);
    }
    
  },
  
   NavDateAndTime : function(){
//      this.view.lblissueDescribe.text = "";
     var Data = {"Name": this.view.lblName.text, "SymptomsType" :this.SymptomsType + " " , "OtherSym":this.OtherSymptoms};
    var nav = new voltmx.mvc.Navigation("frmDateAndTime");
    nav.navigate(Data);
  },

  AlternativeNumber: function(){
    try{
     if( this.view.lblimgAlternativeNo.text == "w"){
       this.view.txtNo.text = "";
       this.view.lblNo.isVisible = true;
        this.view.txtNo.isVisible = true;
//        this.view.flxLine.setVisibility(true);
//         this.view.btnContinue.setEnabled(false);
//        this.view.btnContinue.skin = "sknButtonEnable";
       this.view.lblimgAlternativeNo.text = "x";
     }
    else{
      this.view.txtNo.text = "";
       this.view.lblNo.isVisible = false;
        this.view.txtNo.isVisible = false;
//      this.view.flxLine.setVisibility(false);
//        this.view.btnContinue.setEnabled(true);
//       this.view.btnContinue.skin = "sknButtonEnable";
       this.view.lblimgAlternativeNo.text = "w";
    }
     }catch(err){
      voltmx.print("PreShow " + err);
    }
  },
  
  NavSubmitOnDone: function(){
    try{
//     this.view.btnContinue.setEnabled(true);
    var Number = this.view.txtNo.text;
    
    if( this.view.txtNo.isVisible === true ){
      if(Number === null || Number === "" ){
      alert("Please Enter Your Alternative Mobile Number");
//          this.view.btnContinue.setEnabled(true);
    }
      else if( Number.length < 10){
      alert("Please Enter Valid Number");
//          this.view.btnContinue.setEnabled(true);
      }else{
//     this.view.btnContinue.setEnabled(true);
      }
      
    }else{
//     this.view.btnContinue.setEnabled(true);
    }
       }catch(err){
      voltmx.print("PreShow " + err);
    }
  },

 
 
  NavSubmit : function(){
    try{
    var Number = this.view.txtNo.text;
    if( this.view.txtNo.isVisible === true ){
      if(Number === null || Number === "" ){
      alert("Please Enter Your Alternative Mobile Number");
    }
      else if( Number.length < 10){
      alert("Please Enter Valid Number");
      }else{
        var nav = new voltmx.mvc.Navigation("frmSubmit");
    nav.navigate();
      }
      
    }else{
    var navSubmit = new voltmx.mvc.Navigation("frmSubmit");
    navSubmit.navigate();
    }
       }catch(err){
      voltmx.print("PreShow " + err);
    }
  },

 

 });