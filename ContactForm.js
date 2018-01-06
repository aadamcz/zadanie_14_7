var contactForm = {
	firstName: "",
	lastName: "",
	email: ""
};

var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired
	},

	render() {
		return 
			<form className={'contactForm'}>
				<input type="text" placeholder="Imię" value={this.props.contact.firstName}>
				</input>
				<input type="text" placeholder="Nazwisko" value={this.props.contact.lastName}>
				</input>
				<input type="email" placeholder="Email" value={this.props.contact.email}>
				</input>
				<button type="submit">Dodaj kontakt</button>
			</form>
	};

<div className={'contactItem'}>
    <img className={'contactImage'} src={'link-do-obrazka.png'}/>
    <p className={'contactLabel'}>
        Imię: {this.props.contact.firstName}
    </p>
    <a href={'mailto:' + this.props.item.email}>
        {this.props.item.email}
    </a>
</div>