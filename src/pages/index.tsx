export default function Home(props) {

  console.log(props.episodes)

  return (
    <h1>Index</h1>
  )
}

//this is for our fake API in SSG
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
      props: {
        episodes: data,
      },
      revalidate: 60 * 60 * 8, // 8 hours
  }
}