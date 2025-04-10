document.getElementById('ad-form').addEventListener('submit', function (e) {  
    e.preventDefault();  
    const title = document.getElementById('title').value;  
    const description = document.getElementById('description').value;  

    const ad = { title, description };  
    console.log('آگهی ثبت شد:', ad);  
    
    // add more code to save for commmercials 
});  
