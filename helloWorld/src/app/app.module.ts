import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { TodosProvider } from '../providers/todos/todos';
import {LoginPage} from "../pages/login/login";
import {SignupPage} from "../pages/signup/signup";
import {HttpModule} from "@angular/http";
import {IonicStorageModule} from "@ionic/storage";
import {ProfilePage} from "../pages/profile/profile";
import {PostPageComponent} from "../components/post-page/post-page";
import {PostListPage} from "../pages/post-list/post-list";
import {AddPostPage} from "../pages/add-post/add-post";
import {CustomTabsComponent} from "../components/custom-tabs/custom-tabs";
import { PostsProvider } from '../providers/posts/posts';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { TabsServiceProvider } from '../providers/tabs-service/tabs-service';
import {ModalAddPostPage} from "../pages/modal-add-post/modal-add-post";
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ProfilePage,
    PostPageComponent,
    CustomTabsComponent,
    PostListPage,
    AddPostPage,
      ModalAddPostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ProfilePage,
    PostListPage,
    AddPostPage,
    ModalAddPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    TodosProvider,
    PostsProvider,
    UserServiceProvider,
    TabsServiceProvider,
    LocalNotifications,
  ]
})
export class AppModule {}
