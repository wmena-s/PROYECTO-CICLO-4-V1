import HomeUE from "../home/HomeUE"
import HomeUI from "../home/HomeUI"
import './homeA.css'
import Dashboard from './Dashboard'

const homeA = () => {
    return (
        <div className="contenedorUA">
            <div>
            <h2>usuario Externo</h2>
            <HomeUE></HomeUE>
            </div>
            <div>
            <h2>usuario Interno</h2>
            <HomeUI></HomeUI>
            </div>
            <div>
                <h2>usaurio administrador</h2>
                <Dashboard></Dashboard>
            </div>
        </div>
    )
}

export default homeA
