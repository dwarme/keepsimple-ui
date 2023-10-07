import React from "react";

const SummaryButton: React.FC = () => {
    return (
        <div className="ec-summary-button-box">
            <div className="ec-summary-button">
                <AddToCartButton />
            </div>
        </div>
    )
}

export default SummaryButton;

const AddToCartButton: React.FC = () => {
    return (
        <form method="get" action="#">
            <div className="ec-purchaseinfo-button">
                <span className="add-to-cart ">
                    <button type="submit" className="button button-block" name="add-to-cart" value="add-to-cart" title="Add to Bag">
                        <span className="label">Add to Bag</span>
                    </button>
                </span>
            </div>
            <input type="hidden" name="product" value="MJ2C3LL/A" />
            <input type="hidden" name="purchaseOption" value="fullPrice" />
            <input type="hidden" name="step" value="select" />
            <input type="hidden" name="ao.applecareprotectionplan" value="none" />
        </form>
    )
}