
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HowItWorks.css';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      icon: 'fa-solid fa-cart-shopping',
      title: 'Order Online',
      description: 'Browse thousands of products from multiple stores',
      details: 'Add items to cart & checkout securely'
    },
    {
      id: 2,
      icon: 'fa-solid fa-box-open',
      title: 'Smart Picking',
      description: 'We pick fresh items from nearest stores',
      details: 'Quality checked before packing'
    },
    {
      id: 3,
      icon: 'fa-solid fa-truck-fast',
      title: 'Express Delivery',
      description: 'Get everything at your doorstep',
      details: 'Track your order in real-time'
    },,
    {
      id: 4,
      icon: 'fa-solid fa-chart-pie',
      title: 'Monthly Budget',
      description: 'Set your monthly spending limit',
      details: 'Track expenses & avoid overspending'
    }
  ];

  return (
    <div className="how-it-works-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Simple Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            Fresh groceries delivered in 3 easy steps
          </p>
        </div>

        <div className="row steps-row mt-5">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="col-lg-3"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className={`step-wrapper ${activeStep === index ? 'active' : ''}`}>
                {/* Connector line (except last) */}
                {index < steps.length - 1 && (
                  <div className="step-connector d-none d-lg-block">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                )}
                
                <div className="step-card">
                  <div className="step-icon-wrapper">
                    <div className="step-number">{step.id}</div>
                    <i className={`${step.icon} step-icon`}></i>
                  </div>
                  
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  
                  <div className="step-hover-details">
                    <p>{step.details}</p>
                    <i className="fa-solid fa-check-circle"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-outline-success px-5 py-2 rounded-pill">
            Start Shopping <i className="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
// HowItWorks.jsx
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './HowItWorks.css';

// const HowItWorks = () => {
//   const [activeStep, setActiveStep] = useState(null);

//   const steps = [
//     {
//       id: 1,
//       icon: 'fa-solid fa-cart-shopping',
//       title: 'Order Online',
//       description: 'Browse thousands of products from multiple stores',
//       details: 'Add items to cart & checkout securely'
//     },
//     {
//       id: 2,
//       icon: 'fa-solid fa-box-open',
//       title: 'Smart Picking',
//       description: 'We pick fresh items from nearest stores',
//       details: 'Quality checked before packing'
//     },
//     {
//       id: 3,
//       icon: 'fa-solid fa-truck-fast',
//       title: 'Express Delivery',
//       description: 'Get everything at your doorstep',
//       details: 'Track your order in real-time'
//     },
//     {
//       id: 4,
//       icon: 'fa-solid fa-chart-pie',
//       title: 'Monthly Budget',
//       description: 'Set your monthly spending limit',
//       details: 'Track expenses & avoid overspending'
//     }
//   ];

//   return (
//     <div className="how-it-works-section">
//       <div className="container">
//         <div className="section-header text-center">
//           <span className="section-subtitle">Simple Process</span>
//           <h2 className="section-title">How It Works</h2>
//           <p className="section-description">
//             Fresh groceries delivered in 3 easy steps + Budget planning
//           </p>
//         </div>

//         <div className="row steps-row mt-5">
//           {steps.map((step, index) => (
//             <div 
//               key={step.id} 
//               className="col-lg-3"
//               onMouseEnter={() => setActiveStep(index)}
//               onMouseLeave={() => setActiveStep(null)}
//             >
//               <div className={`step-wrapper ${activeStep === index ? 'active' : ''}`}>
//                 {/* Connector line (except last) */}
//                 {index < steps.length - 1 && (
//                   <div className="step-connector d-none d-lg-block">
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </div>
//                 )}
                
//                 <div className="step-card">
//                   <div className="step-icon-wrapper">
//                     <div className="step-number">{step.id}</div>
//                     <i className={`${step.icon} step-icon`}></i>
//                   </div>
                  
//                   <h3 className="step-title">{step.title}</h3>
//                   <p className="step-description">{step.description}</p>
                  
//                   <div className="step-hover-details">
//                     <p>{step.details}</p>
//                     <i className="fa-solid fa-check-circle"></i>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-5">
//           <button className="btn btn-outline-success px-5 py-2 rounded-pill">
//             Start Saving <i className="fa-solid fa-arrow-right ms-2"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;