import Card from '../components/Card';
import { useState } from 'react';

type Icome = {
    title: string;
    amount: number;
    date: string;
    category: string;
    description: string;

};

export default function IncomesPage() {

    const [icomes, setIcomes] = useState<Icome[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [newIcome, setNewIcome] = useState<Icome>({
        title: "",
        amount: 0,
        date: "",
        category: "",
        description: "",
    });

    const totalIcomes= icomes.reduce((acc, i)=> acc + i.amount, 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIcomes([...icomes, newIcome]);
        setNewIcome({ title: "", amount: 0, date: "", category: "", description: "" });
        setShowModal(false);
    }


    return (
      <div className="icomes-page">
        <form className="icome-form" onSubmit={handleSubmit}></form>
      </div>
    );


}
// type Icome = {
//     title: string;
//     amount: number;
//     category: string;
// };

// export default function IngresosPage() {
//     const [icomes, setIcome] = useState<Icome[]>([]);
//     const [showModal, setShowModal] = useState(false);
//     const [newIcome, setNewIcome] = useState<Icome>
//     ({ title: "", 
//         amount: 0,
//         category: "",
//     });

//     const handleAddNewIcome = () => {
//         setIcome([...icomes, newIcome]);
//         setNewIcome({title: "", amount: 0, category: ""});
//         setShowModal(false);
//     }; 

//     return (
//         <div className='ingresos-container'>
//             <h1>Ingresos</h1>

//             {/* Lista de ingresos o mensaje vacío */}
//             <section className='form-container'>
//                 {icomes.length === 0 ? (
//                     <p className="empty-message">Aún no has agregado ingresos.</p>
//                 ) : (
//                     icomes.map((icome, i) => (
//                      <Card key={i} className='item-card'>

//                      </Card>
//                 )
//                 }

//             </section>

//             <div className='summary-icomes'>

//             </section>



//         </div>
//     )
// }
