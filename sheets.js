class DataHandler {

    constructor(){
      this.testUrl = 'https://sheet.best/api/sheets/e52e0bfb-68a3-4bb1-ae8d-8fface8908df/tabs/Folha1'
      this.pingsUrl= 'https://sheet.best/api/sheets/e52e0bfb-68a3-4bb1-ae8d-8fface8908df/tabs/Folha2'
      this.contactsUrl= 'https://sheet.best/api/sheets/e52e0bfb-68a3-4bb1-ae8d-8fface8908df/tabs/Folha3'
    }
  
  
    postNewRequest(dataArray){
        fetch(this.testUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataArray),
    })
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log( 'Add new data' + data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
    }

    postNewPing(date){
        fetch(this.pingsUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(date),
    })
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log( 'Add new data' + data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
    }

    postNewContact(dta){
      fetch(this.contactsUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dta),
    })
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log( 'Add new data' + data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
    }
  
  }



  
export{DataHandler}