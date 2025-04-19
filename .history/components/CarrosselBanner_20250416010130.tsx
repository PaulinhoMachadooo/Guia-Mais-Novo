import { View, Text, StyleSheet, Dimensions, Animated, Pressable, Image } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';
import React from 'react';

const bannerAds = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500',
      title: 'Promoção de Restaurantes',
      link: '/businesses?categoryId=1'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=500',
      title: 'Ofertas em Supermercados',
      link: '/businesses?categoryId=2'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1631549916768-4119b4123a21?w=500',
      title: 'Descontos em Farmácias',
      link: '/businesses?categoryId=3'
    }
  ];

  export default function Banner() {
    const [bannerIndex, setBannerIndex] = useState(0);
    const bannerScrollX = useRef(new Animated.Value(0)).current;
    const bannerListRef = useRef(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (showBanner) {
          const nextIndex = (bannerIndex + 1) % bannerAds.length;
          bannerListRef.current?.scrollToOffset({
            offset: nextIndex * width,
            animated: true
          });
          setBannerIndex(nextIndex);
        }
      }, 3000);
  
      return () => clearInterval(interval);
    }, [bannerIndex, showBanner]);
  
    const renderBannerItem = ({ item }) => (
      <Pressable
        style={styles.bannerItem}
        onPress={() => router.push(item.link)}>
        <Image
          source={{ uri: item.image }}
          style={styles.bannerImage}
        />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>{item.title}</Text>
        </View>
      </Pressable>

    );

     return (
    <View style={styles.container}>
      
      {showBanner && (
        <View style={styles.bannerContainer}>
          <Pressable 
            style={styles.closeBanner}
            onPress={() => setShowBanner(false)}>
            <X size={20} color="#fff" />
          </Pressable>
          <Animated.FlatList
            ref={bannerListRef}
            data={bannerAds}
            renderItem={renderBannerItem}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: bannerScrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
          />
        </View>
      )}
    </View>
  );
} 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f5',
    },

    bannerContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 60,
      backgroundColor: '#000',
    },
    bannerItem: {
      width: '100%',
      height: 60,
      position: 'relative',
    },
    bannerImage: {
      width: '100%',
      height: '100%',
    },
    bannerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    bannerTitle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    closeBanner: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 1,
      padding: 8,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderBottomLeftRadius: 8,
    },
  });