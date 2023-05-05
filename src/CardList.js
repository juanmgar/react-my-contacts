import Card from './Card';

const CardList = ({ contacts }) => {
    return (
        <div>
            {
                contacts.map((contact, i) => {
                    return <Card key={i}
                        photo={contact.picture['medium']}
                        name={contact.name['first'] + ' ' + contact.name['last']}
                        email={contact.email}
                        phone={contact.cell}
                        contact={contact}
                    />
                })
            }
        </div>
    );
}

export default CardList;
