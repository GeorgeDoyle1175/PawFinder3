import React, { useEffect, useState } from "react";

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

      setShowFooter(isScrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showFooter) {
    return null; // Hide the footer until scrolled to the bottom
  }

  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        position: "fixed",
        width: "100%",
        bottom: 0,
        left: 0,
        padding: "8px",
        textAlign: "center",
      }}
    >
      <p>© 2023 PawFinder. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
