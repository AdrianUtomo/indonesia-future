import HeroCSS from "./Hero.module.css";

export const Hero3 = () => {
  const items = [
    {
      title: "Create a profile",
      text: "Create your profile to connect with client, highlight your skills, and show off your portfolio",
    },
    {
      title: "Search for projects",
      text: "Search projects that suit into your skills or any project you’re looking for",
    },
    {
      title: "Apply for projects",
      text: "Apply to the project you’re looking for and wait for a response from client",
    },
    {
      title: "Connected to client",
      text: "If the client likes your profile, we will help connect you to clients for an interview or any step clients needed",
    },
    {
      title: "Make a deal",
      text: "If the client wants to come forward with you, you can make a deal with the client",
    },
  ];
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.heroUpper}>
          <h2>Steps to get project</h2>
          <div className={HeroCSS.items}>
            {items.slice(0,3).map((item, i) => (
              <div className={HeroCSS.item} key={i}>
                <p className={HeroCSS.circle}>{i+1}</p>
                <p style={{fontWeight:"bold"}}>{item.title}</p>
                <p>{item.text}</p>
              </div>
              ))}
          </div>
          <div className={HeroCSS.items}>
            {items.slice(3,5).map((item, i) => (
              <div className={HeroCSS.item} key={i}>
                <p className={HeroCSS.circle}>{i+4}</p>
                <p style={{fontWeight:"bold"}}>{item.title}</p>
                <p>{item.text}</p>
              </div>
              ))}
          </div>
        </div>
      </div>
    </div>
    
  );
};
