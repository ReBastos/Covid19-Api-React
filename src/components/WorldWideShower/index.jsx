import './index.css'

const WorldwideShower = ({title1, title2, data1, data2, imgLink, borderColor}) => {

    if (data1 != null || data2 != null){
    return(
        <>
        <div className="miniContainer" style={{border: `solid 3px ${borderColor}`,borderTop: `solid 15px ${borderColor}`}}>
        <img src={imgLink}/>
        <h3>{title1}</h3>
        <p>{data1}</p>
        <h3>{title2}</h3>
        <p>{data2}</p>
        </div>
        </>
    )
    } else {
        return null;
    }
    
}

export default WorldwideShower;

