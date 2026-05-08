import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'


export function getSortedPostsData(relativePath) {
    const post_folder = path.join(process.cwd(), relativePath)
    if (!fs.existsSync(post_folder)) {
        return []
    }

    const file_names = fs.readdirSync(post_folder)

    const all_posts = file_names.map(file_name => {
        const id = file_name.replace(/\.md$/, '')
        const full_path = path.join(post_folder, file_name)
        const file_content = fs.readFileSync(full_path, 'utf8')
        const matterResult = matter(file_content)
        const trim = (matterResult.content.length > 1000) ? (matterResult.content.substring(0, 1000) + '...') : (matterResult.content)
        const coverpath = get_cover(relativePath, id)

        return {
            id,
            coverpath,
            text: String(trim)
                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
                .replace(/!\[([^\]]+)\]\([^)]+\)/g, '$1')
                .replace(/[^A-Za-z0-9 ,.]/g, ' '),
            ...matterResult.data
        }
    })

    return all_posts.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        }
        return -1
    })
}

export function getAllPostIds(relativePath) {
    const post_folder = path.join(process.cwd(), relativePath)
    if (!fs.existsSync(post_folder)) {
        return []
    }

    const file_names = fs.readdirSync(post_folder)
    return file_names.map(file_name => {
        return {
            params: {
                id: file_name.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id, relativePath) {
    const postPath = path.join(process.cwd(), relativePath, `${id}.md`)
    if (!fs.existsSync(postPath)) {
        return null
    }

    const file_content = fs.readFileSync(postPath, 'utf8')
    const matterResult = matter(file_content)

    const file = await unified()
        .use(remarkParse)
        .use(remarkBreaks)
        .use(remarkGfm)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(matterResult.content)

    const content = String(file)
    const coverpath = get_cover(relativePath, id)

    return {
        id,
        content,
        coverpath,
        ...matterResult.data,
    }
}

function get_cover(relativePath, id) {
    let coverpath = ''
    let photo_base_path = ''
    const cover_folder = relativePath.replace('contents/', 'public/cover/')

    for (const format of ['.png', '.jpg', '.jpeg', '.gif']) {
        if (fs.existsSync(path.join(process.cwd(), cover_folder, `${id}${format}`))) {
            photo_base_path = cover_folder.replace('public/', '/')
            coverpath = `${photo_base_path}/${id}${format}`
            break
        }
    }
    return coverpath
}
