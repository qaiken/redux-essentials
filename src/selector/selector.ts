import { createSelector } from '@reduxjs/toolkit';
import { movieApiSlice } from '@/src/service/query/rtkQuery';

const selectGlobalLoading = createSelector(
  (state: any) => state[movieApiSlice.reducerPath],
  (apiState) => {
    const isFetchingQueries = Object.values(apiState.queries).some(
      (query: any) => query?.status === 'pending'
    );
    const isFetchingMutations = Object.values(apiState.mutations).some(
      (mutation: any) => mutation?.status === 'pending'
    );
    return isFetchingQueries || isFetchingMutations;
  }
);

export { selectGlobalLoading };
