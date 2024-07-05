import React from "react";

const ResearchHub = ({handleNavClick,activeSection}) => {
    return (

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

    );
};

export default ResearchHub;