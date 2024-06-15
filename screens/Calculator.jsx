import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';

const Calculator = () => {
  const [rLong, setrLong] = useState(''); //Длина ДП
  const [text, setText] = useState(''); //Сообщение
  const [rDepth, setrDepth] = useState(''); //Глубина ДП
  const [step, setStep] = useState(''); //Шаги(заходы)
  const [proc, setproc] = useState(''); //Износ ресцов
  const [rWidth, setrWidth] = useState(''); //Ширина ДП
  const [cCount, setcCount] = useState(''); //Кол-во резцов на фрезе
  const [cDepth, setcDepth] = useState(''); //Глубина фрезы
  const [cWidth, setcWidth] = useState(''); //Ширина фрезы
  const [resS, setresS] = useState(''); //Площадь ДП
  const [resV, setresV] = useState(''); //Объем ДП
  const [resChange, setresChange] = useState(''); //Замены резцов
  const [resQty, setresQty] = useState(''); // Кол-во резцов

  const round = (number) => {
    return number.toFixed(2);
  };

  const Calculation = () => {
    const calcStep = Math.ceil((rWidth * 1000) / cWidth);
    const calcResV = round((rDepth / 1000 * rWidth * rLong));
    const calcResChange = Math.ceil((rWidth * 1000) / cWidth) * rLong * rWidth / 4500;
    const calcResQty = Math.round(Math.trunc(calcResChange) * cCount);
    const calcProc = ((calcResChange - Math.trunc(calcResChange)) * 100).toFixed(2);

    setresS(round(rWidth * rLong));
    setStep(calcStep);
    setresV(calcResV);
    setresChange(calcResChange);
    setresQty(calcResQty);
    setproc(calcProc);
    setText("");

    if (cDepth < rDepth) {
      setText((prevText) => prevText + "! Снятие покрытия будет неполным");
    }
    if (calcResChange < 1) {
      setText((prevText) => prevText + "\n! Замена резцов не нужна (при использовании новых)");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentColumn}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleStyle}>Калькулятор</Text>
          </View>
          <Text style={styles.subtitle}>Введите данные дорожного покрытия:</Text>
          <View style={styles.contentRow}>
            <View style={styles.contentColumnInput}>
              <Text style={styles.textstyle}>Введите ширину (м):</Text>
              <TextInput
                inputMode='numeric'
                placeholder="0.0 м"
                value={rWidth}
                onChangeText={setrWidth}
                style={styles.textinputstyle}
              />
            </View>
            <View style={styles.contentColumnInput}>
              <Text style={styles.textstyle}>Введите глубину (мм):</Text>
              <TextInput
                inputMode='numeric'
                placeholder="0.0 мм"
                value={rDepth}
                onChangeText={setrDepth}
                style={styles.textinputstyle}
              />
            </View>
          </View>
          <View style={styles.lowerdata}>
            <Text style={styles.textstyle}>Введите длину (м):</Text>
            <TextInput
              inputMode='numeric'
              placeholder="0.0 м"
              value={rLong}
              onChangeText={setrLong}
              style={styles.textinputstyle}
            />
          </View>
          <Text style={styles.subtitle}>Введите данные фрезы:</Text>
          <View style={styles.contentRow}>
            <View style={styles.contentColumnInput}>
              <Text style={styles.textstyle}>Введите ширину (мм):</Text>
              <TextInput
                inputMode='numeric'
                placeholder="0.0 мм"
                value={cWidth}
                onChangeText={setcWidth}
                style={styles.textinputstyle}
              />
            </View>
            <View style={styles.contentColumnInput}>
              <Text style={styles.textstyle}>Введите глубину (мм):</Text>
              <TextInput
                inputMode='numeric'
                placeholder="0.0 мм"
                value={cDepth}
                onChangeText={setcDepth}
                style={styles.textinputstyle}
              />
            </View>
          </View>
          <View style={styles.lowerdata}>
            <Text style={styles.textstyle}>Введите кол-во резцов (шт):</Text>
            <TextInput
              inputMode='numeric'
              placeholder="0.0 шт"
              value={cCount}
              onChangeText={setcCount}
              style={styles.textinputstyle}
            />
          </View>
          <Text style={styles.subtitle}>Результаты:</Text>
          <View style={styles.contentRow}>
            <View style={styles.contentColumnOutput}>
              <Text style={styles.textstyle}>Площадь ДП: {resS} м²</Text>
            </View>
            <View style={styles.contentColumnOutput}>
              <Text style={styles.textstyle}>Объем ДП: {resV} м³</Text>
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
          <View style={styles.contentColumnAlert}>
            <Text style={styles.textAlert}>{text}</Text>
          </View>
          <View style={styles.buttonColumn}>
            <Pressable style={styles.button} onPress={Calculation}>
              <Text style={styles.buttonText}>Рассчитать</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'top',
  },
  contentColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleWrapper: {
    marginBottom: 20,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '100%',
  },
  contentColumnInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  textstyle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  textinputstyle: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 35,
  },
  lowerdata: {
    marginBottom: 5,
  },
  contentColumnOutput: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    marginBottom: 0, // добавлено для уменьшения пространства между результатами
  },
  contentColumnAlert: {
    marginTop: 5, // уменьшено значение для более близкого размещения блока с текстом предупреждений
    marginBottom: 5,
    padding: 10,
  },
  textAlert: {
    fontSize: 16,
    color: '#d9534f',
    textAlign: 'center',
  },
  buttonColumn: {
    alignItems: 'center',
    marginBottom: 10, // добавлено для уменьшения пространства между кнопкой и предыдущими элементами
  },
  button: {
    backgroundColor: '#F4C55C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Calculator;
