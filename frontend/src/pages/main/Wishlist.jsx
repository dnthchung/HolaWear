import React from "react";

const WishList = () => {
  return (
    <main>
      <section className="hero py-6">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Wishlist
              </li>
            </ol>
          </nav>
          <div className="hero-content">
            <div>
              <p className="ml-30 lead text-muted">You have 2 items in your wishlist.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-6 container ">
        <div className="cart">
          <div className="cart-body">
            <div className="cart-item border-b-2">
              <div className="d-flex align-items-center text-start text-md-center row">
                <div className="col-md-5 col-12">
                  <a className="cart-remove close mt-3 d-md-none" href="#">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="times"
                      className="svg-inline--fa fa-times fa-w-11"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 352 512"
                    >
                      <path
                        fill="currentColor"
                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                      ></path>
                    </svg>
                  </a>

                  <div className="d-flex align-items-center">
                    <a href="/">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYvW2n1YP8uZGUBGbWNcN5eywXOVY3a_Si-g&s"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                        />
                      </span>
                    </a>

                    <div className="cart-title text-start ml-5">
                      <a className="text-dark link-animated" href="/tops-blouses/beige">
                        <strong>Chuột không dây Logitech </strong>
                      </a>
                      <br />
                      <span className="text-muted text-sm">Category: Mouse</span>
                      <br />
                      <span className="text-muted text-sm">Colour: Black</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 mt-md-0 col-md-7 col-12">
                  <div className="align-items-center row">
                    <div className="col-md-2">
                      <div className="row">
                        <div className="d-md-none text-muted col-6">Price per item</div>
                        <div className="text-end text-md-center col-md-12 col-6">$40</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="align-items-center row">
                        <div className="text-muted d-md-none col-6">Status</div>
                        <div className="text-end text-md-start col-md-12 col-6">
                          <span className="p-lg-2 badge bg-primary">In stock</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <button type="button" className="mt-4 mt-md-0 btn btn-outline-dark">
                        Add to cart
                      </button>
                    </div>
                    <div className="d-none d-md-block text-center col-2">
                      <a className="cart-remove text-muted" href="#">
                        <svg className="svg-icon w-3rem h-3rem svg-icon-light">
                          <use xlinkHref="#close-1"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cart-item">
              <div className="d-flex align-items-center text-start text-md-center row">
                <div className="col-md-5 col-12">
                  <a className="cart-remove close mt-3 d-md-none" href="#">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="times"
                      className="svg-inline--fa fa-times fa-w-11"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 352 512"
                    >
                      <path
                        fill="currentColor"
                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                      ></path>
                    </svg>
                  </a>

                  <div className="d-flex align-items-center">
                    <a href="/">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            alt=""
                            aria-hidden="true"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYvW2n1YP8uZGUBGbWNcN5eywXOVY3a_Si-g&s"
                            style={{
                              display: "block",
                              maxWidth: "100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </span>
                      </span>
                    </a>

                    <div className="cart-title text-start ml-5">
                      <a className="text-dark link-animated" href="/tops-blouses/beige">
                        <strong>Chuột không dây Logitech </strong>
                      </a>
                      <br />
                      <span className="text-muted text-sm">Category: Mouse</span>
                      <br />
                      <span className="text-muted text-sm">Colour: Black</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 mt-md-0 col-md-7 col-12">
                  <div className="align-items-center row">
                    <div className="col-md-2">
                      <div className="row">
                        <div className="d-md-none text-muted col-6">Price per item</div>
                        <div className="text-end text-md-center col-md-12 col-6">$40</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="align-items-center row">
                        <div className="text-muted d-md-none col-6">Status</div>
                        <div className="text-end text-md-start col-md-12 col-6">
                          <span className="p-lg-2 badge bg-primary">In stock</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <button type="button" className="mt-4 mt-md-0 btn btn-outline-dark">
                        Add to cart
                      </button>
                    </div>
                    <div className="d-none d-md-block text-center col-2">
                      <a className="cart-remove text-muted" href="#">
                        <svg className="svg-icon w-3rem h-3rem svg-icon-light">
                          <use xlinkHref="#close-1"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WishList;
