import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GojsAngularModule } from 'gojs-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagramBuilderComponent } from './components/diagram-builder/diagram-builder.component';
import { DiagramBuilderPaletteComponent } from './components/diagram-builder-palette/diagram-builder-palette.component';
import { DiagramBuilderPaneComponent } from './components/diagram-builder-pane/diagram-builder-pane.component';
import { DiagramBuilderOverviewComponent } from './components/diagram-builder-overview/diagram-builder-overview.component';
import { DiagramNodeInspectorComponent } from './components/diagram-node-inspector/diagram-node-inspector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DiagramBuilderComponent,
    DiagramBuilderPaletteComponent,
    DiagramBuilderPaneComponent,
    DiagramBuilderOverviewComponent,
    DiagramNodeInspectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GojsAngularModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
