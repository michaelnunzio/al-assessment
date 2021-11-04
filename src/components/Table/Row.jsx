import React from 'react';

const Row = (props) => {
    const { data, flag } = props;
    return (
    <>
        {data && flag === 'pk' &&
            data.map((x) => {
                return (
                <tr>
                    <td>{x?.name}</td>
                </tr>
                )
            })
        }

        {data && flag === 'sw' &&
            data.map((x) => {
                return (
                <tr>
                    <td>{x?.title}</td>
                </tr>
                )
            })
        }
    </>
    )
}

export default  Row;