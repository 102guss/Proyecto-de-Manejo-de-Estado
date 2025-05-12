import './App.css'
import ListaCompras from './ListaCompras'

function App () {
  return (
    <div  style={{ /* textAlign: 'center', */ backgroundColor: '#ddf97d', padding: '20px', height: '60vh', width: '30vw', margin: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} >
      <h1>Mi Aplicación de Compras</h1>
      <ListaCompras />
    </div>
  )
}

export default App
