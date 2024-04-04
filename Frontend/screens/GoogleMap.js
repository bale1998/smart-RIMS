import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const GoogleMap = () => {
  const [potholeCoordinates, setPotholeCoordinates] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => {
        setPotholeCoordinates(data.potholes);
      })
      .catch(error => {
        console.error('Error fetching pothole data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -29.3146,
          longitude: 27.4838,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {potholeCoordinates.map((pothole, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: pothole.latitude, longitude: pothole.longitude }}
            title={`Pothole ${index + 1}`}
            description={`Severity: ${pothole.severity}`} // You can customize this description
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GoogleMap;

