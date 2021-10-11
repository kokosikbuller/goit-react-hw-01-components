import React from 'react';
import { string, array } from 'prop-types';
import './Statistics.scss'

function Statistics({title, stats}) {
    return (
        <section className="statistics">
            {
                title && <h2 className="title">Upload stats</h2>
            }
            <ul className="stat-list">
                {
                    stats.map(item => {
                        return (
                            <li className="item" key={item.id}>
                                <span className="label">{item.label} </span>
                                <span className="percentage">{item.percentage}%</span>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: string,
    stats: array.isRequired
}

Statistics.defaultProps = { 
    stats: []
};

export default Statistics;