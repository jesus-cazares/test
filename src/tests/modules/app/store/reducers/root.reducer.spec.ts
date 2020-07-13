import { getRouterInfo, ROOT_REDUCERS } from 'src/app/store/index';

describe('Root Reducer', () => {
  it('should return the previous state', () => {
    expect(ROOT_REDUCERS).toBeTruthy();
  });

  it('should return the router info', () => {
    expect(getRouterInfo.projector({ state: 'Testing' })).toBeTruthy();
  });
});
