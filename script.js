// Object prototypes
    
    // KEY METHOD OF OBJECT
function showObject(){
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const occupation = document.getElementById("occupation").value;
  const country = document.getElementById("country").value;

  return{
    Name:name,
    Age:age,
    Occupation:occupation,
    Country:country

  };

}

    const keyObject =showObject()
        
  
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
        document.getElementById("name").value="";
        document.getElementById("age").value=""; 
        document.getElementById("occupation").value="";
        document.getElementById("country").value="";
      }


      // VALUES METHOD

      function showObjects(){
        const name = document.getElementById("name-value").value;
        const age = document.getElementById("age-value").value;
        const occupation = document.getElementById("occupation-value").value;
        const country = document.getElementById("country-value").value;
      
        return{
          Name:name,
          Age:age,
          Occupation:occupation,
          Country:country
      
        };
      
      }
      function showObjectValues(){
        const valueObject = showObjects(); 
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
        document.getElementById("name-value").value="";
        document.getElementById("age-value").value=""; 
        document.getElementById("occupation-value").value="";
        document.getElementById("country-value").value="";
      }

      //Entries Method

      function showEntries(){
        const name = document.getElementById("name-entries").value;
        const age = document.getElementById("age-entries").value;
        const occupation = document.getElementById("occupation-entries").value;
        const country = document.getElementById("country-entries").value;
      
        return{
          Name:name,
          Age:age,
          Occupation:occupation,
          Country:country
      
        };
      }
      function showObjectEntries(){
        const entriesObject =showEntries();

        const entries =Object.entries(entriesObject);
        const entriesList = document.getElementById('EntriesList');
        entriesList.innerHTML="";

        entries.forEach( ([key,values])=>{
          const entriesItem =document.createElement('li');
          entriesItem.textContent=`${key} : ${values}`;
          entriesList.appendChild(entriesItem);
        });

      }

      function resetEntries(){
        const entriesList = document.getElementById('EntriesList');
        entriesList.innerHTML="";

        document.getElementById("name-entries").value="";
        document.getElementById("age-entries").value=""; 
        document.getElementById("occupation-entries").value="";
        document.getElementById("country-entries").value="";

      }

      //Assign method
      function showAssign(){
        const name = document.getElementById("name-assign").value;
        const age = document.getElementById("age-assign").value;
        const occupation = document.getElementById("occupation-assign").value;
        const country = document.getElementById("country-assign").value;
      
        return{
          Name:name,
          Age:age,
          Occupation:occupation,
          Country:country
      
        };
      }
function showAssign2(){
      const name2 = document.getElementById("name-assign1").value;
        const age2 = document.getElementById("age-assign1").value;
        const religion = document.getElementById("religion-assign1").value;
      
        return{
          Name:name2,
          Age:age2,
          Religion:religion
          
      
        };
      }

      function showAssignObject(){
        const student = Object.assign({},showAssign(),showAssign2());
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
  document.getElementById("name-assign1").value = "";
   document.getElementById("age-assign1").value = "";
   document.getElementById("religion-assign1").value = "";
   document.getElementById("name-assign").value = "";
  document.getElementById("age-assign").value = "";
   document.getElementById("occupation-assign").value = "";
   document.getElementById("country-assign").value = "";

      }
      
      // hasOwnProperty object Method

      function hasOwnPropertyKey(){
        const name = document.getElementById("name-hasOwn").value;
        const age = document.getElementById("age-hasOwn").value;
        const occupation = document.getElementById("occupation-hasOwn").value;
        const country = document.getElementById("country-hasOwn").value;
      
        return{
          name:name,
          age:age,
          occupation:occupation,
          country:country
      
        };
      }
      function checkKey(){
        return document.getElementById("keyName").value.trim();
      }


      function checkProperty(){

        const key = checkKey().toLowerCase(); 
        const object = hasOwnPropertyKey();

        const verification = object.hasOwnProperty(key);
        const personVerification =document.getElementById('verificationList');
        personVerification.innerHTML="";

        const result = document.createElement('li');
        result.textContent= `Has '${key}' property: ${verification}`;
        personVerification.appendChild(result);

        const des =document.getElementsByClassName('description')[1];
        des.innerHTML=`The hasOwnProperty() method is used in JavaScript to check whether an object has a specific property as its own. It returns true if the object has the specified property, and false otherwise.`
        

      }

      function reset(){
        const personVerification =document.getElementById('verificationList');
        personVerification.innerHTML="";

        const des =document.getElementsByClassName('description')[1];
        des.innerHTML="";

        document.getElementById("age-hasOwn").value = "";
        document.getElementById("name-hasOwn").value = "";
        document.getElementById("occupation-hasOwn").value = "";
       document.getElementById("country-hasOwn").value = "";
       document.getElementById("keyName").value="";

      }


      // freez method
      function checkFreeze(){
        const name = document.getElementById("name-freeze").value;
        const age = document.getElementById("age-freeze").value;
        const occupation = document.getElementById("occupation-freeze").value;
        const country = document.getElementById("country-freeze").value;
      
        return{
          name:name,
          age:age,
          occupation:occupation,
          country:country
      
        };
      }

      function checkFreeze2(){
        const name = document.getElementById("name-freeze1").value;
        const age = document.getElementById("age-freeze1").value;
        const occupation = document.getElementById("occupation-freeze1").value;
        const country = document.getElementById("country-freeze1").value;
      
        return{
          name:name,
          age:age,
          occupation:occupation,
          country:country
      
        };

      }
        
    

      function checkFreezProperty(){
        const freeze = checkFreeze();

        const freez = Object.freeze(freeze);
        const freezList = document.getElementById('freezList')
        freezList.innerHTML="";

        for (let [key, value] of Object.entries(freeze)) {
        const freezItems =document.createElement('li');
        freezItems.textContent=`${key}: ${value}`;
        freezList.appendChild(freezItems);
        // freezList.innerHTML += `<li>${key}: ${value}</li>`;
        }
  
        const freeze2 =checkFreeze2();

        const errorMessage = document.getElementsByClassName('error-message')[0];


        try {
          // Attempt to change the frozen object (this should fail silently)
          freez.name = freeze2.name;
          freez.age = freeze2.age;
          freez.occupation = freeze2.occupation;
          freez.country = freeze2.country;
          errorMessage.textContent = `You tried to modify the frozen object, but it remains unchanged. `
        }

          catch{
            errorMessage.textContent = "You cannot modify a frozen object.";

          }
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


         document.getElementById("name-freeze").value = "";
        document.getElementById("age-freeze").value = "";
        document.getElementById("occupation-freeze").value = "";
        document.getElementById("country-freeze").value = "";

        document.getElementById("name-freeze1").value = "";
        document.getElementById("age-freeze1").value = "";
        document.getElementById("occupation-freeze1").value = "";
        document.getElementById("country-freeze1").value = "";


      
      }

      // seal method

      function checkSeal(){
        const name = document.getElementById("name-seal").value;
        const age = document.getElementById("age-seal").value;
        const occupation = document.getElementById("occupation-seal").value;
        const country = document.getElementById("country-seal").value;
      
        return{
          name:name,
          age:age,
          occupation:occupation,
          country:country
      
        };
      }

      function checkSeal2(){
        const name = document.getElementById("name-seal-1").value;
        const age = document.getElementById("age-seal-1").value;
        const occupation = document.getElementById("occupation-seal-1").value;
        const country = document.getElementById("country-seal-1").value;
      
        return{
          name:name,
          age:age,
          occupation:occupation,
          country:country
      
        };

      }

      function renderSealList(seal) {
        const sealList = document.getElementById('sealList');
        sealList.innerHTML = "";
    
        // Render the updated properties of the sealed object
        for (let [key, value] of Object.entries(seal)) {
            const sealItem = document.createElement('li');
            sealItem.textContent = `${key}: ${value}`;
            sealList.appendChild(sealItem);
        }
    }
      function checkSealProperty() {
        const seal = checkSeal()
        Object.seal(seal);
        
        // Render the sealed object in the list
        renderSealList(seal);
  
        // This will succeed because Object.seal() allows modifications
        const seal2 =checkSeal2();

        const errorMessage = document.getElementsByClassName('error-message')[1];

       //modification
          seal.name = seal2.name;
          seal.age = seal2.age;
          seal.occupation = seal2.occupation;
          seal.country = seal2.country;


        // Render the updated object with modified values
         renderSealList(seal);

        errorMessage.textContent = `You can modify the Seal() object, but can not delete or add new property.. `
        
        const description = document.getElementsByClassName('description')[3];
        description.textContent = "Object.seal() allows modifications of existing properties but prevents the addition of new properties and the deletion of existing ones.";
      }
  
      function resetSeal() {
        document.getElementById('sealList').innerHTML = "";
        document.getElementsByClassName('description')[3].textContent = "";
        document.getElementsByClassName('error-message')[1].textContent = "";

       document.getElementById("name-seal-1").value = "";
       document.getElementById("age-seal-1").value = "";
       document.getElementById("occupation-seal-1").value = "";
       document.getElementById("country-seal-1").value = "";


      document.getElementById("name-seal").value = "";
       document.getElementById("age-seal").value = "";
       document.getElementById("occupation-seal").value = "";
      document.getElementById("country-seal").value = "";
      
      
      }

      // Object.defineProperty

      function properties(){
        const name = document.getElementById("name-set").value;
        const age = document.getElementById("age-set").value;
        const occupation = document.getElementById("occupation-set").value;
        const country = document.getElementById("country-set").value;
      
        return{
          name:name,
          age:age,
          occupation:occupation,
          country:country
      
        };
      }

     function setProperty(){
      const keySetter =document.getElementById("SetKey").value;
      const valueSetter=document.getElementById("SetValue").value;
      return { keySetter, valueSetter };
     }

      function createDefineProperty(){
        const propertiesobj =properties();
        const  { keySetter, valueSetter } = setProperty();


        if(keySetter && valueSetter){

        Object.defineProperty(propertiesobj, keySetter,{
        value : valueSetter,
        writable: true,        // Can modify the value later
        enumerable: true,      // Will appear in loops like for...in
        configurable: true     // Can delete or reconfigure the property

        });

        const defineList = document.getElementById('defineList');
        defineList.innerHTML="";

        for(let key in propertiesobj){
          const defineItem = document.createElement('li');
          defineItem.textContent=`${key} : ${propertiesobj[key]}`;
          defineList.appendChild(defineItem);

        }
     

        const message =document.getElementsByClassName('description')[4];
        message.innerHTML=`The Object.defineProperty() method allows you to create or modify a property on an object and gives you more control over the property's characteristics, such as whether it is writable, enumerable, or configurable. you can see the addition of islam in this data`
      }
      else{
        const errorMessage = document.getElementsByClassName('error-message')[2];
        errorMessage.innerHTML=`Please provide both key and value for the new property.`
      }
    }

      function resetCreate(){
        const defineList = document.getElementById('defineList');
        defineList.innerHTML="";

        const message =document.getElementsByClassName('description')[4];
        message.innerHTML="";

        const errorMessage = document.getElementsByClassName('error-message')[2];
        errorMessage.innerHTML="";

        document.getElementById("name-set").value = "";  
        document.getElementById("age-set").value = "";
       document.getElementById("occupation-set").value = "";
      document.getElementById("country-set").value = "";
      document.getElementById("SetKey").value = "";
      document.getElementById("SetValue").value = "";
}

      

      // definGetter method

      function getProperty(){
        const name = document.getElementById("name-get").value;
        const age = document.getElementById("age-get").value;
        const occupation = document.getElementById("occupation-get").value;
        const country = document.getElementById("country-get").value;
      
        return{
          name:name,
          age:age,
          occupation:occupation,
          country:country
      
        };
      }

      

      function defineGetterProperty() {
        const objectGetter = getProperty();  
   
    Object.defineProperty(objectGetter, 'detail', {
        get: function() {
            return `${this.name} is ${this.age} years old and works as a ${this.occupation} in ${this.country}.`;
        }
        
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

      document.getElementById("name-get").value = "";
      document.getElementById("age-get").value = "";
      document.getElementById("occupation-get").value = "";
      document.getElementById("country-get").value = "";
      }

      