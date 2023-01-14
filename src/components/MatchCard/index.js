// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchesList} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchesList

  console.log(matchesList)
  const status = matchStatus === 'Won' ? 'win' : 'lost'
  return (
    <li className="result-match-box">
      <img
        src={competingTeamLogo}
        className="opp-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="result-box-heading">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={status}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
