import React from 'react'
import './InputTextBtn.scss'
interface Iprops {
	placeholder?: string,
	title?: string,
	btnText: string,
	fun: Function,
	value?: number
}

class InputTextBtn extends React.Component<Iprops> {
	constructor(props: Iprops) {
		super(props);

		this.state = {
			value: 0,
		}
	}

	render() {
		return (
			<div className='InputTextBtn'>
				<div className="InputTextBtn__title">
					<p className='InputTextBtn__title--style'>
						{
							this.props.title
						}
					</p>
				</div>
				<div className="InputTextBtn__content">
					<div className="InputTextBtn__content--input">
						<input className='InputText__input--style' type="text" placeholder={(this.props.placeholder)?.toString()} value={this.props.value} onChange={(e) => this.props.fun(Number(e.target.value))} />
					</div>
					<div className="InputTextBtn__content--btn">
						<button className='InputTextBtn__btn--style' onClick={() => this.props.fun(Math.floor(Math.random() * (200 - 100)) + 100)}>{this.props.btnText}</button>
					</div>
				</div>
			</div>
		)
	}

}

export default InputTextBtn