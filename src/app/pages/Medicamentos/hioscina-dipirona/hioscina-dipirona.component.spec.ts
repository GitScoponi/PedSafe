import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HioscinaDipironaComponent } from './hioscina-dipirona.component';

describe('HioscinaDipironaComponent', () => {
  let component: HioscinaDipironaComponent;
  let fixture: ComponentFixture<HioscinaDipironaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HioscinaDipironaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HioscinaDipironaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
