import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

// Assuming this data would be fetched from your backend or passed from a navigation parameter
const recipeData = {
  id: '1',
  title: 'Grandma’s Apple Pie',
  imageUri: 'https://example.com/apple-pie.jpg', // Placeholder image URL
  ingredients: [
    '2 apples',
    '1/2 cup sugar',
    '1 pie crust',
    // Add more ingredients
  ],
  instructions: '1. Preheat oven to 350°F. 2. Slice apples. 3. Mix apples with sugar. 4. Fill pie crust with apple mixture. 5. Bake for 45 minutes.',
};

function RecipeDetailsScreen() {
  const { imageUri, ingredients, instructions } = recipeData;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />
      ) : null}
      {ingredients && ingredients.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.header}>Ingredients</Text>
          {ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.text}>{ingredient}</Text>
          ))}
        </View>
      )}
      {instructions ? (
        <View style={styles.section}>
          <Text style={styles.header}>Instructions</Text>
          <Text style={styles.text}>{instructions}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width, // square image
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default RecipeDetailsScreen;

// In this example:

// The ScrollView allows the content to be scrollable, accommodating longer recipes.
// An Image is conditionally rendered if an imageUri is provided. The image scales to the width of the screen while maintaining its aspect ratio. You can explore libraries for pinch-and-zoom functionality to enhance the user experience.
// Ingredients and instructions are also conditionally rendered based on their presence in the recipeData object. Each ingredient is listed individually, and instructions are displayed as a block of text.
// This approach allows you to display as much or as little information about a recipe as available, catering to the diverse range of recipes your users might want to share in your family recipe book app. As you progress with the app development, consider integrating more interactive elements or user engagement features, such as the ability to add comments, save favorite recipes, or share recipes on social media. 🥧📱👩‍🍳