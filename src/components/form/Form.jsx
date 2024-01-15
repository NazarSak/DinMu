import React, { useState } from 'react';
import {
  Section,
  FormCon,
  Input,
  ConainerInputs,
  Button,
  CheckBox,
  Paragraph,
  AgreeContainerClick,
  AgreeContainer,
  StyledCheckbox,
} from './form.styled';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (agreed) {
      console.log('name', name);
      console.log('email', email);
      setName('');
      setEmail('');
    } else {
      alert('Погодьтесь з умовами');
    }
  };

  return (
    <Section>
      <div>
        <FormCon onSubmit={onSubmit}>
          <ConainerInputs>
            <Input
              type="text"
              placeholder="Ваше імя"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Ваше пошта"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </ConainerInputs>
          <AgreeContainerClick>
            <AgreeContainer>
              <CheckBox
                type="checkbox"
                onChange={() => setAgreed(prevState => !prevState)}
                checked={agreed}
              />
              <StyledCheckbox checked={agreed} />
              <Paragraph>
                Погоджуюся з <span>умовами</span> обробки даних
              </Paragraph>
            </AgreeContainer>

            <Button>Стати вчителем чотирилапого друга</Button>
          </AgreeContainerClick>
        </FormCon>
      </div>
    </Section>
  );
};

export default Form;
