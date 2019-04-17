import { observable, computed, autorun, action } from 'mobx'

class Authenticated {
  @observable isAuthenticated = true;
  @action.bound Authenticate() {
    this.isAuthenticated = false;
    console.log(this.isAuthenticated);
    
  }
}

let authenticated = new Authenticated()
export default authenticated 