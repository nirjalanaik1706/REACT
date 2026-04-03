import React from "react";

class Dashboard extends React.Component {
    // initialization
    constructor(props) {
        console.log("initialization");
        super(props);
        this.state = { company:"indra",year:2025 };
    }

    // Event handler
    changeCompany() {
        console.log("clilck event handler code execution");
        this.setState({ company: "Transflower Learning pvt.ltd" })
    }

    changeYear(){
        console.log("click event handler code execution");
        this.setState({year:2027})
    }

    componentWillMount(){
        console.log("component will mount execution");
    }

    // Mounting:rendering logic
    render() { 
        console.log("rendering logic invocation");
        return (

            <div className="text-center">
                <h1>Transflower Balancesheet</h1>
                <br />
                <h3>{this.state.company}</h3>
                <h3>{this.state.year}</h3>
                <hr />
                <button onClick={this.changeCompany.bind(this)}>Change Company</button>
                <hr/>
                <button onClick={this.changeYear.bind(this)}>Change Financial Year</button>
            </div>
        );
    }
    componentDidMount(){
        console.log("component did mount");
    }
}

export default Dashboard;