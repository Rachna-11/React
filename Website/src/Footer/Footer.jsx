import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer-container">
            
            <div class="footer-column">
                <h3>About Us</h3>
                <p>We are a passionate team providing top-notch services to our customers worldwide.</p>
            </div>


            <div class="footer-column">
                <h3>Recent Log</h3>
                <ul>
                    <li><a href="#">New Branch Opened</a></li>
                    <li><a href="#">Updated Services</a></li>
                    <li><a href="#">Customer Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h3>Services</h3>
                <ul>
                    <li><a href="#">Food Delivery</a></li>
                    <li><a href="#">Catering</a></li>
                    <li><a href="#">Custom Orders</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h3>Have a Question?</h3>
                <div class="contact-info">
                    <p><i class="fa-solid fa-map-marker-alt"></i> 123 Street, City, Country</p>
                    <p><i class="fa-solid fa-phone"></i> +123 456 7890</p>
                    <p><i class="fa-solid fa-envelope"></i> info@example.com</p>
                </div>
            </div>

        </div>
    </footer>
    </div>
  )
}

export default Footer
