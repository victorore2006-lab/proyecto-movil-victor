import { StyleSheet, Text, View } from 'react-native';

type CajaEstadisticaProps = {
  valor: string;
  etiqueta: string;
};

export default function CajaEstadistica({
  valor,
  etiqueta,
}: CajaEstadisticaProps) {
  return (
    <View style={styles.caja}>
      <Text style={styles.valor}>{valor}</Text>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  caja: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  valor: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
  },
  etiqueta: {
    fontSize: 13,
    color: '#777777',
    textAlign: 'center',
    marginTop: 4,
  },
});