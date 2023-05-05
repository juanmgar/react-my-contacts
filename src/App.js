import { useState, useEffect } from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import Searcher from './Searcher';
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(contacts => setContacts(contacts.results));
  }, [])


  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const onAZ = () => {
    let az = contacts.sort((a, b) => {
      return (a.name['first'] + " " + a.name['last']).localeCompare(b.name['first'] + " " + b.name['last'])
    })
    setContacts([...az]); //clone the list
  }

  const onZA = () => {
    let za = contacts.sort((a, b) => {
      return (b.name['first'] + " " + b.name['last']).localeCompare(a.name['first'] + " " + a.name['last'])
    })
    setContacts([...za]); //clone the list
  }


  const searchedContacts = contacts.filter(contact => {
    return (contact.name['first'] + ' ' + contact.name['last']).toLowerCase().includes(searchField.toLowerCase())
  });

  return (
    <div className='tc '>
      <header>
        <h1 className='f1'>My contacts</h1>
      </header>
      {contacts.length === 0 ? <h2 className='f2'>Loading...</h2> :
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Searcher searchChange={onSearchChange} az={onAZ} za={onZA} />

          <Scroll>
            <CardList contacts={searchedContacts} />
          </Scroll>
        </ErrorBoundary>
      }
      <footer>
        <hr /><p>Desarrollo de Software para Dispositivos Moviles.
          {new Date().getFullYear()}</p>
      </footer>
    </div >

  );
}

export default App;
