import './JobCard.css'
import { jobCatalog } from '../data/job'

const JobCard = () => {
    return (
        <>
        {
            jobCatalog.map((a) => (
                <div className="job_card_container" key={a.id}>
                    <span>{a.jobTitle}</span>
                    <span>{a.companyName}</span>
                    <span>{a.location}</span>
                    {a.salary !== null && (
                        <span>₦{a.salary}</span>
                    )}
                    {/* {a.salary.toString.length} if for every a.salary length that is a multiple of three render a comma after it */}
                </div>
            ))
        }
        </>
    )
}

export default JobCard