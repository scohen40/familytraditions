import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button, StyleSheet, Alert } from 'react-native';

function CreateRecipeScreen() {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleAddRecipe = () => {
    // Here, you'd typically send the recipe data to your backend or local storage
    console.log('Adding Recipe:', { title, imageUrl, ingredients, instructions });
    Alert.alert('Recipe Added', 'Your recipe has been added successfully!');
    // Reset form (optional)
    setTitle('');
    setImageUrl('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter recipe title"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Image URL</Text>
      <TextInput
        style={styles.input}
        placeholder="Paste image URL"
        value={imageUrl}
        onChangeText={setImageUrl}
      />
      <Text style={styles.label}>Ingredients</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="List ingredients here"
        value={ingredients}
        onChangeText={setIngredients}
        multiline
        numberOfLines={4}
      />
      <Text style={styles.label}>Instructions</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Write instructions here"
        value={instructions}
        onChangeText={setInstructions}
        multiline
        numberOfLines={6}
      />
      <Button title="Add Recipe" onPress={handleAddRecipe} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  multilineInput: {
    height: undefined, // This makes the height dynamic
    textAlignVertical: 'top', // Align text at the top
  },
});

export default CreateRecipeScreen;


// In this screen, we allow users to enter their recipe details. The image URL is a simple text input for now, but for a real application, you might integrate a file upload mechanism or image picker. The ingredients and instructions fields are multi-line text inputs, providing space for authors to enter detailed information.

// After pressing the "Add Recipe" button, we simulate the addition of the recipe (e.g., sending the data to a backend service) and provide feedback via an alert. This prototype demonstrates a flexible approach to recipe creation, accommodating various types of recipe submissions.

// Remember, for a fully functional app, you would need to add validation (to ensure that necessary fields are filled out, etc.) and perhaps a more sophisticated method for authors to structure their ingredients and instructions.






