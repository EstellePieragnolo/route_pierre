import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';

export default class ShopNotice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleAlign: 'Center'
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollTop);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollTop);
    }


    scrollTop = () => {
        if (window.pageYOffset > 0 && this.state.titleAlign !== 'Left') {
            this.setState({
                titleAlign: 'Left'
            })
            return this.state.titleAlign
        }
        else if (window.pageYOffset === 0 && this.state.titleAlign !== 'Center') {
            this.setState({
                titleAlign: 'Center'
            })
            return this.state.titleAlign
        }
    }

    render() {
        const id = this.props.match.params.id ? this.props.match.params.id : null;
        return (
            <div className='notice' onScroll={this.scrollTop}>
                <Header />
                <Query query={notice}>
                    {({ data, loading, error }) => {
                        if (loading) return <Loader />;
                        if (error) return <p>ERROR</p>;
                        return (
                            data.creations &&
                            data.creations.map(creation => {
                                if (id === creation.id) {
                                    return (
                                        <div className='noticeBody'>
                                            <div className='noticeBodyTitle' style={this.state.titleAlign === 'Left' ? { position: 'sticky', top: '95px' } : null}>
                                                <h1 className={'noticeBodyTitle' + (this.state.titleAlign)}>{creation.name}</h1>
                                            </div>
                                            <div className='noticeBodyContainer'>
                                                <div className='noticeBodyContainerPictures'>
                                                    <img src={creation.picture.url} alt="" />
                                                </div>
                                                <div className='noticeBodyContainerInfo'>
                                                    <div className='noticeBodyContainerInfoHeader'>
                                                        <h3 className='noticeBodyContainerInfoHeaderTitle'>Description</h3>
                                                        <p className='noticeBodyContainerInfoHeaderText'>{creation.description.text}</p>
                                                    </div>
                                                    <span className='noticeBodyContainerInfoSeparator'></span>
                                                    <div className='noticeBodyContainerInfoList'>
                                                        <h3 className='noticeBodyContainerInfoListTitle'>Fiche technique</h3>
                                                        {
                                                            creation.stone &&
                                                            <p className='noticeBodyContainerInfoListItem'>
                                                                - Nature de pierre: {creation.stone}
                                                            </p>
                                                        }
                                                        {
                                                            creation.origin &&
                                                            <p className='noticeBodyContainerInfoListItem'>
                                                                - Provenance: {creation.origin}
                                                            </p>
                                                        }
                                                        {
                                                            creation.steel &&
                                                            <p className='noticeBodyContainerInfoListItem'>
                                                                - Acier de l'émouture: {creation.steel}
                                                            </p>
                                                        }
                                                        {
                                                            creation.dimension &&
                                                            <p className='noticeBodyContainerInfoListItem'>
                                                                - Dimension: {creation.dimension}
                                                            </p>
                                                        }
                                                        {
                                                            creation.finish &&
                                                            <p className='noticeBodyContainerInfoListItem'>
                                                                - Finitions: {creation.finish}
                                                            </p>
                                                        }
                                                        {
                                                            creation.maintain &&
                                                            <p className='noticeBodyContainerInfoListItem'>
                                                                - Entretien: {creation.maintain}
                                                            </p>
                                                        }
                                                        <span className='noticeBodyContainerInfoSeparator'></span>
                                                        {
                                                            creation.price &&
                                                            <h3 className='noticeBodyContainerInfoFooter'>Prix: {creation.price}€</h3>
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else return null
                            })

                        );
                    }}
                </Query>

            </div>
        );

    }
}

export const notice = gql`
    query {
        creations {
            id,
            name,
            picture {
                url
            },
            price,
            description {
                text
            },
            stone,
            origin,
            steel,
            maintain,
            dimension,
            finish
        }
    }
`
