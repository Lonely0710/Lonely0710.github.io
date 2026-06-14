const ICON_ROOT = '/icon'

export const ICON_DIRS = {
    actions: 'actions',
    brands: 'brands',
    misc: 'misc',
    nav: 'nav',
    sections: 'sections',
    social: 'social',
}

export function iconPath(dir, file) {
    return `${ICON_ROOT}/${dir}/${file}`
}

export function actionIcon(file) {
    return iconPath(ICON_DIRS.actions, file)
}

export function brandIcon(file) {
    return iconPath(ICON_DIRS.brands, file)
}

export function miscIcon(file) {
    return iconPath(ICON_DIRS.misc, file)
}

export function navIcon(file) {
    return iconPath(ICON_DIRS.nav, file)
}

export function sectionIcon(file) {
    return iconPath(ICON_DIRS.sections, file)
}

export function socialIcon(file) {
    return iconPath(ICON_DIRS.social, file)
}
