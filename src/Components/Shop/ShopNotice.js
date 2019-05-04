import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';

export default class ShopNotice extends React.Component {


    render() {
        const id = this.props.match.params.id ? this.props.match.params.id : null;
        return (
            <div>
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
                                        <div className='notice'>
                                            <h1 className='noticeTitle'>{creation.name}</h1>
                                            <div className='noticeContainer'>
                                                <div className='noticeContainerPictures'>
                                                    <img src={creation.picture.url} alt="" />
                                                </div>
                                                <div className='noticeContainerInfo'>
                                                    <div className='noticeContainerInfoHeader'>
                                                        <h3 className='noticeContainerInfoHeaderTitle'>Description</h3>
                                                        <p className='noticeContainerInfoHeaderText'>{creation.description.text}</p>
                                                    </div>
                                                    <span className='noticeContainerInfoSeparator'></span>
                                                    <div className='noticeContainerInfoList'>
                                                        <h3 className='noticeContainerInfoListTitle'>Fiche technique</h3>
                                                        {
                                                            creation.stone &&
                                                            <p className='noticeContainerInfoListItem'>
                                                                - Nature de pierre: {creation.stone}
                                                            </p>
                                                        }
                                                        {
                                                            creation.origin &&
                                                            <p className='noticeContainerInfoListItem'>
                                                                - Provenance: {creation.origin}
                                                            </p>
                                                        }
                                                        {
                                                            creation.steel &&
                                                            <p className='noticeContainerInfoListItem'>
                                                                - Acier de l'émouture: {creation.steel}
                                                            </p>
                                                        }
                                                        {
                                                            creation.dimension &&
                                                            <p className='noticeContainerInfoListItem'>
                                                                - Dimension: {creation.dimension}
                                                            </p>
                                                        }
                                                        {
                                                            creation.finish &&
                                                            <p className='noticeContainerInfoListItem'>
                                                                - Finitions: {creation.finish}
                                                            </p>
                                                        }
                                                        {
                                                            creation.maintain &&
                                                            <p className='noticeContainerInfoListItem'>
                                                                - Entretien: {creation.maintain}
                                                            </p>
                                                        }
                                                        <span className='noticeContainerInfoSeparator'></span>
                                                        {
                                                            creation.price &&
                                                            <h3 className='noticeContainerInfoFooter'>Prix: {creation.price}€</h3>
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
