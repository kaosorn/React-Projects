import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form>
            <label>Name:
            <input type="text" name="name" />
            </label>
            <label>Email:
            <input type="text" name="email" />
            </label>

            <textarea id="message">
                
            </textarea>
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}

export default ContactForm