function submit(){
        areac();
        var array = new Array(c);
        var elem=0;
      	//check if item name is not empty
      	var sum=0;
          var clr=0;
          var lid=0;
          var len=0;
           for(var g=1;g<=t;g++){
               len++;
               var item_name=$("#ty"+g).text();
               if(item_name!=''){
               	   $("#ty"+t).css("background-color", "white");
                   clr++;
               }
               var lot_id=$("#lot"+t).text();
               if(lot_id!=''){
               	   $("#lot"+t).css("background-color", "white");
                   lid++;
               }
               
           }
           
             for(var h=0;h<c;h++){
                 var a=$("#ty"+t+"a"+h).text();
                var b=Number(a);
                 sum+=b;
             }
              var totalar= sum.toFixed(2);
      
     var item_nm="";
     var name=$("#name").val();
     var adress=$("#adress").val();
     var phone=$("#phone").val();
     var date=$("#date").val();
     var refer=$("#refer").val();
     var load=$("#load").val();
     var aprvd=$("#aprvd").val();
     var sales=$("#sales").val();
     var vehicle=$("#vehicle").val();
     var less=3;
     var con=document.getElementById('selecto').value;
     if(!(event.target.id=="name"||event.target.id=="ty1"||event.target.id=="lot1"||event.target.id=="adress"||event.target.id=="phone"||event.target.id=="date"||event.target.id=="refer"||event.target.id=="load"||event.target.id=="aprvd"||event.target.id=="sales"||event.target.id=="vehicle")){
     if(name == ""|| $('#ty1').text()==""|| $('#lot1').text()=="")
     {
      //  alert("Enter name, colour and lotID");
     }
     if(clr<len){
           	   $("#ty"+t).css("background-color", "skyblue");
               alert('please fill Color');
           }
           else if(lid<len){
           	$("#lot"+t).css("background-color", "skyblue");
           	alert('please fill LOTID');
           }
     }
   var pra=[name,adress,phone,date,con,vehicle,less,refer,load,aprvd,sales];
     for(var g=1;g<=t;g++){

      var item_name=$("#ty"+g).text();
      var lot_id=$("#lot"+g).text();
      
     var to=(($("#tyt"+g).text()).split(":"))[1];
     if(to==""){
         var total=totalar;
     }
     else{
         var total=to;
     }
      if(item_name!=""){
          
        for(var f=0;f<c;f++){
           
          var x="";
         var  l=$("#ty"+g+"l"+f).val();
        var  w=$("#ty"+g+"w"+f).val();
     var  l1=$("#ty"+g+"l1-"+f).val();
        var  w1=$("#ty"+g+"w1-"+f).val();
        var  l2=$("#ty"+g+"l2-"+f).val();
        var  w2=$("#ty"+g+"w2-"+f).val();
        var  l3=$("#ty"+g+"l3-"+f).val();
        var  w3=$("#ty"+g+"w3-"+f).val();
        var are=$("#ty"+g+"a"+f).text();

        //only one item total
        if(g==t){
        	var item_total=0;
        	for(var z=0;z<c;z++){
        		if($("#ty"+g+"a"+z).length){
        		 item_total=item_total+parseFloat($("#ty"+g+"a"+z).text());
        		 //alert(item_total);
        		}

        	}
        	total=item_total;

        	
        }
        //alert(total);
        //only one item total
          if(l==undefined||w==undefined){
             
          } 
          else{
          
        
        elem++;
           
           x+=item_name+"-"+l+"-"+w+"-"+l1+"-"+w1+"-"+l2+"-"+w2+"-"+l3+"-"+w3+"-"+are+"-"+total+"-"+lot_id;


            array[elem-1]=x;
            
      
          
         



}


        }
        
        
      }

     

     }
     //alert(array);
     pra.push(array);
       pra.push("YES");
     
       var prac={};
     if(localStorage.getItem("unsaved")){
       prac = JSON.parse(localStorage.getItem("unsaved"));
     }
     prac[timestamp]=pra;
     localStorage.setItem("unsaved",JSON.stringify(prac));
     console.log(timestamp);
     
     
     localStorage.setItem("unsaved",JSON.stringify(prac));





    /* bill.push(array);
     if(!(localStorage.getItem('bills'))){
     
     
     var bills=[];
     }
     else{
         var bills=[];
          bills=JSON.parse(localStorage.getItem('bills'));
         
     }
     
     bills.push(bill);
     localStorage.setItem("bills",JSON.stringify(bills));*/
    
     localStorage.setItem("row",timestamp);
                         window.location.href="pdf2.html";

      
  }
  function update(){
    areac();
        var array = new Array(c);
        var elem=0;
      	//check if item name is not empty
      	var sum=0;
          var clr=0;
          var lid=0;
          var len=0;
           for(var g=1;g<=t;g++){
               len++;
               var item_name=$("#ty"+g).text();
               if(item_name!=''){
               	   $("#ty"+t).css("background-color", "white");
                   clr++;
               }
               var lot_id=$("#lot"+t).text();
               if(lot_id!=''){
               	   $("#lot"+t).css("background-color", "white");
                   lid++;
               }
               
           }
           
             for(var h=0;h<c;h++){
                 var a=$("#ty"+t+"a"+h).text();
                var b=Number(a);
                 sum+=b;
             }
              var totalar= sum.toFixed(2);
      
     var item_nm="";
     var name=$("#name").val();
     var adress=$("#adress").val();
     var phone=$("#phone").val();
     var date=$("#date").val();
     var refer=$("#refer").val();
     var load=$("#load").val();
     var aprvd=$("#aprvd").val();
     var sales=$("#sales").val();
     var vehicle=$("#vehicle").val();
     var less=3;
     var con=document.getElementById('selecto').value;
     if(!(event.target.id=="name"||event.target.id=="ty1"||event.target.id=="lot1"||event.target.id=="adress"||event.target.id=="phone"||event.target.id=="date"||event.target.id=="refer"||event.target.id=="load"||event.target.id=="aprvd"||event.target.id=="sales"||event.target.id=="vehicle")){
     if(name == ""|| $('#ty1').text()==""|| $('#lot1').text()=="")
     {
       //alert("Enter name, colour and lotID");
     }
     if(clr<len){
           	   $("#ty"+t).css("background-color", "skyblue");
               alert('please fill Color');
           }
           else if(lid<len){
           	$("#lot"+t).css("background-color", "skyblue");
           	alert('please fill LOTID');
           }
     }
   var pra=[name,adress,phone,date,con,vehicle,less,refer,load,aprvd,sales];
     for(var g=1;g<=t;g++){

      var item_name=$("#ty"+g).text();
      var lot_id=$("#lot"+g).text();
      
     var to=(($("#tyt"+g).text()).split(":"))[1];
     if(to==""){
         var total=totalar;
     }
     else{
         var total=to;
     }
      if(item_name!=""){
          
        for(var f=0;f<c;f++){
           
          var x="";
         var  l=$("#ty"+g+"l"+f).val();
        var  w=$("#ty"+g+"w"+f).val();
     var  l1=$("#ty"+g+"l1-"+f).val();
        var  w1=$("#ty"+g+"w1-"+f).val();
        var  l2=$("#ty"+g+"l2-"+f).val();
        var  w2=$("#ty"+g+"w2-"+f).val();
        var  l3=$("#ty"+g+"l3-"+f).val();
        var  w3=$("#ty"+g+"w3-"+f).val();
        var are=$("#ty"+g+"a"+f).text();

        //only one item total
        if(g==t){
        	var item_total=0;
        	for(var z=0;z<c;z++){
        		if($("#ty"+g+"a"+z).length){
        		 item_total=item_total+parseFloat($("#ty"+g+"a"+z).text());
        		 //alert(item_total);
        		}

        	}
        	total=item_total;

        	
        }
        //alert(total);
        //only one item total
          if(l==undefined||w==undefined){
             
          } 
          else{
          
        
        elem++;
           
           x+=item_name+"-"+l+"-"+w+"-"+l1+"-"+w1+"-"+l2+"-"+w2+"-"+l3+"-"+w3+"-"+are+"-"+total+"-"+lot_id;


            array[elem-1]=x;
            
      
          
         



}


        }
        
        
      }

     

     }
     //alert(array);
     pra.push(array);
       pra.push("NO");
     
       var prac={};
     if(localStorage.getItem("unsaved")){
       prac = JSON.parse(localStorage.getItem("unsaved"));
     }
     prac[timestamp]=pra;
     localStorage.setItem("unsaved",JSON.stringify(prac));
     console.log(timestamp);
     
     
     localStorage.setItem("unsaved",JSON.stringify(prac));





    /* bill.push(array);
     if(!(localStorage.getItem('bills'))){
     
     
     var bills=[];
     }
     else{
         var bills=[];
          bills=JSON.parse(localStorage.getItem('bills'));
         
     }
     
     bills.push(bill);
     localStorage.setItem("bills",JSON.stringify(bills));*/
    
                        
                         //window.location.href="pdf2.html";

      
  }