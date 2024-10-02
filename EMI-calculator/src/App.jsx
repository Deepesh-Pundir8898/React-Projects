// import { useState , useEffect } from 'react'
// import './App.css'
// import { PieChart,Pie } from 'recharts'

// function App() {
//   const [loanData, setLoanData] = useState({
//     homevalue:3000,
//     downpayment:600,
//     loanAmount:2400,
//     interestRate:5,
//     loanTerm:5,
//   })

//   const [monthlyPayment , setMonthlyPayment] = useState(0);
//   const [chartData , setChartData] = useState([]);

//   const calculateLoanDetails = ()=>{
//     const {loanAmount , interestRate , loanTerm} = loanData;
//     const totalLoanMonths = loanTerm*12;
//     const monthlyRate = interestRate/100/12;
//     const monthlyPayment =  (loanAmount * monthlyRate *(1 + monthlyRate) ** totalLoanMonths) / ((1 + monthlyRate) ** totalLoanMonths - 1);
//     const totalIntrest = monthlyPayment + totalLoanMonths-loanData;
//     setMonthlyPayment(monthlyPayment);
//     setChartData([
//       {name:'Principle' , value:loanAmount},
//       {name:'Interest' , value:totalIntrest}
//     ]);
//   }

//   useEffect(()=>{
//     calculateLoanDetails();
//   },[loanData]);
  
//   const handleSliderChange = (name,value)=>{
//     setLoanData(prevData=>{
//       const newData  = {...prevData,[name]:value[0]};

//       if(name==="homeValue" || name==="downPayment"){
//         newData.loanAmount = newData.homevalue-newData.downpayment;
//       }
//     })
//   } 

//   return (
//     <>
     
//     </>
//   )
// }

// export default App

import { useEffect, useState } from 'react'
import {CChart} from "@coreui/react-chartjs"
import './App.css'

function App() {
  const [homeValue, setHomeValue] = useState(1000);
  const [downPayment, setDownPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(2);
  const [tenure, setTenure] = useState(10);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const newDownPayment = Math.floor(homeValue * 0.2);
    setDownPayment(newDownPayment);
    setLoanAmount(homeValue - newDownPayment);
  }, [homeValue]);

  useEffect(() => {
    const interestPerMonth = interestRate / 100 / 12;
    const totalLoanMonths = tenure * 12;
    const EMI = (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1);
    
    setMonthlyPayment(EMI.toFixed(2));
  }, [loanAmount, interestRate, tenure]);

  return(
    <>
    <header>Bank of React</header>
    <div className='container'>
      <div className='main-container'>
        <div>
          <p>Home Value</p>
          <p className='heading'>$ {homeValue}</p>
          <input
           className='range' type="range" min="1000" max="10000" 
           onChange={(e) => setHomeValue(parseInt(e.target.value))}
          />
          <div className='minMaxContainer'>
            <p>$ 1000</p>
            <p>$ 10000</p>
          </div>
        </div>
        <div>
          <p>Down Payment</p>
          <p className='text-3xl font-semibold'>$ {downPayment}</p>
          <input 
            className='range' type="range" min="0" max={homeValue} 
            onChange={(e) => {
              setDownPayment(parseInt(e.target.value));
              setLoanAmount(parseInt(e.target.value));
            }}
          />
          <div className='minMaxContainer'>
            <p>$ 0</p>
            <p>$ {homeValue}</p>
          </div>
        </div>
        <div>
          <p>Loan Amount</p>
          <p className='text-3xl font-semibold'>$ {loanAmount}</p>
          <input 
            className='range' type="range" min="0" max={homeValue}
            onChange={(e) => {
              setLoanAmount(parseInt(e.target.value));
              setDownPayment(parseInt(e.target.value));
            }} 
          />
          <div className='minMaxContainer'>
            <p>$ 0</p>
            <p>$ {homeValue}</p>
          </div>
        </div>
        <div>
          <p>Interest Rate</p>
          <p className='text-3xl font-semibold'>% {interestRate}</p>
          <input 
            className='range' type="range" min="2" max="18" 
            onChange={(e) => setInterestRate(parseInt(e.target.value))}
          />
          <div className='minMaxContainer'>
            <p>% 2</p>
            <p>% 18</p>
          </div>
        </div>
        <div>
          <p>Tenure</p>
          <select className='tenure-container' name="tenure" id="tenure" onChange={(e) => {setTenure(parseInt(e.target.value)); console.log(tenure)}}>
            <option value="5">5 years</option>
            <option value="10">10 years</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="25">25 years</option>
          </select>
        </div>
      </div>
      <div className='chart'>
        <p className='heading'>Monthly Payment: $ {monthlyPayment}</p>
        <CChart
          type="pie"
          data={{
            labels: ['Principle', 'Interest'],
            datasets: [
              {
                backgroundColor: ['#00fd0a', '#333'],
                data: [homeValue, monthlyPayment * tenure * 12 - loanAmount],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: "green",
                }
              }
            },
          }}
        />
      </div>
    </div>
    </>
    
  )
}

export default App
