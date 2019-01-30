// This function is called an action creator
// Whenever we call it, a returned action
// will be automatically dispatched and sent to reducers
// Actions are OBJECTS required to have TYPE property assigned to it
// This action is telling it that we want to select a new book
export const selectLibrary = (libraryId) => ({
    type: 'select_library',
    payload: libraryId
  });
