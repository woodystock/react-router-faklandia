import LoadingMessage from "./LoadingMessage"
import MdmRecord from "./MdmRecord"

const MdmTable = ({misdemeanours, filter}) => {
    return ( <div>
                {misdemeanours.length == 0 ? <LoadingMessage /> :
                misdemeanours.filter((misdemeanour) => !filter || misdemeanour.misdemeanour === filter)
                .map((misdemeanour, index) => <MdmRecord key={"mdm-" + index} misdemeanour={misdemeanour} />)}
        </div>
    )
}

export default MdmTable