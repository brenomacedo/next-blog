export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center relative">

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

      <div className="bg-gray-700 h-14 w-full flex items-center justify-center">
        <p className="text-white">Blog do Breno - 2021 - Todos os direitos reservados.</p>
      </div>

    </div>
  )
}