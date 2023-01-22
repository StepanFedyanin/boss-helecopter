import React from 'react';
import InputText from '../UI/InputText/InputText';
import './App.scss'
import Home from '../../Res/Home.svg'
import InputTextBtn from '../UI/InputTextBtn/InputTextBtn';
interface Iprops {
}
interface Istate {
	stateEntrance: number;
	floors: number;
	apartments: number;
	summ: number;
	for5people: number;
	for2people: number;
	for3people: number;
	totalEntrance: number;
	totalPerson: number;
	notPassed: number

}
class App extends React.Component<Iprops, Istate> {
	anim: React.RefObject<HTMLDivElement>;
	// const [totalPerson,setTotalPerson] =  useState(0);
	constructor(props: Iprops) {
		super(props);
		this.anim = React.createRef();
		this.state = {
			stateEntrance: 5,
			floors: 9,
			apartments: 100,
			summ: 200000,
			for5people: 50,
			for2people: 10,
			for3people: 0,
			totalPerson: 0,
			totalEntrance: 0,
			notPassed: 100
		};
		this.changeEntrance = this.changeEntrance.bind(this);
		this.changeFloors = this.changeFloors.bind(this);
		this.changeApartments = this.changeApartments.bind(this);
		this.changeSumm = this.changeSumm.bind(this);
		this.changeFor5people = this.changeFor5people.bind(this);
		this.changefor2people = this.changefor2people.bind(this);
		this.changeNotPassed = this.changeNotPassed.bind(this);

	}

	changeEntrance(value: number) {
		this.setState(() => ({
			stateEntrance: value
		}));
	}
	changeFloors(value: number) {
		this.setState(() => ({
			floors: value
		}));
	}
	changeApartments(value: number) {
		this.setState(() => ({
			apartments: value
		}));
	}
	changeSumm(value: number) {
		this.setState(() => ({
			summ: value
		}));
	}
	changeFor5people(value: number) {
		this.setState(() => ({
			for5people: value
		}));
	}
	changefor2people(value: number) {
		this.setState(() => ({
			for2people: value
		}));
	}
	changeNotPassed(value: number) {
		this.setState(() => ({
			notPassed: value
		}));
	}
	changeTotalEntrance() {
		this.setState(() => ({
			totalEntrance: ((this.state.summ / ((this.state.stateEntrance * this.state.apartments) - this.state.notPassed)) * this.state.apartments)
		}));
	}
	changeTotalPerson() {
		this.setState(() => ({
			totalPerson: (this.state.summ / ((this.state.stateEntrance * this.state.apartments) - this.state.notPassed))
		}))
	}
	componentDidUpdate() {
		if (this.anim.current?.parentElement) {
			console.log(this.anim.current.parentElement.offsetHeight / (this.state.apartments * this.state.stateEntrance) * (this.state.apartments * this.state.stateEntrance - this.state.notPassed));

			this.anim.current.style.height = (this.anim.current.parentElement.offsetHeight / (this.state.apartments * this.state.stateEntrance) * (this.state.apartments * this.state.stateEntrance - this.state.notPassed) + 'px');
		}
	}
	render() {
		return (
			<div className="App">
				<div className="App__container">
					<div className="App__setting">
						<div className="App__setting--title"></div>
						<div className="App__setting--content">
							<div className="App__setting--global">
								<InputText
									placeholder='Количество'
									title='Подьездов: '
									fun={this.changeEntrance}
									meating={this.state.stateEntrance}
								/>
								<InputText
									placeholder='Количество'
									title='Этажей: '
									fun={this.changeFloors}
									meating={this.state.floors}
								/>
								<InputText
									placeholder='Количество'
									title='Квартир в доме: '
									fun={this.changeApartments}
									meating={this.state.apartments}

								/>
								<InputText
									placeholder='Количество'
									title='Сумма: '
									fun={this.changeSumm}
									meating={this.state.summ}
								/>
							</div>
							<div className="App__setting--privat">
								<InputText
									placeholder='Количество квартир'
									title='Количество квартир по 5 человек: '
									position={true}
									fun={this.changeFor5people}
									meating={this.state.for5people}
								/>

								<InputText
									placeholder='Количество квартир'
									title='Количество квартир по 2 человек: '
									position={true}
									fun={this.changefor2people}
									meating={this.state.for2people}
								/>
								<InputTextBtn
									placeholder='Количество'
									title='Не оплатили: '
									btnText='Случайное число'
									fun={this.changeNotPassed}
									value={this.state.notPassed}
								/>
							</div>

							<div className="App__setting--calculate">
								<button className='App__calculate--btn' onClick={() => {
									this.changeTotalEntrance()
									this.changeTotalPerson()
								}}>Расчитать</button>
							</div>
						</div>
						<div className="App__setting--apply"></div>
					</div>
					<div className="App__display">
						<div className="App__display--cover">
							<div className="App__display--img">
								<img src={Home} alt="home" />
							</div>
							<div className="App__display--bg" ref={this.anim}></div>
						</div>
						<div className="App__display--info">
							<div className="App__info--item">
								<div className="App__item--title">
									<p>Оплатить всему подьезду:</p>
								</div>
								<div className="App__item--meating">
									<p>
										{
											Math.floor(this.state.totalEntrance)
										}
									</p>
								</div>
							</div>
							<div className="App__info--item">
								<div className="App__item--title">
									<p>Оплатить всему подьезду:</p>
								</div>
								<div className="App__item--meating">
									<p>
										{
											Math.floor(this.state.totalPerson)
										}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		)
	}


}

export default App;
