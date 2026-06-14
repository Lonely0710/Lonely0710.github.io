import Link from 'next/link'
import Image from 'next/image'

function getIconPath(icon) {
    if (icon.startsWith('/')) return icon
    if (icon.includes('/')) return `/icon/${icon}`
    return icon.includes('.') ? `/icon/${icon}` : `/icon/${icon}.png`
}

export default function IconStack({ icon_links, size = 20, divclass = "flex mt-1", imgclass = "" }) {
    return (
        <div className={divclass}>
            {icon_links.map(([icon, url, iconSize = size, className = ""]) => (
                <Link className={imgclass} href={url} key={icon + url}>
                    <Image
                        src={getIconPath(icon)}
                        height={iconSize}
                        width={iconSize}
                        style={{ height: iconSize, width: iconSize }}
                        className={`object-contain ${className}`}
                        alt=""
                    />
                </Link>
            ))}
        </div>)
}
