// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props

  return (
    <div className="latest-match-details">
      <div className="latest-match-data-status">
        <p className="team-name-heading">{latestMatch.competingTeam}</p>
        <p>{latestMatch.date}</p>
        <p>{latestMatch.venue}</p>
        <p>{latestMatch.result}</p>
      </div>
      <div className="latest-match-data-logo">
        <img
          src={latestMatch.competingTeamLogo}
          className="team-logo"
          alt={`latest match ${latestMatch.competingTeam}`}
        />
      </div>
      <div className="latest-match-data-details">
        <h2 className="latest-match-details-headings">First Innings</h2>
        <p>{latestMatch.firstInnings}</p>
        <h2 className="latest-match-details-headings">Second Innings</h2>
        <p>{latestMatch.secondInnings}</p>
        <h2 className="latest-match-details-headings">Man Of The Match</h2>
        <p>{latestMatch.manOfTheMatch}</p>
        <h2 className="latest-match-details-headings">Umpires</h2>
        <p>{latestMatch.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
