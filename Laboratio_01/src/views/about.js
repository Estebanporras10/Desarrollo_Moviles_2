import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const AboutScreen = () => {
  const groupName = 'Nombre del Grupo'; // Aún no decidido
  const members = [
    {
      name: 'Miembro 1',
      photo: 'https://via.placeholder.com/150', // Cambiar por la URL de la foto
      info: 'Información del miembro 1.',
    },
    {
      name: 'Miembro 2',
      photo: 'https://via.placeholder.com/150', // Cambiar por la URL de la foto
      info: 'Información del miembro 2.',
    },
    {
      name: 'Miembro 3',
      photo: 'https://via.placeholder.com/150', // Cambiar por la URL de la foto
      info: 'Información del miembro 3.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{groupName}</Text>
      {members.map((member, index) => (
        <View key={index} style={styles.memberContainer}>
          <Image source={{ uri: member.photo }} style={styles.photo} />
          <Text style={styles.memberName}>{member.name}</Text>
          <Text style={styles.memberInfo}>{member.info}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  memberContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  memberName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  memberInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
  },
});

export default AboutScreen;
