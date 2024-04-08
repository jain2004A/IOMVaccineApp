define({ 

 //Type your controller code here 
   onNavigate : function(SelectedData){
    this.view.preShow = this.PreShow;
    this.view.postShow = this.PostShow;
     this.FullName = SelectedData.Name;
     this.Status = SelectedData.Status;
    this.Sympthoms = SelectedData.Sympthoms;
     
     this.view.Status.onClickBack = this.NavReportStatus;
     this.view.btnReopen.onClick = this.NavReport;
    
  },
  
  PreShow : function(){
    try{
    
    this.view.Status.setVisibilityBack(true);
    this.view.Status.setVisibilityHamb(false);
    this.view.Status.setVisibilityReport(true);
    this.view.Status.setVisibilityOther(false);
    this.view.Status.setVisibilityOther2(false);
    
    this.view.btnReopen.setVisibility(false);
    
    if(this.getPreviousForm()==="frmSubmit"){
       this.view.lblName.text = "John Gregory Smith";
      this.view.lblissueDescribe.text = "Local reaction at injection site (pain, redness or swelling), Nausea or vomiting, skin rash and Cold and severe cough since last night.";
      this.view.lblStatus.text = "Open";
      this.view.lblStatus.skin = "sknlblOpen";
      this.view.lblHealthIsuueDate.text = "5-May-2022 10:30 AM";
    }
   
    else{
      this.view.lblName.text = this.FullName;
      this.view.lblStatus.text = this.Status;
//       this.view.lblissueDescribe.text = this.Sympthoms;
    }
      
//     this.view.lblName.text = this.FullName;
//     this.view.lblStatus.text = this.Status;
    
    this.view.lbNam.text = "Name";
    this.view.lblWhen.text = "From when the family member started to experience health issues?"; 
    this.view.lblIssue.text = "Health Issues";
//     this.view.lblissueDescribe.text = this.Sympthoms;
    this.view.lblStatu.text = "Status";
    this.view.lblCommunication.text = "Communication Details";
    this.view.lblMobile.text = "Mobile";
    this.view.lblMobileNo.text = "(+54) 564-789-1290";
    this.view.lblAlternative.text = "Alternative Mobile";
    this.view.lblAlternativeMobile.text = "(+54) 564-789-1280";
    
    
     if( this.view.lblStatus.text === "Reopened"){
//        this.view.lblStatus.text = "Open";
       this.view.lblStatus.skin = "sknlblReopened";
       this.view.btnReopen.setVisibility(false);
       this.view.Status.textReport = "Status of Reported Health Issues After Vaccination";
       this.view.lblissueDescribe.text = "Local reaction at injection site (pain, redness or swelling), Nausea or vomiting, skin rash and Cold and severe cough since last night.";
      this.view.lblHealthIsuueDate.text = "5-May-2022 10:30 AM";
     
       }
    if(this.view.lblStatus.text === "Open"){
        this.view.lblStatus.skin = "sknlblOpen";
      this.view.btnReopen.setVisibility(false);
      this.view.Status.textReport = "Status of Reported Health Issues After Vaccination";
      this.view.lblissueDescribe.text = "Local reaction at injection site (pain, redness or swelling), Nausea or vomiting, skin rash and Cold and severe cough since last night.";
      this.view.lblHealthIsuueDate.text = "5-May-2022 10:30 AM";
       }
    if( this.view.lblStatus.text === "In Progress"){
       this.view.lblStatus.skin = "sknlblInProgress";
      this.view.btnReopen.setVisibility(false);
       this.view.Status.textReport = "Status of Other Health Conditions";
      this.view.lblissueDescribe.text = "Symptoms: Dizziness, Hives, Vomiting, High fever and cold";
      this.view.lblHealthIsuueDate.text = "20-Jul-2022 10:25 AM";
       }
    if( this.view.lblStatus.text === "Closed"){
        this.view.lblStatus.skin = "sknlblClose";
      this.view.btnReopen.setVisibility(true);
       this.view.Status.textReport = "Status of Reported Health Issues After Vaccination";
      this.view.lblissueDescribe.text = "Symptoms: Dizziness, Hives, Vomiting, High fever and cold";
      this.view.lblHealthIsuueDate.text = "15-Jul-2022 4:25 PM";
       }
      
    }catch(err){
      voltmx.print("PreShow " + err);
    }
  },
  
   PostShow : function(){
    
  },
  
  NavReportStatus:function(){
      var nav = new voltmx.mvc.Navigation("frmReportStatus");
    nav.navigate();
  },

  NavReport:function(){
    alert("OnClick Functionality");
  },
  
 });