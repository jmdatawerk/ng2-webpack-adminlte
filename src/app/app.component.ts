/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/**
 * Just to demonstrate traditional Bootstrap integration. Better to use
 *
 * https://github.com/valor-software/ng2-bootstrap
 *
 */
import 'jquery';
import 'bootstrap/js/tooltip';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.style.less').toString()
  ],
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">{{ name }}</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li router-active>
              <a [routerLink]=" ['./'] ">Index</a>
            </li>
            |
            <li router-active>
              <a [routerLink]=" ['./home'] ">Home</a>
            </li>
            |
            <li router-active>
              <a [routerLink]=" ['./detail'] ">Detail</a>
            </li>
            |
            <li router-active>
              <a [routerLink]=" ['./about'] ">About</a>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <router-outlet></router-outlet>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <pre>this.appState.state = {{ appState.state | json }}</pre>
        </div>
      </div>
    </div><!-- /.container -->

    <footer class="footer">
      <div class="container text-center">
        <img [src]="angularclassLogo" width="10%">
        WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a>
      </div>
    </footer>
  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
