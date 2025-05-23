document.addEventListener("DOMContentLoaded", () => {
    const whatsappButton = document.createElement("div");
    whatsappButton.className = "whatsapp_floating_dentol";
    whatsappButton.innerHTML = `
      <a href="https://api.whatsapp.com/send?phone=5217771349319" target="_blank">


<div class="Frame15">
        <div class="Vector">
          <img src="/assets/Icons/General/WhatsAppIcon.svg" alt="WhatsApp" width="32" height="32" />
        </div>
        <div class="tooltip_whatsapp">Contáctanos</div>
      </div></a>
    `;
	
    document.body.appendChild(whatsappButton);
  
    const tryObserveFooter = () => {
      const footer = document.querySelector(".footer_dentol");
  
      if (footer) {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              whatsappButton.classList.add("hide_dentol");
            } else {
              whatsappButton.classList.remove("hide_dentol");
            }
          });
        }, {
          threshold: 0.2
        });
  
        observer.observe(footer);
      } else {
        setTimeout(tryObserveFooter, 100);
      }
    };
  
    tryObserveFooter();
  });