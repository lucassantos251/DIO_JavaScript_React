const react_1 = require("react");
const client_1 = require("react-dom/client");
require("./styles.css");
class App extends react_1.Component {
    constructor(props) {
        super(props);

        this.state = {
            clock: 1000,
            copo: 'agua'
        };

        this.componentDidMount = () =>{
            window.setTimeout(() => {
                this.setState({
                    copo: 'suco'
                })
            }, 3000)
        }

        this.alterarCopo = () => {
            this.setState({
                copo: 'refrigerante'
            });
            //nao altera
            //this.state.copo = 'refrigerante'
        };
    }
    render() {
        const {clock, copo } = this.state
        return (
            <div>
                <h1>{clock}</h1>
                <button onClick={() => this.alterarCopo()}>{copo}</button>
            </div>
        )
    }
}
const rootElement = document.getElementById('root');
const root = (0, client_1.createRoot)(rootElement);
root.render(<App/>);
