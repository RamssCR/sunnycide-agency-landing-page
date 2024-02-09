import { testimonialsCx } from "./data"
import "./testimonials.css"

function Testimonials() {
    //Template for the testimonials
    function TestimonialTemplate({imgSource, alt, testimonial, cxName, jobSpot}) {
        return <div className="testimonial-temp">
            <img src={imgSource} alt={alt} />
            <span className="test-description">{testimonial}</span>

            <div className="test-person">
                <span className="cxName">{cxName}</span>
                <span className="jobspot">{jobSpot}</span>
            </div>
        </div>
    }

    //We bring the info from the data.js file and we iteract with map in a variable
    const mapTest = testimonialsCx.map(element => {
        return <TestimonialTemplate 
            key={element.id} 
            imgSource={element.imgSource} 
            alt={element.alt} 
            testimonial={element.testimonial} 
            cxName={element.cxName} 
            jobSpot={element.jobSpot} 
        />
    })

    //We print the information altogether
    return <div className="testimonials-container">
        <h2 className="test-title">Client testimonials</h2>
        <div className="test-flex">
            {mapTest}
        </div>
    </div>
}

export default Testimonials