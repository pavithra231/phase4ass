var myData = new Map();

  myData.set("siva",10000);
  myData.set("vicky",5000);
  myData.set("rishi",7000);

  function addexpense(name,cost){
    const input1 = prompt("enter the name to add name");
    var input2= prompt("enter the name to add cost");
    var s=parseInt(input2);
    myData.set(input1,s);
  }

  function removeobj(name) {
      myData.delete(name);
      console.log(name+" is removed from plan");
      console.log(myData);
  }


  function show(){
    console.log(myData);
  }

  function calculate(){
    const values = Array.from(myData.values());
 
    const keys = Array.from(myData.keys());

    var sum=0;

    for (let i = 0; i < values.length; i++) {
       sum += values[i];
    }
    console.log("sum is: "+sum);
  }
 
  console.log("----------full map elements---------")
  show();

  
  addexpense();
  console.log("---------after adding new element----------")
  console.log(myData);
  

  console.log("----------after removing element------------");
  const input3=prompt("enter name to remove");
  removeobj(input3);
  

  console.log("---------sum of all cost---------");
  calculate();


