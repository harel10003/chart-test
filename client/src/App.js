import { useEffect, useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import axios from 'axios';

function App() {
	useEffect(() => {
		async function fetchData() {
			const data = await Data();
			await setUserData({
				labels: [...data],
				datasets: [
					{
						label: 'Users Gained',
						data: [...data],
						backgroundColor: [
							'rgba(75,192,192,1)',
							'#ecf0f1',
							'#50AF95',
							'#f3ba2f',
							'#2a71d0',
						],
						borderColor: 'black',
						borderWidth: 2,
					},
				],
			});
		}
		fetchData();
	}, []);

	const Data = async () => {
		const data = await axios.get('http://localhost:5000/getnum');
		return data.data;
	};

	const [userData, setUserData] = useState({
		labels: [],
		datasets: [
			{
				label: 'Users Gained',
				data: [],
				backgroundColor: [
					'rgba(75,192,192,1)',
					'#ecf0f1',
					'#50AF95',
					'#f3ba2f',
					'#2a71d0',
				],
				borderColor: 'black',
				borderWidth: 2,
			},
		],
	});

	return (
		<div className="App">
			<div style={{ width: 700 }}>
				<BarChart chartData={userData} />
			</div>
		</div>
	);
}

export default App;
