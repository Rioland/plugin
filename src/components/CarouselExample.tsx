// import React from 'react';
// import { View, Text, ScrollView, Alert, StyleSheet } from 'react-native';
// import CarouselSlider, { CarouselItem } from '../components/CarouselSlider';

// const CarouselExample: React.FC = () => {
//   // Custom event data
//   const eventImages: CarouselItem[] = [
//     {
//       id: 'event1',
//       uri: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=400&fit=crop&q=80',
//       title: 'Summer Music Festival',
//       description: 'Join us for an amazing outdoor concert'
//     },
//     {
//       id: 'event2',
//       uri: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=400&fit=crop&q=80',
//       title: 'Coachella Valley',
//       description: 'Music and arts festival'
//     },
//     {
//       id: 'event3',
//       uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&q=80',
//       title: 'Electronic Dance Party',
//       description: 'Night of electronic music'
//     }
//   ];

//   const movieImages: CarouselItem[] = [
//     {
//       id: 'movie1',
//       uri: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=400&fit=crop&q=80',
//       title: 'Action Movie',
//       description: 'Blockbuster action film'
//     },
//     {
//       id: 'movie2',
//       uri: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=400&fit=crop&q=80',
//       title: 'Drama Film',
//       description: 'Award-winning drama'
//     }
//   ];

//   const handleItemPress = (item: CarouselItem, index: number) => {
//     Alert.alert(
//       item.title || 'Item Selected',
//       `You selected: ${item.description || 'No description'} at index ${index}`
//     );
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.content}>
//         <Text style={styles.title}>Carousel Examples</Text>

//         {/* Default Carousel */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Default Events Carousel</Text>
//           <CarouselSlider onItemPress={handleItemPress} />
//         </View>

//         {/* Custom Events Carousel */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Custom Events</Text>
//           <CarouselSlider
//             data={eventImages}
//             height={180}
//             autoPlayInterval={4000}
//             onItemPress={handleItemPress}
//             indicatorActiveColor="#FF6B6B"
//             indicatorInactiveColor="#DDD"
//           />
//         </View>

//         {/* Movies Carousel */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Movies</Text>
//           <CarouselSlider
//             data={movieImages}
//             height={160}
//             autoPlay={false}
//             borderRadius={20}
//             onItemPress={handleItemPress}
//             indicatorActiveColor="#4ECDC4"
//           />
//         </View>

//         {/* Small Carousel */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Compact Size</Text>
//           <CarouselSlider
//             height={120}
//             width={300}
//             autoPlayInterval={2000}
//             borderRadius={10}
//             showIndicators={false}
//             onItemPress={handleItemPress}
//           />
//         </View>

//         {/* Custom Styled Carousel */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Custom Styled</Text>
//           <CarouselSlider
//             data={eventImages}
//             height={220}
//             containerStyle={styles.customContainer}
//             onItemPress={handleItemPress}
//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   content: {
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#1F2937',
//     marginBottom: 24,
//   },
//   section: {
//     marginBottom: 32,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#374151',
//     marginBottom: 12,
//   },
//   customContainer: {
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
// });

// export default CarouselExample;