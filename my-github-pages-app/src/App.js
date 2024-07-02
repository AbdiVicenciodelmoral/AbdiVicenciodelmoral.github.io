
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import DailyQuestion from './components/DailyQuestion';

function App(){

  /*useState is a Hook in React that allows you to add state to functional components. 
  It returns an array with two elements: the current state value and a function that 
  can be used to update this state.
  
  activeSection: This is the state variable. It holds the current value of the state, 
  which in this case is 'home' initially.
  
  setActiveSection: This is the function that you use to update the value of activeSection. 
  When you call this function and pass it a new value, React will re-render the component with 
  the new state value.
  
  useState('home'): This initializes the state. The argument passed to useState (in this case 'home') 
  is the initial value of the state variable activeSection.
*/
  const [activeSection, setActiveSection] = useState('home');


  const handleNavClick = (section) => {
    setActiveSection(section);
  };


  return (
    <div className="App">
      <Navbar onNavClick={handleNavClick} />
      <div className='content'>
      <section id='home' style={{ display: activeSection === 'home' ? 'block' : 'none' }}>
        <div className={activeSection === 'home' ? 'intro-background' : ''}>
        <h2>Home</h2>
        <p>Exploring the intersection of data and innovation through machine learning projects.</p>
        <div className='intro'>
          <h1>Abdi Vicenciodelmoral</h1>
          <h2>Machine Learning Enthusiast</h2>
          <div className='about-me-buttons'>
            <button onClick={() => handleNavClick('profile')}>About Me</button>
            <button onClick={() => handleNavClick('contact')}>Contact</button>
          </div>
          </div>
        </div>
        <DailyQuestion/>
      </section>
      
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
              <strong>A. Y. Vicenciodelmoral, M. M. Hasan Tanim, F. Zhao and X. Zhao,</strong>
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
                <strong>Vicenciodelmoral, A. Y. (2023).</strong>
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
              <strong>M. M. Hasan Tanim, A. Yamil Vicenciodelmoral, Z. Templin, X. Zhao and F. Zhao,</strong>
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
              <strong>A. Y. Vicenciodelmoral, M. M. H. Tanim, F. Zhao and X. Zhao,</strong>
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
              <strong>Brandon Sueoka, Abdi Yamil Vicenciodelmoral, Md Mehedi Hasan Tanim, Xinghui Zhao, Feng Zhao,</strong>
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
              <strong>Sonam Sherpa, Abdi Vicenciodelmoral, and Xinghui Zhao.</strong>
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


      <section id='projects' style={{display: activeSection === 'projects' ? 'block' : 'none'}}>
        <h1>Projects</h1>
        <p>This section contains a collections of projects</p>

        <div className='project-source'>
          <h2>ML_Driven_RRAM-_Evaluation</h2>
          <p>RRAM resistive switching behavior evaluation and prediction, based on fabrication conditions. 
            Applied Machine learning\Deep learning models to predict SET voltage distribution in Honey-based 
            RRAM devices. Simulating the basic operations of RRAM crossbars in image classification tasks, 
            investigating the robustness of in situ vs. ex situ training.

            Applied both machine learning and deep learning models to predict SET voltage distribution in 
            Honey-based RRAM devices, assessing the likelihood of observing specific voltage values based on 
            fabrication conditions. Developed an application that simulates the basic operations of RRAM devices 
            in image classification tasks; used ex situ offline training methods and mapped neural network weights 
            onto RRAM crossbars to evaluate their tolerance to weight noise and deviations. Investigated the robustness 
            of in situ vs. ex situ training methods in the context of weight tolerance.</p>

            <p><strong>Source: </strong><a href='https://github.com/AbdiVicenciodelmoral/ML_Driven_RRAM-_Evaluation'>github.com/AbdiVicenciodelmoral/ML_Driven_RRAM-_Evaluation</a></p>


        </div>

        <div className='project-source'>
          <h2>Evaluation Metrics</h2>
          <p>The project offers an overview of evaluation metrics for classification models, covering Accuracy, 
            Error Rate, Precsion, Recall, F1 Score, Specificity, ROC, and AUC.</p>
          <p><strong>Source: </strong><a href='https://github.com/AbdiVicenciodelmoral/Evaluation_Metrics'>github.com/AbdiVicenciodelmoral/Evaluation_Metrics</a></p>
        </div>

        <div className='project-source'>
          <h2>linear regression</h2>
          <p>Linear regression exercise and application in machine learning

            Linear regression is a type of predictive analysis that concerns two-dimensional sample 
            points with one independent variable and one dependent variable and determines a linear 
            function that best fits the observed and, making it possible to predict the dependent variable 
            values as a function of the independent variable.

            Three models are created one using the Scikit-learn libraries, the OLS method, and Gradient Descent.

            Ordinary least squares (OLS) is a statistical method of analysis that estimates the relationship between 
            one or more independent variables and a dependent variable, in a linear regression model. It estimates 
            the relationship by minimizing the sum of the squares in the difference between the observed and predicted 
            values of the dependent variable configured as a straight line.

            Gradient Descent is the process of minimizing a function by following the gradients of the cost function.</p>
          
          <p><strong>Source: </strong><a href='https://github.com/AbdiVicenciodelmoral/linear_regression'>github.com/AbdiVicenciodelmoral/linear_regression</a></p>
        </div>

        <div className='project-source'>
          <h2>ML PredictiveAnalysis RRAM</h2>
          <p>RRAM resistive switching behavior evaluation and prediction, based on fabrication conditions. 
            Applied Machine learning\Deep learning models to predict SET voltage distribution in Honey-based RRAM devices.</p>
          <p><strong>Source: </strong><a href='https://github.com/AbdiVicenciodelmoral/ML-PredictiveAnalysis-RRAM'>github.com/AbdiVicenciodelmoral/ML-PredictiveAnalysis-RRAM</a></p>
        </div>


        <div className='project-source'>
          <h2>NPL to SQL</h2>
          <p>This application converts natural language into SQL using Deep Learning. 
            The SQL queries are then submitted to a database, to test accuracy. 
            The database pertains to movie information using the IMDB dataset.</p>
          <p><strong>Source: </strong><a href='https://github.com/AbdiVicenciodelmoral/NPL_To_SQL'>github.com/AbdiVicenciodelmoral/NPL_To_SQL</a></p>
        </div>


        <div className='project-source'>
          <h2>Pattern Search Analysis</h2>
          <p>This project is a comparative analysis a pattern search algorithms, to determine their efficiency.</p>
          <p><strong>Source: </strong><a href='https://github.com/AbdiVicenciodelmoral/Pattern-Search-Analysis'>github.com/AbdiVicenciodelmoral/Pattern-Search-Analysis</a></p>
        </div>




      </section>

  
      <section id='research-hub' style={{ display: activeSection === 'research-hub' ? 'block' : 'none' }}>
        <h1>Research Hub</h1>
        <p className='tagline'>Research Papers, Guides, and Resources on Machine Learning</p>
        <div className='featured-resource'>
          <h2>Curated Research Insights: Reading and Reviewing Papers by Various Authors</h2>
          <div className='resource-item'>
            <iframe 
                src='Machine-learning-in-orthopaedic-surgery.pdf#page=1' 
                className='resource-iframe' 
                title='Featured Research Paper'
            />
            <div className='resource-content'>
              <h3>Machine learning in orthopaedic surgery</h3>
              <p><strong>Authors:</strong> Simon P Lalehzarian, Anirudh K Gowd, Joseph N Liu</p>
              <p><strong>Date Published:</strong> 2021 September 18</p>
              <p><strong>Abstract:</strong> Artificial intelligence and machine learning in orthopaedic surgery has gained
                                            mass interest over the last decade or so. In prior studies, researchers have
                                            demonstrated that machine learning in orthopaedics can be used for different
                                            applications such as fracture detection, bone tumor diagnosis, detecting hip
                                            implant mechanical loosening, and grading osteoarthritis. As time goes on, the
                                            utility of artificial intelligence and machine learning algorithms, such as deep
                                            learning, continues to grow and expand in orthopaedic surgery. The purpose of
                                            this review is to provide an understanding of the concepts of machine learning
                                            and a background of current and future orthopaedic applications of machine
                                            learning in risk assessment, outcomes assessment, imaging, and basic science
                                            fields. In most cases, machine learning has proven to be just as effective, if not
                                            more effective, than prior methods such as logistic regression in assessment and
                                            prediction. With the help of deep learning algorithms, such as artificial neural
                                            networks and convolutional neural networks, artificial intelligence in
                                            orthopaedics has been able to improve diagnostic accuracy and speed, flag the
                                            most critical and urgent patients for immediate attention, reduce the amount of
                                            human error, reduce the strain on medical professionals, and improve care.
                                            Because machine learning has shown diagnostic and prognostic uses in
                                            orthopaedic surgery, physicians should continue to research these techniques and
                                            be trained to use these methods effectively in order to improve orthopaedic
                                            treatment.
                                            </p>
              <p><strong>Review:</strong> This paper provides a thorough exploration of the expanding role of machine learning 
              in orthopaedic surgery, emphasizing its applications in diagnostic and prognostic tasks. The authors effectively 
              summarize how AI, particularly machine learning (ML) and deep learning (DL), has been applied in various medical tasks 
              such as fracture detection, bone tumor diagnosis, and grading osteoarthritis. One of the strengths of this review is 
              its clear explanation of complex concepts like ML and DL, making it accessible even to those with limited prior knowledge. 
              The paper also does a commendable job in illustrating the practical benefits of AI, such as improving diagnostic accuracy, 
              reducing human error, and enhancing patient care. Reading this paper has deepened the understanding of the significant 
              impact AI can have on medical fields, particularly in enhancing clinical decision-making and patient outcomes. It also 
              raises interesting questions about the practical implementation of these technologies in everyday clinical settings and 
              the need for standardized training for medical professionals.</p>
              <a href='link-to-publication' target='_blank' rel='noopener noreferrer'>Read the full paper</a>
            </div>
            <div className='resource-content'>

            </div>
          </div>
        </div>

        <div className='resource-guides'>
          <h2>Guides and Cheat Sheets</h2>
          <div className='guide-item'>
              <iframe 
                  src='Evaluation_Metrics_for_Classification_Tasks_in_Machine_Learning.pdf#page=1' 
                  className='resource-iframe' 
                  title='Featured Research Paper'
              />
                <h4>Evaluation Metrics for Classification Tasks in Machine Learning</h4>
                <p>A brief overview of Accuracy, Error Rate, Precsion, Recall, F1
                Score, Specificity, ROC, and AUC</p>
                <a href='/Evaluation_Metrics_for_Classification_Tasks_in_Machine_Learning.pdf' download>Download PDF</a>
          </div>
        </div>
        
      </section>
      
      
      
      <section id='contact' style={{ display: activeSection === 'contact' ? 'block' : 'none' }}>
            <h1>Contact Me</h1>
            <p>Feel free to reach out to me through any of the following methods.</p>

      <div className='contact-info'>
        <h2>Contact Information</h2>
        <p><strong>Email: </strong> <a href='mailto:a.vicenciodelmoral@gmail.com'>a.vicenciodelmoral@gmail.com</a></p>
        <p><strong>LinkedIn: </strong><a href='https://www.linkedin.com/in/abdi-vicenciodelmoral/'>linkedin.com/in/abdi-vicenciodelmoral/</a></p>
      </div>

      <div className="contact-info">
        <h2>Developer Communities</h2>
        <p><strong>GitHub:</strong> <a href="https://github.com/AbdiVicenciodelmoral">github.com/AbdiVicenciodelmoral</a></p>
      </div>


      </section>


      </div>
      <div className='footer'>
            <p>@ 2024 Abdi Vicenciodelmoral</p>
      </div>
    </div>
  );
}

export default App;
