//顶部菜单栏
interface MenuListTop {
    label: string,
    path: string,
    title?: string
}

export const MENU_TOP_NAV: Array<MenuListTop> = [
    {
        label: '时钟clock',
        path: '/componet/clock',
        title: '时钟'
    }
]
