import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SulfametoxazolTrimetropimComponent } from './sulfametoxazol-trimetropim.component';

describe('SulfametoxazolTrimetropimComponent', () => {
  let component: SulfametoxazolTrimetropimComponent;
  let fixture: ComponentFixture<SulfametoxazolTrimetropimComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SulfametoxazolTrimetropimComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SulfametoxazolTrimetropimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
