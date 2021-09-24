
import {Context} from './Contexts/Context'
import { Books } from './Components/Books'

const App = () => {


    return (
        <>
            <Context>
                <Books/>
            </Context>
        </>
    );


}



export default App;