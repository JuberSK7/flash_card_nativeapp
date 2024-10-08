import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'John Doe',
      status: 'Online',
      avatarUrl:
        'https://gravatar.com/avatar/ea9c3e54b6cda9bfb9f9257033732a12?s=400&d=robohash&r=x',
    },
    {
      uid: 2,
      name: 'Jane Smith',
      status: 'Offline',
      avatarUrl:
        'https://robohash.org/ea9c3e54b6cda9bfb9f9257033732a12?set=set4&bgset=&size=400x400',
    },
    {
      uid: 3,
      name: 'Mike Johnson',
      status: 'Busy',
      avatarUrl: 'https://avatar.iran.liara.run/public/boy?username=Ash',
    },
    {
      uid: 4,
      name: 'Emily Davis',
      status: 'Away',
      avatarUrl: 'https://avatar.iran.liara.run/public/boy?username=Ash',
    },
    {
      uid: 5,
      name: 'David Wilson',
      status: 'Online',
      avatarUrl: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}> Contact List </Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, avatarUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: avatarUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 4,
    borderRadius: 12,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  userStatus: {
    fontSize: 12,
  },
});
