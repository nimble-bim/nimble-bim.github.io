import queryString from 'query-string';

const hubDebug = process.env.URL_DEBUG || 'http://localhost:4422';
const hubProduction = process.env.URL_PRODUCTION || 'https://nimblebim-api.herokuapp.com/';

class SessionHandlingService {
  constructor() {
    this.isRevit = false;
    this.isAuthorized = false;
    this.isUserLoggedIn = false;
    this.isProduction = false;
    
    this.documentId = null;
    this.revitSocketId = null;
    this.uiSocketId = null;
  }

  processQueryParameters(data) {
    try {
      if ( data === null 
        || data === "" 
        || data === undefined) {
        return;
      }
  
      const { revitappid, revitsocketid, debug } = queryString.parse(data);
      const isDebug = JSON.parse(debug) || false;
      const documentId = revitappid;
      const revitSocketId = revitsocketid;
      const isRevit = undefined !== revitappid;
      const hubUrl = isDebug ? hubDebug : hubProduction;

      this.documentId = documentId;
      this.revitSocketId = revitSocketId;
      this.isRevit = isRevit;
      this.isDebug = isDebug;
      this.hubUrl = hubUrl;

      console.log('The revit application id is: ', revitappid);

      const newState = {
        documentId,
        revitSocketId,
        isRevit,
        isDebug,
        hubUrl
      }

      return newState;
    } 

    catch (error) {
      
    }
  }

  setUISocketId(id) {
    this.uiSocketId = id;
  }
}

var session = new SessionHandlingService();

export default session;

