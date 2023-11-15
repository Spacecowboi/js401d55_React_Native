import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactList = () => {
  const contacts = [
    { name: 'King Arthur', phone: '934-654-4412' },
    { name: 'Gandalf the Grey', phone: '211-351-7832' },
    { name: 'Orc King Mezdrul', phone: '420-451-6969'},
    { name: 'Pizza Guy', phone: '842-331-7956'},
  ];

  return (
    <View style={styles.container}>
      {contacts.map((contact, index) => (
        <TouchableOpacity key={index} style={styles.contact} onPress={() => navigation.navigate('ContactDetails', { contact })}>
          <Text style={styles.text}>{contact.name}</Text>
          <Text style={styles.text}>{contact.phone}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contact: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    color: '#333',
  },
  phone: {
    fontSize: 16,
    color: '#666',
  },
});

export default ContactList;
