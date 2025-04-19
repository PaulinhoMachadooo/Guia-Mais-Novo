import { View, Text, StyleSheet, Image, Dimensions, Animated, Pressable, Linking } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { carouselImages } from '../../data/index';
import { Link, router } from "expo-router";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScrollView } from 'react-native';
import React from 'react';
import { X } from 'lucide-react-native';

const { width } = Dimensions.get('window');

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

export default function HomeScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const autoPlay = true;
  const autoPlayInterval = 3500;

  useEffect(() => {
    let interval;
    
    if (autoPlay) {
      interval = setInterval(() => {
        if (currentIndex === carouselImages.length - 1) {
          flatListRef.current?.scrollToOffset({
            offset: 0,
            animated: true
          });
          setCurrentIndex(0);
        } else {
          flatListRef.current?.scrollToOffset({
            offset: (currentIndex + 1) * width,
            animated: true
          });
          setCurrentIndex(currentIndex + 1);
        }
      }, autoPlayInterval);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentIndex, autoPlay, autoPlayInterval]);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleMomentumScrollEnd = (event) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image
          source={{ uri: item }}
          style={styles.carouselImage}
          resizeMode="cover"
        />
      </View>
    );
  };

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {carouselImages.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
          ];
          
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 16, 8],
            extrapolate: 'clamp'
          });
          
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          });
          
          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                { width: dotWidth, opacity }
              ]}
            />
          );
        })}
      </View>
    );
  };

  const navigateToRestaurants = () => {
    router.push({
      pathname: '/businesses',
      params: { categoryId: '271' } // ID for Restaurants category
    });
  };

  const navigateToBebida = () => {
    router.push({
      pathname: '/businesses',
      params: { categoryId: '161' } // ID for Restaurants category
    });
  };

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
      <OptimizedImage
        source={{ uri: item.image }}
        style={styles.bannerImage}
      />
      <View style={styles.bannerOverlay}>
        <Text style={styles.bannerTitle}>{item.title}</Text>
      </View>
    </Pressable>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/LogoGuiaMais.png")} 
        style={{
          width: hp(27),
          height: hp(10),
        }}
        
        />
        <Text style={styles.tagline}>Descubra o melhor da cidade</Text>
      </View>
      
      <View style={styles.carouselContainer}>
        <Animated.FlatList
          ref={flatListRef}
          data={carouselImages}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          scrollEventThrottle={16}
        />
        {renderDots()}
      </View>


      <Pressable style={{paddingTop: 20, alignItems:'center',  }}
          onPress={navigateToRestaurants}
      >
              <View
                style={{
                  flexDirection: "row",
                  width: "80%",
                  height: 60,
                  backgroundColor: "#112342",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <View style={{ paddingLeft: 110 }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#FFF",
                    }}
                  >
                    COMIDAS
                  </Text>
                </View>
                <View style={{ flex: 1, paddingLeft: 30, paddingBottom: 30 }}>
                  <Image
                    style={{ height: 115, width: 110 , }}
                    source={require("../../assets/LANCHE2.png")}
                  />
                </View>
              </View>
            </Pressable>

            <Pressable style={{ paddingTop:40, alignItems:'center' }}
          onPress={navigateToBebida}
      >
              <View
                style={{
                  flexDirection: "row",
                  width: "80%",
                  height: 60,
                  backgroundColor: "#112342",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <View style={{ paddingLeft: 110 }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",
                      color: "#FFF",
                    }}
                  >
                    BEBIDAS
                  </Text>
                </View>
                <View style={{ flex: 1, paddingLeft: 30, paddingBottom: 15 }}>
                  <Image
                    style={{ height: 115, width: 110,}}
                    source={require("../../assets/Bebidas3.png")}
                  />
                </View>
              </View>
            </Pressable>

            <Pressable
            onPress={() => {
              Linking.openURL(
                "https://www.facebook.com/groups/2314226998745714?locale=pt_BR"
              );
            }}
            style={{ paddingTop: 35, alignItems:'center' }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                height: 60,
                backgroundColor: "#112342",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <View style={{ paddingLeft: 110 }}>
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", color: "#FFF" }}
                >
                  BARGANHAS
                </Text>
              </View>
              <View style={{ flex: 1, paddingLeft: 2, paddingBottom: 15 }}>
                <Image
                  style={{ height: 100, width: 110 }}
                  source={require("../../assets/SACOLAS.png")}
                />
              </View>
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
          </Pressable>
      
        
      {/*<View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>...</Text>
          <Text style={styles.welcomeText}>
              ...
          </Text>
      </View>*/}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    height:"100%",
  
  },
  logoContainer: {
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: 'white',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0891b2',
  },
  tagline: {
    fontSize: 15,
    color: '#64748b',
  },
  carouselContainer: {
    height: 250,
    marginTop: 5,
    marginBottom:16,
  },
  carouselItem: {
    width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: width - 50,
    height: 200,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: "#CFCFCF",
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
    backgroundColor: '#112342',
    marginHorizontal: 4,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  whereToEatButton: {
    backgroundColor: '#112342',
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
    fontWeight: 'bold',
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
    width,
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