define({ 

  SelectedSympothms:null,
   SelectedData : [],
  //Type your controller code here 
  onNavigate : function(SelectedName){
    this.FullName = SelectedName.FullName;
      
    this.view.preShow = this.PreShow;
    this.view.postShow = this.PostShow;
    this.view.Head.onClickBack = this.NavHealthReportHome;
    this.view.btnContinue.onClick = this.NavDateAndTime;
    this.view.SegSymptoms.onRowClick = this.SelectSymptoms;
    this.view.txtOther.onDone = this.Validate;
  },

  PreShow: function(){
    try{
//     alert(this.FullName);
      this.SegData();
    this.view.Head.textReport = "Report Health Issues After Vaccination";
    this.view.Head.isVisibleEllipse = true;
    this.view.Head.skinEllipseHome = "lblskinBkWhite";
    this.view.Head.skinEllipseSymptoms = "lblskinBkWhite";
    this.view.Head.skinEllipseDate = "sknlblbkLightWhite";
    this.view.Head.skinEllipseReview = "sknlblbkLightWhite";

    this.view.lblSelectIssues.text = "Select signs and symptoms the family member is experiencing.";
   this.view.lblOther.text = "Others";
      this.view.txtOther.text = "";
      
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknButtonEnable";
//      var OtherSympthoms = this.view.txtOther.text;
//       this.SelectedSympothms = OtherSympthoms;

      
    }catch(err){
      voltmx.print("PreShow " + err);
    }
  },

  NavHealthReportHome : function(){
    var nav = new voltmx.mvc.Navigation("frmHealthReportHome");
    nav.navigate();
  },
  
  SelectSymptoms:function(){
     try{
       this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknButton";
    voltmx.print(this.view.SegSymptoms.data);

       

    var selectedRowData = this.view.SegSymptoms.selectedRowItems[0];
    var selectedRowDetails = this.view.SegSymptoms.selectedRowIndex;

        
    var changeObj ={flxSymptoms: {skin : "sknflx1pxBlueBorder"},imgSymptoms:selectedRowData.imgSymptoms,lblSymptoms:selectedRowData.lblSymptoms,lblimgCheck: "K"};
    this.view.SegSymptoms.setDataAt(changeObj, selectedRowDetails[1]);
        
//    this.SelectedSympothms = selectedRowData.lblSymptoms.text;
          this.SelectedSympothms = changeObj.lblSymptoms.text;

       this.SelectedData.push(this.SelectedSympothms);
      
       
// alert(this.SelectedData);

//     var nav = new voltmx.mvc.Navigation("frmSymptoms");
//     nav.navigate(SelectedName);
    
    }catch(err){
      voltmx.print("NavfrmSymptoms " + err);
    }
  },

  SegData:function(){
     try{
    var SegData = [];
  
  for(var i=0; i< Symptoms.length; i++){
    var Temp = {};
    

    Temp.imgSymptoms = {src:Symptoms[i].ImgSymptoms};
    Temp.lblSymptoms = {text : Symptoms[i].SymptomsType};
    SegData.push(Temp);
  }
   this.view.SegSymptoms.setData(SegData);
      
 }catch(err){
   voltmx.print(err);
 }
  },
  
  Validate:function(){
    if(this.view.txtOther.text === "" || this.view.txtOther.text === " " || this.view.txtOther.text === null  ){
        this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknButtonEnable";
      }
      else{
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknButton";
      }
  },
  
  NavDateAndTime : function(){
//        alert(this.SelectedSympothms);
//     alert(this.SelectedData);
    
//     var SelectedData = JSON.stringify(this.SelectedData);
   if(this.view.btnContinue.skin === "sknButton" ){
    var OtherSympthoms = this.view.txtOther.text;
      this.OtherSym = OtherSympthoms;
   var Data ={"Name": this.FullName, "SymptomsType":this.SelectedData + " ", OtherSym :this.OtherSym};
    var nav = new voltmx.mvc.Navigation("frmDateAndTime");
    nav.navigate(Data);

    this.SelectedData = [];
   }
    else{
      
    }
    
  },

});