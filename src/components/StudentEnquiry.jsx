// import { useState } from 'react'

// export default function StudentEnquiry() {

// const [formData, setFormData] = useState({
// name: '',
// phone: '',
// email: '',
// course: '',
// message: ''
// })

// const handleChange = (e) => {
// setFormData({
// ...formData,
// [e.target.name]: e.target.value
// })
// }

// const handleSubmit = async (e) => {
// e.preventDefault()

// ```
// await fetch(
//   'YOUR_GOOGLE_APPS_SCRIPT_URL',
//   {
//     method: 'POST',
//     body: JSON.stringify(formData)
//   }
// )

// alert('Enquiry Submitted Successfully')

// setFormData({
//   name: '',
//   phone: '',
//   email: '',
//   course: '',
//   message: ''
// })
// ```

// }

// return ( <section id="enquiry" className="container">

// ```
//   <h2>Student Enquiry</h2>

//   <form
//     onSubmit={handleSubmit}
//     style={{
//       maxWidth:'700px',
//       margin:'auto',
//       display:'flex',
//       flexDirection:'column',
//       gap:'16px'
//     }}
//   >

//     <input
//       type="text"
//       name="name"
//       placeholder="Full Name"
//       required
//       value={formData.name}
//       onChange={handleChange}
//     />

//     <input
//       type="tel"
//       name="phone"
//       placeholder="Phone Number"
//       required
//       value={formData.phone}
//       onChange={handleChange}
//     />

//     <input
//       type="email"
//       name="email"
//       placeholder="Email Address"
//       required
//       value={formData.email}
//       onChange={handleChange}
//     />

//     <select
//       name="course"
//       required
//       value={formData.course}
//       onChange={handleChange}
//     >
//       <option value="">Select Course</option>
//       <option>JEE Mathematics</option>
//       <option>LaTeX Course</option>
//       <option>Engineering Mathematics</option>
//       <option>Research Guidance</option>
//       <option>Other</option>
//     </select>

//     <textarea
//       rows="5"
//       name="message"
//       placeholder="Message"
//       value={formData.message}
//       onChange={handleChange}
//     />

//     <button type="submit">
//       Submit Enquiry
//     </button>

//   </form>
// </section>

// )
// }


import { useState } from 'react'

export default function StudentEnquiry() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Replace with your Google Apps Script URL
    const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyybJkFmbX_fiPWeuWlaJFRQK_qY5E6I5WU6Oysg7y5ZRIkNIfzL0M8uyPbdvfb_oN8/exec'

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      alert('Enquiry Submitted Successfully!')
      setSubmitted(true)
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: '',
        message: ''
      })

      // Reset submitted status after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your enquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="enquiry" className="container" style={{
      padding: '80px 20px',
      background: 'linear-gradient(135deg, rgba(10,10,15,0.5) 0%, rgba(20,20,30,0.5) 100%)',
      borderRadius: '24px',
      margin: '40px auto'
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: 500,
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: '16px',
        color: 'var(--text-primary)'
      }}>
        Student Enquiry
      </h2>
      
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '14px',
        textAlign: 'center',
        color: 'var(--text-muted)',
        marginBottom: '48px',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        ∴ Begin your mathematical journey with Professor Vishnu
      </p>

      {submitted ? (
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '40px',
          background: 'rgba(200,169,110,0.1)',
          borderRadius: '16px',
          border: '1px solid var(--accent-gold)'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✨</div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '24px',
            color: 'var(--accent-gold)',
            marginBottom: '12px'
          }}>
            Thank You!
          </h3>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            color: 'var(--text-muted)'
          }}>
            Your enquiry has been submitted successfully. Professor Vishnu will contact you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{
          maxWidth: '700px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            required
            value={formData.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '14px 18px',
              background: 'rgba(10, 10, 15, 0.6)',
              border: '1px solid var(--border-glass)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent-gold)'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-glass)'}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            value={formData.phone}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '14px 18px',
              background: 'rgba(10, 10, 15, 0.6)',
              border: '1px solid var(--border-glass)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent-gold)'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-glass)'}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            value={formData.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '14px 18px',
              background: 'rgba(10, 10, 15, 0.6)',
              border: '1px solid var(--border-glass)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent-gold)'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-glass)'}
          />

          <select
            name="course"
            required
            value={formData.course}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '14px 18px',
              background: 'rgba(10, 10, 15, 0.6)',
              border: '1px solid var(--border-glass)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent-gold)'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-glass)'}
          >
            <option value="">Select Course *</option>
            <option value="JEE Mathematics">JEE Mathematics</option>
            <option value="LaTeX Course">LaTeX Course</option>
            <option value="Engineering Mathematics">Engineering Mathematics</option>
            <option value="Research Guidance">Research Guidance</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            rows="5"
            name="message"
            placeholder="Message / Questions"
            value={formData.message}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '14px 18px',
              background: 'rgba(10, 10, 15, 0.6)',
              border: '1px solid var(--border-glass)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              resize: 'vertical',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent-gold)'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-glass)'}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '16px 24px',
              background: 'var(--accent-gold)',
              color: '#0A0A0F',
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '8px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              opacity: isSubmitting ? 0.7 : 1
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.background = '#D9BC7E'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.background = 'var(--accent-gold)'
                e.currentTarget.style.transform = 'translateY(0)'
              }
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry →'}
          </button>

          <p style={{
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            marginTop: '16px',
            letterSpacing: '0.05em'
          }}>
            ∴ We respect your privacy. Your information will never be shared.
          </p>
        </form>
      )}
    </section>
  )
}
