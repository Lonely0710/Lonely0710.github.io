import Image from 'next/image'
import { socialIcon } from './icon-paths'

const EMAIL_STYLES = [
    {
        matches: (value) => value.endsWith('@gmail.com') || value.endsWith('@googlemail.com'),
        className: 'contact-pill-google',
    },
    {
        matches: (value) => value.endsWith('@qq.com'),
        className: 'contact-pill-qq',
    },
    {
        matches: (value) => value.endsWith('.edu') || value.includes('.edu.') || value.endsWith('.edu.cn'),
        className: 'contact-pill-edu',
    },
]

function getEmailClass(value) {
    const email = value.toLowerCase()
    const style = EMAIL_STYLES.find(({ matches }) => matches(email))
    return style ? style.className : 'contact-pill-mail'
}

function getContactStyle(type, value) {
    if (type === 'wechat') {
        return {
            className: 'contact-pill-wechat',
            icon: socialIcon('wechat.svg'),
            href: null,
        }
    }

    return {
        className: getEmailClass(value),
        icon: socialIcon('mail.svg'),
        href: `mailto:${value}`,
    }
}

export default function ContactPill({ type = 'email', value, label = value }) {
    const { className, icon, href } = getContactStyle(type, value)
    const content = (
        <span className="contact-pill-inner">
            <Image className="contact-pill-icon" src={icon} alt="" width={20} height={20} />
            {label}
        </span>
    )

    if (href) {
        return (
            <a className={`contact-pill ${className}`} href={href}>
                {content}
            </a>
        )
    }

    return (
        <span className={`contact-pill ${className}`}>
            {content}
        </span>
    )
}
