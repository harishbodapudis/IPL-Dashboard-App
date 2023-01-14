// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: '', loader: true}

  componentDidMount() {
    this.getTeamsListData()
  }

  getTeamsListData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsDataObj = await response.json()
    const teamsData = teamsDataObj.teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({teamsList: teamsData, loader: false})
  }

  render() {
    const {teamsList, loader} = this.state

    console.log(teamsList)
    return (
      <div className="home-container">
        <div className="ipl-img-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <div className="cards-list">
          {loader ? (
            <div>
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="team-cards-container">
              {teamsList.map(items => (
                <TeamCard key={items.id} teamsListData={items} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
