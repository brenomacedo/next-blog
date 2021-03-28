import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { get3LastPosts, getAllPaths, getPost } from "../../services/api"

interface LastPost {
    thumb: string
    slug: string
    title: string
}

interface PostProps {
    html: string
    title: string
    lastPosts: LastPost[]
}

export default function Post({ html, title, lastPosts }: PostProps) {

    const renderLastPosts = () => {
        return lastPosts.map((post, index) => {
            return (
                <div key={index} className="flex flex-col rounded-2xl overflow-hidden shadow-xl w-72 mr-4 flex-shrink-0 flex-grow-0">
                    <div className="h-36  bg-blue-500" style={{
                        backgroundImage: `url('/${post.thumb}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>
                    <div className="h-16 flex justify-center items-center p-3">
                        <p className="font-inc text-gray-900 font-bold text-sm text-center">{post.title}</p>
                    </div>
                </div>  
            )
        })
    }

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            
            <div className="w-full bg-gray-100 p-4">
                <div className="flex flex-row mb-10 w-11/12 overflow-x-auto
                    overflow-y-visible custom-scroll">
                    {renderLastPosts()}
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const lastPosts = get3LastPosts()

    const slug = ctx.params.slug as string

    const post = getPost(slug)

    return {
        props: {
            html: post.html,
            title: post.title,
            lastPosts
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