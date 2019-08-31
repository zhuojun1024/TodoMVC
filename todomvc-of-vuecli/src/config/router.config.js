export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index/Index.vue'),
    meta: { title: '首页' },
    children: []
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = []
