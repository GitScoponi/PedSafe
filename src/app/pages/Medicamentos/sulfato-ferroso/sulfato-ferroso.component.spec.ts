import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SulfatoFerrosoComponent } from './sulfato-ferroso.component';

describe('SulfatoFerrosoComponent', () => {
  let component: SulfatoFerrosoComponent;
  let fixture: ComponentFixture<SulfatoFerrosoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SulfatoFerrosoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SulfatoFerrosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
