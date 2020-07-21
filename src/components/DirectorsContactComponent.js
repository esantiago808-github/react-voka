import React from 'react';

function RenderDirectors({ contacts }) {
    if (contacts)
		return (
			<React.Fragment>
				<h4>2020 Board of Directors</h4>
					{contacts.map((contact) => {
						return (
                            <div key={contact.id}>
							    <p>
								    {contact.contactname}, {contact.title}, {contact.email}
							    </p>
                            </div>
						);
					})}
			</React.Fragment>
		);
	return <div />;
}

function Directors(props) {
    return (
        <RenderDirectors  />
    );
}

export default Directors;
