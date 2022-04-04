import React from 'react';
import Handler from './Handler.js'
// import {Link} from 'react-router-dom';

function Messages(){
    const items = Handler('/messages');
    console.table(items);
    return (
        <section>
            <h1> Messages </h1>
            {
            items.map(item =>{
                return(
                <div key="{item.name}">
                    <p>
                    "{item.msg}"
                    -{item.username}
                    </p>
                </div>
                )
            })
            }
        </section>
    );
}

export default Messages