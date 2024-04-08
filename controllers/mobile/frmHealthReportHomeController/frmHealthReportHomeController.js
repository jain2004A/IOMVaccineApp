define({ 
  
 
  selectedRowData : [],
  selectedRowDetails : [],
  changeObj : [],
  SelectedName : [],
  
  prevRow: null ,
 //Type your controller code here 
  onNavigate : function(){
    this.view.preShow = this.PreShow;
    this.view.postShow = this.PostShow;
    this.view.segFamilyName.onRowClick = this.NavfrmSymptoms;
    this.view.Head.onClickBack = this.NavHome;
  },
  
  PreShow: function(){
    try{
     this.SegData();
      
       if(this.getPreviousForm()==="frmSymptoms"){
      this.changeObj = {lblFullName:this.selectedRowData.lblFullName,lblDateOfBirth:this.selectedRowData.lblDateOfBirth,lblImgSlected: "L"};
    this.view.segFamilyName.setDataAt(this.changeObj, this.selectedRowDetails[1]);
    }
      
     this.view.Head.textReport = "Report Health Issues After Vaccination";
    
    this.view.Head.isVisibleEllipse = true;
    this.view.Head.skinEllipseHome = "lblskinBkWhite";
    this.view.Head.skinEllipseSymptoms = "sknlblbkLightWhite";
    this.view.Head.skinEllipseDate = "sknlblbkLightWhite";
    this.view.Head.skinEllipseReview = "sknlblbkLightWhite";
    
    this.view.lblReport.text = "Report any health problem that you may experience after vaccination such as body ache, fever, skin rash or seizure.";
    this.view.lblSelectIssues.text = "Select the family member experiencing health issues";
    
//    var Family = JSON.stringify(FamilyDetail);
//     alert(Family);
//      this.view.segFamilyName.widgetDataMap={lblFullName:"Name",lblDateOfBirth:"Age",lblImgSlected:"Selected"};

//     this.view.segFamilyName.setData(FamilyDetail);
    }catch(err){
      voltmx.print("PreShow " + err);
    }
    
  },
  
  
  NavfrmSymptoms : function(){
  try{
    
    var prevRowData = {};


    var dataToUpdatePrevRow = {};

    this.selectedRowData = this.view.segFamilyName.selectedRowItems [0];
    this.selectedRowDetails = this.view.segFamilyName.selectedRowIndex;

    if (this.prevRow !== null) {
      voltmx.print(this.prevRow);

      prevRowData = this.view.segFamilyName.data[this.prevRow];
      dataToUpdatePrevRow = {lblFullName: prevRowData.lblFullName,lblDateOfBirth:prevRowData.lblDateOfBirth, lblImgSlected:" " };
      this.view.segFamilyName.setDataAt (dataToUpdatePrevRow, this.prevRow);
    }
    this.changeObj = {lblFullName:this.selectedRowData.lblFullName,lblDateOfBirth:this.selectedRowData.lblDateOfBirth,lblImgSlected: "L"};
    this.view.segFamilyName.setDataAt(this.changeObj, this.selectedRowDetails [1]);
    this.prevRow = this.selectedRowDetails[1];
    
    this.SelectedName = { "FullName" : this.selectedRowData.lblFullName};
    
    var nav = new voltmx.mvc.Navigation("frmSymptoms");
    nav.navigate(this.SelectedName);
    }catch(err){
      voltmx.print("NavfrmSymptoms " + err);
    }
    
    
  },

  SegData:function() {
    try{
    var SegData = [];
  
  for(var i=0; i < FamilyDetail.length; i++){
    var Temp = {};
    
    Temp.lblFullName = FamilyDetail[i].FullName;
    Temp.lblDateOfBirth = FamilyDetail[i].DOB;
    SegData.push(Temp);
  }
   this.view.segFamilyName.setData(SegData);
      
 }catch(err){
   voltmx.print(err);
 }


//    this.view.segFamilyName.setData([
//       {lblFullName : "John Gregory Smith", lblDateOfBirth : "Born on 20-Aug-1990" },
//       {lblFullName :"Sarah Smith", lblDateOfBirth :"Born on 20-Aug-1990" },
//       {lblFullName : "John Gregory Smith", lblDateOfBirth : "Born on 20-Aug-1990"},
//       {lblFullName : "John Gregory Smith", lblDateOfBirth : "Born on 20-Aug-1990"}
//     ]);
},
  
  NavHome: function(){
  
  var ntf = new voltmx.mvc.Navigation("frmHome");
    ntf.navigate();
  
},
  
 });