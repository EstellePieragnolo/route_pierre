import React from 'react';
import './_ShopFilters.scss';

export default class ShopFilters extends React.Component {

    render() {
        return (
            <div className="filters">

                <div className="filtersContainer">
                    <div className="filtersContainerItem">Décoration</div>
                    <div className="filtersContainerItem">Couteaux</div>
                    <div className="filtersContainerItem">Arts de la table</div>
                </div>

            </div>
        );

    }
}

