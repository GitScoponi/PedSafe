import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DexclorfeniraminaComponent } from './dexclorfeniramina.component';

describe('DexclorfeniraminaComponent', () => {
  let component: DexclorfeniraminaComponent;
  let fixture: ComponentFixture<DexclorfeniraminaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DexclorfeniraminaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DexclorfeniraminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
