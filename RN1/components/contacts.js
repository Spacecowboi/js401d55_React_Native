import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
        <View key={index} style={styles.contact}>
          <Text style={styles.text}>{contact.name}</Text>
          <Text style={styles.text}>{contact.phone}</Text>
        </View>
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
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default ContactList;
