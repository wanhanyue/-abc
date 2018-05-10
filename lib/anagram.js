function anagram(str)
 {
   
var str = str.split('');
   
   var count = 0;
   
   var  array=[]
  

   function arrange(s)
   {
   
     for(var i=0,length=str.length; i<length; i++)
     {
    
         if(s.length == length - 1) 
         {
     
            if(s.indexOf(str[i]) < 0) 
            {
       
               count++;
       
               array.push(s + str[i])
      
             }
     
             continue;
     
          }
     
         if(s.indexOf(str[i]) < 0) 
         {
      
           arrange(s+str[i]);
     
         }
    
       }
   
     }
   
     arrange("");
  
     return array
 }

module.exports = anagram