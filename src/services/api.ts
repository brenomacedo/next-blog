import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import postsInfo from '../posts.json'
import handlebars from 'handlebars'
import { info } from 'node:console'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export function getFiles() {
    return readdirSync(postsDirectory);
}

export function getPost(slug: string) {
    const fileDirectory = path.join(postsDirectory, `${slug}.handlebars`)
    const file = readFileSync(fileDirectory).toString('utf-8')

    const post = handlebars.compile(file)
    const info = postsInfo[slug]

    const html = post({ title: info.title })

    return {
        html,
        title: info.title
    }
}

export function getAllPaths() {
    const posts = getFiles()
    const paths = posts.map((file) => {
        return file.replace(new RegExp('.handlebars'), '')
    })

    return paths
}