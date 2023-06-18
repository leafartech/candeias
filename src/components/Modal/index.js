import { useEffect } from "react";

export default function Modal() {
    let cont = 0
        if (cont === 0) {
          const script = document.createElement('script');
          script.src = 'https://rafaeltramontin98.activehosted.com/f/embed.php?id=7';
          script.type = 'text/javascript';
          script.charset = 'utf-8';
          script.async = true;
    
          script.onload = () => {
            // Lógica adicional pode ser adicionada aqui, se necessário.
          };
    
          document.body.appendChild(script);
          cont++;
        }

    return (
        <div className="" id=""></div>
    )
}