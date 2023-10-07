import { useEffect, useRef, useState } from 'react';
import './GalleryZoomable.css'

let nReady = 0
const GalleryZoomable: React.FC = () => {
    const [width, setWidth] = useState<number | undefined>()

    const refZoomable = useRef<HTMLDivElement>(null)
    const refZoombleContent = useRef<HTMLDivElement>(null)
    const refZoomableControls = useRef<HTMLUListElement>(null)
    const refZoomableGallery = useRef<HTMLUListElement>(null)

    const configResolution = () => {
        if (!refZoomable || !refZoombleContent || !refZoomableControls) return
        let totalWidth = 0

        const galleryImages = refZoomableGallery.current?.querySelectorAll('img')!

        galleryImages.forEach((_img, index) => {
            totalWidth += galleryImages[index].width
        })


        setWidth(() => (totalWidth))
    }

    useEffect(() => {
        window.addEventListener('resize', configResolution)
        return () => {
            window.removeEventListener('resize', configResolution);
        }
    }, [])


    const ready = () => {
        if (nReady + 1 < 5) {
            nReady++
            return
        }

        let totalWidth = 0
        refZoomableGallery.current?.querySelectorAll('img').forEach(img => {
            totalWidth += parseFloat(img.getAttribute('width')!)
        })

        setWidth(totalWidth)
        configResolution()
    }


    return (
        <div className={`as-zoomable rf-flagship-zoomable-gallery ${nReady+1 === 5 ? 'as-zoomable-isready' : ''}`} ref={refZoomable}>
            <div className='as-zoomable-inlinecontainer' style={{width: width, minWidth: '100%'}} ref={refZoombleContent}>
                <div className='as-zoomable-content' style={{width: width, minWidth: '100%'}} ref={refZoombleContent}>
                    <ul className='as-zoomable-gallery' ref={refZoomableGallery}>
                        <li className='as-zoomable-gallery-item'>
                            <img onLoad={ready} width="141" style={{ height: '100%', width: 'auto' }} height="120" alt="Gallery of HomePod mini in all available colors: Space Gray, Blue, White, Yellow, and Orange." src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-blue-202110_FV1?wid=934&amp;hei=440&amp;fmt=jpeg&amp;qlt=95&amp;.v=1633086025000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-blue-202110_FV1?wid=934&amp;hei=440&amp;fmt=jpeg&amp;qlt=95&amp;.v=1633086025000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-blue-202110_FV1?wid=1868&amp;hei=880&amp;fmt=jpeg&amp;qlt=90&amp;.v=1633086025000 2x" aria-hidden="true" id="as-zoomable-gallery-thumbnail-0" />
                        </li>
                        <li className='as-zoomable-gallery-item'>
                            <img onLoad={ready} width="141" style={{ height: '100%', width: 'auto' }} height="120" alt="Gallery of HomePod mini in all available colors: Space Gray, Blue, White, Yellow, and Orange." src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-202110-gallery-2-thumb?wid=203&amp;hei=120&amp;fmt=jpeg&amp;qlt=95&amp;.v=1632998367000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-202110-gallery-2-thumb?wid=203&amp;hei=120&amp;fmt=jpeg&amp;qlt=95&amp;.v=1632998367000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-202110-gallery-2-thumb?wid=406&amp;hei=240&amp;fmt=jpeg&amp;qlt=95&amp;.v=1632998367000 2x" className="as-zoomable-gallery-thumbnail" aria-hidden="true" id="as-zoomable-gallery-thumbnail-1" />
                        </li>
                        <li className="as-zoomable-gallery-item">
                            <img onLoad={ready} width="141" style={{height:'100%', width: 'auto' }} height="120" alt="Gallery of HomePod mini with Siri listening." src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-202110-gallery-3-thumb?wid=141&amp;hei=120&amp;fmt=jpeg&amp;qlt=95&amp;.v=1632998367000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-202110-gallery-3-thumb?wid=141&amp;hei=120&amp;fmt=jpeg&amp;qlt=95&amp;.v=1632998367000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-202110-gallery-3-thumb?wid=282&amp;hei=240&amp;fmt=jpeg&amp;qlt=95&amp;.v=1632998367000 2x" className="as-zoomable-gallery-thumbnail" aria-hidden="true" id="as-zoomable-gallery-thumbnail-2" />
                        </li>
                        <li className="as-zoomable-gallery-item">
                            <img onLoad={ready} width="203" style={{ height: '100%', width: 'auto' }} height="120" alt="Gallery of a person playing audio through their HomePod mini." src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-202110-gallery-4-thumb?wid=203&amp;hei=120&amp;fmt=jpeg&amp;qlt=95&amp;.v=1633193334000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-202110-gallery-4-thumb?wid=203&amp;hei=120&amp;fmt=jpeg&amp;qlt=95&amp;.v=1633193334000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-202110-gallery-4-thumb?wid=406&amp;hei=240&amp;fmt=jpeg&amp;qlt=95&amp;.v=1633193334000 2x" className="as-zoomable-gallery-thumbnail" aria-hidden="true" id="as-zoomable-gallery-thumbnail-3" />
                        </li>
                        <li className="as-zoomable-gallery-item">
                            <img onLoad={ready} width="141" style={{ height: '100%', width: 'auto' }} height="120" alt="Gallery of HomePod mini with Siri listening." src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-202110-gallery-5-thumb?wid=141&amp;hei=120&amp;fmt=jpeg&amp;qlt=95&amp;.v=1632998366000" srcSet="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-202110-gallery-5-thumb?wid=141&amp;hei=120&amp;fmt=jpeg&amp;qlt=95&amp;.v=1632998366000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-202110-gallery-5-thumb?wid=282&amp;hei=240&amp;fmt=jpeg&amp;qlt=95&amp;.v=1632998366000 2x" className="as-zoomable-gallery-thumbnail" aria-hidden="true" id="as-zoomable-gallery-thumbnail-4" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GalleryZoomable;