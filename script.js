// Object prototypes
    
    // KEY METHOD OF OBJECT
    const keyObject = {
        name: "Tehreem",
        age: 25,
        occupation: "Engineer",
        country: "USA"
      };
  
      function showObjectKeys() {
        const keys = Object.keys(keyObject);
        const listElement = document.getElementById("keysList");
        listElement.innerHTML = "";  
  
        
        keys.forEach(key => {
          const listItem = document.createElement("li");
          listItem.textContent = key;
          listElement.appendChild(listItem);
        });
      }
      
    function resetKeys() {
        const listElement = document.getElementById("keysList");
        listElement.innerHTML = ""; 
      }


      // VALUES METHOD
      const valueObject ={
        
        name: "Tehreem",
        age: 25,
        occupation: "Engineer",
        country: "USA"
        
      }
      function showObjectValues(){
        const values = Object.values(valueObject);
        const valueList = document.getElementById('ValuesList');
        valueList.innerHTML = "";

        values.forEach(values =>{
          const valueItem = document.createElement('li');
          valueItem.textContent=values;
          valueList.appendChild(valueItem);

        });
        
      }
      function resetValues() {
        const valueList = document.getElementById("ValuesList");
        valueList.innerHTML = "";  
      }

      //Entries Method

      const entriesObject ={
        
        name: "Tehreem",
        age: 25,
        occupation: "Engineer",
        country: "USA"
        
      }

      function showObjectEntries(){
        const entries =Object.entries(entriesObject);
        const entriesList = document.getElementById('EntriesList');
        entriesList.innerHTML="";

        entries.forEach(entries =>{
          const entriesItem =document.createElement('li');
          entriesItem.textContent=entries;
          entriesList.appendChild(entriesItem);
        });

      }

      function resetEntries(){
        const entriesList = document.getElementById('EntriesList');
        entriesList.innerHTML="";

      }

      //Assign method

      const object1 = {
        name: "Tehreem",
        age: 25,
        occupation: "Engineer",
        country: "USA"
      }

      const object2 ={

        name: "Hira",
        age:"30",
        occupation: "Teacher",
        Subject:'Science',
        campus:'Garden',
        country:'USA'

      }

      function showAssignObject(){
        const student = Object.assign({},object1 , object2);
        const assignList = document.getElementById('AssignList');
        assignList.innerHTML="";


  Object.entries(student).forEach(([key, value]) => {
  const studentItem = document.createElement('li');
  studentItem.textContent=`${key} : ${value}`;
  assignList.appendChild(studentItem);

  const description = document.querySelector('.description');
  description.innerHTML=`You can use Object.assign() to add new properties to an object or update existing properties if the keys are already present in the target object.You can see the difference from above data.
`


});
      }

      function resetAssign(){
        const description = document.querySelector('.description');
  description.innerHTML="";

  const assignList = document.getElementById('AssignList');
  assignList.innerHTML="";



      }
      
      // hasOwnProperty object Method

      const person ={

        name: "Hira",
        age:"30",
        occupation: "Teacher",
        Subject:'Science',
        campus:'Garden',
        country:'USA'

      }

      function checkProperty(){

        const verification = person.hasOwnProperty('occupation');
        const personVerification =document.getElementById('verificationList');
        personVerification.innerHTML="";

        const result = document.createElement('li');
        result.textContent= `Has 'occupation' property: ${verification}`;
        personVerification.appendChild(result);

        const des =document.getElementsByClassName('description')[1];
        des.innerHTML=`The hasOwnProperty() method is used in JavaScript to check whether an object has a specific property as its own. It returns true if the object has the specified property, and false otherwise.`
        

      }

      function reset(){
        const personVerification =document.getElementById('verificationList');
        personVerification.innerHTML="";

        const des =document.getElementsByClassName('description')[1];
        des.innerHTML="";

      }


      // freez method

      const freezObject1 ={
        name: "Tehreem",
        age: 25,
        occupation: "Engineer",
        country: "USA"
      }

      const freezObject2={
        name: "Hira",
        age:"30",
        occupation: "Teacher",
        Subject:'Science',
        campus:'Garden',
        country:'USA'

      }

      function checkFreezProperty(){

        const freez = Object.freeze(freezObject1);
        const freezList = document.getElementById('freezList')
        freezList.innerHTML="";

        for (let [key, value] of Object.entries(freezObject1)) {
        const freezItems =document.createElement('li');
        freezItems.textContent=`${key}: ${value}`;
        freezList.appendChild(freezItems);
        // freezList.innerHTML += `<li>${key}: ${value}</li>`;
        }
  
       
        freezObject1.name = "Hunza";
        const errorMessage = document.getElementsByClassName('error-message')[0];
        errorMessage.textContent = "You cannot modify a frozen object.";


          const description =document.getElementsByClassName('description')[2];
          description.innerHTML=`In JavaScript, Object.freeze() is used to freeze an object, preventing any modifications to it. When an object is frozen, its properties cannot be added, removed, or changed (including their values). This can be useful when you want to create a "constant" object that cannot be accidentally altered in your code.`
      }

      
      function resetFreez(){
        const freezList = document.getElementById('freezList')
        freezList.innerHTML="";

        const description =document.getElementsByClassName('description')[2];
        description.innerHTML="";


        const errorMessage = document.getElementsByClassName('error-message')[0];
        errorMessage.textContent = "";
      }

      // seal method

      const sealObject1 = {
        name: "Tehreem",
        age: 25,
        occupation: "Engineer",
        country: "USA"
      };
  
      function checkSealProperty() {
        Object.seal(sealObject1);
        const sealList = document.getElementById('sealList');
        sealList.innerHTML = ""; 


        for (let [key, value] of Object.entries(sealObject1)) {
          const sealItem = document.createElement('li');
          sealItem.textContent=`${key} :${value}`;
          sealList.appendChild(sealItem);
        }
  
        // This will succeed because Object.seal() allows modifications
        sealObject1.name = "Hunza"; 

        sealList.innerHTML = "";  
       for (let [key, value] of Object.entries(sealObject1)) {
       const sealItem = document.createElement('li');
        sealItem.textContent = `${key}: ${value}`;
        sealList.appendChild(sealItem);
  }

  
      // This will fail because Object.seal() prevents deletion
        delete sealObject1.country; 
        sealObject1.newProperty = "London";
        const errorMessage = document.getElementsByClassName('error-message')[1];
        errorMessage.textContent = "You cannot add new properties or delete existing properties on a sealed object but you can modifiy in the object as shown above the name is updated as compare to above data";
  
        
        const description = document.getElementsByClassName('description')[3];
        description.textContent = "Object.seal() allows modifications of existing properties but prevents the addition of new properties and the deletion of existing ones.";
      }
  
      function resetSeal() {
        document.getElementById('sealList').innerHTML = "";
        document.getElementsByClassName('description')[3].textContent = "";
        document.getElementsByClassName('error-message')[1].textContent = "";
      }

      // Object.defineProperty

      const object = {
        name: "Tehreem",
        age: 25,
        occupation: "Engineer",
        country: "USA"
      };

      function createDefineProperty(){

        const create = Object.defineProperty(object, "religion",{
        value : 'Islam',
        writable: true,        // Can modify the value later
        enumerable: true,      // Will appear in loops like for...in
        configurable: true     // Can delete or reconfigure the property

        });

        const defineList = document.getElementById('defineList');
        defineList.innerHTML="";

        for(let key in object){
          const defineItem = document.createElement('li');
          defineItem.textContent=`${key} : ${object[key]}`;
          defineList.appendChild(defineItem);

        }

        const message =document.getElementsByClassName('description')[4];
        message.innerHTML=`The Object.defineProperty() method allows you to create or modify a property on an object and gives you more control over the property's characteristics, such as whether it is writable, enumerable, or configurable. you can see the addition of islam in this data`
      }

      function resetCreate(){
        const defineList = document.getElementById('defineList');
        defineList.innerHTML="";

        const message =document.getElementsByClassName('description')[4];
        message.innerHTML="";

      }

      // definGetter method

      const objectGetter = {
        name: "Tehreem",
        age: 25,
        occupation: "Engineer",
        country: "USA"
      };

      function defineGetterProperty() {
        // Define the 'detail' getter using __defineGetter__()
        objectGetter.__defineGetter__("detail", function() {
          return `${this.name} is ${this.age} years old.`;
        });

        const defineList = document.getElementById('defineGetterList');
        defineList.innerHTML = "";

        const defineItem = document.createElement('li');
      defineItem.textContent = `detail: ${objectGetter.detail}`;
      defineList.appendChild(defineItem);

      const comment = document.getElementsByClassName('description')[5];
      comment.innerHTML = `The __defineGetter__() method allows you to define a getter function for a property on an object. A getter is a special method that allows you to access a property’s value in a dynamic or calculated way, instead of directly storing the value.`;
      }


      function resetGetterProperty() {
        const defineList = document.getElementById('defineGetterList');
        defineList.innerHTML = "";

        const comment = document.getElementsByClassName('description')[5];
      comment.innerHTML ="";
      }

      // defineSetter() method:
      const objectSetter = {}
        
        

      function showDefineSetter(){
        objectSetter.__defineSetter__ ("name",function(value){
         this._name=value.toUpperCase();
       });

       

       objectSetter.name="Tehreem";

        const setterList = document.getElementById('defineSetterList');
        setterList.innerHTML="";

        for(key in objectSetter){
        const setterItem =document.createElement('li');
        setterItem.textContent=`${key}: ${objectSetter[key]}`;
        setterList.appendChild(setterItem);
      }


        const comments = document.getElementsByClassName('description')[6];
        comments.innerHTML=`The __defineSetter__() method (deprecated) and the modern alternative Object.defineProperty() with a set method allow you to define a setter property on an object in JavaScript. A setter is a special method that is called when a value is assigned to a property, enabling you to control how that value is set.`
      }

      function resetSetterProperty(){
        const setterList = document.getElementById('defineSetterList');
        setterList.innerHTML="";

        const comments = document.getElementsByClassName('description')[6];
        comments.innerHTML="";

      }

     