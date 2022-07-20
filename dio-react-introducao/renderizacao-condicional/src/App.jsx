import React from 'react';

const buttonA = <button>Histórico</button>
const buttonB = <button>Cadastrar</button>

const hasCustomer = true;

const App = () => {

    const renderShowHistory = (
        <div>
            Clique no botão abaixo para visualizar o histórico dos clientes
            <br />
            {buttonA}
        </div>
    )

    const renderAddCostumer = (
        <div>
            Clique abaixo para cadastrar o cliente.
            <br />
            {buttonB}
        </div>
    )

    const customer =  'Lucas';
    const showCustomer = () => {
        if(!hasCustomer) return null

        return(
            <div>
                <h1>Nome do cliente: {customer}</h1>
            </div>
        )
    }

    console.log('Has Customer:' + hasCustomer);

    return(
        <div>
            <p>Renderização Condicional</p>
            <br />
            {hasCustomer ? renderShowHistory : renderAddCostumer}
            <div>
                {showCustomer()}
            </div>
        </div>
    );
};
export default App;