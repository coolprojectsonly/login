import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import React from "react";

function page() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        width: "100vw",
        height: "100vh",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "70vw",
          height: "100vh",
          // backgroundColor: "yellow",
        }}
      >
        <div
          style={{
            margin: "20px",
            // backgroundColor: "red",
            border: "1px solid red",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            borderRadius: "5px",
            borderLeft: "5px solid lightskyblue",
          }}
        >
          <div
            style={{
              // backgroundColor: "green",
              width: "25vw",
              margin: "auto",
            }}
          >
            <h1>Login</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "center",
                alignItems: "center",
                height: "4vw",
                backgroundColor: "whitesmoke",
              }}
            >
              <p style={{ marginRight: "10px" }}>
                Doesn't have an account yet?
              </p>{" "}
              <a href="/signup">Sign Up</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label for="username" style={{ margin: "10px" }}>
                Enter Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                style={{
                  borderRadius: "5px",
                  padding: "10px 20px",
                  margin: "5px",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "center",
                  alignItems: "center",
                  height: "4vw",
                  backgroundColor: "whitesmoke",
                }}
              >
                <label for="username" style={{ margin: "10px" }}>
                  Password
                </label>
                <a href="#">Forgot Password?</a>
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                style={{
                  borderRadius: "5px",
                  padding: "10px 20px",
                  margin: "5px",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "5px",
                marginTop: "6px",
              }}
            >
              <input type="checkbox" id="passwordCheck"></input>{" "}
              <label for="passwordCheck">Remember me?</label>
            </div>

            <button
              style={{
                padding: "8px 55px",
                borderRadius: "4px",
                backgroundColor: "purple",
                marginTop: "10px",
                color: "white",
                width: "100%",
                cursor: "pointer",
              }}
            >
              Login
            </button>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                // background: "red",
                marginTop: 0,
              }}
            >
              <h4 style={{ textAlign: "center" }}>Or login using</h4>
              <div>
                <button
                  style={{
                    padding: "8px 25px",
                    borderRadius: "4px",
                    backgroundColor: "white",
                    marginRight: "10px",
                    color: "black",
                    // display: "flex",
                    // flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ width: "20px", height: "20px" }}>
                      <FontAwesomeIcon
                        icon={faGoogle}
                        style={{ fontSize: "5px", color: "green" }}
                      />
                    </div>
                    Google
                  </div>
                </button>
                <button
                  style={{
                    padding: "8px 14px",
                    borderRadius: "4px",
                    backgroundColor: "white",
                    marginRight: "10px",
                    color: "black",
                    // display: "flex",
                    // flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{
                          fontSize: "5px",
                          color: "blue",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    Facebook
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // backgroundColor: "green",
          }}
        >
          <div style={{ width: "450px", height: "450px", overflow: "hidden" }}>
            <img
              src="/im4.webp"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
