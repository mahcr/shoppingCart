import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as navRoutingActions from '@app/features/core/nav-routing/+state/+nav-routing.actions';

@Injectable()
export class NavRoutingEffects {
  constructor(private actions$: Actions, private router: Router, private location: Location) {}

  public navigate$: Observable<any> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navRoutingActions.GO),
        map(action => action.payload),
        tap(payload => this.router.navigate(payload.path, { queryParams: payload.query, ...payload.extras }))
      ),
    { dispatch: false }
  );

  public navigateBack$: Observable<any> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navRoutingActions.BACK),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  public navigateForward$: Observable<any> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navRoutingActions.FORWARD),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );
}