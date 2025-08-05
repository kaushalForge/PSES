const Contact = () => {
  return (
    <section className="bg-gray-100 pt-20 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Contact Us
        </h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Our Address
          </h3>
          <p className="text-gray-600">
            123 Main Street, Suite 456
            <br />
            Cityville, State 12345
            <br />
            Country
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Phone</h3>
          <p className="text-gray-600">+1 (123) 456-7890</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Email</h3>
          <p className="text-gray-600">info@example.com</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Find Us on Map
          </h3>
          <div
            className="relative overflow-hidden"
            style={{ paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              title="Google Map"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.096656292789!2d-122.08217698485344!3d37.42205787981786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc7b4be10725%3A0xf59d178a87b32f52!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1610035984427!5m2!1sen!2sus"
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
