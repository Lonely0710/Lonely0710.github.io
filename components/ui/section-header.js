import Image from 'next/image'

// export default function SectionHeader({ title, icon, preserveIconColor = false, showRule = false, showIcon = false, href }) {
export default function SectionHeader({ title, icon, preserveIconColor = false, showRule = false, showIcon = true, href }) {
    const content = (
        <span className="section-header">
            <span className="section-header-title">{title}</span>
            {showRule ? <span className="section-header-rule" aria-hidden="true" /> : null}
            {showIcon && icon ? (
                <Image
                    src={icon}
                    width={24}
                    height={24}
                    alt=""
                    className={`section-header-icon ${preserveIconColor ? '' : 'section-header-icon-tint'}`}
                />
            ) : null}
        </span>
    )

    if (href) {
        return (
            <a className="section-header-link" href={href}>
                {content}
            </a>
        )
    }

    return content
}
