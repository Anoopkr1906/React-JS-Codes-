import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();

  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client); //in docs, bucket is reffered to as storage
  }

  //Database Work https://appwrite.io/docs/references/cloud/client-web/databases

  //To create a particular Post by a user
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Couldn't create the post!", error);
    }
  }

  //since we are only allowing the one who is the account owner to make changes in the post, therefore there is no need to add userId in it. We will only allow the below to be done by the user who made the original post

  //To update the already existing post by the user who originally posted it
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {}
  }

  //To delete a particular Post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );

      return true;
    } catch (error) {
      console.log("Couldn't delete post!", error);

      return false;
    }
  }

  //Get a post by its unique ID. This endpoint response returns a JSON object with the post data.
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Couldn't retrive post!", error);
      return false;
    }
  }

  //Get Posts that are set to active state (here we made a parameter that gets all the Query whose status is set to active, and only returns that)
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Couldn't list posts!", error);
      return false;
    }
  }

  //File Upload services (Method) https://appwrite.io/docs/references/cloud/client-web/storage
  //todo: Make a seperate file for file upload service

  //To upload a file in the storage
  async uploadFile(file) {
    try {
      //here ID.unique() is acting as a fileId
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Couldn't upload file!", error);
    }
  }

  //To delete a file
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Couldn't delete the file!", error);
      return false;
    }
  }

  //To view a file (this returns the link to the file)
  //Note: The below method can be made without async-await, as it doesn't return a promise (check docs), it instantly retrives the file and previews it
    getFileView(fileId) {
    try {
      return this.bucket.getFileView (conf.appwriteBucketId, fileId);

    } catch (error) {
      console.log("Couldn't preview file!", error);
    }
  }

}

//Making an object of the Service class and exporting it by default
const service = new Service();

export default service;