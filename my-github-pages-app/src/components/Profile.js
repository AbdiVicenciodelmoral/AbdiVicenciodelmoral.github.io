import React from "react";

const Profile = ({handleNavClick, activeSection}) =>{
    return (

        <section id='profile' style={{display: activeSection === 'profile' ? 'block' : 'none'}}>
        <header className='profile-header'>
          <h1>Abdi Vicenciodelmoral</h1>
          <p className='tagline'> Machine Learning Engineer | Data Scientist | Software Engineer</p>
        </header>
        <div className='about-me'>
        <h2> About Me </h2>
        <p>
        I hold a Master’s degree in Computer Science from Washington State University, 
        with a focus on machine learning, data analysis, and software engineering. I 
        am proficient in programming languages including Python, Java, JavaScript, R, 
        C, and SQL, and experienced with machine learning frameworks such as TensorFlow, 
        Keras, and PyTorch. My skills in natural language processing, computer vision, 
        and data analysis are supported by my use of tools like Matplotlib, Seaborn, Pandas, 
        and NumPy. My master’s thesis on "An End-To-End Learning Framework for Supporting 
        Green Neuromorphic Computing" and contributions to various research publications highlight 
        my technical expertise and innovative problem-solving abilities. Professionally, I have 
        demonstrated technical and leadership capabilities through roles such as a Teaching Assistant 
        at Washington State University, where I facilitated learning in programming and data structures. 
        My diverse experiences have prepared me to contribute effectively to software engineering, data 
        analysis, and machine learning projects.
        </p>
        </div>
        <div className='skills'>
          <h2>Skills</h2>
          <div className='skill-type1'>
            <h3>Programming Languages</h3>
            <ul>
              <li>Python</li> 
              <li>C Programming</li>
              <li>Java</li> 
              <li>JavaScript</li>
              <li>R</li>
              <li>SQL</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className='skill-type2'>
          <h3>Algorithms and Statistical Methods</h3>
            <ul className='Algorithms'>
              <li>Statistical Methods: Descriptive (central tendency, variability, data distribution), 
                inferential (hypothesis testing, confidence intervals, p-values), and probability theory 
                (distributions, Bayes' theorem, stochastic processes).</li>
              <li>Regression Analysis: Linear, logistic, and polynomial regression models.</li>
              <li>Statistical Software: R, SAS, SPSS, NumPy, SciPy, Statsmodels.</li>
              <li>Numerical & Optimization Methods: Matrix algebra, decomposition methods, eigenvalue problems, 
                numerical integration (trapezoidal rule, Simpson's rule), gradient descent, 
                and linear programming (simplex, interior-point methods).</li>
              <li>Algorithm Design & Analysis: Sorting, searching, graph traversal algorithms, and 
                complexity analysis (Big O, Big Ω, Big Θ).</li>
              <li>Data Structures: Arrays, linked lists, stacks, queues, hash tables, trees, and graphs.</li>
              <li>Supervised Learning: Decision trees, random forests, support vector machines, neural networks.</li>
              <li>Unsupervised Learning: Clustering (k-means, hierarchical), dimensionality reduction (PCA, t-SNE).</li>
              <li>Reinforcement Learning: Q-learning, policy gradient methods.</li>
              <li>Model Evaluation: Cross-validation, bias-variance tradeoff, and performance metrics.</li>
              <li>Libraries and Frameworks: TensorFlow, PyTorch, Scikit-Learn, Keras, Hugging Face, NLTK.</li>
              <li>Version Control: Github, Azure.</li>
            </ul>
          </div>
          <div className='skill-type1'>
            <h3>Machine Learning Frameworks</h3>
            <ul>
              <li>TensorFlow</li>
              <li>Keras</li>
              <li>PyTorch</li>
              <li>Scikit-Learn</li>
              <li>XGBoost</li>
              <li>Hugging Face Transformers</li>
              <li>NLTK</li>
              <li>OpenCV</li>
            </ul>
          </div>
          <div className='skill-type1'>
            <h3>Data Analysis & Visualization</h3>
            <ul>
              <li>Matplotlib</li>
              <li>Seaborn</li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Tableau</li>
              <li>Power BI</li>
            </ul>
            <p className='subheaders'>Strong foundation in data processing and visualization. Expertise in:</p>
            <ul>
              <li>Exploratory Data Analysis (EDA)</li>
              <li>Statistical Testing</li>
              <li>Time Series Analysis</li>
              <li>Regression Analysis</li>
              <li>Clustering</li>
              <li>Dimensionality Reduction</li>
              <li>Data Cleaning and Preprocessing</li>
              <li>Feature Engineering</li>
              <li>Sentiment Analysis</li>
            </ul>
            <p className='subheaders'>Skilled in creating:</p>
            <ul>
              <li>Histograms</li>
              <li>Bar Charts</li>
              <li>Scatter Plots</li>
              <li>Box Plots</li>
              <li>Heatmaps</li>
              <li>Line Charts</li>
              <li>Pie Charts</li>
              <li>Geospatial Visualization</li>
              <li>Interactive Dashboards</li>
              <li>Network Graphs</li>
            </ul>
          </div>
        </div>
        <div className='education'>
          <h1>Education</h1>
          <div className='degree'>
            <h1>Master’s in Computer Science</h1>
            <h2>Washington State University</h2>
            <ul>
              <li>Master’s Thesis: "An End-To-End Learning Framework for Supporting Green Neuromorphic Computing: 
                From RRAM Design and Microfabrication to Applications" Washington State University. Advisor: Dr. Xinghui Zhao.</li>
              <li>Applied both machine learning and neural network models to predict the resistive switching behavior in Honey-based RRAM devices.</li>
              <li>Developed an application that simulates the basic operations of RRAM devices in image classification tasks.</li>
              <li>Investigated the robustness of in situ vs. ex situ training methods in the context of weight tolerance.</li>
          </ul>
            <div className='ms-courses'>
            <p>Relevant Courses</p>
              <ul>
                <li>Advanced Analysis of Algorithms</li>
                <li>Computer Graphics</li>
                <li>Wireless Sensor Networks</li>
                <li>File and Storage Systems</li>
                <li>Machine Learning</li>
                <li>Advanced Databases</li>
                <li>Neural Network Design & Applications</li>
                <li>Masters Research</li>
              </ul>
            </div>
          </div>
          <div className='degree'>
          <h1>Bachelor’s in Computer Science</h1>
            <h2>Washington State University</h2>
            <div className='bs-courses'>
            <p>Computer Science Major Courses</p>
              <ul>
                <li>Program Design and Development</li>
                <li>Data Structures</li>
                <li>Discrete Mathematics</li>
                <li>Advanced Data Structures</li>
                <li>Programming Tools</li>
                <li>Computer Organization</li>
                <li>C & Assembly Language Program</li>
                <li>Automata and Formal Languages</li>
                <li>Fundamentals of Software Engineering</li>
                <li>Numerical Computing</li>
                <li>Introduction to Database Systems</li>
                <li>Programming Language Design</li>
                <li>Systems Programming</li>
                <li>Social & Professional Issues in Computing</li>
                <li>Software Design Project I</li>
                <li>Software Design Project II</li>
                <li>Digital Forensics</li>
                <li>Applied Systems Security</li>
                <li>Artificial Intelligence</li>
                <li>Design & Analysis of Algorithms</li>
                <li>Operating Systems</li>
                <li>Machine Learning</li>
              </ul>
            </div>
            <div className='bs-courses'>
            <p>Computer Science Minor Courses</p>
              <ul>
              <li>MATH 108 Trigonometry</li>
              <li>MATH 171 Calculus I</li>
              <li>MATH 172 Calculus II</li>
              <li>MATH 220 Introductory Linear Algebra</li>
              <li>MATH 273 Calculus III</li>
              <li>MATH 315 Differential Equations</li>
              <li>MATH 364 Principles of Optimization</li>
              <li>STAT 360 Probability and Statistics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='publications'>
          <h1>Publications</h1>
          <div className='paper'>
            <p>
              A. Y. Vicenciodelmoral, M. M. Hasan Tanim, F. Zhao and X. Zhao.
              <span style={{ fontStyle: 'italic', fontSize: '1.1em' }}>
                "A Machine Learning Approach to Support Neuromorphic Device Design and Microfabrication,"
              </span>
              <em> 2023 International Conference on Machine Learning and Applications (ICMLA),</em> 
              Jacksonville, FL, USA, 2023, pp. 1627-1634, doi:
              <a href="https://doi.org/10.1109/ICMLA58977.2023.00246">10.1109/ICMLA58977.2023.00246</a>.
            </p>
          </div>

          
          <div className='paper'>
              <p>
                Vicenciodelmoral, A. Y. (2023).
                <span style={{ fontStyle: 'italic', fontSize: '1.1em' }}>
                  "An end-to-end learning framework for supporting green neuromorphic computing: From RRAM design and microfabrication to applications"
                </span>
                <em> (Order No. 30631228).</em> 
                Available from Dissertations & Theses @ Washington State University WCLP; ProQuest Dissertations & Theses A&I. (2934276559). Retrieved from
                <a href="https://www.proquest.com/dissertations-theses/end-learning-framework-supporting-green/docview/2934276559/se-2">
                  https://www.proquest.com/dissertations-theses/end-learning-framework-supporting-green/docview/2934276559/se-2
                </a>.
              </p>
          </div>


          <div className='paper'>
            <p>
              M. M. Hasan Tanim, A. Yamil Vicenciodelmoral, Z. Templin, X. Zhao and F. Zhao.
              <span style={{ fontStyle: 'italic', fontSize: '1.1em' }}>
                "Honey-CNT based Resistive Switching Device for Neuromorphic Computing Applications,"
              </span>
              <em>2022 IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (BDCAT),</em>
              Vancouver, WA, USA, 2022, pp. 182-183, doi:
              <a href="https://doi.org/10.1109/BDCAT56447.2022.00034">10.1109/BDCAT56447.2022.00034</a>.
            </p>
          </div>

          <div className='paper'>
            <p>
              A. Y. Vicenciodelmoral, M. M. H. Tanim, F. Zhao and X. Zhao.
              <span style={{ fontStyle: 'italic', fontSize: '1.1em' }}>
                "Supporting Green Neuromorphic Computing: Machine Learning Guided Microfabrication for Resistive Random Access Memory,"
              </span>
              <em>2022 IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (BDCAT),</em>
              Vancouver, WA, USA, 2022, pp. 154-157, doi:
              <a href="https://doi.org/10.1109/BDCAT56447.2022.00026">10.1109/BDCAT56447.2022.00026</a>.
            </p>
          </div>

          <div className='paper'>
            <p>
              Brandon Sueoka, Abdi Yamil Vicenciodelmoral, Md Mehedi Hasan Tanim, Xinghui Zhao, Feng Zhao.
              <span style={{ fontStyle: 'italic', fontSize: '1.1em' }}>
                "Correlation of natural honey-based RRAM processing and switching properties by experimental study and machine learning,"
              </span>
              <em>Solid-State Electronics,</em>
              Volume 197, 2022, 108463, ISSN 0038-1101,
              <a href="https://doi.org/10.1016/j.sse.2022.108463">https://doi.org/10.1016/j.sse.2022.108463</a>.
              (<a href="https://www.sciencedirect.com/science/article/pii/S0038110122002349">https://www.sciencedirect.com/science/article/pii/S0038110122002349</a>)
            </p>
          </div>


          <div className='paper' style={{ fontFamily: 'Arial, sans-serif', marginBottom: '20px' }}>
            <p>
              Sonam Sherpa, Abdi Vicenciodelmoral, and Xinghui Zhao.
              <span style={{ fontStyle: 'italic', fontSize: '1.1em' }}>
                "Deadlock Detection for Concurrent Programs Using Resource Footprints."
              </span>
              <em>In Proceedings of the 12th IEEE/ACM International Conference on Utility and Cloud Computing Companion (UCC '19 Companion).</em>
              Association for Computing Machinery, New York, NY, USA, 137–138. 
              <a href="https://doi.org/10.1145/3368235.3369370">https://doi.org/10.1145/3368235.3369370</a>.
            </p>
          </div>


        </div>

      </section>


    );
};

export default Profile;