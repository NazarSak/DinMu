import React from 'react';
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
} from './form.styled';

const Form = () => {
  return (
    <Section>
      <div>
        <FormCon>
          <ConainerInputs>
            <Input type="text" placeholder="Ваше імя" />
            <Input type="email" placeholder="Ваше пошта" />
          </ConainerInputs>
          <AgreeContainerClick>
            <AgreeContainer>
              <CheckBox type="checkbox" />
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
