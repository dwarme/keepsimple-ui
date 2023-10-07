import { ReactNode } from "react";

interface QuoteProps{
    icon: ReactNode;
    children: ReactNode;
}

const Quote: React.FC<QuoteProps> = ({icon, children})=>{
    return (
        <div className="ec-summary-quote row">
            <div className="ec-quote-info">
                <span className="ec-quote-icon">
                    {icon}
                </span>
                <div className="ec-quote-details">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Quote;