import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './calculator.styles'
import { Button, TextInput } from 'react-native-paper'

const Calculator = () => {
  const [rLong,setrLong] = useState('') //Длина ДП
  const [text,setText] = useState(' ') //Сообщение
  const [rDepth,setrDepth] = useState('') //Глубина ДП
  const [step,setStep] = useState('') //Шаги(заходы)
  const [proc,setproc] = useState('') //Износ ресцов
  const [rWidth,setrWidth] = useState('') //Ширина ДП
  const [cCount,setcCount] = useState('') //Кол-во резцов на фрезе
  const [cDepth,setcDepth] = useState('') //Глубина фрезы
  const [cWidth,setcWidth] = useState('') //Ширина фрезы
  const [resS,setresS] = useState('') //Площадь ДП
  const [resV,setresV] = useState('') //Объем ДП
  const [resChange,setresChange] = useState('') //Замены резцов
  const [resQty,setresQty] = useState('') // Кол-во резцов

  const round= (number) =>{
    number.toFixed(2)
    return number
  }

  const Calculation = () =>{
    setresS((resS) => (rWidth*rLong))
    setresS((resS) => round(resS))
    console.log(resS)
    setStep((step) => Math.ceil((rWidth*1000)/cWidth))
    setresV((resV) => ((rDepth/1000*rWidth*rLong)))
    setresS((resV) => round(resV))
    setresChange((resChange) => Math.ceil((rWidth*1000)/cWidth)*rLong*rWidth/4500)
    setresQty((resQty) => Math.round(Math.trunc(Math.ceil((rWidth*1000)/cWidth)*rLong*rWidth/4500)*cCount))
    console.log(resQty)
    setproc((proc) => ((Math.ceil((rWidth*1000)/cWidth)*rLong*rWidth/4500) - Math.trunc(Math.ceil((rWidth*1000)/cWidth)*rLong*rWidth/4500)).toFixed(2)*100)
    setText((text) => " ")
    if(cDepth<rDepth){
      setText((text) => text +"! Снятие покрытия будет неполным")
    }
    if ((Math.ceil((rWidth*1000)/cWidth)*rLong*rWidth/4500)<1){
      setText((text) => text +"\n! Замена резцов не нужна(при использовании новых)")
    }
 //КНОПКУ CLEAR ALL ДОБАВИТЬ НАДО
  }

  return (
    <SafeAreaView>
      <View style={styles.contentColumn}>
        <View style = {styles.titleWrapper}>
          <View style = {styles.title}>
            <Text style = {styles.titleStyle}>Калькулятор</Text>
          </View>
        </View>
        <View>
          <Text style = {styles.subtitle}>Введите данные дорожного покрытия:</Text>
          <View style={styles.contentRow}>
            <View style={styles.contentColumnInput}>
              <Text style={styles.textstyle}>Введите ширину(м):</Text>
              <TextInput inputMode='numeric' placeholder="0.0 м" value= {rWidth} onChangeText={setrWidth}  style={styles.textinputstyle}></TextInput>
            </View>
            <View style={styles.contentColumnInput}>
              <Text style={styles.textstyle}>Введите глубину(мм):</Text>
              <TextInput inputMode='numeric' placeholder="0.0 мм" value= {rDepth} onChangeText={setrDepth} style={styles.textinputstyle}></TextInput>
            </View>
          </View>
            <View style={styles.lowerdata}> 
              <Text style={styles.textstyle}>Введите длину(м):</Text>
              <TextInput inputMode='numeric' placeholder="0.0 м" value= {rLong} onChangeText={setrLong} style={styles.textinputstyle}></TextInput>
            </View>
        </View>
        <View>
          <Text style = {styles.subtitle}>Введите данные фрезы:</Text>
          <View style={styles.contentRowD}>
            <View style={styles.contentColumnInput}> 
              <Text style={styles.textstyle}>Введите ширину(мм):</Text>
              <TextInput inputMode='numeric' placeholder="0.0 мм" value= {cWidth} onChangeText={setcWidth} style={styles.textinputstyle}></TextInput>
            </View>
            <View style={styles.contentColumnInput}>
              <Text style={styles.textstyle}>Введите глубину(мм):</Text>
              <TextInput inputMode='numeric' placeholder="0.0 мм" value= {cDepth} onChangeText={setcDepth} style={styles.textinputstyle}></TextInput>
            </View>
          </View>
          <View style={styles.lowerdata}> 
              <Text style={styles.textstyleS}>Введите кол-во резцов(шт):</Text>
              <TextInput inputMode='numeric' placeholder="0.0 шт" value= {cCount} onChangeText={setcCount} style={styles.textinputstyle}></TextInput>
          </View>
        </View>
        <View>
          <Text style = {styles.subtitle}>Результаты:</Text>
          <View style={styles.contentRow}>
            <View style={styles.contentColumnOutput}>
              <Text style={styles.textstyle}>Площадь ДП: {resS} м2</Text>
            </View>
            <View style={styles.contentColumnOutput}>
              <Text style={styles.textstyle}>Объем ДП: {resV} м3</Text>
            </View>
          </View>
          <View style={styles.contentRow}>
              <View style={styles.contentColumnOutput}>
                <Text style={styles.textstyle}>Полных замен резцов: {Math.floor(resChange)}</Text>
              </View>
              <View style={styles.contentColumnOutput}>
                <Text style={styles.textstyle}>Кол-во резцов: {resQty} шт</Text>
              </View>
          </View>
          <View style={styles.contentRow}>
              <View style={styles.contentColumnOutput}>
                <Text style={styles.textstyle}>Кол-во шагов: {step}</Text>
              </View>
              <View style={styles.contentColumnOutput}>
                <Text style={styles.textstyle}>Износ резцов: {proc} %</Text>
              </View>
          </View>
        </View>
        <View style={styles.contentColumnAlert}>
          <Text style={styles.textAlert}>{text}</Text>
        </View>
        <View style={styles.buttonColumn}>
          <Pressable style={styles.button} onPress={Calculation}>
            <Text style={styles.text}>Рассчитать</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Calculator

