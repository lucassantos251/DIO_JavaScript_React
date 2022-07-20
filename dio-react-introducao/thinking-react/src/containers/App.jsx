import React from 'react';
import mock from '../Mock'
import Button from '../components/Button'

const App = () => {

    const handleClick = (id) => {
        console.log('deletar cliente')
        alert(`Id do cliente: ${id}`)
    }

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>                
                <li>{customer.name} <Button onClick={() => handleClick(customer.id)}>Deletar o cliente</Button></li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{paddingLeft: '30px'}} key={`skill-${index}`}>
                <li>{skill}</li>                
            </div>
        )
    }

    return(
        <div>
            <h1>Manipulando Eventos</h1>
            <br />
            <div>
                <ul>
                    {mock.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};
export default App;