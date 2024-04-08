define({ 

 //Type your controller code here 

  onNavigate : function(){
    this.view.preShow = this.PreShow;
    this.view.postShow = this.PostShow;
    
    this.view.btnStatus.onClick = this.NavReportStatus;
    this.view.btnHome.onClick = this.NavHome;
    this.view.btnHealthIssue.onClick = this.NavHealthReportHome;
  },
  
   NavHome:function(){
    var nav = new voltmx.mvc.Navigation("frmHome");
    nav.navigate();
  },
  
  NavReportStatus : function(){
   var SelectedData = {"Name" :" ", "Status" : " " ,"Sympthoms": " "};
      
  var ntf = new voltmx.mvc.Navigation("frmStatusDetails");
    ntf.navigate(SelectedData);
  
},
  
  NavHealthReportHome: function(){
  
  var ntf = new voltmx.mvc.Navigation("frmHealthReportHome");
    ntf.navigate();
  
},
  
 });