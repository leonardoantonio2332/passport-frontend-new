import { NotFound, Users } from 'components/pages'

export const main = {
  basePath: '/',
  paths: [{
    path: '/',
    element: <Users />
  }, {
    path: '*',
    element: <NotFound />
  }]
}
