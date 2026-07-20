//import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import userIcon from '../assets/icon_user.png';
import MenuBar from '../components/MenuBar';
import NeuButtonSecondary from '../components/NeuButtonSecondary';


export default function Dashboard() {
    // const navigate = useNavigate();

    return (
      <div className="dashboard-container">
        <div className="menu-bar-container">
          <MenuBar />
        </div>

        <Card className="card-background">
          {/* Header */}
          <div className="header-dashboard">
            <div className="user-icons">
              <img src={userIcon} alt="Usuario izquierdo" className="user-icon"/>
              <h1 className="dashboard-title">FINA Essence</h1>
              <img src={userIcon} alt="Usuario derecho" className="user-icon" />
            </div>
          </div>

          <section className="nav-header">
            <Card
              style={{
                padding: '8px 6px',
              }}
            >
              <div className="nav-header-buttons">
                <NeuButtonSecondary
                  label="Ingresos"
                  //   onClick={() => navigate('/presupuesto')}
                />

                <NeuButtonSecondary
                  label="Gastos"
                  // onClick={() => navigate('/presupuesto')}
                />
                <NeuButtonSecondary
                  label="Ahorros"
                  // onClick={() => navigate('/presupuesto')}
                />

                <NeuButtonSecondary
                  label="Deudas"
                  // onClick={() => navigate('/presupuesto')}
                />

                <NeuButtonSecondary
                  label="Planificación"
                  // onClick={() => navigate('/presupuesto')}
                />
              </div>
            </Card>
          </section>

          <section className="summary-month">
            <div className="total-balance">
              <Card2>
                <p>Saldo atual</p>
                <h1>C$ 11,200</h1>
              </Card2>
            </div>

            <div className="monthly-expense">
              <Card className="item-card">
                <p className="savingp">Ahorro estimado</p>
                <h2 className="saving">C$ 5,590</h2>
              </Card>
              <Card className="item-card">
                <p className="spendp">Gasto mensual</p>
                <h2 className="spend">C$ 8,180</h2>
              </Card>
            </div>
          </section>

          <section className="recent-transactions">
            <h2>Transacciones recientes</h2>
            <Card3
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '10rem',
              }}
            />
          </section>
        </Card>
      </div>
    );

}