import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcebrofilinaComponent } from '../../Medicamentos/acebrofilina/acebrofilina.component';
import { AlbendazolComponent } from '../../Medicamentos/albendazol/albendazol.component';
import { AmicacinaComponent } from '../../Medicamentos/amicacina/amicacina.component';
import { AmoxicilinaComponent } from '../../Medicamentos/amoxicilina/amoxicilina.component';
import { AmpicilinaComponent } from '../../Medicamentos/ampicilina/ampicilina.component';
import { AzitromicinaComponent } from '../../Medicamentos/azitromicina/azitromicina.component';
import { BromopridaComponent } from '../../Medicamentos/bromoprida/bromoprida.component';
import { BuprofenoComponent } from '../../Medicamentos/buprofeno/buprofeno.component';
import { CefadroxilaComponent } from '../../Medicamentos/cefadroxila/cefadroxila.component';
import { CefalexinaComponent } from '../../Medicamentos/cefalexina/cefalexina.component';
import { CefalotinaComponent } from '../../Medicamentos/cefalotina/cefalotina.component';
import { CefepimeComponent } from '../../Medicamentos/cefepime/cefepime.component';
import { CeftazidimaComponent } from '../../Medicamentos/ceftazidima/ceftazidima.component';
import { CeftriaxonaComponent } from '../../Medicamentos/ceftriaxona/ceftriaxona.component';
import { CetoprofenoComponent } from '../../Medicamentos/cetoprofeno/cetoprofeno.component';
import { CiprofloxacinoComponent } from '../../Medicamentos/ciprofloxacino/ciprofloxacino.component';
import { ClavulanatoComponent } from '../../Medicamentos/clavulanato/clavulanato.component';
import { ClindamicinaComponent } from '../../Medicamentos/clindamicina/clindamicina.component';
import { ColikidsComponent } from '../../Medicamentos/colikids/colikids.component';
import { DesloratadinaComponent } from '../../Medicamentos/desloratadina/desloratadina.component';
import { DexametasonaComponent } from '../../Medicamentos/dexametasona/dexametasona.component';
import { DexclorfeniraminaComponent } from '../../Medicamentos/dexclorfeniramina/dexclorfeniramina.component';
import { DipironaComponent } from '../../Medicamentos/dipirona/dipirona.component';
import { DomperidonaComponent } from '../../Medicamentos/domperidona/domperidona.component';
import { DraminComponent } from '../../Medicamentos/dramin/dramin.component';
import { FloratilComponent } from '../../Medicamentos/floratil/floratil.component';
import { GentamicinaComponent } from '../../Medicamentos/gentamicina/gentamicina.component';
import { HidrocortisonaComponent } from '../../Medicamentos/hidrocortisona/hidrocortisona.component';
import { HidroxizineComponent } from '../../Medicamentos/hidroxizine/hidroxizine.component';
import { HioscinaDipironaComponent } from '../../Medicamentos/hioscina-dipirona/hioscina-dipirona.component';
import { HioscinaComponent } from '../../Medicamentos/hioscina/hioscina.component';
import { InvermectinaComponent } from '../../Medicamentos/invermectina/invermectina.component';
import { KoidDComponent } from '../../Medicamentos/koid-d/koid-d.component';
import { LactuloseComponent } from '../../Medicamentos/lactulose/lactulose.component';
import { LoratadinaComponent } from '../../Medicamentos/loratadina/loratadina.component';
import { MebendazolComponent } from '../../Medicamentos/mebendazol/mebendazol.component';
import { MeropenemComponent } from '../../Medicamentos/meropenem/meropenem.component';
import { MetronidazolComponent } from '../../Medicamentos/metronidazol/metronidazol.component';
import { MorfinaComponent } from '../../Medicamentos/morfina/morfina.component';
import { MucositeComponent } from '../../Medicamentos/mucosite/mucosite.component';
import { NitazoxanidaComponent } from '../../Medicamentos/nitazoxanida/nitazoxanida.component';
import { OleoMineralComponent } from '../../Medicamentos/oleo-mineral/oleo-mineral.component';
import { OndasentronaComponent } from '../../Medicamentos/ondasentrona/ondasentrona.component';
import { OxacilinaComponent } from '../../Medicamentos/oxacilina/oxacilina.component';
import { ParacetamolComponent } from '../../Medicamentos/paracetamol/paracetamol.component';
import { PenicilinaBenzatinaComponent } from '../../Medicamentos/penicilina-benzatina/penicilina-benzatina.component';
import { PenicilinaCristalinaComponent } from '../../Medicamentos/penicilina-cristalina/penicilina-cristalina.component';
import { PenicilinaVComponent } from '../../Medicamentos/penicilina-v/penicilina-v.component';
import { PrednisolonaComponent } from '../../Medicamentos/prednisolona/prednisolona.component';
import { PrometazinaComponent } from '../../Medicamentos/prometazina/prometazina.component';
import { RanitidinaComponent } from '../../Medicamentos/ranitidina/ranitidina.component';
import { SimeticonaComponent } from '../../Medicamentos/simeticona/simeticona.component';
import { SulfametoxazolTrimetropimComponent } from '../../Medicamentos/sulfametoxazol-trimetropim/sulfametoxazol-trimetropim.component';
import { SulfatoFerrosoComponent } from '../../Medicamentos/sulfato-ferroso/sulfato-ferroso.component';
import { ToranteComponent } from '../../Medicamentos/torante/torante.component';
import { TramadolComponent } from '../../Medicamentos/tramadol/tramadol.component';
import { VancomicinaComponent } from '../../Medicamentos/vancomicina/vancomicina.component';

import { MedicamentosPage } from './medicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosPage,
    children: [
      { path: 'ampicilina', component: AmpicilinaComponent },
      { path: 'amicacina', component: AmicacinaComponent },
      { path: 'acebrofilina', component: AcebrofilinaComponent },
      { path: 'albendazol ', component: AlbendazolComponent },
      { path: 'amoxicilina', component: AmoxicilinaComponent },
      { path: 'amoxicilina - clavulanato', component: ClavulanatoComponent },
      { path: 'azitromicina', component: AzitromicinaComponent },
      { path: 'bromoprida', component: BromopridaComponent },
      { path: 'buprofeno', component: BuprofenoComponent },
      { path: 'cefadroxila', component: CefadroxilaComponent },
      { path: 'cefalexina', component: CefalexinaComponent },
      { path: 'cefalotina', component: CefalotinaComponent },
      { path: 'cefepime', component: CefepimeComponent },
      { path: 'ceftazidima', component: CeftazidimaComponent },
      { path: 'ceftriaxona', component: CeftriaxonaComponent },
      { path: 'cetoprofeno', component: CetoprofenoComponent },
      { path: 'ciprofloxacino', component: CiprofloxacinoComponent },
      { path: 'clindamicina', component: ClindamicinaComponent },
      { path: 'colikids', component: ColikidsComponent },
      { path: 'desloratadina', component: DesloratadinaComponent },
      { path: 'dexametasona', component: DexametasonaComponent },
      { path: 'dexclorfeniramina', component: DexclorfeniraminaComponent },
      { path: 'dipirona ', component: DipironaComponent },
      { path: 'domperidona', component: DomperidonaComponent },
      { path: 'dramin', component: DraminComponent },
      { path: 'floratil', component: FloratilComponent },
      { path: 'gentamicina', component: GentamicinaComponent },
      { path: 'hidroxizine', component: HidroxizineComponent },
      { path: 'hidrocortisona', component: HidrocortisonaComponent },
      { path: 'hioscina', component: HioscinaComponent },
      { path: 'hioscina + dipirona', component: HioscinaDipironaComponent },
      { path: 'ivermectina', component: InvermectinaComponent },
      { path: 'koid d', component: KoidDComponent },
      { path: 'lactulose', component: LactuloseComponent },
      { path: 'loratadina', component: LoratadinaComponent },
      { path: 'mebendazol', component: MebendazolComponent },
      { path: 'meropenem', component: MeropenemComponent },
      { path: 'metronidazol', component: MetronidazolComponent },
      { path: 'morfina', component: MorfinaComponent },
      { path: 'nitazoxanida', component: NitazoxanidaComponent },
      { path: 'ondasentrona', component: OndasentronaComponent },
      { path: 'oxacilina', component: OxacilinaComponent },
      { path: 'paracetamol', component: ParacetamolComponent },
      { path: 'penicilina benzatina', component: PenicilinaBenzatinaComponent },
      {
        path: 'penicilina cristalina',
        component: PenicilinaCristalinaComponent,
      },
      { path: 'penicilina v', component: PenicilinaVComponent },
      { path: 'prednisolona', component: PrednisolonaComponent },
      { path: 'prometazina', component: PrometazinaComponent },
      { path: 'ranitidina', component: RanitidinaComponent },
      { path: 'simeticona', component: SimeticonaComponent },
      { path: 'solução para mucosite', component: MucositeComponent },
      {
        path: 'sulfametoxazol - trimetropim',
        component: SulfametoxazolTrimetropimComponent,
      },
      { path: 'sulfato ferroso', component: SulfatoFerrosoComponent },
      { path: 'torante', component: ToranteComponent },
      { path: 'tramadol', component: TramadolComponent },
      { path: 'vancomicina', component: VancomicinaComponent },
      { path: 'óleo mineral', component: OleoMineralComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentosPageRoutingModule {}
