import React from 'react'

export default function Alert(props) {
    const capatilized = (word) => {
        let lower = word.toLowerCase();
        return lower[0].toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>
           { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capatilized(props.alert.type)} {props.alert.msg}</strong>
            </div>}
        </div>

    )
}
