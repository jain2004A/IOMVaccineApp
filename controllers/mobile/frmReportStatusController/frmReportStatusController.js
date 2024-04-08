define({ 

 //Type your controller code here 
   onNavigate : function(){
    this.view.preShow = this.PreShow;
    this.view.postShow = this.PostShow;
     
     this.view.segStatus.onRowClick = this.NavStatusDetails;
     this.view.Status.onClickHamb = this.Menu;
     this.view.menusec.onClickClose = this.Close;
     this.view.menusec.onClickHome = this.NavHome;
     this.view.menusec.onClickStatus = this.NavReportStatus;
    
  },
  
  PreShow : function(){
    try{
    this.SegData();
    
    this.view.Status.setVisibilityBack(false);
    this.view.Status.setVisibilityHamb(true);
    this.view.Status.setVisibilityReport(false);
    this.view.Status.setVisibilityOther(true);
    this.view.Status.setVisibilityOther2(true);
    
    this.view.menusec.setVisibility(false);
   
    this.view.Status.textStatusOther = "Status of Reported Health Issues After ";
  this.view.Status.textStatusOther2 = "Vaccination and Other Health Conditions.";
       }catch(err){
      voltmx.print("PreShow " + err);
    }
  },
  
   PostShow : function(){
    
  },
  
  Menu:function(){
    this.view.menusec.setVisibility(true);
  },
  
  Close:function(){
    this.view.menusec.setVisibility(false);
  },
  
  SegData:function() {
    try{
    var SegData = [];
  
  for(var i=0; i < Status.length; i++){
    var Temp = {};
    
    Temp.lblDate = Status[i].Date;
//     Temp.lblStatus = {text : Status[i].Status};
    Temp.lblName = Status[i].FullName;
    Temp.lblSymptoms = Status[i].Symptoms;
    Temp.lblReported = Status[i].Issue;
    Temp.lblimg = Status[i].Icon;
    
    if(Status[i].Status === "Reopened"){
       Temp.lblStatus = {text : Status[i].Status,skin : "sknlblReopened"};
       }
    if(Status[i].Status === "Open"){
       Temp.lblStatus = {text : Status[i].Status,skin : "sknlblOpen"};
       }
    if(Status[i].Status === "In Progress"){
       Temp.lblStatus = {text : Status[i].Status,skin : "sknlblInProgress"};
       }
    if(Status[i].Status === "Closed"){
       Temp.lblStatus = {text : Status[i].Status,skin : "sknlblClose"};
       }
    SegData.push(Temp);
  }
   this.view.segStatus.setData(SegData);
      
 }catch(err){
   voltmx.print(err);
 }

  },
  
  NavStatusDetails:function(){
    var selectedRowData = this.view.segStatus.selectedRowItems[0];
    var SelectedData = {"Name" :selectedRowData.lblName, "Status" : selectedRowData.lblStatus.text ,"Sympthoms": selectedRowData.lblSymptoms };
      var nav = new voltmx.mvc.Navigation("frmStatusDetails");
    nav.navigate(SelectedData);
  },
  
  NavHome:function(){
    var nav = new voltmx.mvc.Navigation("frmHome");
    nav.navigate();
  },
  
  NavReportStatus: function(){
  
  var ntf = new voltmx.mvc.Navigation("frmReportStatus");
    ntf.navigate();
  
},

 });