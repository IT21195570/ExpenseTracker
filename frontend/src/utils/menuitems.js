import { dashboard, expense, signout, transactions, trend } from "./icons"



export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },

    {
        id: 2,
        title: 'Transactions',
        icon: transactions,
        link: '/dashboard'
    },

    {
        id: 3,
        title: 'Incomes',
        icon: trend,
        link: '/dashboard'
    },

    {
        id: 4,
        title: 'Expenses',
        icon: expense,
        link: '/dashboard'
    },

    {
        id: 5,
        title: 'SignOut',
        icon: signout,
        link: '/dashboard'
    },

]