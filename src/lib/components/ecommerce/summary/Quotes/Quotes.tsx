import React from "react";
import Quote from "./Quote";

const Quotes: React.FC = () => {
    return (
        <div data-core-fade-transition-wrapper className="r-fade-transition-enter-done">
            <div className="ec-summary-quotes-box row">
                <Quote
                    icon={
                        <svg viewBox="0 0 25 25" className="svgicon svgicon-reduced" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path d="M18.5 5h-1.775a4.231 4.231 0 00-8.45 0H6.5A2.5 2.5 0 004 7.5v11A2.5 2.5 0 006.5 21h12a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0018.5 5zm-6-3a3.245 3.245 0 013.225 3h-6.45A3.245 3.245 0 0112.5 2zM20 18.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 015 18.5v-11A1.5 1.5 0 016.5 6h12A1.5 1.5 0 0120 7.5z"></path><path d="M14.4 12.448a1.592 1.592 0 01.738-1.328 1.607 1.607 0 00-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 00-1.739 2.068 4.32 4.32 0 00.723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 00.474-.989 1.516 1.516 0 01-.926-1.403zM12.583 10.357a1.346 1.346 0 00.941-.5 1.594 1.594 0 00.361-.974.731.731 0 00-.008-.136 1.5 1.5 0 00-1.016.528 1.547 1.547 0 00-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011z"></path></svg>
                    }
                >
                    <span>Order now. Pick up, in store:</span>
                    <div>
                        <span><strong>Today</strong> at Apple West 14th Street</span>
                    </div>
                </Quote>

                <Quote
                    icon={
                        <svg viewBox="0 0 25 25" className="svgicon svgicon-reduced" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path d="M23.482 12.847l-2.92-3.209A1.947 1.947 0 0018.985 9H17V6.495a2.5 2.5 0 00-2.5-2.5h-11a2.5 2.5 0 00-2.5 2.5v9.75a2.5 2.5 0 002.5 2.5h.548A2.746 2.746 0 006.75 21.02 2.618 2.618 0 009.422 19h6.681a2.744 2.744 0 005.347-.23h.735A1.656 1.656 0 0024 16.98v-2.808a1.937 1.937 0 00-.518-1.325zM8.426 18.745a1.74 1.74 0 01-3.352 0 1.577 1.577 0 01.015-1 1.738 1.738 0 013.322 0 1.578 1.578 0 01.015 1zM9.447 18a2.726 2.726 0 00-5.394-.255H3.5a1.502 1.502 0 01-1.5-1.5v-9.75a1.502 1.502 0 011.5-1.5h11a1.502 1.502 0 011.5 1.5V18zm10.972.77a1.738 1.738 0 01-3.337 0 1.573 1.573 0 010-1 1.742 1.742 0 113.337 1zM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0017 16.165V10h1.986a.976.976 0 01.838.314l2.927 3.214a.95.95 0 01.249.644zm-1.324-3.36a.512.512 0 01.174.38h-3.306a.499.499 0 01-.544-.528V11h1.073a.76.76 0 01.594.268z" fill="#1d1d1f"></path></svg>
                    }
                >
                    <span>Order today. Delivers to 10001</span>
                    <div>
                        <span><strong>Tomorrow 11:30a.m. - 1:30p.m. — $9.00Wed, Jul 26 — Free</strong></span>
                    </div>
                </Quote>
            </div>
        </div>
    )
}

export default Quotes;