import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function RecoveryScreen() {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    // Simulate sending a recovery email
    console.log('Recovery email sent to:', email);
    alert('A recovery email has been sent.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Recovery</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Send Recovery Email" onPress={handleRecovery} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },
});

export default RecoveryScreen;
