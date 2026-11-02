import { StyleSheet, Text, View } from 'react-native';

type EncabezadoProps = {
  titulo: string;
  subtitulo: string;
};

export default function Encabezado({ titulo, subtitulo }: EncabezadoProps) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitulo: {
    fontSize: 16,
    color: '#777',
    marginTop: 4,
  },
});