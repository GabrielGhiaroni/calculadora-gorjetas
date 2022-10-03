import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import styled from 'styled-components/native';


const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
  
const HeaderText = styled.Text`
  font-size: 25px;
  margin-top: 50px;
`;

const Input = styled.TextInput`
  background-color: #EEE;
  width: 90%;
  height: 50px;
  font-size: 18px;
  margin-top: 30px;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 10px;
`;

const BotaoCalcular = styled.Button`

`;

const ResultArea = styled.View`
  margin-top: 30px;
  background-color: #EEE;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px
`; 

const PorcentagemArea = styled.View`
  flex-direction: row;
  margin: 20px
`;

const PorcentagemItem = styled.Button`

`;


export default () => {

  const [conta, setConta] = React.useState('');
  const [gorjeta, setGorjeta] = React.useState(0);
  const [porcentagem, Setporcentagem] = React.useState(10)

  function calcular() {
    //vou transformar o estado "conta" em numérico
    let numericConta = parseFloat(conta);

    if (numericConta !== null) {
      setGorjeta(porcentagem/100 * numericConta);
    } else {
      alert("Favor informar o valor da conta.")
    };
  };

  useEffect(()=> {
    calcular();
  }, [porcentagem]);

  return(
    <Page>

      <HeaderText>Calculadora de Gorjetas</HeaderText>

      <Input
      placeholder = "Qual foi o valor da conta?"
      placeholderTextColor = "grey"
      keyboardType = "numeric"
      value = {conta}
      onChangeText = {valor => setConta(valor)}
      />

      <PorcentagemArea>
        <PorcentagemItem title="5%" onPress={() => Setporcentagem(5)}/>
        <PorcentagemItem title="10%" onPress={() => Setporcentagem(10)}/>
        <PorcentagemItem title="15%" onPress={() => Setporcentagem(15)}/>
        <PorcentagemItem title="20%" onPress={() => Setporcentagem(20)}/>
      </PorcentagemArea>

      <BotaoCalcular title={`Calcular ${porcentagem}%`} onPress={calcular}/>

      {gorjeta > 0 && 
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R${parseFloat(conta).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>R${gorjeta.toFixed(2)} {porcentagem}%</ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R${(parseFloat(conta) + gorjeta).toFixed(2)}</ResultItem>
        </ResultArea>
      }

    </Page>
  );
};