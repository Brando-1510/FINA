//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Welcome from './features/bienvenida';
import AgregarUser from './features/AgregarUser';
//import Dashboard from './features/Dashboard';
import './styles/global.css'

export default function App() {
  return (
    <div>
       {/* <Welcome />  */}
       <AgregarUser />
      {/* <Dashboard />  */}
    </div>
  );
}


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//         <Route path="/" element={<h1>Hola FINA</h1>} />
//         {/* otras rutas */}
//       </Routes>
//     </BrowserRouter>
//   );
// }


// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Welcome />} />
//         <Route path="/agregar" element={<AgregarUser />} />
//         {/* Ruta de prueba */}
//         <Route path="/test" element={<div>Test OK</div>} />
//         {/* 404 */}
//         <Route path="*" element={<div>404</div>} />
//       </Routes>
//     </Router>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Router>
//       <Routes>
//         <Route path="/" element={<Welcome />} />
//         <Route path="/agregar" element={<AgregarUser />} />
//       </Routes> 
//     </Router>
//     </div>
//   );
// }

// export default App




// import { useState } from 'react'
// import viteLogo from '/vite.svg'
// import './styles/global.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
        
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
