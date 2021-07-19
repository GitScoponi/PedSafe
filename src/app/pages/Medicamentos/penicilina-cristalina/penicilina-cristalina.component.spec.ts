import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PenicilinaCristalinaComponent } from './penicilina-cristalina.component';

describe('PenicilinaCristalinaComponent', () => {
  let component: PenicilinaCristalinaComponent;
  let fixture: ComponentFixture<PenicilinaCristalinaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PenicilinaCristalinaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PenicilinaCristalinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
