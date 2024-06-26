import React from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import RecipeBookCard from '../components/RecipeBookCard'; // Adjust the import path as needed

const RecipeBooksScreen = ({ navigation }) => {
  // Placeholder data - you'll replace this with data from your database
  const recipeBooks = [
    { id: '1', title: 'Family Favorites', imageUrl: 'https://example.com/family_favorites.jpg' },
    { id: '2', title: 'Holiday Specials', imageUrl: 'https://example.com/holiday_specials.jpg' },
    // Add more books with their respective image URLs
  ];

  const renderBook = ({ item }) => (
    <RecipeBookCard
      title={item.title}
      imageUrl={item.imageUrl} // Ensure your data includes image URLs
      onPress={() => navigation.navigate('BookScreen', { bookId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Recipe Books</Text>
      <FlatList
        data={recipeBooks}
        renderItem={renderBook}
        keyExtractor={item => item.id}
        // Add this if you want a horizontal list
        // horizontal={true}
      />
      <Button
        title="Create New Book"
        onPress={() => navigation.navigate('RecipeBooksTab', { screen: 'CreateRecipeBook' })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default RecipeBooksScreen;