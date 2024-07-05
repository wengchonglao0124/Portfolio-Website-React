import myPhoto from '../../assets/myImage.png';


function CirclePhoto () {
    return (
        <div className="circle-photo-container">
            <a href="https://www.linkedin.com/in/wengchong-lao/">
                <img src={myPhoto} className="circle-photo-image" alt="My Photo" />
            </a>
        </div>
    );
}

export default CirclePhoto;