import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Observable } from 'rxjs';

import { AppComponent } from 'src/app/app.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('AppComponent', () => {
  const actions$: Observable<Action> = {} as any;
  let store: MockStore<{ loggedIn: boolean }>;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        SharedModule,
        SweetAlert2Module.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({
          initialState: {
            loggedIn: false,
            header: {
              menu: {
                menu: [],
                loading: true
              }
            }
          }
        }),
        provideMockActions(() => actions$)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.inject<MockStore<any>>(MockStore);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component and open a dialog on IE', fakeAsync(() => {
    spyOnProperty(window.navigator, 'userAgent', 'get').and.returnValue('trident');
    component.warningAlert = { fire: () => { } } as any;
    component.ngAfterViewInit();
    tick(1500);

    expect(component).toBeTruthy();
  }));

  it('should create the app component and NOT open a dialog', fakeAsync(() => {
    component.warningAlert = { fire: () => { } } as any;
    component.ngAfterViewInit();
    tick(1500);

    expect(component).toBeTruthy();
  }));
});
