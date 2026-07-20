import { useState } from 'react';
import NeumorphicButton from '../components/NeuButtonPrimary';
import NeuButtonSecondary from '../components/NeuButtonSecondary';
//import Card from '../components/Card';
//import MenuBar from '../components/MenuBar';


export default function Welcome() {
  const [mode, setMode] = useState<'individual' | 'familiar' | null>(null);
  
  //const navigate = useNavigate();

  return (
    <div
      style={{
        background: '#e0e0e0',
        minHeight: '100vh',
        padding: '40px 24px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        textAlign: 'center',
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: '#d1d5db',
          boxShadow: '6px 6px 12px #d1d5db, -6px -6px 12px #ffffff',
        }}
      >
        {/* Aquí irá el logo real */}
      </div>

      {/* Título */}
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 600,
          color: '#220E09',
          margin: 0,
        }}
      >
        FINA
      </h1>

      <p
        style={{
          fontSize: '18px',
          fontWeight: 500,
          color: '#220E09',
          marginTop: 0,
          marginBottom: 40,
        }}
      >
        Tu brújula financiera
      </p>

      {/* Pregunta */}
      <p
        style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#220E09',
        }}
      >
        ¿Cómo deseas usar FINA?
      </p>

      {/* Botones de modo */}
      <div
        className="mode-buttons"
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 25,
          gap: '18px',
          width: '100%',
          maxWidth: 250,
          height: 170,
        
        }}
      >

        <NeuButtonSecondary
          label="Uso individual"
          selected={mode === 'individual'}
          onClick={() => setMode('individual')}
        />
        <NeuButtonSecondary
          label="Uso familiar"
          selected={mode === 'familiar'}
          onClick={() => setMode('familiar')}
        />
      </div>

      {/* Botón comenzar */}
      <NeumorphicButton
        label="COMENZAR"
        onClick={() => console.log('Modo seleccionado:', mode)}
        style={{
          marginTop: '32px',
          width: '100%',
          maxWidth: 250,
          borderRadius: '25px',
          //background: '#ECF0F3',
          color: '#9B5521',
        }}
      />

      {/* Nota */}
      <p
        style={{
          fontSize: '14px',
          fontWeight: 500,
          color: '#220E09',
          marginTop: '5px',
        }}
      >
        Puedes cambiar esto más adelante
      </p>
    </div>
  );
}
