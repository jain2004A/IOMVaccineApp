define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
          this.view.btnClose.onClick= this.close;
		  this.view.preShow = this.preShow;
          this.view.flxVaccine.onClick = this.records;
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      close: function(){
        this.view.setVisibility(false);

      },
      
      records : function (){
        var navcat = new voltmx.mvc.Navigation("Form2");
        navcat.navigate();
      },
      
      preShow : function(){
        
        this.view.lblHome.text = "Home";
        this.view.lblProfile.text = "My Profile";
        this.view.lblAppointments.text = "Appointments";
        this.view.lblVaccine.text = "Vaccination Record";
        this.view.lblCertificate.text= "Certificates";
        this.view.lblStatus.text = "Status of Reported Health Issues After Vaccination and Other Health Conditions";
        this.view.lblIom.text = "IOM Clinic / Panel Site Contacts";
        this.view.lblSettings.text = "Settings";
        this.view.lblFeedback.text = "Feedback";
        this.view.lblPolicy.text = "Privacy Policy and General Terms and Conditions";
        this.view.lblVersion.text = "App Version 1.1.0";
        
        this.view.lblClose.text = "O";
		this.view.lblH.text = "X";
        this.view.lblP.text = "B";
        this.view.lblA.text = "P";
        this.view.lblV.text = "i";
        this.view.lblSt.text = "Y";
        this.view.lblI.text = "a";
        this.view.lblS.text = "r";
        this.view.lblC.text = "y";

      }
	};
});