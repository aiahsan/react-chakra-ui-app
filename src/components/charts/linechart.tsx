import React from 'react';
import ChartData from './data.json'
import {  Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine, ComposedChart,Area } from 'recharts';
import { Box, Text } from '@chakra-ui/react'
const LineChartCustom = () => {


	return (
		<Box padding="20px 10px 10px 10px">
			<Text
				fontWeight="500"
				fontSize="12px"
				lineHeight="18px"
				color="#666666"
			>RAM Consumption</Text>
			<ComposedChart width={260} height={142} data={ChartData} margin={{ left: -15, top: 20 }} >
			<defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="-0.83%" stopColor="#98BCF1" stopOpacity={1}/>
                <stop offset="95%" stopColor="#7ba6e5" stopOpacity={0.1}/>
            </linearGradient>
        </defs>
		<ReferenceLine isFront={true} stroke="#D7001E" y={8} strokeDasharray="1 1" />

				<Line type="linear" dataKey="value" stroke="#375F9B" strokeWidth={2} dot={false} />
				<YAxis
				tickMargin={11}
					tickFormatter={(label) => `${label} Go`}
					fontSize={10} type="number" tickLine={false} allowDecimals={false}
					domain={[0, 15]} axisLine={false} padding={{}} ticks={[5, 10, 15]} />
				<CartesianGrid  vertical={false} stroke="#ccc" strokeDasharray="1 1" />

				<XAxis  fontSize={10} axisLine={false} tickLine={false} tickMargin={15} minTickGap={-4}  dataKey="date" ticks={["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"]} />
				<Area type="linear" dataKey="value"  strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
				<Tooltip />
			</ComposedChart>
			<Text position="relative"
    left="269px"
    fontSize= "12px"
    lineHeight="18px"
    color="#D7001E"
    top="-88px"
    fontWeight="400">
				8 Go
			</Text>

		</Box>
	)
}

export default LineChartCustom;