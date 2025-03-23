import React, {useState} from 'react';
import {
  Button,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {style_01} from '../styles/style_01';

const data = [
  {
    Codigo: 'FH-100',
    Creditos: '(Cred. 300 - nivel 07)',
    Nombre: 'Formación humanistica',
    matriculado: false,
  },
  {
    Codigo: 'ITI-104',
    Creditos: '(Cred. 300 - nivel 07)',
    Nombre: 'Base de datos',
    matriculado: false,
  },
  {
    Codigo: 'ITI-458',
    Creditos: '(Cred. 600 - nivel 07)',
    Nombre: 'Programación 01',
    matriculado: false,
  },
  {
    Codigo: 'ITI-256',
    Creditos: '(Cred. 200 - nivel 07)',
    Nombre: 'Moviles 02',
    matriculado: false,
  },
  {
    Codigo: 'ITI-248',
    Creditos: '(Cred. 500 - nivel 07)',
    Nombre: 'Computación en la nube',
    matriculado: false,
  },
];

const Index = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataItems, setDataItems] = useState(data);

  const handlePress = item => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleMatricular = () => {
    const updatedData = dataItems.map(dataItem => {
      if (dataItem.Codigo === selectedItem.Codigo) {
        return {...dataItem, matriculado: !dataItem.matriculado};
      }
      return dataItem;
    });
    setDataItems(updatedData);
  };

  return (
    <View>
      <View style={style_01.divMain}>
        <ScrollView style={{marginTop: 8}}>
          {dataItems.map(item => (
            <TouchableOpacity
              style={[
                style_01.tarjeta,
                item.matriculado && {backgroundColor: '#70ff8b'},
              ]}
              key={item.Codigo}
              onPress={() => handlePress(item)}>
              <Text style={style_01.zodiacText}>Codigo: {item.Codigo}</Text>
              <Text style={style_01.zodiacText}>Creditos: {item.Creditos}</Text>
              <Text style={style_01.zodiacText}>Nombre: {item.Nombre}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={style_01.centeredView}>
          <View style={style_01.modalView}>
            <Text style={style_01.modalText}>
              Codigo: {selectedItem?.Codigo}
            </Text>
            <Text style={style_01.modalText}>
              Creditos: {selectedItem?.Creditos}
            </Text>
            <Text style={style_01.modalText}>
              Nombre: {selectedItem?.Nombre}
            </Text>
            <View style={{marginVertical: 10}}>
              <Button
                title={
                  selectedItem?.matriculado ? 'Desmatricular' : 'Matricular'
                }
                onPress={handleMatricular}
              />
            </View>
            <Button
              title="Cerrar"
              color="red"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Index;
