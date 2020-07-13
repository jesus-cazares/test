import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from 'src/app/core/guards/auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  it('should inject the guard', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should activate the route (canActivate)', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard.canActivate({} as any, {} as any)).toEqual(true, 'Can activate the route');
  }));

  it('should activate child route (canActivateChild)', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard.canActivateChild({} as any, {} as any)).toEqual(true, 'Can activate the route');
  }));

  it('should load the module (canLoad)', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard.canLoad({} as any, {} as any)).toEqual(true, 'Can activate the route');
  }));
});
