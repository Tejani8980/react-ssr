import Dashboard from './Dashboard'
import SingleBlog from './SingleBlog'
import { getAllBlogData } from './api'

const routes =  [
  {
    path: '/',
    component: Dashboard,
    getBlogData: () => getAllBlogData()
  },
  {
    path: '/blog/:id',
    component: SingleBlog,
    getBlogData: (path = '') => getAllBlogData(path.split('/').pop())
  }
]

export default routes
