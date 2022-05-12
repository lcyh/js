let NavTest = require('./nav-test');
let roles = [
    "Home","Dashbord","Permission","PageUser",
    "PageAdmin","Roles","Github"
];
const asyncRoutes = [
    {
      path: '/permission',
      name: 'Permission',
    //   component: Layout,
      redirect: '/permission/page-use',
      meta: {
        title: '权限许可',
        icon: 'el-icon-lock'
      },
      children: [
        {
          path: 'page-user',
          name: 'PageUser',
          component: () => import('@/views/permission/page-user'),
          meta: { title: '用户页面', icon: 'el-icon-user' }
        },
        {
          path: 'page-admin',
          name: 'PageAdmin',
          component: () => import('@/views/permission/page-admin'),
          meta: {
            title: '管理员页面',
            icon: 'el-icon-user-solid'
          }
        },
      ]
    },
    {
      path: 'https://github.com/gcddblue/vue-admin-webapp',
      name: 'Github',
      meta: { icon: 'el-icon-link', title: '项目链接' }
    },
    {
      path: '*',
      name: '404',
      redirect: '/404',
      hidden: true
    }
  ]
// 递归过滤(遍历asyncRoutes动态路由) 
function forSearchArr(route, roles) {
    let arrNew = []
    for (let item of route) {
      let itemNew = { ...item } //浅拷贝
      if (roles.includes(itemNew.name)) {
        if (itemNew.children) {
          itemNew.children = forSearchArr(itemNew.children, roles)
        }
        arrNew.push(itemNew)
      }
    }
    return arrNew
  }
  let newRouteArrs = forSearchArr(asyncRoutes,roles);
  console.log('newRouteArrs',JSON.stringify(newRouteArrs,null,2));