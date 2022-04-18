import React from 'react'
// import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [

    ],
    datasets: [{
        data: [10, 100],
        backgroundColor: [
            ' rgba(67, 56, 202)',
            'rgba(229, 231, 235)',

        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',

        ]
    }]
};


const RightBar = () => {
    return (
        <div className=" bg-white w-4/12 rounded-xl border border-black-0">
            <div className=" bg-white  ml-2   shadow-sm w-full h-screen   ">
            <iframe className='w-full h-full' height="1000px"   src='https://flooz.trade/buzz'></iframe>
        
        </div>
        </div>
    )
}

export default RightBar
