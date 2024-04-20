function Form() {
  return (
    <form id="form">
      <div className="form-container">
        <div className="input-field input-field-1">
          <label htmlFor="name">Name</label>
          <input
            autoComplete="on"
            id="name"
            type="text"
            placeholder="Richard Williams"
          />
        </div>
        <div className="input-field input-field-2">
          <label htmlFor="email">Email Address</label>
          <input
            autoComplete="on"
            id="email"
            type="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="input-field input-field-3">
          <label htmlFor="business-name">Business Name</label>
          <input
            autoComplete="on"
            id="business-name"
            type="text"
            placeholder="XYZ playlist"
          />
        </div>
        <div className="input-field input-field-4">
          <label htmlFor="contact-number">Contact Number</label>
          <input
            autoComplete="on"
            id="contact-number"
            type="text"
            placeholder="Richard Williams"
          />
        </div>
        <div className="input-field input-field-5">
          <label htmlFor="about-proj">About Project</label>
          <textarea
            id="about-proj"
            rows="10"
            cols="50"
            type="text"
            placeholder="Kindly wright a brief description of your project. So that we can find the best solution for you."
          ></textarea>
        </div>
        <div className="contact-submit-btn">
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
