define({ 

  onNavigate: function(){
    this.view.preShow = this.preShow;
    this.view.postShow = this.onPostShow;
    this.view.flxMenu.onClick = this.menu;
  },
  
  preShow : function(){
    this.view.skin= "sknFormBgBlue"; 
    this.view.menusec.setVisibility(false);
    
    this.view.lblHeader.text = "Certificates";
    this.view.lblMenu.text = "d";
    this.view.lblName1.text = "John Gregory Smith";
    this.view.lblDob1.text = "Born on 20-Aug-1990";
    
    
    this.view.lblVacCer.text = "COVID-19 Vaccination Certificate";
    this.view.lblVacDate.text = "15-May-2023";
    this.view.lblArrow.text = "N";
    
    this.view.lblTest.text = "COVID-19 Testing Certificate";
    this.view.lblTestDate.text = "16-Apr-2022";
    this.view.lblArrow1.text = "N";
    
    this.view.lblRec1.text = "COVID-19 Recovery Certificate";
    this.view.lblRecDate.text = "16-Apr-2022 11:15 AM";
    this.view.lblArrow2.text = "N";
    
    this.view.lblRecCer2.text = "COVID-19 Recovery Certificate";
    this.view.lblRecDate2.text = "12-Mar-2022 3:20 PM (Expired)";
    this.view.lblArrow4.text = "N";
    this.view.lblArrow5.text = "N";
    
    this.view.lblName2.text = "Sarah Smith";
    this.view.lblDob2.text = "Born on 11-Oct-1994";
    this.view.lblSarahCer.text = "COVID-19 Testing Certificate";
    this.view.lblSarahDate.text = "2-Jan-2023 to 1-Jul-2023";
    this.view.lblArrow3.text = "N";
    this.view.lblSarahCer1.text = "COVID-19 Recovery Certificate";
    this.view.lblSarahCer2.text = "20-Mar-2022 3:20 PM (Expired)";
    this.view.lblArrow4.text = "N";
    
    this.view.lblJamesName.text = "James Smith";
    this.view.lblJamesDob.text = "Born on 18-Apr-2004";
    this.view.lblJamesCerName.text = "COVID-19 Testing Certificate";
    this.view.lblJamesCerDate.text = "20-May-2023";
    this.view.lblArrow6.text = "N";
    
    
    this.view.lblMariaName.text = "Maria Smith";
    this.view.lblMariaDob.text = "Born on 22-Nov-2006";
    this.view.lblNoCer.text = "No certificates to display.";  
  },
  
  
  onPostShow : function(){
    if(this.view.flxVacCer.onClick === true){
    var famData = {"name" : this.view.lblName1.text};
    var frmProDet = new voltmx.mvc.Navigation("frmCerOfVac"); 
    frmProDet.navigate(famData);
    }
  },
  
  menu : function(){
    this.view.menusec.setVisibility(true);
  },
  
  
 });