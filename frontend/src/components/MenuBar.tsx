// import { useNavigate } from "react-router-dom";

export default function MenuBar() {
    //const navigate = useNavigate();

    return (
        <nav className="menu-bar">
            <button className="menu-icon home" />
            <button className="menu-icon circle"/>
            <button className="menu-icon chart "/>
            <button className="menu-icon gear "/>
            {/* <button onClick={() => navigate('/')} className="menu-icon home" />
            <button onClick={() => navigate('/presupuesto')} className="menu-icon circle"/>
            <button onClick={() => navigate('/estadisticas')} className="menu-icon chart "/>
            <button onClick={() => navigate('/ajustes')} className="menu-icon gear "/> */}
        </nav>
    )
}

