import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import menuList from './data.json';

export default function SelectDish() {
  const [selectedDishes, setSelectedDishes] = useState<{ [key: string]: boolean }>({});

  const toggleSelection = (dishName: string) => {
    setSelectedDishes(prevSelected => ({
      ...prevSelected,
      [dishName]: !prevSelected[dishName]
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={require('./assets/backdrop04.png')} style={styles.pic} />
        {
          menuList.map(dish => (
            <View style={styles.card} key={dish.Name}>
              <View style={styles.row}>
                <Checkbox
                  style={styles.checkbox}
                  value={selectedDishes[dish.Name] || false}
                  onValueChange={() => toggleSelection(dish.Name)}
                />
                <Text style={styles.nametext}>{dish.Name}  -  R{dish.Price}</Text>
              </View>
              <Text style={styles.cardtext}>{dish.Description}</Text>
              <Text style={styles.courseText}>{dish.selectedOption}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  pic: {
    width: '100%',
    height: 200,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardtext: {
    fontSize: 14,
  },
  checkbox: {
    marginRight: 8,
  },
  courseText: {
    color: '#e0801c'
  },
  nametext: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
