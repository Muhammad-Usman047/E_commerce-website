const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='contact-hero'>
          <h1 className='contact-title'>Contact Us</h1>
          <p className='contact-subtitle'>We're here to help and answer any questions you might have.</p>
        </div>

        <div className='contact-sections'>
          <section className='contact-topics'>
            <h2 className='headings'>How can we help you today?</h2>
            <p style={{ margin: '0 20px 20px' }}>Choose a topic that best describes your inquiry:</p>
            <ul className='topic-list'>
              <li className='topic-item'>
                <span className='topic-icon'>🛍️</span>
                <div>
                  <h3>Order Issues</h3>
                  <p>Problems with your recent purchase or order status</p>
                </div>
              </li>
              <li className='topic-item'>
                <span className='topic-icon'>💳</span>
                <div>
                  <h3>Payment & Refund</h3>
                  <p>Questions about payments, charges, or refunds</p>
                </div>
              </li>
              <li className='topic-item'>
                <span className='topic-icon'>🚚</span>
                <div>
                  <h3>Shipping & Delivery</h3>
                  <p>Information about shipping options and delivery times</p>
                </div>
              </li>
              <li className='topic-item'>
                <span className='topic-icon'>🔄</span>
                <div>
                  <h3>Returns & Exchange</h3>
                  <p>Process for returning items or exchanging products</p>
                </div>
              </li>
              <li className='topic-item'>
                <span className='topic-icon'>📦</span>
                <div>
                  <h3>Product Information</h3>
                  <p>Details about product features and specifications</p>
                </div>
              </li>
              <li className='topic-item'>
                <span className='topic-icon'>👤</span>
                <div>
                  <h3>Account Management</h3>
                  <p>Help with your account, login, or profile settings</p>
                </div>
              </li>
            </ul>
          </section>

          <section className='contact-details'>
            <h2 className='headings'>Direct Contact Information</h2>
            <div className='contact-methods'>
              <div className='contact-method'>
                <h3>Email Support</h3>
                <p>For general inquiries and support</p>
                <a href="mailto:support@yourecommerce.com">support@yourecommerce.com</a>
                <p>Typically respond within 24 hours</p>
              </div>

              <div className='contact-method'>
                <h3>Phone Support</h3>
                <p>For urgent matters and immediate assistance</p>
                <a href="tel:+921234567890">+92 123 4567890</a>
                <p>Mon-Fri, 9:00 AM - 6:00 PM (PKT)</p>
              </div>

              <div className='contact-method'>
                <h3>Visit Us</h3>
                <p>Our headquarters and customer service center</p>
                <address>
                  123 Shopping Street<br />
                  Lahore, Pakistan<br />
                </address>
              </div>

              <div className='contact-method'>
                <h3>WhatsApp</h3>
                <p>For quick questions and chat support</p>
                <a href="https://wa.me/923001234567">+92 300 1234567</a>
                <p>Available during business hours</p>
              </div>
            </div>
          </section>

          <section className='contact-resources'>
            <h2 className='headings' style={{marginBottom:'-15px'}}>Quick Resources</h2>
            <div className='resource-links'>
              <a href="" className='resource-link'>Track Your Order</a>
              <a href="" className='resource-link'>Return a Product</a>
              <a href="" className='resource-link'>Terms & Conditions</a>
            </div>
          </section>
          <section className='social-container'>
            <h2 className='headings'>Social Media Links</h2>
            <div className='contact-social'>
              <p style={{ marginBottom: '10px' }}>Follow our social media for updates, promotions, and more</p>
              <div className='social'>
                <a href="#" className='social-link'>Facebook</a>
                <a href="#" className='social-link'>Instagram</a>
                <a href="#" className='social-link'>Twitter</a>
                <a href="#" className='social-link'>YouTube</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;