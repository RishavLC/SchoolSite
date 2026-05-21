import '../../pages/TravelJournal.css';
import locationIcon from '../../assets/location.png'
export default function Entry(props){
    console.log(props.date)
    return(
        <section className='container'>
            <img src={props.img.src}
                 alt={props.img.alt}/>
            <div className='details'>
                <div>
                    <img className="location" src={locationIcon} alt="location" />
                    <span>{props.country}</span>
                    <a className='map' href={props.googleMapsLink}>View on Google Maps</a>
                    <h1>{props.title}</h1>
                    <h4>
                        {props.date}
                    </h4>
                    <p>
                        {props.text}
                    </p>
                </div>
            </div>
        </section>
    )
}