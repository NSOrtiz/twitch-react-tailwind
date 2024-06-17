import NavBar from "./components/NavBar"
import StrimerList from "./components/StrimersList"
import Content from "./components/Content"

export default function App() {
  return (
    <main >
      <NavBar/>
      <section className="flex flex-row ">
        <StrimerList/>
        <Content/>
      </section>
    </main>
  )
}


