/**
 * 
 * Alexandre Brasil dos Santos
 *
 * Unyleya
 * 
 */

 import React, {useState} from 'react';
 import {
         View,
         Text,
         TextInput,
         TouchableOpacity,
         Image}  from'react-native';
 
 const App = ()=>{
 
   const [altura, setAltura] = useState('');
   const [peso, setPeso] = useState('');
   const [resultado, setResultado] = useState('');
 
   const calcular = () =>{
 
     const tempAltura = parseFloat(altura);
     const tempPeso = parseFloat(peso);
     
 
     const imc = tempPeso / (tempAltura ^2)
           if (imc <=18){
             setResultado("Magro");
           } if (imc>=19){
             setResultado("no seu peso ideal")
           } if (imc >=25){
             setResultado("Obeso")
           } if (imc >=30){
             setResultado('Obsidade morbida')
           } 
         
 
   }
 
 
  return <View 
     
     style={{justifyContent:'center', alignItems:'center'}}>
    <Image 
    
    style={{width:150, height: 150, paddingTop:50}}
    source={{uri: 'https://pt.calcuworld.com/wp-content/uploads/sites/6/2019/07/imc-.png'}}/>
    <Text style={{fontSize: 40, fontWeight: 'bold', paddingTop:10}}>
      IMC
    </Text>
    <Text style={{
      fontSize: 18,
      fontWeight: 'bold',
      
    }}> 
      Descubra o valor do seu IMC
    </Text>
 
   <TextInput 
   onChangeText={(value) =>setAltura(value)}
   keyboardType='numeric'
   placeholder='Digite sua altura...'
   style={{
                     backgroundColor: '#fff',
                     width:'90%',
                     fontSize: 25,
                     marginVertical: 10
 }}/>
   <TextInput
   onChangeText={(value) => setPeso(value) }
   placeholder='Digite o seu peso'
   keyboardType='numeric'
   style={{
                   backgroundColor: '#fff',
                   width: '90%',
                   fontSize: 25,
                   marginVertical:10
                   
             }}
   />
 
   <TouchableOpacity onPress={calcular}>
     <Text style={{fontSize: 40, fontWeight: 'bold', backgroundColor:'#007b80', color:'#fff'}}>CALCULAR</Text>
   </TouchableOpacity>
           
             <Text style={{paddingTop: 10, fontSize:20}}>
               Você está
             </Text>
             <Text style={{fontSize:30}}>
               {resultado}
             </Text>
 
  </View>
 
 }
 
 export default App;
 