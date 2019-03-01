import React, { Component } from 'react';


class DashboardHeader extends Component {
  render() {
    return (
        <header className="dashboard-header w-full py-2 bg-blue text-white">  
            <nav className="container mx-auto">
                <ul className="list-reset flex -mx-3">
                    <li className="block px-3">
                        <a href="#" className="text-white">File</a>
                    </li>
                    <li className="block px-3">
                        <a href="#" className="text-white">Edit</a>
                    </li>
                </ul>
            </nav>    
        </header>
    );
  }
}

export default DashboardHeader;
