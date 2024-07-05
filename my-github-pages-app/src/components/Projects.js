import React from "react";

const Projects = ({handleNavClick,activeSection}) =>{
    return(
        <section id='projects' style={{display: activeSection === 'projects' ? 'block' : 'none'}}>
            <h1>Projects</h1>
            <p className="tagline">Showcasing a selection of my technical projects and contributions.</p>

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
    );
};

export default Projects;