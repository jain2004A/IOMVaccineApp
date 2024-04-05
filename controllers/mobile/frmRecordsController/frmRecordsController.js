define({ 

onNavigate: function(){
    this.view.preShow = this.preShow;
    this.view.postShow = this.onPostShow;
    this.view.flxMenu.onClick = this.menu;
  this.view.segFamDet.onRowClick = this.displayDetails;
  },

  preShow : function(){
    this.view.skin= "sknFormBgBlue"; 
    this.view.menusec.setVisibility(false);
    this.segFemDet(); 	
    this.view.lblHeader.text = "Vaccination Record";
    this.view.lblMenu.text = "d";  

  },
  
  menu : function(){
    this.view.menusec.setVisibility(true);
  },
  
  segFemDet: function(){
    var femData = [];
    for(var i=0; i<segmentData.length; i++){
      var Temp = {}; 
      Temp.lblName = segmentData[i].name;
      Temp.lblDob =  segmentData[i].dob;
      Temp.lblArrow = {text : "N"};
      femData.push(Temp);
    }
    this.view.segFamDet.setData(femData);
  },
  
  displayDetails : function(){
    var details = this.view.segFamDet.selectedRowItems[0];
    var famData = {"name":details.lblName, "dob":details.lblDob};
    var frmProDet = new voltmx.mvc.Navigation("Form1"); 
    frmProDet.navigate(famData);
  }

 });