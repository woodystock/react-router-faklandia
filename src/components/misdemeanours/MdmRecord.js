const MdmRecord = ({misdemeanour}) => {
     const getMisdemeanourEmoji = (misdemeanour) => {
         // types = [ 'rudeness', 'vegetables', 'lift', 'united' ];
        switch(misdemeanour) {
            case "rudeness":
                return <p className="m-emoji">🤪</p>;
            case "vegetables":
                return <p className="m-emoji">🥗</p>;
            case "lift":
                return <p className="m-emoji">🗣</p>;
            case "united":
                return <p className="m-emoji">😈</p>;
            default:
                return <p className="m-emoji">⏱</p>
        }
     }

     const getRandomImageUrl = () => {
        const randSize = 100 + misdemeanour.citizenId % 100;

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
                <p className="uppercase">{misdemeanour.misdemeanour}</p>
            </div>
            <div className="m-cell">
                <img className="m-image" src={getRandomImageUrl()} alt="Location of desired punishment" />
            </div>
        </div>
    )
}

export default MdmRecord