import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/login',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/theme',
        name: 'Theme',
        redirect: '/theme/typography',
      },
      {
        path: '/theme/colors',
        name: 'Colors',
        component: () => import('@/views/theme/Colors.vue'),
      },
      {
        path: '/theme/typography',
        name: 'Typography',
        component: () => import('@/views/theme/Typography.vue'),
      },
      {
        path: '/base',
        name: 'Base',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/base/breadcrumbs',
        children: [
          {
            path: '/base/accordion',
            name: 'Accordion',
            component: () => import('@/views/base/Accordion.vue'),
          },
          {
            path: '/base/breadcrumbs',
            name: 'Breadcrumbs',
            component: () => import('@/views/base/Breadcrumbs.vue'),
          },
          {
            path: '/base/cards',
            name: 'Cards',
            component: () => import('@/views/base/Cards.vue'),
          },
          {
            path: '/base/carousels',
            name: 'Carousels',
            component: () => import('@/views/base/Carousels.vue'),
          },
          {
            path: '/base/collapses',
            name: 'Collapses',
            component: () => import('@/views/base/Collapses.vue'),
          },
          {
            path: '/base/list-groups',
            name: 'List Groups',
            component: () => import('@/views/base/ListGroups.vue'),
          },
          {
            path: '/base/navs',
            name: 'Navs',
            component: () => import('@/views/base/Navs.vue'),
          },
          {
            path: '/base/paginations',
            name: 'Paginations',
            component: () => import('@/views/base/Paginations.vue'),
          },
          {
            path: '/base/placeholders',
            name: 'Placeholders',
            component: () => import('@/views/base/Placeholders.vue'),
          },
          {
            path: '/base/popovers',
            name: 'Popovers',
            component: () => import('@/views/base/Popovers.vue'),
          },
          {
            path: '/base/progress',
            name: 'Progress',
            component: () => import('@/views/base/Progress.vue'),
          },
          {
            path: '/base/spinners',
            name: 'Spinners',
            component: () => import('@/views/base/Spinners.vue'),
          },
          {
            path: '/base/tables',
            name: 'Tables',
            component: () => import('@/views/base/Tables.vue'),
          },
          {
            path: '/base/tooltips',
            name: 'Tooltips',
            component: () => import('@/views/base/Tooltips.vue'),
          },
        ],
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/buttons/standard-buttons',
        children: [
          {
            path: '/buttons/standard-buttons',
            name: 'Buttons',
            component: () => import('@/views/buttons/Buttons.vue'),
          },
          {
            path: '/buttons/dropdowns',
            name: 'Dropdowns',
            component: () => import('@/views/buttons/Dropdowns.vue'),
          },
          {
            path: '/buttons/button-groups',
            name: 'Button Groups',
            component: () => import('@/views/buttons/ButtonGroups.vue'),
          },
        ],
      },
      {
        path: '/forms',
        name: 'Forms',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/forms/form-control',
        children: [
          {
            path: '/forms/form-control',
            name: 'Form Control',
            component: () => import('@/views/forms/FormControl.vue'),
          },
          {
            path: '/forms/select',
            name: 'Select',
            component: () => import('@/views/forms/Select.vue'),
          },
          {
            path: '/forms/multi-select',
            name: 'Multi Select',
            component: () => import('@/views/forms/MultiSelect.vue'),
          },
          {
            path: '/forms/checks-radios',
            name: 'Checks & Radios',
            component: () => import('@/views/forms/ChecksRadios.vue'),
          },
          {
            path: '/forms/range',
            name: 'Range',
            component: () => import('@/views/forms/Range.vue'),
          },
          {
            path: '/forms/input-group',
            name: 'Input Group',
            component: () => import('@/views/forms/InputGroup.vue'),
          },
          {
            path: '/forms/floating-labels',
            name: 'Floating Labels',
            component: () => import('@/views/forms/FloatingLabels.vue'),
          },
          {
            path: '/forms/date-picker',
            name: 'Date Picker',
            component: () => import('@/views/forms/DatePicker.vue'),
          },
          {
            path: '/forms/date-range-picker',
            name: 'Date Range Picker',
            component: () => import('@/views/forms/DateRangePicker.vue'),
          },
          {
            path: '/forms/time-picker',
            name: 'Time Picker',
            component: () => import('@/views/forms/TimePicker.vue'),
          },
          {
            path: '/forms/layout',
            name: 'Layout',
            component: () => import('@/views/forms/Layout.vue'),
          },
          {
            path: '/forms/validation',
            name: 'Validation',
            component: () => import('@/views/forms/Validation.vue'),
          },
        ],
      },
      {
        path: '/charts',
        name: 'Charts',
        component: () => import('@/views/charts/Charts.vue'),
      },
      {
        path: '/icons',
        name: 'Icons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/icons/coreui-icons',
        children: [
          {
            path: '/icons/coreui-icons',
            name: 'CoreUI Icons',
            component: () => import('@/views/icons/CoreUIIcons.vue'),
          },
          {
            path: '/icons/brands',
            name: 'Brands',
            component: () => import('@/views/icons/Brands.vue'),
          },
          {
            path: '/icons/flags',
            name: 'Flags',
            component: () => import('@/views/icons/Flags.vue'),
          },
        ],
      },
      {
        path: '/notifications',
        name: 'Notifications',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/notifications/alerts',
        children: [
          {
            path: '/notifications/alerts',
            name: 'Alerts',
            component: () => import('@/views/notifications/Alerts.vue'),
          },
          {
            path: '/notifications/badges',
            name: 'Badges',
            component: () => import('@/views/notifications/Badges.vue'),
          },
          {
            path: '/notifications/modals',
            name: 'Modals',
            component: () => import('@/views/notifications/Modals.vue'),
          },
        ],
      },
      {
        path: '/widgets',
        name: 'Widgets',
        component: () => import('@/views/widgets/Widgets.vue'),
      },
      {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('@/views/plugins/Calendar.vue'),
      },
      {
        path: 'apps',
        name: 'Apps',
        redirect: '/apps/invoicing/invoice',
        meta: {
          restriction: "SUPER-ADMIN"
        },
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        children: [
          {
            path: 'invoicing',
            redirect: '/apps/invoicing/invoice',
            name: 'Invoicing',
            component: {
              render() {
                return h(resolveComponent('router-view'))
              },
            },
            children: [
              {
                path: 'invoice',
                name: 'Invoice',
                component: () => import('@/views/apps/invoicing/Invoice.vue'),
              },
            ],
          },
        ],
      },
      {
        path: 'support-ticket',
        name: 'ST',
        redirect: '/support-ticket/',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        children: [
          {
            path: '',
            name: 'ST - Index',
            component: () => import('@/views/support-ticket/'),
          },
          {
            path: 'user/list',
            name: 'ST - List User',
            component: () => import('@/views/support-ticket/users/'),
          },
          {
            path: 'user/create',
            name: 'ST - Create User',
            component: () => import('@/views/support-ticket/users/CreateUser.vue'),
          },
          {
            path: 'user/dashboard',
            name: 'ST - Dashboard User',
            component: () => import('@/views/support-ticket/users/user_dashboard.vue'),
          },
          {
            path: 'ticket/create',
            name: 'ST - Create Ticket',
            component: () => import('@/views/support-ticket/tickets/create_ticket.vue'),
          },
          {
            path: 'ticket/book',
            name: 'ST - bookmark Ticket',
            component: () => import('@/views/support-ticket/users/book_mark.vue'),
          },
          {
            path: 'ticket/comment',
            name: 'ST - comment Ticket',
            component: () => import('@/views/support-ticket/tickets/comment'),
          },
          {
            path: 'admin/priority_list',
            name: 'ST - priority_list Ticket',
            component: () => import('@/views/support-ticket/admin/priority_list.vue'),
          },
          {
            path: 'admin/add_account',
            name: 'ST - add_account',
            component: () => import('@/views/support-ticket/admin/add_account.vue'),
          },
          {
            path: 'admin/admin_dashboard',
            name: 'ST - admin_dashboard',
            component: () => import('@/views/support-ticket/admin/admin_dashboard.vue'),
          },
          {
            path: 'admin/edit_account',
            name: 'ST - edit_account',
            component: () => import('@/views/support-ticket/admin/edit_account.vue'),
          },
          {
            path: 'admin/delete_account',
            name: 'ST - delete_account',
            component: () => import('@/views/support-ticket/admin/delete_account.vue'),
          },
          {
            path: 'admin/edit_priority',
            name: 'ST - edit_priority',
            component: () => import('@/views/support-ticket/admin/edit_priority.vue'),
          },
          {
            path: 'admin/create_priority',
            name: 'ST - create_priority',
            component: () => import('@/views/support-ticket/admin/create_priority.vue'),
          },
          {
            path: 'it/it_book_mark',
            name: 'ST - it_book_mark',
            component: () => import('@/views/support-ticket/it/it_book_mark.vue'),
          },
          {
            path: 'it/it_dashboard',
            name: 'ST - it_dashboard',
            component: () => import('@/views/support-ticket/it/it_dashboard.vue'),
          },
          {
            path: 'manager/manager_dashboard',
            name: 'ST - manager_dashboard',
            component: () => import('@/views/support-ticket/manager/manager_dashboard.vue'),
          },
          {
            path: 'it/it_my_task',
            name: 'ST - it_my_task',
            component: () => import('@/views/support-ticket/it/it_my_task.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
      // {
      //   path: '/login1',
      //   name: 'Login1',
      //   component: () => import('@/views/pages/Login1'),
      // },
    ],
  },
  {
    path: '/apps/email',
    redirect: '/apps/email/inbox',
    name: 'Email',
    component: () => import('@/views/apps/email/EmailApp.vue'),
    children: [
      {
        path: 'compose',
        name: 'Compose',
        component: () => import('@/views/apps/email/Compose.vue'),
      },
      {
        path: 'inbox',
        name: 'Inbox',
        component: () => import('@/views/apps/email/Inbox.vue'),
      },
      {
        path: 'message',
        name: 'Message',
        component: () => import('@/views/apps/email/Message.vue'),
      },
    ],
  },

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach(async (to, from, next) => {
  const user = JSON.parse(localStorage.getItem('USER_DATA'))
  const restrict = to.meta.restriction
  if (!user && to.name !== "Login") {
    return next({ name: "Login" })
  } else if (user && to.name === "Login") {
    return next("/support-ticket/user/dashboard");
  } else {
    if (restrict && user.role !== restrict) {
      return next("/support-ticket/user/dashboard");
    } else {
      return next();
    }
    
  }
});

export default router
