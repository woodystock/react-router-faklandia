const MdmRecord = ({misdemeanour}) => {
     const getMisdemeanourEmoji = (misdemeanour) => {
         // types = [ 'rudeness', 'vegetables', 'lift', 'united' ];
        switch(misdemeanour) {
            case "rudeness":
                return <p>🤪</p>;
            case "vegetables":
                return <p>🥗</p>;
            case "lift":
                return <p>🗣</p>;
            case "united":
                return <p>😈</p>;
            default:
                return <p>⏱</p>
        }
     }

     const getRandomImageUrl = () => {
        const randSize = 100 + Math.floor( (Math.random() * 100));

        return "https://picsum.photos/" + randSize  + "/" + randSize + "/";
     } 


    return (
        <div className="m-row">
            <div className="m-cell">
                {misdemeanour.citizenId}
            </div>
            <div className="m-cell">
                {misdemeanour.date}
            </div>
            <div className="m-cell">
                {getMisdemeanourEmoji(misdemeanour.misdemeanour)}
                {misdemeanour.misdemeanour}
            </div>
            <div className="m-cell">
                <img className="m-image" src={getRandomImageUrl()} />
            </div>
        </div>
    )
}

export default MdmRecord