import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

//Kindly check docs for better understanding of authentication service
export class AuthService {

  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  //sign up
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //if userAccount is true, that is if bro's account has successfully been created, then let bro cook (login)

        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("There was a problem in signing up!", error);
    }
  }

  //log in (creating a session)
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("There was a problem in logging in!", error);
    }
  }

  //checks if the user is loggined in or not (currently on session)
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Sorry, you are not logged in!", error);
    }
  }

  //this log outs user from all sessions
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Sorry, couldn't log out!", error);
    }
  }
}

//Making an object for the AuthService class and exporting it by default
const authService = new AuthService();

export default authService;