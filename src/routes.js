const {
  addNoteHandler,
  getAllNotesHandler,
  getNotesByIdHandler,
  editNoteByHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    // options: {
    //   cors: {
    //     origin: ['*'],
    //   },
    // },
  },

  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesByIdHandler,
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: () => {},
  },
];

module.exports = routes;
