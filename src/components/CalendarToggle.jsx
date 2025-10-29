// 👉 Step 1: Required imports
import React, { useState } from 'react'; // React aur useState hook import
import { View, Text, Button } from 'react-native'; // View, Text, Button components import
import { Calendar } from 'react-native-calendars'; // 📦 Calendar component (npm install react-native-calendars)

// ✅ Component start
const CalendarToggle = () => {
  // ✅ Step 2: State variable for toggle (calendar show/hide)
  const [showCalendar, setShowCalendar] = useState(false);

  // ✅ Step 3: Current date information nikal rahe hain
  const today = new Date(); // Current date object
  const day = today.toLocaleString('en-US', { weekday: 'long' }); // e.g. Monday
  const date = today.getDate(); // e.g. 29
  const month = today.toLocaleString('en-US', { month: 'long' }); // e.g. October
  const year = today.getFullYear(); // e.g. 2025

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
      {/* 🏷️ Heading text */}
      <Text style={{ fontSize: 35, fontWeight: 'bold', marginBottom: 20 }}>
        RLTSQUARE
      </Text>

      {/* 🔁 Button to toggle between calendar and single date view */}
      <Button
        title={showCalendar ? "Hide Calendar" : "Show Calendar"} // Button text change hota hai according to state
        onPress={() => setShowCalendar(!showCalendar)} // Press karte hi state toggle hoti hai (true <-> false)
      />

      {/* ✅ Step 4: Conditional rendering — agar showCalendar true hai to full calendar dikhaye */}
      {showCalendar ? (
        // 📅 Full Month Calendar view
        <View style={{ marginTop: 30, width: '100%' }}>
          <Calendar
            // 👇 Default date set (aaj ki date highlight karega)
            current={today.toISOString().split('T')[0]}

            // 🎨 Calendar theme / styling
            theme={{
              backgroundColor: '#ffffff', // Background color
              calendarBackground: '#ffffff', // Calendar background
              textSectionTitleColor: '#000000', // Weekday title color
              selectedDayBackgroundColor: '#00adf5', // Selected day background
              selectedDayTextColor: '#ffffff', // Selected day text color
              todayTextColor: '#00adf5', // Today highlight color
              dayTextColor: '#2d4150', // Normal text color
              textDisabledColor: '#d9e1e8', // Disabled day color
              arrowColor: 'black', // Arrows color (month navigation)
              monthTextColor: 'black', // Month text color
              textMonthFontSize: 20, // Month title size
              textMonthFontWeight: 'bold', // Month title bold
            }}
          />
        </View>
      ) : (
        // 🗓️ Only today's date view (agar toggle OFF hai)
        <View style={{ marginTop: 30, alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>📅 Today:</Text>
          {/* Aaj ki date, day, month, year display */}
          <Text style={{ fontSize: 25, marginTop: 10 }}>
            {`${day}, ${date} ${month} ${year}`}
          </Text>
        </View>
      )}
    </View>
  );
};

// ✅ Exporting the component
export default CalendarToggle;
