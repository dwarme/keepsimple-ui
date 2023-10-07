import SummaryButton from './SummaryButton';
import Price from './Price';
import Quotes from './Quotes/Quotes';
import './Summary.css'

const Summary: React.FC = () => {
    return (
        <div className="ec-flagship-summary-wrapperX" data-autom="full-summary" data-analytics-section="summary">
            <div className="ec-flagship-summary">
                <div className="ec-summary">
                    <Price />
                    <Quotes />
                    <SummaryButton />
                </div>
            </div>
        </div>
    )
}

export default Summary;
