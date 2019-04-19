import React from 'react';
import './_ShopFilters.scss';

export default class ShopFilters extends React.Component {

    render() {
        return (
            <div className="filters">

                <div className="filtersContainer">
                    <div className={'filtersContainerItem' + (this.props.selected === 'deco' ? 'Selected' : 'Unselected')}
                        onClick={this.props.filter('deco')}>Décoration</div>
                    <div className={'filtersContainerItem' + (this.props.selected === 'couteaux' ? 'Selected' : 'Unselected')}
                        onClick={this.props.filter('couteaux')}>Couteaux</div>
                    <div className={'filtersContainerItem' + (this.props.selected === 'table' ? 'Selected' : 'Unselected')}
                        onClick={this.props.filter('table')}>Arts de la table</div>
                </div>

            </div>
        );

    }
}

