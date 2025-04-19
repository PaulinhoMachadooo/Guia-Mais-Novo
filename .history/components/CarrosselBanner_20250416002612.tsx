import { View, Text, StyleSheet, Dimensions, Animated, Pressable, Image } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { carouselImages } from '../../data';
import { OptimizedImage } from '../../components/OptimizedImage';
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
  }


  onst styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f5',
    },
    logoContainer: {
      alignItems: 'center',
      paddingVertical: 24,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#e2e8f0',
    },
    logoText: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#0891b2',
    },
    tagline: {
      fontSize: 16,
      color: '#64748b',
      marginTop: 4,
    },
    carouselContainer: {
      height: 220,
      marginTop: 16,
    },
    carouselItem: {
      width,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
    },
    carouselImage: {
      width: width - 32,
      height: 200,
      borderRadius: 12,
    },
    dotsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 8,
    },
    dot: {
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: '#0891b2',
      marginHorizontal: 4,
    },
    buttonContainer: {
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 8,
    },
    whereToEatButton: {
      backgroundColor: '#0891b2',
      width: '90%',
      paddingVertical: 14,
      borderRadius: 12,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: '600',
    },
    welcomeContainer: {
      margin: 16,
      padding: 16,
      backgroundColor: 'white',
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    welcomeTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: '#0f172a',
      marginBottom: 8,
    },
    welcomeText: {
      fontSize: 16,
      color: '#334155',
      lineHeight: 24,
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