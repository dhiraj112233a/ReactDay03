import React, { useState } from 'react'

const contactInfo = [
  {
    icon: '📞',
    title: 'Phone',
    value: '(555) 284 - 9103',
  },
  {
    icon: '✉️',
    title: 'Email',
    value: 'hello@atelierstudio.com',
  },
  {
    icon: '📍',
    title: 'Studio',
    value: '55 Design District, Miami, FL 33137',
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Message sent!')
  }

  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <button className="btn btn-warning rounded-pill px-4 py-2 mb-3">Let Us Connect</button>
          <h1 className="display-5 fw-bold">Start Your Design Journey</h1>
          <p className="text-secondary mx-auto col-lg-8 col-md-10">
            Whether you have a clear vision or are just beginning to explore possibilities, we would love to hear from you. Schedule a consultation or send a message.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="row gy-4">
          <div className="col-lg-7">
            <div className="p-4 rounded-4 contact-form bg-white bg-opacity-5 border border-white border-opacity-10 shadow-sm">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label text-secondary small">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control form-control-lg contact-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-secondary small">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control form-control-lg contact-input"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-secondary small">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control form-control-lg contact-input"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-secondary small">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select form-select-lg contact-input text-white bg-transparent border-secondary"
                  >
                    <option value="">Select a service...</option>
                    <option value="Residential Design">Residential Design</option>
                    <option value="Commercial Design">Commercial Design</option>
                    <option value="Renovation Consulting">Renovation Consulting</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label text-secondary small">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control contact-input"
                    rows="6"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-warning rounded-pill px-4 py-2">
                    Send Message ➜
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="p-4 rounded-4 contact-details bg-white bg-opacity-5 border border-white border-opacity-10 shadow-sm">
              <h5 className="fw-bold mb-4">Contact Info</h5>
              {contactInfo.map((item) => (
                <div key={item.title} className="d-flex align-items-start mb-4">
                  <div className="contact-icon me-3">{item.icon}</div>
                  <div>
                    <p className="mb-1 text-secondary small text-uppercase">{item.title}</p>
                    <p className="mb-0">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="mt-4 p-4 rounded-4 contact-hours bg-secondary bg-opacity-10">
                <p className="text-warning text-uppercase small mb-3">Studio Hours</p>
                <div className="d-flex justify-content-between text-secondary mb-2">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="d-flex justify-content-between text-secondary mb-2">
                  <span>Saturday</span>
                  <span>10:00 AM - 3:00 PM</span>
                </div>
                <div className="d-flex justify-content-between text-secondary">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="mt-5">
          <h5 className="text-white mb-3">Visit Our Studio</h5>
          <p className="text-secondary col-lg-8 px-0">
            Located in the heart of Miami’s Design District, our studio is open for scheduled visits and consultations.
          </p>
          <div className="studio-image rounded-4 mt-3"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact
