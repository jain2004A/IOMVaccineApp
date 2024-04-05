define({ 

 onNavigate: function(famData){
    this.view.preShow = this.preShow;
    this.view.postShow = this.onPostShow;
    this.name = famData.name;
   this.dob = famData.dob;
   this.view.flxBack.onClick = this.back;
   this.view.segRecords.onRowClick  = this.popup;
   this.view.flxClosePop.onClick = this.closePopup;
  },
  
  preShow: function(){
    this.view.skin= "sknFormBgBlue"; 
    this.view.flxPopup.setVisibility(false);
    this.view.lblHeader.text = "Vaccination Record";
    this.view.lblBack.text = "E";
    this.vaccineRecord();
    this.view.rtxtNote.text = " The suggested dates for the next vaccine doses are estimated based on the vaccination history available in the IOM information system. You must have your vaccination records and contraindications checked by health professionals before receiving any vaccine.<br><br>Please note, it might take several weeks for the record to appear after your examination.";
    
  },
  
  onPostShow : function(){
    this.view.lblName.text = this.name;
    this.view.lblDob.text = this.dob;
  },
  
  back : function(){
    var frmProDet = new voltmx.mvc.Navigation("frmRecords");
    frmProDet.navigate();
  },
 
  vaccineRecord: function(){
    var records = [];
    var transformProp3 = voltmx.ui.makeAffineTransform();
    transformProp3.rotate(90);
      
    for(var i=0; i<vaccineReords.length; i++){
      var Temp = {}; 
      Temp.lblStatus = {text:vaccineReords[i].status, transform: transformProp3};
      Temp.lblVacNam = vaccineReords[i].vaccine;
      Temp.lblDate = vaccineReords[i].date;
      Temp.lblDose = vaccineReords[i].dose;
      Temp.lblArrow = {text : "S"};
      
      if(vaccineReords[i].status === "Completed"){
        Temp.flxSide = {skin:"sknComGrn"} ;
      }else if(vaccineReords[i].status === "Received"){
        Temp.flxSide= {skin:"sknRecPur"};
      }else if(vaccineReords[i].status === "Overdue"){
        Temp.flxSide= {skin:"sknOverPink"};
      }else if(vaccineReords[i].status === "Waived"){
        Temp.flxSide= {skin:"sknWaivGrey"};
      }
      
      if(vaccineReords[i].due){
        Temp.lblDateOver = {text:vaccineReords[i].due, isVisible : true};
      }        
      records.push(Temp);
    }
    this.view.segRecords.setData(records);
  },
  
  
  popup : function(){
    this.view.flxPopup.setVisibility(true);
    var vaccineData = this.view.segRecords.selectedRowItems[0];
    var name = vaccineData.lblVacNam;
    var status = vaccineData.lblStatus.text;
    var date = vaccineData.lblDate;
    var dose = vaccineData.lblDose;
    
    
    if(vaccineData.lblDateOver !== undefined){
      if(vaccineData.lblDateOver.text !== undefined){
       var over = vaccineData.lblDateOver.text;
      }else{
         var over = vaccineData.lblDateOver;
      }
       this.view.lblR2.text = over;
       this.view.lblR2.setVisibility(true);
       this.view.lblR2.skin = "sknDateOver";
    }else{
      this.view.lblR2.setVisibility(false);
    }
    
    this.view.lblVacN.text = name;
    this.view.lblStatus.text = status;
    this.view.lblR1.text = date;
    this.view.lblDose.text = dose;
    
      if(this.view.lblStatus.text === "Completed"){
        this.view.flxStatus.skin = "sknComGrn" ;
      }else if(this.view.lblStatus.text === "Received"){
        this.view.flxStatus.skin ="sknRecPur";
      }else if(this.view.lblStatus.text === "Overdue"){
        this.view.flxStatus.skin ="sknOverPink";
      }else if(this.view.lblStatus.text === "Waived"){
       this.view.flxStatus.skin ="sknWaivGrey";
      }
    
    if(this.view.lblVacN.text === "COVID-19 (WHO EUL)"){
      this.view.lblR1.text = "COVID-19 (SI India – Covishield):<br> 01-Jan-2023 (valid) <br> 08-Feb-2023<br>08-Feb-2023 (valid)<br><br>01-Jan-2023<br>COVID-19 (Sinovac):<br>23-Mar-2023 (valid)<br>21-Apr-2023<br>21-Apr-2023 (valid)<br>23-Mar-2023";
//      this.view.lblR.text = "COVID-19 (Sinovac):<br>23-Mar-2023 (valid)<br>21-Apr-2023<br>21-Apr-2023 (valid)<br>23-Mar-2023";
    }
  },
  
  
  
  closePopup : function(){
    this.view.flxPopup.setVisibility(false);
  }
 });