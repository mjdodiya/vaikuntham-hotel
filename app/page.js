'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const carouselRef = useRef(null);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu or booking is open (UX standard)
  useEffect(() => {
    if (isMobileMenuOpen || isBookingOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen, isBookingOpen]);

  const nextStep = () => setBookingStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setBookingStep((prev) => Math.max(prev - 1, 1));
  const resetBooking = () => {
    setBookingStep(1);
    setIsBookingOpen(false);
  };

  const experiences = [
    {
      title: 'Sunrise Shikara Voyage',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frishikeshdaytour.com%2Fblog%2Fwp-content%2Fuploads%2F2024%2F08%2FSunrise-Point-In-Udaipur.jpg&f=1&nofb=1&ipt=3d42f11bbdf0675849e0ecf65a3a2457b4481067659727a80fc95bb236a0730c',
      time: '6:00 AM',
    },
    {
      title: 'Dusk Gold Mixology',
      img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200',
      time: '6:30 PM',
    },
    {
      title: 'Handicraft Workshop',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%2Fid%2FOIP.cn5iy2-8YSxYdAdOq2J3QgHaE8%3Fpid%3DApi&f=1&ipt=328e77f49ba9670700c0972a7775f51755426a1feaabc687cd334f4aa790089d&ipo=images?q=80&w=1200',
      time: '10:00 AM',
    },
    {
      title: 'Old City Walking Tour',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc8.alamy.com%2Fcomp%2F2C4J6WP%2Fstreet-in-the-old-city-udaipur-rajasthan-india-2C4J6WP.jpg&f=1&nofb=1&ipt=c56ff5477c9423f0af84bdd4664be1dc78b1c9fb8db122bdfd86579974fd0dea?q=80&w=1200',
      time: 'Culture',
    },
  ];

  return (
    <main className="app-container">
      {/* --- SIDE DRAWER --- */}
      <div
        className="drawer-overlay"
        style={{
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
        }}
        onClick={() => setIsMobileMenuOpen(false)}></div>

      <div
        className="side-drawer"
        style={{
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}>
        <div className="drawer-nav">
          <a
            href="#heritage"
            onClick={() => setIsMobileMenuOpen(false)}>
            Our Story
          </a>
          <a
            href="#experiences"
            onClick={() => setIsMobileMenuOpen(false)}>
            Experiences
          </a>
          <a
            href="#rooms"
            onClick={() => setIsMobileMenuOpen(false)}>
            Rooms
          </a>
          <a
            href="#dining"
            onClick={() => setIsMobileMenuOpen(false)}>
            Dining
          </a>
          <button
            className="btn-reserve"
            style={{ marginTop: '1.5rem', width: '100%', padding: '1.2rem' }}
            onClick={() => {
              setIsBookingOpen(true);
              setIsMobileMenuOpen(false);
            }}>
            Reserve Now
          </button>
        </div>

        <div
          style={{
            marginTop: 'auto',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
          }}>
          <p
            className="font-jost"
            style={{
              fontSize: '0.65rem',
              color: 'var(--dusk-gold)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}>
            Vaikuntham Heritage
          </p>
          <p
            className="font-jost"
            style={{
              fontSize: '0.6rem',
              color: 'white',
              opacity: 0.5,
              marginTop: '0.8rem',
              letterSpacing: '0.1em',
            }}>
            Lake Pichola Road, Udaipur • +91 294 123 4567
          </p>
        </div>
      </div>

      {/* --- DESKTOP NAVIGATION --- */}
      <nav className={isScrolled ? 'scrolled' : ''}>
        <a
          href="#"
          className="logo font-cinzel">
          Vaikuntham
        </a>
        <ul className="nav-links font-jost">
          <li>
            <a href="#heritage">Our Story</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
          <li>
            <a href="#rooms">Rooms</a>
          </li>
          <li>
            <a href="#dining">Dining</a>
          </li>
          <li>
            <button
              className="btn-reserve"
              onClick={() => setIsBookingOpen(true)}>
              Reserve Now
            </button>
          </li>
        </ul>
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5">
              <path d="M4 7h16M4 12h16m-10 5h10" />
            </svg>
          )}
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1697729844084-c03db2377161%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&f=1&nofb=1&ipt=46a5401037c15192c250f13bf97371cc9072bd2d78dff0c0a11925b382fdbaa8?q=80&w=1200"
            alt="Lake Pichola Palace"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-label">Heritage Sanctuary • Udaipur</span>
          <h1 className="hero-title">
            The Stillness <br /> of Pichola
          </h1>
          <p className="hero-desc">
            Experience a century of royal legacy at Udaipur is most intimate
            lakeside haveli.
          </p>
          <div className="hero-btns">
            <button
              className="btn-hero gold"
              onClick={() => setIsBookingOpen(true)}>
              Book Your Stay
            </button>
            <a
              href="#heritage"
              className="btn-hero outline">
              Explore The Haveli
            </a>
          </div>
        </div>
      </section>

      {/* --- QUICK BOOKING BAR --- */}
      <div className="booking-bar-container">
        <div className="booking-bar">
          <div
            className="booking-field"
            onClick={() => setIsBookingOpen(true)}>
            <label>Arrival</label>
            <span>Oct 12, 2026</span>
          </div>
          <div
            className="booking-field"
            onClick={() => setIsBookingOpen(true)}>
            <label>Departure</label>
            <span>Oct 15, 2026</span>
          </div>
          <div
            className="booking-field"
            onClick={() => setIsBookingOpen(true)}>
            <label>Guests</label>
            <span>2 Adults</span>
          </div>
          <div className="booking-field">
            <label>Promotion</label>
            <input
              type="text"
              placeholder="Enter Code"
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                fontSize: '1.1rem',
                color: 'var(--lake-deep)',
                fontFamily: 'var(--font-cormorant)',
                width: '100%',
              }}
            />
          </div>
          <button
            className="btn-hero gold"
            style={{ height: '100%', width: '100%', padding: '1.2rem' }}
            onClick={() => setIsBookingOpen(true)}>
            Check Availability
          </button>
        </div>
      </div>

      {/* --- ROOMS & SUITES --- */}
      <section
        id="rooms"
        className="section-padding">
        <div className="section-header">
          <span>Accommodation</span>
          <h2>Royal Sanctuaries</h2>
        </div>
        <div className="rooms-grid">
          {[
            {
              name: 'Maharana Lake Suite',
              price: '₹34,000',
              img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.CVpnYJYcFq_Zu6R895-7_QHaFD%3Fpid%3DApi&f=1&ipt=227709fcd11938c479c8181a7f5d8a58c3e867863da605081661cd4f3e27a4b4&ipo=images',
              desc: 'Our premier suite with a private jharokha balcony overlooking the lake.',
            },
            {
              name: 'Pichola Premier Room',
              price: '₹26,000',
              img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200',
              desc: 'Elegant spaces featuring hand-carved teak furniture and marble floors.',
            },
            {
              name: 'Heritage Courtyard Room',
              price: '₹19,500',
              img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200',
              desc: 'Quiet rooms opening into our century-old sandstone inner courtyard.',
            },
          ].map((room, i) => (
            <div
              className="room-card"
              key={i}
              onClick={() => setIsBookingOpen(true)}>
              <div className="room-img">
                <img
                  src={room.img}
                  alt={room.name}
                />
                <div className="room-price-badge">{room.price} / Night</div>
              </div>
              <div className="room-info">
                <h3>{room.name}</h3>
                <p>{room.desc}</p>
                <span
                  style={{
                    color: 'var(--dusk-gold)',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.25em',
                    borderBottom: '1px solid var(--dusk-gold)',
                    paddingBottom: '4px',
                    alignSelf: 'flex-start',
                  }}>
                  View Details
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- REPEATING INFINITE CAROUSEL --- */}
      <section
        id="experiences"
        className="section-padding"
        style={{ backgroundColor: '#fafafa' }}>
        <div className="section-header">
          <span>Curated Moments</span>
          <h2>Lakeside Experiences</h2>
        </div>
        <div className="carousel-track-wrapper">
          <div className="carousel-track">
            {[...experiences, ...experiences].map((exp, i) => (
              <div
                className="exp-card"
                key={i}>
                <div className="jharokha-frame">
                  <img
                    src={exp.img}
                    alt={exp.title}
                  />
                  <div className="jharokha-overlay">
                    <span>{exp.time}</span>
                    <h4>{exp.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EPICUREAN DINING --- */}
      <section
        id="dining"
        className="dining-section">
        <div className="dining-image">
          <img
            src="/fine-dining.jpg"
            alt="Fine Dining Udaipur"
          />
        </div>
        <div className="dining-content">
          <span>Epicurean Heritage</span>
          <h2>Flavors of Mewar</h2>
          <p>
            Dine where kings once sat. Our culinary philosophy pairs traditional
            Mewari recipes with refined international techniques.
          </p>
          <div className="dining-list">
            {[
              {
                name: 'The Marigold Terrace',
                type: 'Rooftop • Tasting Menu',
                status: 'Dinner Only',
              },
              {
                name: 'Pichola Lounge',
                type: 'Lakeside • High Tea',
                status: 'All Day',
              },
              {
                name: 'Sandstone Cellar',
                type: 'Vaulted • Private Curation',
                status: 'Reservations Only',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="dining-item">
                <div>
                  <h4>{item.name}</h4>
                  <p
                    style={{
                      fontSize: '0.65rem',
                      color: '#5E5E5E',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      marginTop: '6px',
                    }}>
                    {item.type}
                  </p>
                </div>
                <span>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MULTI-STEP BOOKING ENGINE --- */}
      {isBookingOpen && (
        <div className="booking-modal">
          <div className="modal-header">
            <span
              className="font-cinzel logo"
              style={{ color: 'var(--dusk-gold)' }}>
              Vaikuntham Reservation
            </span>
            <button
              className="modal-close-btn"
              onClick={resetBooking}>
              [ Close ]
            </button>
          </div>
          <div className="booking-steps">
            <div className="step-progress">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`step-line ${bookingStep >= s ? 'active' : ''}`}>
                  <span>
                    {['Dates', 'Sanctuary', 'Details', 'Review'][s - 1]}
                  </span>
                </div>
              ))}
            </div>
            {bookingStep === 1 && (
              <div className="booking-view">
                <h2
                  className="font-cinzel"
                  style={{ fontSize: '3rem', marginBottom: '3rem' }}>
                  Plan Your Arrival
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem',
                  }}>
                  <div
                    style={{
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '2rem',
                    }}>
                    <label
                      className="font-jost"
                      style={{
                        fontSize: '0.65rem',
                        color: 'var(--dusk-gold)',
                        display: 'block',
                        marginBottom: '1rem',
                        letterSpacing: '0.2em',
                      }}>
                      Arrival
                    </label>
                    <input
                      type="date"
                      defaultValue="2026-10-12"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem',
                        outline: 'none',
                        width: '100%',
                        fontFamily: 'var(--font-cormorant)',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '2rem',
                    }}>
                    <label
                      className="font-jost"
                      style={{
                        fontSize: '0.65rem',
                        color: 'var(--dusk-gold)',
                        display: 'block',
                        marginBottom: '1rem',
                        letterSpacing: '0.2em',
                      }}>
                      Departure
                    </label>
                    <input
                      type="date"
                      defaultValue="2026-10-15"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem',
                        outline: 'none',
                        width: '100%',
                        fontFamily: 'var(--font-cormorant)',
                      }}
                    />
                  </div>
                </div>
                <button
                  className="btn-gold-large"
                  onClick={nextStep}>
                  Search Availability
                </button>
              </div>
            )}
            {bookingStep === 2 && (
              <div className="booking-view">
                <h2
                  className="font-cinzel"
                  style={{ fontSize: '3rem', marginBottom: '3rem' }}>
                  Choose Sanctuary
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '1.5rem',
                  }}>
                  <div
                    style={{
                      border: '1px solid var(--dusk-gold)',
                      padding: '2.5rem',
                      background: 'rgba(255,255,255,0.03)',
                      cursor: 'pointer',
                    }}
                    onClick={nextStep}>
                    <h3
                      className="font-cinzel"
                      style={{ fontSize: '1.5rem' }}>
                      Maharana Lake Suite
                    </h3>
                    <p
                      style={{
                        color: 'var(--dusk-gold)',
                        marginTop: '12px',
                        fontSize: '1.1rem',
                      }}>
                      ₹34,000 / Night • Includes Signature Breakfast
                    </p>
                  </div>
                  <div
                    style={{
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '2.5rem',
                      cursor: 'pointer',
                    }}
                    onClick={nextStep}>
                    <h3
                      className="font-cinzel"
                      style={{ fontSize: '1.5rem' }}>
                      Pichola Premier Room
                    </h3>
                    <p
                      style={{
                        color: 'var(--dusk-gold)',
                        marginTop: '12px',
                        fontSize: '1.1rem',
                      }}>
                      ₹26,000 / Night
                    </p>
                  </div>
                </div>
                <button
                  className="btn-hero outline"
                  style={{
                    marginTop: '3rem',
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.2)',
                  }}
                  onClick={prevStep}>
                  Back
                </button>
              </div>
            )}
            {bookingStep === 3 && (
              <div className="booking-view">
                <h2
                  className="font-cinzel"
                  style={{ fontSize: '3rem', marginBottom: '3rem' }}>
                  Confirmation Details
                </h2>
                <input
                  type="text"
                  placeholder="Full Name"
                  style={{
                    width: '100%',
                    background: 'none',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '1.5rem',
                    color: 'white',
                    marginBottom: '1.5rem',
                    outline: 'none',
                    fontFamily: 'var(--font-jost)',
                    letterSpacing: '0.1em',
                  }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{
                    width: '100%',
                    background: 'none',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '1.5rem',
                    color: 'white',
                    marginBottom: '3rem',
                    outline: 'none',
                    fontFamily: 'var(--font-jost)',
                    letterSpacing: '0.1em',
                  }}
                />
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    className="btn-hero outline"
                    style={{
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.2)',
                    }}
                    onClick={prevStep}>
                    Back
                  </button>
                  <button
                    className="btn-gold-large"
                    style={{ marginTop: 0, flex: 1 }}
                    onClick={nextStep}>
                    Confirm Reservation
                  </button>
                </div>
              </div>
            )}
            {bookingStep === 4 && (
              <div
                className="booking-view"
                style={{ textAlign: 'center' }}>
                <h2
                  className="font-cinzel"
                  style={{
                    fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                    marginBottom: '2rem',
                  }}>
                  Welcome Home.
                </h2>
                <p
                  style={{
                    fontSize: '1.6rem',
                    fontStyle: 'italic',
                    opacity: 0.8,
                    marginBottom: '4.5rem',
                    maxWidth: '40rem',
                    marginInline: 'auto',
                  }}>
                  Your reservation is confirmed. We await your arrival with the
                  setting sun on the golden waters of Udaipur.
                </p>
                <button
                  className="btn-hero gold"
                  style={{ padding: '1.8rem 5rem' }}
                  onClick={resetBooking}>
                  Return to Site
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer
        style={{
          backgroundColor: 'var(--lake-deep)',
          padding: '10rem 2rem',
          textAlign: 'center',
        }}>
        <h2
          className="font-cinzel"
          style={{
            color: 'var(--dusk-gold)',
            fontSize: '3.5rem',
            marginBottom: '4rem',
            letterSpacing: '0.3em',
          }}>
          Vaikuntham
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem',
            flexWrap: 'wrap',
            marginBottom: '5rem',
          }}>
          <a
            href="#"
            className="font-jost"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              opacity: 0.7,
            }}>
            Heritage
          </a>
          <a
            href="#"
            className="font-jost"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              opacity: 0.7,
            }}>
            Gallery
          </a>
          <a
            href="#"
            className="font-jost"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              opacity: 0.7,
            }}>
            Contact
          </a>
        </div>
        <p
          className="font-jost"
          style={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: '0.6rem',
            letterSpacing: '0.1em',
          }}>
          © 2026 VAIKUNTHAM HERITAGE HOTELS PVT. LTD. UDAIPUR, RAJASTHAN.
        </p>
      </footer>
    </main>
  );
}
