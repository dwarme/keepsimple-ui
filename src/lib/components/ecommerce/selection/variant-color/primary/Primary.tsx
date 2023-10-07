import React from "react"
import './Primary.css'
const Primary: React.FC = () => {
    return (
        
            <div className="ec-collapsable">

            <div >
                    <div>
                        <div className="ec-collapsable-dimension">
                            <div className="">
                                <div className="">
                                    <fieldset
                                        className="ec-dimension ec-productselection-dimension ec-productselection-dimensioncolor">
                                        <legend>
                                            <h2 className="ec-productselection-dimension-header">Color</h2>
                                        </legend>
                                        <div className="ec-dimension-selector-group row form-selector-group-withgutters">
                                            <div
                                                className="ec-dimension-multiple form-selector-swatch column large-6 small-6 form-selector">
                                                <input className="form-selector-input" name="dimensionColor"
                                                    id="c628cf40-27f8-11ee-8199-fb3d2af7fef8" type="radio"
                                                    data-autom="dimensionColorspace_gray"
                                                    data-trigger-id="product-selection-space_gray" value="space_gray"
                                                    checked 
                                                />
                                                <label htmlFor="c628cf40-27f8-11ee-8199-fb3d2af7fef8"
                                                    className="form-selector-label">
                                                    <img
                                                        alt=""
                                                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-finish-space-grey-202110?wid=102&amp;amp;hei=102&amp;amp;fmt=png-alpha&amp;amp;.v=1634037003000"
                                                        className="form-selector-swatch"
                                                    />
                                                    <span className="form-label-small"></span>
                                                    <span className="form-label-small" aria-hidden="true">Space Gray</span>
                                                </label>
                                            </div>

                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Primary