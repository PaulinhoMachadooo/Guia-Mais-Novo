import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Platform,
  Pressable,
} from "react-native";
import { X } from "lucide-react-native";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

type BannerCarouselProps = {
  onClose: () => void;
};

const ads = [
  {
    id: "1",
    title: "",
    backgroundColor: "", // Blue
    textColor: "#FFFFFF",
    link: "/about",
    image: "https://photos.google.com/u/7/share/AF1QipMSntSeRr8VneOHMFKSO4khspYB7wq8ac9SkeAL9PtyFLOITG5fz3sa6eJP5t6yew/photo/AF1QipNFoBWrGsehU62Dh2Ddxc3q6Bnbc_lT_rO7ruOJ?key=WWk5S0hWaGVsUkFXLUJmT0lMd1A1UHNseDVQNWJB"
  },
  /*{
    id: '2',
    title: 'New Products Available',
    backgroundColor: 'rgba(249, 115, 22, 0.9)', // Orange
    textColor: '#FFFFFF',
    link: 'https://www.facebook.com/groups/2314226998745714?locale=pt_BR',
  },
  {
    id: '3',
    title: 'Limited Time Discount',
    backgroundColor: 'rgba(16, 185, 129, 0.9)', // Green
    textColor: '#FFFFFF',
    link: '/categories',
  },*/
];

export const BannerCarousel: React.FC<BannerCarouselProps> = ({ onClose }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % ads.length;
      if (slidesRef.current) {
        slidesRef.current.scrollToOffset({
          offset: nextIndex * width,
          animated: true,
        });
      }
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleAdPress = (link: string) => {
    router.push(link);
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={slidesRef}
        data={ads}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleAdPress(item.link)}>
            <AdBanner
              title={item.title}
              backgroundColor={item.backgroundColor}
              textColor={item.textColor}
            />
          </Pressable>
        )}
      />

      <View style={styles.indicatorContainer}>
        {ads.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 16, 8],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={[styles.indicator, { width: dotWidth, opacity }]}
            />
          );
        })}
      </View>

      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <X size={16} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

interface AdBannerProps {
  title: string;
  backgroundColor: string;
  textColor: string;
}

const AdBanner: React.FC<AdBannerProps> = ({
  title,
  backgroundColor,
  textColor,
}) => {
  return (
    <View style={[styles.slide, { backgroundColor }]}>
      <Text style={[styles.adText, { color: textColor }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    position: "relative",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
      web: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
    }),
  },
  slide: {
    width: width,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  adText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    paddingHorizontal: 40,
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: "50%",
    marginTop: -12,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 6,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  indicator: {
    height: 4,
    borderRadius: 2,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 2,
  },
});
