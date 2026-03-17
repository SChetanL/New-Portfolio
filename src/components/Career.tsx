import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Science, Computer Science</h4>
                <h5>University of North Carolina at Charlotte</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Pursuing advanced studies in Computer Science with focus on
              AI/ML, system design, and software engineering principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Engineer Intern</h4>
                <h5>SmartBytes</h5>
              </div>
              <h3>2022–23</h3>
            </div>
            <p>
              Architected and optimized backend data processing modules for
              automotive telemetry systems, improving system reliability by 18%.
              Designed high-throughput data pipelines processing 100K+ sensor
              records, reducing execution latency by 25%. Increased computational
              efficiency from 72% to 84% through algorithm refactoring and
              deployed containerized services using Docker and Git.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology, Computer Science & Engineering</h4>
                <h5>GITAM University</h5>
              </div>
              <h3>2019–23</h3>
            </div>
            <p>
              Completed undergraduate studies in Computer Science and
              Engineering, building a strong foundation in algorithms, data
              structures, and software development practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
