import React from "react"

export default function Main() {
    return (
        <main>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>

            <button 
                type="button" 
                onClick={
                    () => {
                        throw Error("Oops, Something has gone wrong");
                    }
                }>
                Break the world for Sentry
            </button>
            
            <p>This is {process.env.NODE_ENV} environment.</p>
            <p>This is {process.env.REACT_APP_MYENV} environment.</p>
        </main>
    )
}