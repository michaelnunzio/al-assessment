import React from 'react';
import Row from './Row';

const Table = (props) => {
    const { cName, title, data, flag } = props;
    return (
        <div className="column">
            <table className={cName} id="table">
                <th>
                    <h2>
                        {title}
                    </h2>
                </th>
                <Row
                data={data}
                flag={flag}
                />
            </table>
        </div>
    )
}

export default  Table;