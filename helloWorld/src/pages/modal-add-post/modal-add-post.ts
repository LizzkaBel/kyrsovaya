import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {PostsProvider} from "../../providers/posts/posts";
import {UserPostClass} from "../../components/post-page-class";
import {UserClass} from "../../components/post-page/UserClass";
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

/**
 * Generated class for the ModalAddPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-add-post',
  templateUrl: 'modal-add-post.html',
})
export class ModalAddPostPage {
    loading: any;
    date:any;
    name:string;
    user:UserClass;

  constructor(private view: ViewController, public postsService: PostsProvider, public loadingCtrl: LoadingController,
              public storage:Storage, public events: Events) {
      this.user = new UserClass();
  }

  ionViewWillLoad() {
        this.storage.get("user").then((val)=>{
            this.user = val;
        });
  }
   closeModal() {
      this.view.dismiss();
   }
    addPost(){
      if(this.date && this.name && this.date.length > 0 && this.name.length > 0) {
          let a: string = "";
          this.date.split('-').forEach((val) => {
              a += val+'/';
          });
          this.date = a.slice(0,-1);
          let newPost: UserPostClass;
          newPost = new UserPostClass();
          newPost.username = this.user.username;
          newPost.date = this.date;
          newPost.name = this.name;
          newPost.user_id = this.user.id;
          this.showLoader();
          this.postsService.createPost(newPost).then((result) => {
              this.loading.dismiss();
              // this.userPosts.push(post);
              console.log("post created");
              this.events.publish("created", newPost);
          }, (err) => {
              this.loading.dismiss();
              console.log("not allowed");
          });
          this.closeModal()
      }
    }
   /*
    addPost(){
        let prompt = this.alertCtrl.create({
            title: 'Add Post',
            message: 'Describe your post below:',
            inputs: [
                {
                    name: 'name'
                }
                ,{
                    name:'date'
                }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler:  post => {

                        if(post){

                            let newPost:UserPostClass;

                            newPost = new UserPostClass();
                            newPost.username = this.user.username;
                            newPost.date = post.name;
                            newPost.name = post.date;
                            newPost.user_id = this.user.id;
                            post  = newPost ;
                            this.showLoader();
                            this.postsService.createPost(post).then((result) => {
                                this.loading.dismiss();
                                // this.userPosts.push(post);
                                console.log("post created");
                                this.postsService.getPostsByUsername(this.user.username).then((value)=>{this.userPosts= value;})
                            }, (err) => {
                                this.loading.dismiss();
                                console.log("not allowed");
                            });
                        }
                    }
                }
            ]
        });

        prompt.present();

    }
    */
    showLoader(){

        this.loading = this.loadingCtrl.create({
            content: 'Init posts...'
        });

        this.loading.present();
    }
}
