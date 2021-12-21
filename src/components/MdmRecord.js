const MdmRecord = ({misdemeanour}) => {
     const getMisdemeanourEmoji = (misdemeanour) => {
         // types = [ 'rudeness', 'vegetables', 'lift', 'united' ];
        switch(misdemeanour) {
            case "rudeness":
                return <>🤪</>;
            case "vegetables":
                return <>🥗</>;
            case "lift":
                return <>🗣</>;
            case "united":
                return <>😈</>;
            default:
                return <>⏱</>
        }
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
                <img src='https://picsum.photos/100/100' />
            </div>
        </div>
    )
}

export default MdmRecord