import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "./components/CustomButton";
import { StatusBar } from "expo-status-bar";

const Welcome = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.container}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            style={styles.cardsImage}
            resizeMode="contain"
          />

          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text style={styles.highlightedText}>Aora</Text>
            </Text>

            <Image
              source={images.path}
              style={styles.pathImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.subtitle}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles={styles.buttonContainer}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;

const styles = {
  safeAreaView: {
    backgroundColor: '#161622',
    height: '100%',
  },
  scrollViewContainer: {
    height: '100%',
  },
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '85vh',
    paddingHorizontal: 16,
  },
  logo: {
    width: 130,
    height: 84,
  },
  cardsImage: {
    maxWidth: 380,
    width: '100%',
    height: 298,
  },
  textContainer: {
    position: 'relative',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  highlightedText: {
    color: '#FFA001', // Assuming it's the secondary color
  },
  pathImage: {
    width: 136,
    height: 15,
    position: 'absolute',
    bottom: -2,
    right: -8,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'PRegular',
    color: '#D1D1D1',
    marginTop: 28,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 28,
  },
};
