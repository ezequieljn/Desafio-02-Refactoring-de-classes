import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import Input from '../Input';
import { BsFillImageFill } from 'react-icons/bs'

interface ModalAddFoodProps {
  isOpen: any;
  setIsOpen: any;
  handleAddFood: any
}



function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) {
  const formRef = createRef();


  const handleSubmit = async (data: any) => {


    handleAddFood(data);
    setIsOpen();
  };



  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1>Novo Prato .</h1>
      <Input icon={BsFillImageFill} name="image" placeholder="Cole o link aqui" />
    </Modal>
  );

};

export { ModalAddFood };

/*
<Form ref={formRef} onSubmit={handleSubmit}>
    <h1>Novo Prato .</h1>
    <Input icon={<> </>} name="image" placeholder="Cole o link aqui" />

    <Input icon={<> </>} name="name" placeholder="Ex: Moda Italiana" />
    <Input icon={<> </>} name="price" placeholder="Ex: 19.90" />

    <Input icon={<> </>} name="description" placeholder="Descrição" />
    <button type="submit" data-testid="add-food-button">
      <p className="text">Adicionar Prato</p>
      <div className="icon">
        <FiCheckSquare size={24} />
      </div>
    </button>
  </Form>

*/
