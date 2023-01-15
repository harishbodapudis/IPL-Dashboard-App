// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamsListData} = props
  const {id, teamImageUrl, name} = teamsListData
  console.log(id)
  const linkName = `/team-matches/${id}`
  return (
    <li className="team-card-container">
      <Link to={linkName} className="link-text">
        <div className="ipl-team-container">
          <img src={teamImageUrl} alt={name} className="ipl-team-logo" />
          <div className="team-name">
            <p>{name}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
