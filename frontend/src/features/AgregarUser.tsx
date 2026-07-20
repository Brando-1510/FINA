import { useState } from 'react';
import Card from '../components/Card';
import userIcon from '../assets/icon_user.png';
import InputField from '../components/InputField';
import NeuButtonFourth  from '../components/NeuButtonFourth';
import NeuButtonTertiary from '../components/NeuButtonTertiary';

export default function AgregarUser() {
    const [form, setForm] = useState({
        nombre: '',
        correo: '',
        rol: '',
        ahorro: false,
        consejos: false,
    });

    const handleChange = (field: string, value: string | boolean) => {
        setForm(prev => ({ ...prev, [field]: value}))
    };

    const handleSubmit = () => {
        console.log('Datos del nuevo usuario: ', form)
    };


    return (
      <div className="agregar-user-container">
        <Card className='card-user'>
          <div className="agregar-user-icon"> 
            <img src={userIcon} alt="user" className="user-icon" />
          </div>

          <h2 className="agregar-user-title">Agregar usuario</h2>

          <div className="agregar-user-form">
            <InputField
              placeholder="Nombre de usuario"
              value={form.nombre}
              onChange={(e) => handleChange('nombre', e.target.value)}
            />

            <InputField
              placeholder="Rol en familia"
              value={form.rol}
              onChange={(e) => handleChange('rol', e.target.value)}
            />

            <InputField
              placeholder="Correo electrónico"
              value={form.correo}
              onChange={(e) => handleChange('correo', e.target.value)}
            />

            <div className="agregar-user-option">
              <NeuButtonTertiary
                selected={form.ahorro}
                onClick={() => handleChange('ahorro', !form.ahorro)}
                style={{
                  marginTop: '15px',
                  marginBottom: '2px',
                }}
              />
              <span
                className="agregar-user-label"
                style={{
                  padding: '0 0 0 2px',
                  marginTop: '20px',
                }}
              >
                Activar modo Ahorro inteligente
              </span>
            </div>
          
            <div className="agregar-user-option">
              <NeuButtonTertiary
                selected={form.consejos}
                onClick={() => handleChange('consejos', !form.consejos)}
              />
              <span
                className="agregar-user-label"
                style={{
                  padding: '0 0 0 2px',
                  marginTop: '5px',
                }}
              >
                Mostrar consejos financieros
              </span>
            </div>

            <NeuButtonFourth
              label="GUARDAR Y CONTINUAR"
              onClick={handleSubmit}
              style={{
                marginTop: '32px',
                width: '100%',
              }}
            />
          </div>
        </Card>
      </div>
    );

}
