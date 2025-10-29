// 👉 Step 1: Required imports
import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars'; // 📦 npm install react-native-calendars

const CalendarToggle = () => {
  // ✅ Calendar show/hide toggle state
  const [showCalendar, setShowCalendar] = useState(false);

  // ✅ Selected date store karne ke liye state
  const [selectedDate, setSelectedDate] = useState(null);

  // ✅ Current date info
  const today = new Date();
  const day = today.toLocaleString('en-US', { weekday: 'long' });
  const date = today.getDate();
  const month = today.toLocaleString('en-US', { month: 'long' });
  const year = today.getFullYear();

  // ✅ Function: jab koi date select hoti hai
  const onDateSelect = (dayObj) => {
    setSelectedDate(dayObj.dateString); // Selected date ko save karte hain

    // Selected date ko JS Date object me convert karte hain
    const selected = new Date(dayObj.dateString);

    // Agla din nikalte hain
    const nextDay = new Date(selected);
    nextDay.setDate(selected.getDate() + 1);

    // Example birthday date (customize kar sakte ho)
    const birthdayDate = new Date('2025-10-30');

    // Agar agla din birthday hai to 🎂 alert show hoga
    if (
      nextDay.getDate() === birthdayDate.getDate() &&
      nextDay.getMonth() === birthdayDate.getMonth()
    ) {
      Alert.alert('🎂 Reminder', 'Tomorrow is Birthday!');
    } else {
      // Nahi to normal alert
      Alert.alert('✅ Date Selected', `You selected ${dayObj.dateString}`);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
      }}
    >
      {/* Heading */}
      <Text style={{ fontSize: 35, fontWeight: 'bold', marginBottom: 20 }}>
        RLTSQUARE
      </Text>

      {/* Toggle Button */}
      <Button
        title={showCalendar ? 'Hide Calendar' : 'Show Calendar'}
        onPress={() => setShowCalendar(!showCalendar)} // Toggle ON/OFF
      />

      {/* Conditional Rendering */}
      {showCalendar ? (
        // 📅 Full Month Calendar
        <View style={{ marginTop: 30, width: '100%' }}>
          <Calendar
            // 👇 Default current date
            current={today.toISOString().split('T')[0]}

            // 👇 Date select hone par ye function chalega
            onDayPress={onDateSelect}

            // 👇 Selected date highlight karega
            markedDates={
              selectedDate
                ? {
                    [selectedDate]: {
                      selected: true,
                      selectedColor: '#00adf5',
                    },
                  }
                : {}
            }

            // 👇 Calendar styling / theme
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#000000',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              arrowColor: 'black',
              monthTextColor: 'black',
              textMonthFontSize: 20,
              textMonthFontWeight: 'bold',
            }}
          />
        </View>
      ) : (
        // 🗓️ Sirf aaj ka info
        <View style={{ marginTop: 30, alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>📅 Today:</Text>
          <Text style={{ fontSize: 25, marginTop: 10 }}>
            {`${day}, ${date} ${month} ${year}`}
          </Text>
        </View>
      )}
    </View>
  );
};

export default CalendarToggle;
