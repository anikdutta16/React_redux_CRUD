import React, {PropTypes} from 'react'
import Header from './Common/Header'

class App extends React.Component {
	render(){
		return (<div className="container">
				<Header />
				{this.props.children}
		</div>)
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
}

export default App