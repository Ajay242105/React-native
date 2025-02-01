import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "@/constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={styles.eyeIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = {
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Pmedium',
  },
  inputContainer: {
    width: '100%',
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: '#1F1F1F',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#2E2E2E',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontFamily: 'Psemibold',
    fontSize: 16,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
};
