import React, { useState, useEffect } from "react";
import "./Home.css"
import MyBasket from "../components/ui/MyBasket";
import CategoryCard from "../components/ui/CategoryCard";
import ProductCard from "../components/ui/ProductCard";
import OfferCard from "../components/ui/OfferCard";
import HowItWorks from "../components/ui/HowItWorks";

import groceryImg from "../assets/images/grocery.jpg";
import fruitsImg from "../assets/images/fruits-veg.jpg";
import dairyImg from "../assets/images/dairy.jpg";
import snacksImg from "../assets/images/snaks.jpg";
import drinksImg from "../assets/images/drinks.jpg";
import homeCareImg from "../assets/images/home-care.jpg";
import personalCareImg from "../assets/images/personal-care.jpg";
import babyCareImg from "../assets/images/baby-care.jpg";

import productsData from "../data/products.json";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);

  const banners = [
    {
      id: 1,
      title: "Weekly Savings",
      subtitle: "Up to 30% off on essentials",
      bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: "src/assets/images/banner1.jpg",
      position: "right"
    },
    {
      id: 2,
      title: "Snack Time",
      subtitle: "Buy 2 Get 1 Free",
      bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      image: "src/assets/images/banner2.jpg",
      position: "right"
    },
    {
      id: 3,
      title: "Ramadan Special",
      subtitle: "Extra 25% off on select items",
      bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      image: "src/assets/images/banner3.jpg",
      position: "left"
    },
    {
      id: 4,
      title: "Baby Care",
      subtitle: "Up to 40% off on diapers",
      bgColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      image: "src/assets/images/banner4.jpg",
      position: "right"
    }
  ];

  const categories = [
    {
      name: "Grocery & Staples",
      image: groceryImg,
      itemCount: 45,
      link: "/category/grocery-and-staples",
    },
    {
      name: "Fruits & Vegetables",
      image: fruitsImg,
      itemCount: 38,
      link: "/category/fruits-and-vegetables",
    },
    {
      name: "Dairy & Bakery",
      image: dairyImg,
      itemCount: 32,
      link: "/category/dairy-and-bakery",
    },
    {
      name: "Snacks & Branded Food",
      image: snacksImg,
      itemCount: 56,
      link: "/category/snacks-and-branded-food",
    },
    {
      name: "Drinks & Beverages",
      image: drinksImg,
      itemCount: 28,
      link: "/category/drinks-and-beverages",
    },
    {
      name: "Home Care",
      image: homeCareImg,
      itemCount: 24,
      link: "/category/home-care",
    },
    {
      name: "Personal Care",
      image: personalCareImg,
      itemCount: 36,
      link: "/category/personal-care",
    },
    {
      name: "Baby Care",
      image: babyCareImg,
      itemCount: 18,
      link: "/category/baby-care",
    },
  ];

  const productCategories = [
    "Fruits & Vegetables",
    "Grocery & Staples",
    "Dairy & Bakery", 
    "Snacks & Branded Food",
    "Drinks & Beverages",
    "Home Care",
    "Personal Care",
    "Baby Care"
  ];

  useEffect(() => {
    setProducts(productsData.products || productsData);
  }, []);

  const getProductsByCategory = (categoryName) => {
    return products.filter(p => p.category === categoryName).slice(0, 5);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <div>
      {/* Hero Banner Section */}
      <section className="custom-banner-section py-3">
        <div className="container">
          <div className="banner-wrapper">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ display: index === currentSlide ? 'block' : 'none' }}
              >
                <div className="banner-container" style={{
                  background: banner.bgColor,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '350px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${banner.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.45',
                    mixBlendMode: 'overlay'
                  }}></div>

                  <div className="banner-content" style={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: banner.position === 'left' ? 'flex-start' : 'flex-end',
                    padding: '0 70px'
                  }}>
                    <div style={{
                      maxWidth: '450px',
                      textAlign: banner.position === 'left' ? 'left' : 'right',
                      color: 'white'
                    }}>
                      <span style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '10px',
                        opacity: '0.9',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                      }}>
                        Limited Time Offer
                      </span>
                      <h2 style={{
                        fontSize: '52px',
                        fontWeight: '800',
                        marginBottom: '15px',
                        lineHeight: '1.1',
                        textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                        fontFamily: "'Poppins', sans-serif"
                      }}>
                        {banner.title}
                      </h2>
                      <p style={{
                        fontSize: '22px',
                        marginBottom: '30px',
                        opacity: '0.95',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        fontWeight: '400',
                        letterSpacing: '0.5px'
                      }}>
                        {banner.subtitle}
                      </p>
                      <button className="banner-btn" style={{
                        background: 'white',
                        color: '#333',
                        border: 'none',
                        padding: '16px 45px',
                        borderRadius: '50px',
                        fontSize: '18px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                        letterSpacing: '0.5px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                        e.target.style.background = '#f8f9fa';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
                        e.target.style.background = 'white';
                      }}>
                        Shop Now →
                      </button>
                    </div>
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: '-60px',
                    right: '-60px',
                    width: '250px',
                    height: '250px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '50%',
                    zIndex: 1
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '-40px',
                    left: '-40px',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '50%',
                    zIndex: 1
                  }}></div>
                </div>
              </div>
            ))}

            <button className="banner-nav prev" onClick={prevSlide} style={{
              position: 'absolute',
              top: '50%',
              left: '20px',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.9)',
              border: 'none',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              cursor: 'pointer',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
              zIndex: 10,
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#333',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(5px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.9)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}>
              ‹
            </button>
            <button className="banner-nav next" onClick={nextSlide} style={{
              position: 'absolute',
              top: '50%',
              right: '20px',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.9)',
              border: 'none',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              cursor: 'pointer',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
              zIndex: 10,
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#333',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(5px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.9)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}>
              ›
            </button>

            <div className="banner-dots" style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '12px',
              zIndex: 10
            }}>
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: index === currentSlide ? 'white' : 'rgba(255,255,255,0.4)',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                    boxShadow: index === currentSlide ? '0 0 15px rgba(255,255,255,0.5)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (index !== currentSlide) {
                      e.target.style.background = 'rgba(255,255,255,0.7)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentSlide) {
                      e.target.style.background = 'rgba(255,255,255,0.4)';
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="section-title mb-4">Shop by Category</h2>
              
              <div className="row">
                {categories.slice(0, 4).map((category, index) => (
                  <div key={index} className="col-md-3 col-6 mb-4">
                    <CategoryCard
                      name={category.name}
                      image={category.image}
                      itemCount={category.itemCount}
                      link={category.link}
                    />
                  </div>
                ))}
              </div>

              <div className="row">
                {categories.slice(4, 8).map((category, index) => (
                  <div key={index + 4} className="col-md-3 col-6 mb-4">
                    <CategoryCard
                      name={category.name}
                      image={category.image}
                      itemCount={category.itemCount}
                      link={category.link}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4">
              <MyBasket />
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-4">
        <div className="container">
          <h2 className="section-title mb-4">Special Offers</h2>
          <div className="offers-container">
            <OfferCard 
              title="Buy 1 Get 1 Free"
              description="On all snacks & beverages"
              image="/src/assets/images/offers/bogo.jpg"
              type="bogo"
            />
            <OfferCard 
              title="Weekend Special"
              description="Up to 40% off on groceries"
              image="/src/assets/images/offers/weekend.jpg"
              type="weekend"
            />
          </div>
        </div>
      </section>

      {/* Product Rows */}
      {productCategories.map((category) => {
        const categoryProducts = getProductsByCategory(category);
        if (categoryProducts.length === 0) return null;

        return (
          <section key={category} className="category-row py-4">
            <div className="container">
              <h2 className="section-title mb-4">{category}</h2>

              <div className="row">
                {categoryProducts.map(product => (
                  <div key={product.id} className="col-lg-2 col-md-3 col-6 mb-3">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              <div className="text-center mt-3">
                <button 
                  className="view-all-btn"
                  onClick={() => window.location.href = `/category/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                >
                  View All {category} →
                </button>
              </div>
            </div>
          </section>
        );
      })}

      {/* How It Works */}
      <section>
        <HowItWorks />
      </section>
    </div>
  );
};

export default Home;