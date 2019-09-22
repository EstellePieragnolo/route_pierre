import React from "react";
import gql from "graphql-tag";
import { connect } from "react-redux";
import { Routes } from "../paths";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import * as shopActions from "../../redux/actions/shop";

class ShopCategories extends React.Component {
  render() {
    return (
      <div className="homeShopCategory">
        <Query query={items}>
          {({ data, loading, error, category }) => {
            if (loading) return <Loader />;
            if (error) return <p>ERROR</p>;
            return (
              data.introShops &&
              data.introShops.map(introShop => {
                return (
                  <Link to={Routes.SHOP}>
                    <div key={introShop.id} className="homeShopCategoryItems">
                      {introShop.image && (
                        <div className="homeShopCategoryItemsImage">
                          <img
                            src={introShop.image.url}
                            alt="shopCategories"
                            className="homeShopCategoryItemsImageElement"
                          />
                        </div>
                      )}
                      <div className="homeShopCategoryItemsHover" onClick={() => category(introShop.category)}>
                        <p>{introShop.category}</p>
                      </div>
                    </div>
                  </Link>
                );
              })
            );
          }}
        </Query>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    category: (category) => dispatch(shopActions.category(category))
  };
};

const mapStateToProps = state => {
  console.log("sho", state.category);
  return {
    category: state.category
  };
};

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(ShopCategories);

export const items = gql`
  query {
    introShops {
      id
      category
      image {
        url
      }
      shopCategory
    }
  }
`;
