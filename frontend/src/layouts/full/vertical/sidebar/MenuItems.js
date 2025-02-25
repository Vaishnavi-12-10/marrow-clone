import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconAlertCircle,
  IconNotes,
  IconCalendar,
  IconMail,
  IconTicket,
  IconEdit,
  IconGitMerge,
  IconCurrencyDollar,
  IconApps,
  IconFileDescription,
  IconFileDots,
  IconFiles,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderVertical,
  IconBorderTop,
  IconUserCircle,
  IconPackage,
  IconMessage2,
  IconBasket,
  IconChartLine,
  IconChartArcs,
  IconChartCandle,
  IconChartArea,
  IconChartDots,
  IconChartDonut3,
  IconChartRadar,
  IconLogin,
  IconUserPlus,
  IconRotate,
  IconBox,
  IconAperture,
  IconShoppingCart,
  IconHelp,
  IconBoxAlignBottom,
  IconBoxAlignLeft,
  IconLayout,
  IconZoomCode,
  IconSettings,
  IconBorderStyle2,
  IconAppWindow,
  IconLockAccess,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

// const Menuitems = [
//   {
//     navlabel: true,
//     subheader: 'Home',
//   },

//   {
//     id: uniqueId(),
//     title: 'Modern',
//     icon: IconAperture,
//     href: '/dashboards/modern',
//     chip: 'New',
//     chipColor: 'secondary',
//   },
//   {
//     id: uniqueId(),
//     title: 'eCommerce',
//     icon: IconShoppingCart,
//     href: '/dashboards/ecommerce',
//   },
//   {
//     navlabel: true,
//     subheader: 'Apps',
//   },
//   {
//     id: uniqueId(),
//     title: 'Contacts',
//     icon: IconPackage,
//     chip: '2',
//     chipColor: 'secondary',
//     href: '/apps/contacts',
//   },

//   {
//     id: uniqueId(),
//     title: 'Blog',
//     icon: IconChartDonut3,
//     href: '/apps/blog/',
//     children: [
//       {
//         id: uniqueId(),
//         title: 'Posts',
//         icon: IconPoint,
//         href: '/apps/blog/posts',
//       },
//       {
//         id: uniqueId(),
//         title: 'Detail',
//         icon: IconPoint,
//         href: '/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow',
//       },
//     ],
//   },
//   {
//     id: uniqueId(),
//     title: 'Ecommerce',
//     icon: IconBasket,
//     href: '/apps/ecommerce/',
//     children: [
//       {
//         id: uniqueId(),
//         title: 'Shop',
//         icon: IconPoint,
//         href: '/apps/ecommerce/shop',
//       },
//       {
//         id: uniqueId(),
//         title: 'Detail',
//         icon: IconPoint,
//         href: '/apps/ecommerce/detail/1',
//       },
//       {
//         id: uniqueId(),
//         title: 'List',
//         icon: IconPoint,
//         href: '/apps/ecommerce/eco-product-list',
//       },
//       {
//         id: uniqueId(),
//         title: 'Checkout',
//         icon: IconPoint,
//         href: '/apps/ecommerce/eco-checkout',
//       },
//     ],
//   },
//   {
//     id: uniqueId(),
//     title: 'Chats',
//     icon: IconMessage2,
//     href: '/apps/chats',
//   },
//   {
//     id: uniqueId(),
//     title: 'Users',
//     icon: IconUserCircle,
//     href: '/user-profile',
//     children: [
//       {
//         id: uniqueId(),
//         title: 'Profile',
//         icon: IconPoint,
//         href: '/user-profile',
//       },
//       {
//         id: uniqueId(),
//         title: 'Followers',
//         icon: IconPoint,
//         href: '/apps/followers',
//       },
//       {
//         id: uniqueId(),
//         title: 'Friends',
//         icon: IconPoint,
//         href: '/apps/friends',
//       },
//       {
//         id: uniqueId(),
//         title: 'Gallery',
//         icon: IconPoint,
//         href: '/apps/gallery',
//       },
//     ],
//   },
//   {
//     id: uniqueId(),
//     title: 'Notes',
//     icon: IconNotes,
//     href: '/apps/notes',
//   },
//   {
//     id: uniqueId(),
//     title: 'Calendar',
//     icon: IconCalendar,
//     href: '/apps/calendar',
//   },
//   {
//     id: uniqueId(),
//     title: 'Email',
//     icon: IconMail,
//     href: '/apps/email',
//   },
//   {
//     id: uniqueId(),
//     title: 'Tickets',
//     icon: IconTicket,
//     href: '/apps/tickets',
//   },
//   {
//     navlabel: true,
//     subheader: 'Pages',
//   },
//   {
//     id: uniqueId(),
//     title: 'Roll Base Access',
//     icon: IconLockAccess,
//     href: '/pages/casl',
//   },
//   {
//     id: uniqueId(),
//     title: 'Treeview',
//     icon: IconGitMerge,
//     href: '/pages/treeview',
//   },
//   {
//     id: uniqueId(),
//     title: 'Pricing',
//     icon: IconCurrencyDollar,
//     href: '/pages/pricing',
//   },
//   {
//     id: uniqueId(),
//     title: 'Account Setting',
//     icon: IconUserCircle,
//     href: '/pages/account-settings',
//   },
//   {
//     id: uniqueId(),
//     title: 'FAQ',
//     icon: IconHelp,
//     href: '/pages/faq',
//   },
//   {
//     id: uniqueId(),
//     title: 'Landingpage',
//     icon: IconAppWindow,
//     href: '/landingpage',
//   },
//   {
//     id: uniqueId(),
//     title: 'Widgets',
//     icon: IconLayout,
//     href: '/widgets/cards',
//     children: [
//       {
//         id: uniqueId(),
//         title: 'Cards',
//         icon: IconPoint,
//         href: '/widgets/cards',
//       },
//       {
//         id: uniqueId(),
//         title: 'Banners',
//         icon: IconPoint,
//         href: '/widgets/banners',
//       },
//       {
//         id: uniqueId(),
//         title: 'Charts',
//         icon: IconPoint,
//         href: '/widgets/charts',
//       },
//     ],
//   },
//   {
//     navlabel: true,
//     subheader: 'Forms',
//   },
//   {
//     id: uniqueId(),
//     title: 'Form Elements',
//     icon: IconApps,
//     href: '/forms/form-elements/autocomplete',
//     children: [
//       {
//         id: uniqueId(),
//         title: 'Autocomplete',
//         icon: IconPoint,
//         href: '/forms/form-elements/autocomplete',
//       },
//       {
//         id: uniqueId(),
//         title: 'Button',
//         icon: IconPoint,
//         href: '/forms/form-elements/button',
//       },
//       {
//         id: uniqueId(),
//         title: 'Checkbox',
//         icon: IconPoint,
//         href: '/forms/form-elements/checkbox',
//       },
//       {
//         id: uniqueId(),
//         title: 'Radio',
//         icon: IconPoint,
//         href: '/forms/form-elements/radio',
//       },
//       {
//         id: uniqueId(),
//         title: 'Date Time',
//         icon: IconPoint,
//         href: '/forms/form-elements/date-time',
//       },
//       {
//         id: uniqueId(),
//         title: 'Slider',
//         icon: IconPoint,
//         href: '/forms/form-elements/slider',
//       },
//       {
//         id: uniqueId(),
//         title: 'Switch',
//         icon: IconPoint,
//         href: '/forms/form-elements/switch',
//       },
//     ],
//   },
//   {
//     id: uniqueId(),
//     title: 'Form Layout',
//     icon: IconFileDescription,
//     href: '/forms/form-layouts',
//   },
//   {
//     id: uniqueId(),
//     title: 'Form Horizontal',
//     icon: IconBoxAlignBottom,
//     href: '/forms/form-horizontal',
//   },
//   {
//     id: uniqueId(),
//     title: 'Form Vertical',
//     icon: IconBoxAlignLeft,
//     href: '/forms/form-vertical',
//   },
//   {
//     id: uniqueId(),
//     title: 'Form Custom',
//     icon: IconFileDots,
//     href: '/forms/form-custom',
//   },
//   {
//     id: uniqueId(),
//     title: 'Form Wizard',
//     icon: IconFiles,
//     href: '/forms/form-wizard',
//   },
//   {
//     id: uniqueId(),
//     title: 'Form Validation',
//     icon: IconFiles,
//     href: '/forms/form-validation',
//   },
//   {
//     id: uniqueId(),
//     title: 'Quill Editor',
//     icon: IconEdit,
//     href: '/forms/quill-editor',
//   },
//   {
//     navlabel: true,
//     subheader: 'Tables',
//   },
//   {
//     id: uniqueId(),
//     title: 'Basic',
//     icon: IconBorderAll,
//     href: '/tables/basic',
//   },
//   {
//     id: uniqueId(),
//     title: 'Collapsible',
//     icon: IconBorderHorizontal,
//     href: '/tables/collapsible',
//   },
//   {
//     id: uniqueId(),
//     title: 'Enhanced',
//     icon: IconBorderInner,
//     href: '/tables/enhanced',
//   },
//   {
//     id: uniqueId(),
//     title: 'Fixed Header',
//     icon: IconBorderVertical,
//     href: '/tables/fixed-header',
//   },
//   {
//     id: uniqueId(),
//     title: 'Pagination',
//     icon: IconBorderTop,
//     href: '/tables/pagination',
//   },
//   {
//     id: uniqueId(),
//     title: 'Search',
//     icon: IconBorderStyle2,
//     href: '/tables/search',
//   },
//   {
//     navlabel: true,
//     subheader: 'UI',
//   },
//   {
//     id: uniqueId(),
//     title: 'Ui Components',
//     icon: IconBox,
//     href: '/ui-components/alert',
//     children: [
//       {
//         id: uniqueId(),
//         title: 'Alert',
//         icon: IconPoint,
//         href: '/ui-components/alert',
//       },
//       {
//         id: uniqueId(),
//         title: 'Accordion',
//         icon: IconPoint,
//         href: '/ui-components/accordion',
//       },
//       {
//         id: uniqueId(),
//         title: 'Avatar',
//         icon: IconPoint,
//         href: '/ui-components/avatar',
//       },
//       {
//         id: uniqueId(),
//         title: 'Chip',
//         icon: IconPoint,
//         href: '/ui-components/chip',
//       },
//       {
//         id: uniqueId(),
//         title: 'Dialog',
//         icon: IconPoint,
//         href: '/ui-components/dialog',
//       },
//       {
//         id: uniqueId(),
//         title: 'List',
//         icon: IconPoint,
//         href: '/ui-components/list',
//       },
//       {
//         id: uniqueId(),
//         title: 'Popover',
//         icon: IconPoint,
//         href: '/ui-components/popover',
//       },
//       {
//         id: uniqueId(),
//         title: 'Rating',
//         icon: IconPoint,
//         href: '/ui-components/rating',
//       },
//       {
//         id: uniqueId(),
//         title: 'Tabs',
//         icon: IconPoint,
//         href: '/ui-components/tabs',
//       },
//       {
//         id: uniqueId(),
//         title: 'Tooltip',
//         icon: IconPoint,
//         href: '/ui-components/tooltip',
//       },
//       {
//         id: uniqueId(),
//         title: 'Transfer List',
//         icon: IconPoint,
//         href: '/ui-components/transfer-list',
//       },
//       {
//         id: uniqueId(),
//         title: 'Typography',
//         icon: IconPoint,
//         href: '/ui-components/typography',
//       },
//     ],
//   },

//   {
//     navlabel: true,
//     subheader: 'Charts',
//   },
//   {
//     id: uniqueId(),
//     title: 'Line',
//     icon: IconChartLine,
//     href: '/charts/line-chart',
//   },
//   {
//     id: uniqueId(),
//     title: 'Gredient',
//     icon: IconChartArcs,
//     href: '/charts/gredient-chart',
//   },
//   {
//     id: uniqueId(),
//     title: 'Area',
//     icon: IconChartArea,
//     href: '/charts/area-chart',
//   },
//   {
//     id: uniqueId(),
//     title: 'Candlestick',
//     icon: IconChartCandle,
//     href: '/charts/candlestick-chart',
//   },
//   {
//     id: uniqueId(),
//     title: 'Column',
//     icon: IconChartDots,
//     href: '/charts/column-chart',
//   },
//   {
//     id: uniqueId(),
//     title: 'Doughtnut & Pie',
//     icon: IconChartDonut3,
//     href: '/charts/doughnut-pie-chart',
//   },
//   {
//     id: uniqueId(),
//     title: 'RadialBar & Radar',
//     icon: IconChartRadar,
//     href: '/charts/radialbar-chart',
//   },
//   {
//     navlabel: true,
//     subheader: 'Auth',
//   },
//   {
//     id: uniqueId(),
//     title: 'Login',
//     icon: IconLogin,
//     href: '/auth/login',
//     children: [
//       {
//         id: uniqueId(),
//         title: 'Side Login',
//         icon: IconPoint,
//         href: '/auth/login',
//       },
//       {
//         id: uniqueId(),
//         title: 'Boxed Login',
//         icon: IconPoint,
//         href: '/auth/login2',
//       },
//     ],
//   },
//   {
//     id: uniqueId(),
//     title: 'Register',
//     icon: IconUserPlus,
//     href: '/auth/register',
//     children: [
//       {
//         id: uniqueId(),
//         title: 'Side Register',
//         icon: IconPoint,
//         href: '/auth/register',
//       },
//       {
//         id: uniqueId(),
//         title: 'Boxed Register',
//         icon: IconPoint,
//         href: '/auth/register2',
//       },
//     ],
//   },
//   {
//     id: uniqueId(),
//     title: 'Forgot Password',
//     icon: IconRotate,
//     href: '/auth/forgot-password',
//     children: [
//       {
//         id: uniqueId(),
//         title: 'Side Forgot Password',
//         icon: IconPoint,
//         href: '/auth/forgot-password',
//       },
//       {
//         id: uniqueId(),
//         title: 'Boxed Forgot Password',
//         icon: IconPoint,
//         href: '/auth/forgot-password2',
//       },
//     ],
//   },

//   {
//     id: uniqueId(),
//     title: 'Two Steps',
//     icon: IconZoomCode,
//     href: '/auth/two-steps',
//     children: [
//       {
//         id: uniqueId(),
//         title: 'Side Two Steps',
//         icon: IconPoint,
//         href: '/auth/two-steps',
//       },
//       {
//         id: uniqueId(),
//         title: 'Boxed Two Steps',
//         icon: IconPoint,
//         href: '/auth/two-steps2',
//       },
//     ],
//   },
//   {
//     id: uniqueId(),
//     title: 'Error',
//     icon: IconAlertCircle,
//     href: '/400',
//   },
//   {
//     id: uniqueId(),
//     title: 'Maintenance',
//     icon: IconSettings,
//     href: '/auth/maintenance',
//   },
//   {
//     navlabel: true,
//     subheader: 'Other',
//   },
//   {
//     id: uniqueId(),
//     title: 'Menu Level',
//     icon: IconBoxMultiple,
//     href: '/dashboards/starter',
//     children: [
//       {
//         id: uniqueId(),
//         title: 'Level 1',
//         icon: IconPoint,
//         href: '/l1',
//       },
//       {
//         id: uniqueId(),
//         title: 'Level 1.1',
//         icon: IconPoint,
//         href: '/l1.1',
//         children: [
//           {
//             id: uniqueId(),
//             title: 'Level 2',
//             icon: IconPoint,
//             href: '/l2',
//           },
//           {
//             id: uniqueId(),
//             title: 'Level 2.1',
//             icon: IconPoint,
//             href: '/l2.1',
//             children: [
//               {
//                 id: uniqueId(),
//                 title: 'Level 3',
//                 icon: IconPoint,
//                 href: '/l3',
//               },
//               {
//                 id: uniqueId(),
//                 title: 'Level 3.1',
//                 icon: IconPoint,
//                 href: '/l3.1',
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: uniqueId(),
//     title: 'Disabled',
//     icon: IconBan,
//     href: '/',
//     disabled: true,
//   },
//   {
//     id: uniqueId(),
//     title: 'SubCaption',
//     subtitle: 'This is the sutitle',
//     icon: IconStar,
//     href: '/',
//   },

//   {
//     id: uniqueId(),
//     title: 'Chip',
//     icon: IconAward,
//     href: '/',
//     chip: '9',
//     chipColor: 'primary',
//   },
//   {
//     id: uniqueId(),
//     title: 'Outlined',
//     icon: IconMoodSmile,
//     href: '/',
//     chip: 'outline',
//     variant: 'outlined',
//     chipColor: 'primary',
//   },
//   {
//     id: uniqueId(),
//     title: 'External Link',
//     external: true,
//     icon: IconStar,
//     href: 'https://google.com',
//   },
// ];





const Menuitems = [

  // user management

  {
    navlabel: true,
    subheader: 'User Management',
  },
  {
    id: uniqueId(),
    title: 'Users',
    icon: IconUserPlus,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'List',
        icon: IconPoint,
        href: '',
      },
      {
        id: uniqueId(),
        title: 'Add New',
        icon: IconPoint,
        href: '',
      },
    ],
  },

  {
    id: uniqueId(),
    title: 'Instructors',
    icon: IconUserPlus,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'List',
        icon: IconPoint,
        href: '',
      },
      {
        id: uniqueId(),
        title: 'Add New',
        icon: IconPoint,
        href: '',
      },
    ],
  },

  // Education
  
  {
    navlabel: true,
    subheader: 'Education',
  },
  {
    id: uniqueId(),
    title: 'Quiz',
    icon: IconUserPlus,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'Question Group',
        icon: IconPoint,
        href: '/apps/addquizgroup',
      },
      {
        id: uniqueId(),
        title: 'Add Question',
        icon: IconPoint,
        href: '/apps/addquestion',
      },
      {
        id: uniqueId(),
        title: 'Question Bank',
        icon: IconPoint,
        href: '/apps/questionbank',
      },
      {
        id: uniqueId(),
        title: 'Question import',
        icon: IconPoint,
        href: '/apps/questionimport',
      },
      {
        id: uniqueId(),
        title: 'Add Quiz',
        icon: IconPoint,
        href: '/apps/addquiz',
      },
      {
        id: uniqueId(),
        title: 'Quiz Setup',
        icon: IconPoint,
        href: '/apps/quizsetup',
      },

      {
        id: uniqueId(),
        title: 'Quiz Report',
        icon: IconPoint,
        href: '/apps/quizreport',
      },

    ],
  },
  {
    id: uniqueId(),
    title: 'Courses',
    icon: IconUserPlus,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'Category List',
        icon: IconPoint,
        href: '/apps/categorylist',
      },
      {
        id: uniqueId(),
        title: 'All courses',
        icon: IconPoint,
        href: '/apps/allcourses',
      },
      {
        id: uniqueId(),
        title: 'Course Level',
        icon: IconPoint,
        href: '/apps/courselevel',
      },
      {
        id: uniqueId(),
        title: 'Course Setting',
        icon: IconPoint,
        href: '/apps/coursesetting',
      },
      {
        id: uniqueId(),
        title: 'Course Assignment',
        icon: IconPoint,
        href: '/apps/courseassignment',
      },
      
    ],
  },

// employee management

  {
    navlabel: true,
    subheader: 'Employee Management',
  },
  {
    id: uniqueId(),
    title: 'Employee Role',
    icon: IconAperture,
    href: '/apps/employeerole',
    // chip: 'New',
    chipColor: 'secondary',
  },
  {
    id: uniqueId(),
    title: 'Employee',
    icon: IconUserPlus,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'List',
        icon: IconPoint,
        href: '/apps/employee',
      },
      {
        id: uniqueId(),
        title: 'Add New',
        icon: IconPoint,
        href: '/apps/addemployee',
      },
    ],
  },


  // setting

  {
    navlabel: true,
    subheader: 'Setting',
  },

  {
    id: uniqueId(),
    title: 'System Setting',
    icon: IconLogin,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'General Setting',
        icon: IconPoint,
        href: '/apps/generalsetting',
      },
      {
        id: uniqueId(),
        title: 'Email Setting',
        icon: IconPoint,
        href: '/apps/emailsetting',
      },
      {
        id: uniqueId(),
        title: 'Sms Setting',
        icon: IconPoint,
        href: '/apps/smssetting',
      },
      {
        id: uniqueId(),
        title: 'Payment Setting',
        icon: IconPoint,
        href: '/apps/paymentsetting',
      },
      {
        id: uniqueId(),
        title: 'Firebase Setting',
        icon: IconPoint,
        href: '/apps/firebasesetting',
      },
      {
        id: uniqueId(),
        title: 'Social Login',
        icon: IconPoint,
        href: '/apps/sociallogin',
      },
      {
        id: uniqueId(),
        title: 'Recaptcha',
        icon: IconPoint,
        href: '/apps/recaptcha',
      },
      {
        id: uniqueId(),
        title: 'Print Header and Footer',
        icon: IconPoint,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Currency',
        icon: IconPoint,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'User Profile Setting',
        icon: IconPoint,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Custom fields',
        icon: IconPoint,
        href: '#',
      },
      
    ],
  },

  {
    id: uniqueId(),
    title: 'Appearance',
    icon: IconUserPlus,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'Color Change',
        icon: IconPoint,
        href: '',
      },
    ],
  },

  {
    id: uniqueId(),
    title: 'Utility',
    icon: IconRotate,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'Maintenance',
        icon: IconPoint,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'App & Web setting',
        icon: IconPoint,
        href: '/apps/appandwebsetting',
      },
      
    ],
  },

  {
    id: uniqueId(),
    title: 'Back Up',
    icon: IconAperture,
    href: '/apps/backup',
    // chip: 'New',
    chipColor: 'secondary',
  },

  {
    id: uniqueId(),
    title: 'Sidebar Manager',
    icon: IconAperture,
    href: '#',
    // chip: 'New',
    chipColor: 'secondary',
  },
  {
    id: uniqueId(),
    title: 'Clean Database',
    icon: IconAperture,
    href: '/apps/cleandb',
    // chip: 'New',
    chipColor: 'secondary',
  },


  // Policy Setting


  {
    navlabel: true,
    subheader: 'Policy Setting',
  },


  {
    id: uniqueId(),
    title: 'Pages & Social Media',
    icon: IconRotate,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'Social Media Link',
        icon: IconPoint,
        href: '/apps/sociallink',
      },
      {
        id: uniqueId(),
        title: 'Terms and Condition',
        icon: IconPoint,
        href: '/apps/termsandcondition',
      },
      {
        id: uniqueId(),
        title: 'Privacy Policy',
        icon: IconPoint,
        href: '/apps/privacy',
      },
      {
        id: uniqueId(),
        title: 'About Us',
        icon: IconPoint,
        href: '/apps/aboutus',
      },
      {
        id: uniqueId(),
        title: 'Refund Policy',
        icon: IconPoint,
        href: '/apps/refundpolicy',
      },
    ],

  },


  // Help & Support


  {
    navlabel: true,
    subheader: 'Help & Support',
  },
  {
    id: uniqueId(),
    title: 'Chats',
    icon: IconMessage2,
    href: '/apps/chats',
  },
  {
    id: uniqueId(),
    title: 'Contacts',
    icon: IconPackage,
    // chip: '2',
    chipColor: 'secondary',
    href: '/apps/contacts',
  },
  

];

export default Menuitems;

