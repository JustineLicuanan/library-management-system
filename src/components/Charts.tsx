import Chartist from 'react-chartist';
import ChartistTooltip from 'chartist-plugin-tooltips-updated';

export const SalesValueChart = () => {
	const data = {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		series: [[1, 2, 2, 3, 3, 4, 3]],
	};

	const options = {
		low: 0,
		showArea: true,
		fullWidth: true,
		axisX: {
			position: 'end',
			showGrid: true,
		},
		axisY: {
			// On the y-axis start means left and end means right
			showGrid: false,
			showLabel: false,
			labelInterpolationFnc: (value: number) => `$${value / 1}k`,
		},
	};

	const plugins = [ChartistTooltip()];

	return (
		<Chartist
			data={data}
			options={{ ...options, plugins }}
			type='Line'
			className='ct-series-g ct-double-octave'
		/>
	);
};

export const SalesValueChartphone = () => {
	const data = {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		series: [[1, 2, 2, 3, 3, 4, 3]],
	};

	const options = {
		low: 0,
		showArea: true,
		fullWidth: false,
		axisX: {
			position: 'end',
			showGrid: true,
		},
		axisY: {
			// On the y-axis start means left and end means right
			showGrid: false,
			showLabel: false,
			labelInterpolationFnc: (value: number) => `$${value / 1}k`,
		},
	};

	const plugins = [ChartistTooltip()];

	return (
		<Chartist
			data={data}
			options={{ ...options, plugins }}
			type='Line'
			className='ct-series-g ct-major-tenth'
		/>
	);
};

interface CircleChartProps {
	series?: number[];
	donutWidth?: number;
}

export const CircleChart = (props: CircleChartProps) => {
	const { series = [], donutWidth = 20 } = props;
	const sum = (a: number, b: number) => a + b;

	const options = {
		low: 0,
		high: 8,
		donutWidth,
		donut: true,
		donutSolid: true,
		fullWidth: false,
		showLabel: false,
		labelInterpolationFnc: (value: number) =>
			`${Math.round((value / series.reduce(sum)) * 100)}%`,
	};

	const plugins = [ChartistTooltip()];

	return (
		<Chartist
			data={{ series }}
			options={{ ...options, plugins }}
			type='Pie'
			className='ct-golden-section'
		/>
	);
};

interface BarChartProps {
	labels?: string[];
	series?: number[][];
	chartClassName?: string;
}

export const BarChart = (props: BarChartProps) => {
	const {
		labels = [],
		series = [],
		chartClassName = 'ct-golden-section',
	} = props;
	const data = { labels, series };

	const options = {
		low: 0,
		showArea: true,
		axisX: {
			position: 'end',
		},
		axisY: {
			showGrid: false,
			showLabel: false,
			offset: 0,
		},
	};

	const plugins = [ChartistTooltip()];

	return (
		<Chartist
			data={data}
			options={{ ...options, plugins }}
			type='Bar'
			className={chartClassName}
		/>
	);
};
