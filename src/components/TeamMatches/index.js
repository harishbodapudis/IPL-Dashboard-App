// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamImageUrl: '',
    latestMatch: '',
    recentMatches: [],
    loader: true,
  }

  componentDidMount() {
    this.getMatchDataOfTeam()
  }

  getMatchDataOfTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamMatchData = await response.json()
    console.log(teamMatchData)
    const teamMatchesDetails = {
      teamBannerUrl: teamMatchData.team_banner_url,
      latestMatchDetails: teamMatchData.latest_match_details,
      recentMatches: teamMatchData.recent_matches,
    }

    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    } = teamMatchesDetails

    const latestMatchData = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      venue: latestMatchDetails.venue,
      matchStatus: latestMatchDetails.matchStatus,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
    }
    const recentMatchesData = recentMatches.map(items => ({
      umpires: items.umpires,
      result: items.result,
      manOfTheMatch: items.man_of_the_match,
      id: items.id,
      date: items.date,
      venue: items.venue,
      competingTeam: items.competing_team,
      competingTeamLogo: items.competing_team_logo,
      // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
      firstInnings: items.first_innings,
      secondInnings: items.second_innings,
      matchStatus: items.match_status,
    }))

    this.setState({
      teamImageUrl: teamBannerUrl,
      latestMatch: latestMatchData,
      recentMatches: [...recentMatchesData],
      loader: false,
    })
  }

  render() {
    const {teamImageUrl, latestMatch, recentMatches, loader} = this.state
    const {match} = this.props
    const bgCode = match.params.id.toLowerCase()
    console.log(teamImageUrl, latestMatch, recentMatches, loader, bgCode)

    return (
      <div className={`match-details-page ${bgCode}`}>
        {loader ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="latest-match-container">
            <img src={teamImageUrl} alt="team banner" className="team-banner" />
            <p className="section-name">Latest Matches</p>
            <LatestMatch latestMatch={latestMatch} />
            <ul className="matches-result-container">
              {recentMatches.map(items => (
                <MatchCard key={items.id} matchesList={items} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
