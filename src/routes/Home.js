import HomeStats from "../components/home/HomeStats"

const Home = () => <div>
        <h1 className="home-heading">Welcome to Faklandia justuce department</h1>
        <div className="home-stats-container">
            <img className="home-img" src="/justice.jpg" alt="symbol of justice"/>
            <HomeStats />
        </div>
    </div>

export default Home