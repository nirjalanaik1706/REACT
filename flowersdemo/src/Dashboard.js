// import React from "react";

// class Dashboard extends React.Component {
//     // initialization
//     constructor(props) {
//         console.log("initialization");
//         super(props);
//         this.state = { company:"indra",year:2025 };
//     }

//     // Event handler
//     changeCompany() {
//         console.log("clilck event handler code execution");
//         this.setState({ company: "Transflower Learning pvt.ltd" })
//     }

//     changeYear(){
//         console.log("click event handler code execution");
//         this.setState({year:2027})
//     }

//     componentWillMount(){
//         console.log("component will mount execution");
//     }

//     // Mounting:rendering logic
//     render() { 
//         console.log("rendering logic invocation");
//         return (

//             <div className="text-center">
//                 <h1>Transflower Balancesheet</h1>
//                 <br />
//                 <h3>{this.state.company}</h3>
//                 <h3>{this.state.year}</h3>
//                 <hr />
//                 <button onClick={this.changeCompany.bind(this)}>Change Company</button>
//                 <hr/>
//                 <button onClick={this.changeYear.bind(this)}>Change Financial Year</button>
//             </div>
//         );
//     }

//     // post render event handler
//     componentDidMount(){
//         console.log("component did mount");
//     }

//     // pre update event handler
//     componentDidUpdate(){
//         console.log("Component will Update");
//     }

//     // post update event handler
//     componentDidUpdate(){
//         console.log("component did update");
//     }
// }

// export default Dashboard;

import React, { useState, useEffect } from "react";

function Dashboard() {

    console.log("initialization");

    const [company, setCompany] = useState("indra");
    const [year, setYear] = useState(2025);

    // Event handlers
    const changeCompany = () => {
        console.log("click event handler code execution");
        setCompany("Transflower Learning pvt.ltd");
    };

    const changeYear = () => {
        console.log("click event handler code execution");
        setYear(2027);
    };

    // componentDidMount
    useEffect(() => {
        console.log("component did mount");
    }, []);

    // componentDidUpdate
    useEffect(() => {
        console.log("component did update");
    }, [company, year]);

    console.log("rendering logic invocation");

    return (
        <div className="text-center">
            <h1>Transflower Balancesheet</h1>
            <br />
            <h3>{company}</h3>
            <h3>{year}</h3>
            <hr />
            <button onClick={changeCompany}>Change Company</button>
            <hr />
            <button onClick={changeYear}>Change Financial Year</button>
        </div>
    );
}

export default Dashboard;