import MdmRecord from "./MdmRecord"

const MdmTable = ({misdemeanours, filter}) => {
    return ( <div>
                {misdemeanours.filter((misdemeanour) => !filter || misdemeanour.misdemeanour === filter)
                .map((misdemeanour) => <MdmRecord misdemeanour={misdemeanour} />)}
        </div>
    )
}

export default MdmTable