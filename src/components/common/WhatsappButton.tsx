

export default function WhatsappButton() {
    return (
        <div className="whatsapp-button">
        <a
          href="https://api.whatsapp.com/send?phone=+5548991572012"
          rel="noopener noreferrer"
          target="_blank"
          className="btn-whats"
        >
          <i className="text-4xl fa-brands fa-whatsapp"></i>
        </a>
        </div>
    )
}