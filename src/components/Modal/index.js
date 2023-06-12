import { useEffect } from "react";

export default function Modal() {
    let cont = 0 
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://rafaeltramontin98.activehosted.com/f/embed.php?id=3';
            script.type = 'text/javascript';
            script.charset = 'utf-8';

            document.getElementById('forms').appendChild(script)
            cont ++
            return () => {
            };
        }
      }, []);
    return (
        <div id="forms"></div>
    )
}