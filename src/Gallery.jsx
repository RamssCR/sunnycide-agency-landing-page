import { gallery1Info, gallery2Info, bgGallery1Info, bgGallery2Info } from "./data"
import "./gallery.css"

function Gallery() {
    //Articles without the container having an image as a bg
    function Articles({title, description, expand = "Learn more"}) {
        return <div className="articles-container">
            <h2 className="article-title">{title}</h2>
            <p className="article-description">{description}</p>
            <span className="article-lm">{expand}</span>
        </div>
    }

    function BgArticles({title, description}) {
        return <div className="bgArticle">
            <h2 className="article-title">{title}</h2>
            <p className="article-description">{description}</p>
        </div>
    }

    return <div className="gallery">
        <div className="flex-reverse">
            <img src="public/images/mobile/image-transform.jpg" alt="egg" />
            <Articles title={gallery1Info.title} description={gallery1Info.description} />
        </div>
        <div className="flex">
            <img src="public/images/mobile/image-stand-out.jpg" alt="coup" /> 
            <Articles title={gallery2Info.title} description={gallery2Info.description} />
        </div>
        {/*Part 2*/}
        <div className="bg-flex">
            <div className="longer-art-cont gd">
                <BgArticles title={bgGallery1Info.title} description={bgGallery1Info.description} />
            </div>
            <div className="longer-art-cont p">
                <BgArticles title={bgGallery2Info.title} description={bgGallery2Info.description} />
            </div>
        </div>
    </div>
}

export default Gallery