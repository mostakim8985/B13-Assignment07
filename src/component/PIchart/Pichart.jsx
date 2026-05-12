"use client"
import React from 'react';
import { Pie, PieChart } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useButton } from '@/app/context/ButtonContext';

// #region Sample data

// #endregion




export default function PieChartWithPaddingAngle({ isAnimationActive = true }) {


    const { notify, button } = useButton();

    const filterCallData = notify.filter(i => i.type === 'call');
    const filterTextData = notify.filter(i => i.type === 'text');
    const filterVideoData = notify.filter(i => i.type === 'video');
    const data = [
        { name: 'Group A', value: filterCallData.length, fill: '#0088FE' },
        { name: 'Group B', value: filterTextData.length, fill: '#00C49F' },
        { name: 'Group C', value: filterVideoData.length, fill: '#FFBB28' },

    ];

    return (
        <PieChart style={{ width: '100%', maxWidth: '250px', maxHeight: '40vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={isAnimationActive}
            />
            <RechartsDevtools />
        </PieChart>
    );
}