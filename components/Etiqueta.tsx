import { StyleSheet, Text, View } from 'react-native';

type EtiquetaProps = {
  texto: string;
  colorFondo: string;
};

export default function Etiqueta({
  texto,
  colorFondo,
}: EtiquetaProps) {
  return (
    <View
      style={[
        styles.etiqueta,
        { backgroundColor: colorFondo },
      ]}
    >
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  etiqueta: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  texto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});