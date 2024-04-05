define({ 

	onNavigate : function(famData){
      this.view.preShow = this.preShow;
      this.view.postShow = this.postShow;
      this.name = famData.name;
    },
  
  preShow : function(){
    this.view.skin= "sknFormBgBlue"; 
  alert(this.name);
  }

 });