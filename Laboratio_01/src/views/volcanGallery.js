import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const VolcanImagesScreen = () => {
  const [volcanes, setVolcanes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVolcanes = async () => {
      try {
        const response = await axios.get('http://192.168.100.8:5005/volcan');
        setVolcanes(response.data);
      } catch (err) {
        setError('Error al cargar las imágenes de los volcanes');
      } finally {
        setLoading(false);
      }
    };

    fetchVolcanes();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text style={styles.error}>{error}</Text>;

  const renderImage = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.imagen }} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={volcanes}
      renderItem={renderImage}
      keyExtractor={item => item._id}
      contentContainerStyle={styles.container}
      numColumns={2} // Esto organiza las imágenes en 2 columnas
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default VolcanImagesScreen;
