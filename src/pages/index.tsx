import { GetStaticProps } from "next"
import Link from "next/link"
import { get3LastPosts } from "../services/api"

interface LastPost {
  thumb: string
  slug: string
  title: string
}

interface PostProps {
  lastPosts: LastPost[]
}

export default function Home({ lastPosts }: PostProps) {



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
    <div className="min-h-screen w-full flex flex-col items-center relative bg-gray-100">

      <div className="h-96 bg-home-banner bg-cover bg-center flex items-center justify-center w-full relative">
        <h2 className="text-white text-6xl font-inc mob:text-3xl">Blog do Breno</h2>
      </div>

      <div className="w-9/12 p-8 rounded-2xl shadow-lg relative bottom-16 bg-white">
        <p className="font-inc text-gray-900 text-center">
          Esse blog é apenas um teste, não haverá nada de mais aqui, ou talvez haja, não sei.
        </p>
        <br/>
        <p className="font-inc text-gray-900 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie fermentum arcu. Morbi porttitor, justo eu tincidunt ornare, urna magna tempor nisi, nec mollis neque velit in felis. Fusce ex sapien, efficitur et nisl fringilla, aliquam egestas lacus. Pellentesque vestibulum magna non mi ornare, vitae finibus lacus consequat. Duis id sem feugiat, pellentesque odio eget, euismod elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam tincidunt purus sit amet quam auctor, gravida varius tortor tincidunt. Pellentesque mauris urna, sodales ut luctus iaculis, porttitor sit amet purus. Integer vel est ut magna egestas fringilla vel nec nisl.
          Maecenas eu viverra turpis. Vivamus condimentum mauris et luctus pulvinar. Vivamus id velit nisl. Nam eget erat pellentesque, hendrerit ex eget, vestibulum augue. Maecenas a augue eu purus facilisis congue in at urna. Donec egestas odio metus, eget semper urna condimentum et. Etiam at fermentum risus, eget ullamcorper lacus. Duis metus magna, semper a quam eu, ultrices dapibus elit.
        </p>
      </div>

      <p className="text-gray-900 text-lg text-center mb-6">Últimos posts:</p>

      
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

  return {
      props: {
          lastPosts
      }
  }
}