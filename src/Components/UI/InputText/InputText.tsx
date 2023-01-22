import React from 'react'
import './InputText.scss'
interface Iprops {
	placeholder?: string,
	title?: string,
	fun: Function,
	position?: boolean,
	meating: number
}
class InputText extends React.Component<Iprops> {
	constructor(props: Iprops) {
		super(props);
		this.onchange = this.onchange.bind(this);
	}
	onchange(value: number) {
		this.props.fun(value)
	}
	render(): React.ReactNode {
		return (
			<div className={this.props.position ? 'InputText pos' : 'InputText'}>
				<div className="InputText__title">
					<p className='InputText__title--style'>{this.props.title}</p>
				</div>
				<div className="InputText__input">
					<input className='InputText__input--style' type="text" value={this.props.meating} placeholder={this.props.placeholder} onChange={(e) => this.onchange(Number(e.target.value))} />
				</div>
			</div>
		)
	}

}

export default InputText