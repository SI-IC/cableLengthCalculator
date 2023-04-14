import React, { useState, useEffect } from 'react';
import './ParameterModal.css';

interface ParameterModalProps {
  isOpen: boolean;
  onClose: (parameters: any) => any;
  elementType: string;
  parameters?: any;
  id?: string;
}

const ParameterModal: React.FC<ParameterModalProps> = ({
  isOpen,
  onClose,
  elementType,
  parameters = {},
  id,
}) => {
  const [formValues, setFormValues] = useState(parameters);

  useEffect(() => {
    !formValues && setFormValues(parameters);
  }, [parameters, formValues]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues: any) => ({ ...prevValues, [name]: value }));
  };

  if (!isOpen) return null;

  const renderBulbParameters = () => {
    return (
      <>
        <label>
          Название:
          <input
            type='text'
            name='name'
            value={formValues.name || ''}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Мощность, А:
          <input
            type='text'
            name='power'
            value={formValues.power || ''}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Напряжение,V:
          <input
            type='text'
            name='voltage'
            value={formValues.voltage || ''}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Интерфейс управления:
          <select
            name='interface'
            value={formValues.interface || ''}
            onChange={handleInputChange}
          >
            <option>PWM</option>
            <option>TW</option>
            <option>RGB</option>
            <option>TRIAC</option>
            <option>DALI</option>
            <option>DMX</option>
            <option>RELAY</option>
          </select>
        </label>
        <label>
          опусĸ ĸабеля, м:
          <input
            type='text'
            name='cable'
            value={formValues.cable || ''}
            onChange={handleInputChange}
          />
        </label>
      </>
    );
  };

  const renderSensorParameters = () => {
    return (
      <>
        {' '}
        <label>
          Название:
          <input
            type='text'
            name='name'
            value={formValues.name || ''}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Тип:
          <select
            name='type'
            value={formValues.type || ''}
            onChange={handleInputChange}
          >
            <option>движение</option>
            <option>температура</option>
            <option>освещенность</option>
            <option>параметры воздуха</option>
            <option>магнитный ĸонтаĸт</option>
          </select>
        </label>
        <label>
          Питание:
          <input
            type='text'
            name='power'
            value={formValues.power || ''}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Интерфейсуправления:
          <select
            name='interface'
            value={formValues.interface || ''}
            onChange={handleInputChange}
          >
            <option>DI</option>
            <option>RS485</option>
            <option>AI</option>
            <option>1-wire</option>
          </select>
        </label>
        <label>
          опусĸ ĸабеля, м:
          <input
            type='text'
            name='cable'
            value={formValues.cable || ''}
            onChange={handleInputChange}
          />
        </label>
      </>
    );
  };

  const renderSwitchParameters = () => {
    return (
      <>
        {' '}
        <label>
          Название:
          <input
            type='text'
            name='name'
            value={formValues.name || ''}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Интерфейсуправления:
          <select
            name='interface'
            value={formValues.interface || ''}
            onChange={handleInputChange}
          >
            <option>DI</option>
            <option>1-wire</option>
          </select>
        </label>
        <label>
          опусĸ ĸабеля, м:
          <input
            type='text'
            name='cable'
            value={formValues.cable || ''}
            onChange={handleInputChange}
          />
        </label>
      </>
    );
  };

  const renderMainPanelParameters = () => {
    return (
      <>
        {' '}
        <label>
          Название:
          <input
            type='text'
            name='name'
            value={formValues.name || ''}
            onChange={handleInputChange}
          />
        </label>
        <label>
          опусĸ ĸабеля, м:
          <input
            type='text'
            name='cable'
            value={formValues.cable || ''}
            onChange={handleInputChange}
          />
        </label>
      </>
    );
  };

  return (
    <div className='modal'>
      {elementType === 'bulb' && renderBulbParameters()}
      {elementType === 'sensor' && renderSensorParameters()}
      {elementType === 'switch' && renderSwitchParameters()}
      {elementType === 'mainPanel' && renderMainPanelParameters()}
      <button
        onClick={() => {
          onClose(formValues);
          setFormValues({});
        }}
      >
        Close
      </button>
    </div>
  );
};

export default ParameterModal;
