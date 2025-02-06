import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MovieDetails = ({ route, navigation }) => {
  const { movie } = route.params;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image source={{ uri: movie.image }} style={styles.movieImage} />
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text style={styles.movieImdb}>IMDb: {movie.imdb}</Text>
        <Button title="Add to Wishlist" onPress={() => {/* Add to wishlist logic */}} />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  movieImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  movieImdb: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20
  }
});

export default MovieDetails;