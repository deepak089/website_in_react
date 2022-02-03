import React from 'react';

const About = () => {
  return (
      <>
    {/* about section */}
    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src="https://pixabay.com/get/g728b34acf8616311049964991eaef1b106a412cd10959fe0c2b8eb7fa219923a7b92eb37972975de953dcc312cfdae8abd34624f9dd7ca6bcbd89b614a62c06291902e6d64dd3d34bdd0f6f4664a7e48_1920.jpg" alt="image"/>
                </div>
                <div className="column right">
                    <div className="text">I'm Deepak  and I'm a <span className="typing-2">Full Stack Developer</span></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                    <a href="#">Download CV</a>
                </div>
            </div>
        </div>
    </section>

    
</>
  )
};

export default About;
