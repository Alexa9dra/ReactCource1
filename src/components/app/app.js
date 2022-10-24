import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'

function App() {

    const data = [
        {name: 'John A.', salary: 300, increase: true},
        {name: 'Alex C.', salary: 750, increase: false},
        {name: 'Marta K.', salary: 1100, increase: false}
    ]

    return(
        <div className='app'>
            <AppInfo/>

            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;