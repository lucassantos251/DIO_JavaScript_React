import React from 'react';

const listCustomer = [
    {
        id: '1',
        name: 'Lucas Cirilo',
        skills: ['React' , 'Node', 'CSS']
    },
    {
        id: '2',
        name: 'Numsei DEr',
        skills: ['React' , 'Typescript', 'JS']
    },
    {
        id: '3',
        name: 'Fernando Oliveira',        
        skills: ['Reason' , 'AAA']
    },
    {
        id: '4',
        name: 'Clclan AAA',
        skills:['UI/UX']
    },
]

const App = () => {

    const handleClick = (e, id) => {
        console.log('deletar cliente')
        alert(`Id do cliente: ${id}`)
    }

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>                
                <li>{customer.name} {<button onClick={(e) => handleClick(e, customer.id)}>Deletar</button>}</li>
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

    const handleChange = (e) => {
        const {value} = e.target
        console.log(value)
    }

    const showEvent = (e) => {
        console.log('Evento');
        console.log(e);
        alert(name);
    }

    return(
        <div>
            <h1>Manipulando Eventos</h1>
            <br />
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};
export default App;