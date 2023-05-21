import "./Cards.css";
export default Cards = () => {
    return (
        <>
        <div className="row__header dashboard__row1">
          <div className="activity">
            <h3>Tracking Activity</h3>
            <p className="header__date">5th May, 2023</p>
          </div>
          <div className="avatar__container">
            <Avatar className="avatar" src={avatar}/>
            <p className="username">Tariq Hussain</p>
          </div>
        </div>
            <div className="dashboard__grid">
          <div
            className="card card__running"
            style={{
              background: `url(${running})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2>Running</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
          <div
            className="card card__cycling"
            style={{
              background: `url(${cycling})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2>Cycling</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
          <div
            className="card card__swimming"
            style={{
              background: `url(${swimming})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2>Swimming</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
          <div
            className="card card__hiking"
            style={{
              background: `url(${hiking})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2>Hiking</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
          <div
            className="card card__walking"
            style={{
              background: `url(${walking})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2>Walking</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
        </div>
        </>
    )
}