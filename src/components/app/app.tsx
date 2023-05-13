import React, {useState} from 'react';
import CardList from '../card-list/card-list';
import Button from '../button/button';
import Modal from '../modal/modal';
import CreateCardForm from '../create-card-form/create-card-form';
import './app.sass'
import Notification from '../notification/notification';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='app-container'>
      <h1>Список покупок</h1>
      <Button type="button" onClick={() => setIsModalOpen(true)}>Создать товар</Button>
      <CardList />
      {
        isModalOpen && <Modal header="Заполните информацию о товаре" onClose={() => setIsModalOpen(false)}>
          <CreateCardForm onCreate={setIsModalOpen}/>
        </Modal>
      }
      <Notification />
    </div>
  );
}

export default App;
