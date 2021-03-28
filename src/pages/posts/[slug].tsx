import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
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
                <Link href={`/posts/${post.slug}`}>
                    <div key={index} className="flex cursor-pointer
                        flex-col rounded-2xl overflow-hidden shadow-xl w-72 mr-4 flex-shrink-0 flex-grow-0">
                        <div className="h-36  bg-blue-500" style={{
                            backgroundImage: `url('/${post.thumb}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}></div>
                        <div className="h-16 flex justify-center items-center p-3">
                            <p className="font-inc text-gray-900 font-bold text-sm text-center">{post.title}</p>
                        </div>
                    </div> 
                </Link> 
            )
        })
    }

    return (
        <div className="bg-gray-100">
            <Head>
                <title>{title}</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: html }} />

            <h2 className="font-inc text-center text-lg">Últimos posts:</h2>
            
            <div className="w-full bg-gray-100 p-4 flex flex-col items-center">
                <div className="flex flex-row mb-10 w-11/12 max-w-5xl overflow-x-auto pb-2
                    overflow-y-visible custom-scroll">
                    {renderLastPosts()}
                </div>
            </div>

            <div className="bg-gray-700 h-14 w-full flex items-center justify-center">
                <p className="text-white">Blog do Breno - 2021 - Todos os direitos reservados.</p>
            </div>
        </div>
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