import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { images } from "../../constants";
import FormField from "../components/FormField";
import { useState } from "react";
import CustomButton from "../components/CustomButton";

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image
            source={images.logo}
            style={styles.logo}
          />
          <Text style={styles.heading}>
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={styles.formField}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={[styles.formField, styles.passwordField]}
          />
          <CustomButton
            title='Sign In'
            containerStyles={styles.customButton}
            isLoading={isSubmitting}
          />
          <View style={styles.signupLink}>
            <Text style={styles.signupText}>
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              style={styles.signupLinkText}
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#2d2d2d', // Replace with primary color
    flex: 1,
  },
  scrollView: {
    padding: 24,
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '83vh',
    paddingHorizontal: 16,
    marginTop: 24,
  },
  logo: {
    width: 115,
    height: 34,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginTop: 40,
    fontFamily: 'Psemibold',
  },
  formField: {
    marginTop: 28,
  },
  passwordField: {
    marginTop: 28,
  },
  customButton: {
    marginTop: 28,
  },
  signupLink: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20,
    flexDirection: 'row',
    gap: 8,
  },
  signupText: {
    fontSize: 18,
    color: '#d1d1d1',
    fontFamily: 'Pregular',
  },
  signupLinkText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F3A2A2', // Secondary color
  },
});

export default SignIn;
