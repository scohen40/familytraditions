import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';

// Mock data: Existing family members
const initialMembers = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Doe' },
  // Add more members for demonstration
];

function FamilyMembersScreen() {
  const [members, setMembers] = useState(initialMembers);
  const [newMemberEmail, setNewMemberEmail] = useState('');

  const handleInvite = () => {
    // Simulate inviting a new member (e.g., sending an email)
    console.log('Inviting:', newMemberEmail);
    Alert.alert('Member Invited', `An invitation has been sent to ${newMemberEmail}.`);
    setNewMemberEmail(''); // Reset input
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.memberItem}>
            <Text style={styles.memberName}>{item.name}</Text>
          </View>
        )}
        ListHeaderComponent={<Text style={styles.header}>Family Members</Text>}
      />
      <View style={styles.inviteSection}>
        <TextInput
          style={styles.input}
          placeholder="Enter email to invite"
          value={newMemberEmail}
          onChangeText={setNewMemberEmail}
        />
        <Button title="Invite" onPress={handleInvite} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  memberItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  memberName: {
    fontSize: 18,
  },
  inviteSection: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default FamilyMembersScreen;


// In this example, the FlatList component displays existing family members dynamically. The "Invite New Member" section at the bottom allows users to input an email address for the person they wish to invite. Upon submission, an alert simulates the invitation process.

// For a real implementation, you would replace the console logging and alert with actual logic to send an invitation, such as an API call to your backend server which handles email invitations or link generation for app access.

// This screen not only enhances the app's social functionality but also encourages the growth of your recipe-sharing community, making it more engaging and valuable to users.