import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>404</h1>
          <p style={styles.subtitle}>
            The page you're looking for can't be found.
          </p>
          <div style={styles.separator}></div>
          <p style={styles.text}>
            It may have been moved or doesn't exist anymore.
          </p>
          <a onClick={() => navigate("/list")} style={styles.link}>
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    backgroundColor: "#f5f5f7",
    fontFamily:
      '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
    color: "#1d1d1f",
    textAlign: "center",
    padding: "20px",
  },
  content: {
    maxWidth: "600px",
  },
  title: {
    fontSize: "120px",
    fontWeight: "600",
    margin: "0 0 10px",
    color: "#86868b",
  },
  subtitle: {
    fontSize: "32px",
    fontWeight: "600",
    margin: "0 0 20px",
  },
  separator: {
    height: "1px",
    width: "80px",
    backgroundColor: "#d2d2d7",
    margin: "30px auto",
  },
  text: {
    fontSize: "19px",
    lineHeight: "1.5",
    margin: "0 0 30px",
    color: "#86868b",
  },
  link: {
    display: "inline-block",
    fontSize: "17px",
    fontWeight: "400",
    color: "#06c",
    textDecoration: "none",
    borderBottom: "1px solid transparent",
    transition: "border-color 0.3s",
    paddingBottom: "2px",
    cursor: "pointer",
  },
};

export default NotFoundPage;
