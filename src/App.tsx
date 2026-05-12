import './App.css'
import CriptoSearchForm from './components/CriptoSearchForm'

export default function App() {
  

  return (
    <>
      <div className="container">
          <h1 className="app-title">
             cotizador de <span>Criptomonedas</span>
          </h1>
          <div className="content">
              <CriptoSearchForm />
          </div>
      </div>
    </>
  )
}

