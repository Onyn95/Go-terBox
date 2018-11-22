import React from 'react';

class Header extends React.Component {
    scrollIt = (destination, duration = 200, easing = 'linear') => {

        const easings = {
            easeOutQuad(t) {
            return t * (2 - t);
            },
            easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }
        };
        
        const start = window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        
        const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
        const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
        
        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, destinationOffsetToScroll);
 
            return;
        }
        
        function scroll() {
            const now = 'now' in window.performance ? performance.now() : new Date().getTime();
            const time = Math.min(1, ((now - startTime) / duration));
            const timeFunction = easings[easing](time);
            window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
        
            if (window.pageYOffset === destinationOffsetToScroll) {
                return;
            }
        
            requestAnimationFrame(scroll);
        }
        
        scroll();
    }

    myScroll = (e) => {
        console.log(e.target.classList[0]);
        this.scrollIt(
            document.querySelector("#" + e.target.classList[0]),
            400,
            'easeOutQuad'
        );
    }

    render() {
        return (
            <header className="headerstandard">
                <div className="headerstandard-inner">
                    <h1>Ô Goûter</h1>
                    <nav className="menu menustandard">
                        <a className="section1 target" href="#section1" onClick={this.myScroll}>Présentation</a>
                        <a className="section2 target" href="#section2" onClick={this.myScroll}>Ô Goûter ?</a>
                        <a className="section3 target" href="#section3" onClick={this.myScroll}>Nos produits</a>
                        <a className="section4 target" href="#section4" onClick={this.myScroll}>L'équipe</a>
                        <a className="section5 target" href="#section5" onClick={this.myScroll}>Partenaires</a>
                        <a className="section6 target" href="#section6" onClick={this.myScroll}>Contact</a>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;