'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/login', 'AuthController.login')
// Route.post('/logout', 'AuthController.logout')
Route.post('/register','UserController.store')
/* Rutas Usuarios */
Route.get('/api/users', 'UserController.index').middleware('auth')
Route.delete('/api/users/:id','UserController.destroy').middleware('auth')
Route.put('/api/users/:id','UserController.update').middleware('auth')

/* Rutas Productos */
Route.get('/api/products', 'ProductController.index').middleware('auth')
Route.post('/api/products','ProductController.store').middleware('auth')
Route.delete('/api/products/:id','ProductController.destroy').middleware('auth')
Route.put('/api/products/:id','ProductController.update').middleware('auth')

/* Rutas Comentarios */
Route.get('/api/comments', 'CommentController.index').middleware('auth')
Route.get('/api/comments/:id', 'CommentController.commentsByProduct').middleware('auth')
Route.post('/api/comments','CommentController.store').middleware('auth')
Route.delete('/api/comments/:id','CommentController.destroy').middleware('auth')
Route.put('/api/comments/:id','CommentController.update').middleware('auth')