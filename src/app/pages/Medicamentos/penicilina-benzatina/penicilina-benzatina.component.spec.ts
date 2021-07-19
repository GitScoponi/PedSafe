import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PenicilinaBenzatinaComponent } from './penicilina-benzatina.component';

describe('PenicilinaBenzatinaComponent', () => {
  let component: PenicilinaBenzatinaComponent;
  let fixture: ComponentFixture<PenicilinaBenzatinaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PenicilinaBenzatinaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PenicilinaBenzatinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
