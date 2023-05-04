document.body.style.backgroundColor = "#202020";

function Homepage() {
    return (
        <div style={{ backgroundColor: '#202020', position: 'relative' }}>
            <header style={{ color:'white'  }}>
                <h1> Welcome to our Fitness Web Page!</h1>
            </header>
            <main  style={{ backgroundColor: '#202020', position: 'relative' }}>
                <header style={{ position: 'absolute', top: 100, left: 150  }}>
                    <h1 style={{  color: 'white' }}>Get <span style={{ color: 'darkgreen' }}>Fit</span></h1>
                    <h1 style={{  color: 'white' }}>Stay <span style={{color: 'darkgreen' }}>Motivated</span></h1>
                </header>
                <p style={{ position: 'absolute', top: 220, left: 150, color:'white'  }}>
                    We believe that everyone deserves to have access to effective and enjoyable</p>
                <p style={{ position: 'absolute', top: 240, left: 150, color:'white'  }}>
                    workouts, no matter where you are. Join our community of fitness enthusiasts today</p>
                <p style={{ position: 'absolute', top: 260, left: 150, color:'white'  }}>
                    and start your journey towards a healthier and happier lifestyle!</p>
                <img src="https://i.imgur.com/K5kcSeg.jpg" alt="Fitness" style={{ width: 350, high: 250, position: "absolute", top: 90, right: 200 }}/>
                <button style={{ position: 'absolute', top: 320, left: 150, backgroundColor: '#4CAF50', padding: '10px 20px', color: 'black', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }} onClick={() => window.location.href = 'http://localhost:3000/signIn'}>Get Started</button>
                <button style={{ position: 'absolute', top: 320, left: 400, backgroundColor: '#FFFFFF', padding: '10px 20px', color: 'black', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>Our Plans</button>
                <header style={{ position: 'absolute', top: 450, left: 150  }}>
                    <h2 style={{  color: 'white' }}>Workout Plans & <span style={{ color: 'darkgreen' }}>Nutritions</span></h2>
                </header>
                <header style={{ position: 'absolute', top: 550, left: 350  }}>
                    <h5 style={{  color: 'white' }}>Nutritional guidance</h5>
                </header>
                <p style={{ position: 'absolute', top: 600, left: 290, color:'white'  }}>
                    We can provide you with personalized nutrition </p>
                <p style={{ position: 'absolute', top: 620, left: 270, color:'white'  }}>
                    recommendations based on your goals and dietary </p>
                <p style={{ position: 'absolute', top: 640, left: 410, color:'white'  }}>
                    preferances</p>
                <img src="https://via.placeholder.com/4x430" alt="Bar1" style={{ position: "absolute", top: 500, left: 800 }}/>
                <img src="https://via.placeholder.com/1200x4" alt="Bar2" style={{ position: "absolute", top: 700, left: 200 }}/>
                <header style={{ position: 'absolute', top: 550, left: 1050  }}>
                    <h5 style={{  color: 'white' }}>Progress tracking</h5>
                </header>
                <p style={{ position: 'absolute', top: 600, left: 890, color:'white'  }}>
                    We can track your progress over time, such as your weight, body </p>
                <p style={{ position: 'absolute', top: 620, left: 870, color:'white'  }}>
                    measurements, and fitness performance, to help you stay motivated </p>
                <p style={{ position: 'absolute', top: 640, left: 1010, color:'white'  }}>
                    and see how far you've come</p>
                <header style={{ position: 'absolute', top: 750, left: 370  }}>
                    <h5 style={{  color: 'white' }}>Expert guidance</h5>
                </header>
                <p style={{ position: 'absolute', top: 800, left: 290, color:'white'  }}>
                    We can provide you with personalized nutrition </p>
                <p style={{ position: 'absolute', top: 820, left: 280, color:'white'  }}>
                    recommendations based on your goals and dietary </p>
                <p style={{ position: 'absolute', top: 840, left: 430, color:'white'  }}>
                    preferances</p>
                <header style={{ position: 'absolute', top: 750, left: 1050  }}>
                    <h5 style={{  color: 'white' }}>Variety of workouts</h5>
                </header>
                <p style={{ position: 'absolute', top: 800, left: 910, color:'white'  }}>
                    We offer a range of workouts, including cardio, strength  </p>
                <p style={{ position: 'absolute', top: 820, left: 890, color:'white'  }}>
                    training, yoga, and more, to keep your workouts challenging   </p>
                <p style={{ position: 'absolute', top: 840, left: 1030, color:'white'  }}>
                    and interesting</p>
                <header style={{ position: 'absolute', top: 1020, left: 650  }}>
                    <h1 style={{  color: 'white' }}>Join Our <span style={{ color: 'darkgreen' }}>Trainers</span></h1>
                </header>
                <img src="https://imgur.com/FJownuA.jpg" alt="coach1" style={{ width: 200, high: 270, position: "absolute", top: 1150, left: 250 }}/>
                <img src="https://imgur.com/YTp7DMt.jpg" alt="coach2" style={{ width: 200, high: 270, position: "absolute", top: 1150, left: 550 }}/>
                <img src="https://imgur.com/kqWhHI3.jpg" alt="coach3" style={{ width: 200, high: 270, position: "absolute", top: 1150, left: 850 }}/>
                <img src="https://imgur.com/Nc2KwFi.jpg" alt="coach4" style={{ width: 200, high: 390, position: "absolute", top: 1150, left: 1150 }}/>
                <header style={{ position: 'absolute', top: 1500, left: 150  }}>
                    <h2 style={{  color: 'white' }}>Burn Calories And  <span style={{ color: 'darkgreen' }}>Stay Healthy</span></h2>
                    <h2 style={{  color: 'white' }}>with <span style={{color: 'darkgreen' }}>FitnessFusion</span></h2>
                </header>
                <p style={{ position: 'absolute', top: 1600, left: 150, color:'white'  }}>
                    Welcome to our fitness and nutrition webpage! We are a team of dedicated fitness and nutrition  </p>
                <p style={{ position: 'absolute', top: 1620, left: 150, color:'white'  }}>
                    professionaks who are passionate about helping people live their healthiest, most fulfilling lives.   </p>
                <p style={{ position: 'absolute', top: 1650, left: 150, color:'white'  }}>
                    Our mission is to provide you with the tools, resources, and support you need to achieve your</p>
                <p style={{ position: 'absolute', top: 1670, left: 150, color:'white'  }}>
                    fitness and nutrition goals. Whether you're looking to lose weight, build muscle, or simply feel   </p>
                <p style={{ position: 'absolute', top: 1690, left: 150, color:'white'  }}>
                    better in you own skin, we're here to help.   </p>
                <p style={{ position: 'absolute', top: 1720, left: 150, color:'white'  }}>
                    Our team consists of certified persoanl trainers, registered dietitians, and other health experts</p>
                <p style={{ position: 'absolute', top: 1740, left: 150, color:'white'  }}>
                    who have years of experience working with clients of all ages and fitness levels. We understand  </p>
                <p style={{ position: 'absolute', top: 1760, left: 150, color:'white'  }}>
                    that everyone's journey towards better health is unique, which is why we offer customized   </p>
                <p style={{ position: 'absolute', top: 1780, left: 150, color:'white'  }}>
                    fitness and nutrition plans that are tailored to your individual needs and preferences.</p>
                <img src="https://i.imgur.com/K5kcSeg.jpg" alt="Fitness-img" style={{ width: 350, high: 250, position: "absolute", top: 1550, right: 200 }}/>
            </main>
            <footer>
                <p style={{ position: 'absolute', top: 1990, left:600, color:'white'  }}> @2023 Fitness Web Page. All rights reserved.</p>
            </footer>
        </div>
    );
}
export default Homepage