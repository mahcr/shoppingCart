import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { environment } from '@enviroments/environment';
import { RoutingEffects } from '@app/features/core/store/routing/routing.effects';
import { RoutingSerializer } from '@app/features/core/store/routing/routing.serializer';
import { navRoutingFeatureKey, reducers } from '@app/features/core/store/routing/routing.reducer';
export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  imports: [
    StoreModule.forFeature(navRoutingFeatureKey, reducers, {
      metaReducers,
    }),
    EffectsModule.forFeature([RoutingEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [{ provide: RouterStateSerializer, useClass: RoutingSerializer }],
})
export class RoutingStoreModule {}