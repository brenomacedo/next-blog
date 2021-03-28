import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { getAllPaths, getPost } from "../../services/api"

interface PostProps {
    html: string
    title: string
}

export default function Post({ html, title }: PostProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const slug = ctx.params.slug as string

    const post = getPost(slug)

    return {
        props: {
            html: post.html,
            title: post.title
        }
    }
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const paths = getAllPaths()

    return {
        paths: paths.map((path) => ({
            params: {
                slug: path
            }
        })),
        fallback: false
    }
}