import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import call from 'react-native-phone-call';

const ContactDetails = ({ route }) => {
  const { contact } = route.params;

  const triggerCall = () => {
    const args = {
      number: contact.phone,
      prompt: false,
    };
    call(args).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{contact.name}</Text>
      <Text style={styles.text}>{contact.phone}</Text>
      <Button title="Call Contact" onPress={triggerCall} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    color: '#333',
    marginBottom: 10,
  },
  phone: {
    fontSize: 20,
    color: '#666',
    marginBottom: 20,
  }
});

export default ContactDetails;